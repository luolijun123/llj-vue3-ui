export function throttle(fn: any, delay = 1500) {
  let handler = false
  return function () {
    if (!handler) {
      handler = true
      fn && fn(...arguments)
      setTimeout(() => {
        handler = false
      }, delay)
    }
  }
}
