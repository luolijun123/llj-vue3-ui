<template>
  <MainWrap :list="[
    { id: 'Button-Type', label: '类型' },
    { id: 'Button-Size', label: '尺寸' },
    { id: 'Button-Disabled', label: '禁用' },
    { id: 'Button-Attr', label: '属性' },
  ]">
    <div class="Block" id="Button-Type">
      <p class="Title">按钮类型</p>
      <span class="Desc">
        使用 type、bgtype、gradient、radius 属性定义按钮样式
      </span>
      <CodePreview :codes="`    <!-- 纯色背景 -->
    <LButton type='primary'>主要按钮</LButton>
    <LButton type='success'>成功按钮</LButton>
    <LButton type='warning'>警告按钮</LButton>
    <LButton type='danger'>危险按钮</LButton>
    <LButton type='info'>提示按钮</LButton>

    <!-- 渐变背景  gradient -->
    <LButton gradient type='primary'>主要按钮</LButton>
    <LButton gradient type='success'>成功按钮</LButton>
    <LButton gradient type='warning'>警告按钮</LButton>
    <LButton gradient type='danger'>危险按钮</LButton>
    <LButton gradient type='info'>提示按钮</LButton>

    <!-- 淡色背景  bgtype='light' -->
    <LButton bgtype='light' type='primary'>主要按钮</LButton>
    <LButton bgtype='light' type='success'>成功按钮</LButton>
    <LButton bgtype='light' type='warning'>警告按钮</LButton>
    <LButton bgtype='light' type='danger'>危险按钮</LButton>
    <LButton bgtype='light' type='info'>提示按钮</LButton>

    <!-- 白色背景 bgtype='transparent' -->
    <LButton bgtype='transparent' type='primary'>主要按钮</LButton>
    <LButton bgtype='transparent' type='success'>成功按钮</LButton>
    <LButton bgtype='transparent' type='warning'>警告按钮</LButton>
    <LButton bgtype='transparent' type='danger'>危险按钮</LButton>
    <LButton bgtype='transparent' type='info'>提示按钮</LButton>

    <!-- 圆角 radius -->
    <LButton radius bgtype='transparent' type='primary'>主要按钮</LButton>
    <LButton radius bgtype='transparent' type='success'>成功按钮</LButton>
    <LButton radius bgtype='transparent' type='warning'>警告按钮</LButton>
    <LButton radius bgtype='transparent' type='danger'>危险按钮</LButton>
    <LButton radius bgtype='transparent' type='info'>提示按钮</LButton>
      `">
        <div class="Preview-Block">
          <LButton type='primary'>主要按钮</LButton>
          <LButton type='success'>成功按钮</LButton>
          <LButton type='warning'>警告按钮</LButton>
          <LButton type='danger'>危险按钮</LButton>
          <LButton type='info'>提示按钮</LButton>
        </div>
        <div class="Preview-Block">
          <LButton gradient type='primary'>主要按钮</LButton>
          <LButton gradient type='success'>成功按钮</LButton>
          <LButton gradient type='warning'>警告按钮</LButton>
          <LButton gradient type='danger'>危险按钮</LButton>
          <LButton gradient type='info'>提示按钮</LButton>
        </div>
        <div class="Preview-Block">
          <LButton bgtype='light' type='primary'>主要按钮</LButton>
          <LButton bgtype='light' type='success'>成功按钮</LButton>
          <LButton bgtype='light' type='warning'>警告按钮</LButton>
          <LButton bgtype='light' type='danger'>危险按钮</LButton>
          <LButton bgtype='light' type='info'>提示按钮</LButton>
        </div>
        <div class="Preview-Block">
          <LButton bgtype='transparent' type='primary'>主要按钮</LButton>
          <LButton bgtype='transparent' type='success'>成功按钮</LButton>
          <LButton bgtype='transparent' type='warning'>警告按钮</LButton>
          <LButton bgtype='transparent' type='danger'>危险按钮</LButton>
          <LButton bgtype='transparent' type='info'>提示按钮</LButton>
        </div>
        <div class="Preview-Block">
          <LButton radius bgtype='transparent' type='primary'>主要按钮</LButton>
          <LButton radius bgtype='transparent' type='success'>成功按钮</LButton>
          <LButton radius bgtype='transparent' type='warning'>警告按钮</LButton>
          <LButton radius bgtype='transparent' type='danger'>危险按钮</LButton>
          <LButton radius bgtype='transparent' type='info'>提示按钮</LButton>
        </div>
      </CodePreview>
    </div>
    <div class="Block" id="Button-Size">
      <p class="Title">按钮尺寸</p>
      <span class="Desc">
        使用 size 属性定义按钮尺寸
      </span>
      <CodePreview :codes="`    <!-- 按钮尺寸 size -->
    <LButton size='large' type='primary'>主要按钮</LButton>
    <LButton size='default' type='success'>成功按钮</LButton>
    <LButton size='small' type='warning'>警告按钮</LButton>
    <LButton size='mini' type='danger'>危险按钮</LButton>
      `">
        <div class="Preview-Block">
          <LButton size='large' type='primary'>主要按钮</LButton>
          <LButton size='default' type='success'>成功按钮</LButton>
          <LButton size='small' type='warning'>警告按钮</LButton>
          <LButton size='mini' type='danger'>危险按钮</LButton>
        </div>
      </CodePreview>
    </div>
    <div class="Block" id="Button-Disabled">
      <p class="Title">按钮禁用</p>
      <span class="Desc">
        使用 disabled 属性定义按钮尺寸
      </span>
      <CodePreview :codes="`    <!-- 按钮禁用 disabled -->
    <LButton disabled type='primary'>主要按钮</LButton>
    <LButton disabled bgtype='light' type='primary'>主要按钮</LButton>
    <LButton disabled bgtype='transparent' type='primary'>主要按钮</LButton>
      `">
        <div class="Preview-Block">
          <LButton disabled type='primary'>主要按钮</LButton>
          <LButton disabled bgtype='light' type='primary'>主要按钮</LButton>
          <LButton disabled bgtype='transparent' type='primary'>主要按钮</LButton>
        </div>
      </CodePreview>
    </div>
    <div class="Block" id="Button-Attr">
      <p class="Title">按钮属性</p>
      <span class="Desc">
        按钮props属性
      </span>
      <CodePreview :codes="`    const props = defineProps({
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
      })`">
      </CodePreview>
    </div>
  </MainWrap>
</template>

<script setup lang="ts">
import MainWrap from './components/MainWrap.vue'
import CodePreview from './components/CodePreview/index.vue'
/**
 * @Description Button-view
 * @Author llj
 * @Date 2024-08-05 15:20:06
 */


</script>

<style scoped lang="scss">
.block {
  flex: 1;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-end;
}
</style>
