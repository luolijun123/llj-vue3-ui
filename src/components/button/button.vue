<script setup lang="ts">
/**
 * @Description 
 * @Author llj
 * @Date 2024-08-06 08:57:56
 */
import { computed } from 'vue';
import { joinClassName } from '../variable'
const jc = (...list: string[]) => {
  return joinClassName('button', ...list)
}

// 属性
const props = defineProps({
  // 按钮类型
  type: {
    default: 'primary',
    validator: function (value) {
      return ['info', 'primary', 'success', 'warning', 'danger'].includes(value as string)
    },
  },
  // 背景类型
  bgtype: {
    type: String,
    validator: function (value) {
      return ['transparent', 'light'].includes(value as string)
    },
  },
  // 按钮大小
  size: {
    default: 'default',
    validator: function (value) {
      return ['large', 'default', 'small', 'mini'].includes(value as string)
    },
  },
  // 是否渐变
  gradient: {
    type: Boolean,
    default: false,
  },
  // 是否圆角显示
  radius: {
    type: Boolean,
    default: false,
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 点击节流
  throttle: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['click'])

// 按钮类名
const btnClass = computed(() => {
  const classArr = [jc('root')]
  if (props.type) classArr.push(jc('type', props.type))
  if (props.bgtype) classArr.push(jc('bgtype', props.bgtype))
  if (props.size) classArr.push(jc('size', props.size))
  if (props.gradient) classArr.push(jc('gradient'))
  if (props.radius) classArr.push(jc('radius'))
  if (props.disabled) classArr.push(jc('disabled'))
  return classArr;
})

// 点击
let isClickAble = true
function bindClick(e: Event) {
  if (props.disabled) return
  if (props.throttle) {
    if (!isClickAble) return
    emit('click', e)
    isClickAble = false
    setTimeout(() => {
      isClickAble = true
    }, 1500);
  } else {
    emit('click', e)
  }
}

</script>

<template>
  <button :class="btnClass" @click="bindClick">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style lang='scss'>
@import '../styles/button.scss';
</style>