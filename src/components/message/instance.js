import { shallowReactive } from 'vue'

export const instances = shallowReactive([])

export const getInstance = (id) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  const current = instances[idx]
  let prev
  if (idx > 0) {
    for (let i = idx - 1; i >= 0; i--) {
      const instance = instances[i]
      if (instance.props.placement == current.props.placement) {
        prev = instance
        break
      }
    }
  }
  return { current, prev }
}

export const getLastOffset = (id) => {
  const { prev } = getInstance(id)
  if (!prev) return 0
  return prev.vm.exposed.bottom.value
}

export const getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  return idx > 0 ? 20 : offset
}

export const messageTypes = ['question', 'warning', 'success', 'info', 'loading', 'danger']
