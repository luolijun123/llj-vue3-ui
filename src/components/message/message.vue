<script setup lang='ts'>
/**
 * @Description 
 * @Author llj
 * @Date 2024-08-20 10:17:46
 */
import InfoIcon from './icons/InfoIcon.vue'
import SuccessIcon from './icons/SuccessIcon.vue'
import WarningIcon from './icons/WarningIcon.vue'
import ImportantIcon from './icons/ImportantIcon.vue'
import QuestionIcon from './icons/QuestionIcon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import { messageTypes, getLastOffset, getOffsetOrSpace } from './instance'
import { computed, ref, onMounted, nextTick, watch } from 'vue'

import { joinClassName } from '../variable'
const jc = (...list: string[]) => {
  return joinClassName('message', ...list)
}

const IconMap: any = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  question: QuestionIcon,
  danger: ImportantIcon,
}

const props = defineProps({
  // 是否显示 - 组件引用时使用
  modelValue: {
    default: false,
    type: Boolean
  },
  // 颜色类型
  type: {
    type: String,
    default: 'primary',
    validator: function (value: string) {
      return messageTypes.includes(value)
    },
  },
  // 显示位置
  placement: {
    type: String,
    default: 'center',
    validator: function (value: string) {
      return ['center', 'right'].includes(value)
    },
  },
  // 文本内容
  message: {
    type: String,
    default: '',
  },
  // 停留时间
  duration: {
    type: Number,
    default: 3000,
  },
  // 是否显示关闭
  closeable: {
    type: Boolean,
    default: false,
  },
  // js调用唯一值 不用传
  id: {
    type: String,
    default: '',
  },
  // 层叠值
  zindex: {
    type: Number,
    default: 10000,
  },
  offset: {
    type: Number,
    default: 16,
  },
  // 是否插入html字符串
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  // 同一时间是否只显示一个
  isSingle: {
    type: Boolean,
    default: true,
  },
  onClose: Function,
  onDestroy: Function,
})
const rootClass = computed(() => {
  const classArr = [
    jc('root'),
    jc('type', props.type),
    jc('placement', props.placement),
  ]
  if (props.closeable) classArr.push(jc('isclose'))
  return classArr
})

const lastOffset = computed(() => getLastOffset(props.id))
const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value)
const bottom = computed(() => height.value + offset.value)
const messageStyle = computed(() => {
  return {
    top: `${offset.value}px`,
    zIndex: props.zindex,
  }
})



const visible = ref(false)
const height = ref(0)
const messageRef = ref()

watch(() => props.modelValue, () => {
  if (!props.id) {
    visible.value = props.modelValue
    if (visible.value) {
      clearTimer()
      startTimer()
    }
  }
}, { immediate: true })

watch(() => props.duration, () => {
  if (!props.id) {
    if (visible.value) {
      clearTimer()
      startTimer()
    }
  }
}, { immediate: true })

let stopTimer: any
function startTimer() {
  if (props.duration === 0) return
  const closeTimer = setTimeout(() => {
    close()
  }, props.duration)
  stopTimer = () => {
    clearTimeout(closeTimer)
  }
}
function clearTimer() {
  stopTimer?.()
}

onMounted(() => {
  if (props.id) {
    startTimer()
    visible.value = true
  }
  nextTick(() => {
    height.value = messageRef.value.getBoundingClientRect().height
  })
})
const emit = defineEmits(['update:modelValue', 'destroy'])

function close() {
  visible.value = false
  if (!props.id) {
    emit('update:modelValue', false)
  }
}

defineExpose({
  visible,
  bottom,
  close,
})
</script>

<template>
  <Transition :name="jc('fade')" @before-leave="onClose" @after-leave="$emit('destroy')">
    <div ref="messageRef" v-show="visible" :class="rootClass" :style="messageStyle" @mouseenter="clearTimer"
      @mouseleave="startTimer">
      <i :class="jc('icon')">
        <template v-if="type === 'loading'">
          <img src="./icons/loading.png" :class="jc('loading', 'img')" alt="加载" />
        </template>
        <Component v-else :is="IconMap[type]"></Component>
      </i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" :class="jc('content')">
          {{ message }}
        </p>
        <p v-else :class="jc('content')" v-html="message"></p>
      </slot>
      <i v-if="closeable" :class="jc('close')" @click.stop="close">
        <CloseIcon></CloseIcon>
      </i>
    </div>
  </Transition>
</template>

<style lang='scss'>
@import '../styles/message.scss';
</style>