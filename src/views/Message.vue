<template>
  <MainWrap :list="[
    { id: 'Messsage-Type', label: '组件使用' },
    { id: 'Messsage-Fn', label: '函数调用' },
  ]">
    <div class="Block" id="Messsage-Type">
      <p class="Title">组件使用</p>
      <span class="Desc">
        引入组件的方式使用
      </span>
      <CodePreview :codes="`    <!-- script -->
    <script setup>
      const messageProps = reactive({
        show: false,
        type: 'info',
        closeable: false,
        duration: 3000,
        message: '操作成功！'
      })
      const onShow = (obj) => {
        messageProps.show = true
        Object.keys(obj).forEach(k => {
          messageProps[k] = obj[k]
        })
      }
    </script>

    <!-- template -->
    <template>
      <!-- 类型 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'info', message: '操作提示！' })
      }'>操作提示</LButton>
      <LButton type='success' @click='() => {
        onShow({ type: 'success', message: '操作成功！' })
      }'>操作成功</LButton>
      <LButton type='warning' @click='() => {
        onShow({ type: 'warning', message: '操作警告！' })
      }'>操作警告</LButton>
      <LButton type='warning' @click='() => {
        onShow({ type: 'question', message: '操作帮助！' })
      }'>操作帮助</LButton>
      <LButton type='danger' @click='() => {
        onShow({ type: 'danger', message: '操作严重后果！' })
      }'>操作严重后果</LButton>

      <!-- 停留时间 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'info', message: '操作提示！', duration: 0 })
      }'>提示保持停留</LButton>
      <LButton type='success' @click='() => {
        onShow({ type: 'success', message: '操作成功！', duration: 5000 })
      }'>提示停留5s</LButton>

      <!-- 加载 -->
      <LButton type='primary' @click='() => {
        onShow({ type: 'loading', message: '加载中...', duration: 0, closeable: true })
      }'>加载中</LButton>

      <!-- Message组件实例 -->
      <LMessage 
        v-model='messageProps.show' 
        :duration='messageProps.duration' 
        :type='messageProps.type'
        :closeable='messageProps.closeable'
      >{{ messageProps.message }}</LMessage>
    </template>
      `">
        <div class="Preview-Block">
          类型
        </div>
        <div class="Preview-Block">
          <LButton type='primary' @click="() => {
            onShow({ type: 'info', message: '操作提示！' })
          }">操作提示</LButton>
          <LButton type='success' @click="() => {
            onShow({ type: 'success', message: '操作成功！' })
          }">操作成功</LButton>
          <LButton type='warning' @click="() => {
            onShow({ type: 'warning', message: '操作警告！' })
          }">操作警告</LButton>
          <LButton type='warning' @click="() => {
            onShow({ type: 'question', message: '操作帮助！' })
          }">操作帮助</LButton>
          <LButton type='danger' @click="() => {
            onShow({ type: 'danger', message: '操作严重后果！' })
          }">操作严重后果</LButton>
        </div>
        <div class="Preview-Block">
          停留时间
        </div>
        <div class="Preview-Block">
          <LButton type='primary' @click="() => {
            onShow({ type: 'info', message: '操作提示！', duration: 0 })
          }">提示保持停留</LButton>
          <LButton type='success' @click="() => {
            onShow({ type: 'success', message: '操作成功！', duration: 5000 })
          }">提示停留5s</LButton>
        </div>
        <div class="Preview-Block">
          加载
        </div>
        <div class="Preview-Block">
          <LButton type='primary' @click="() => {
            onShow({ type: 'loading', message: '加载中...', duration: 0, closeable: true })
          }">加载中</LButton>
        </div>
      </CodePreview>
    </div>
    <div class="Block" id="Messsage-Fn">
      <p class="Title">函数调用</p>
      <span class="Desc">
        使用函数的形式调用
      </span>
      <CodePreview :codes="`    <!-- script -->
    <script setup>
      import { useLMessage } from '@/components'

      const onShowFn = (obj) => {
        useLMessage({
          type: 'info',
          closeable: false,
          duration: 3000,
          message: '操作成功！',
          ...obj
        })
      }

    </script>

    <!-- template -->
    <template>
      <LButton type='primary' @click='() => {
        onShowFn({ type: 'info', message: '操作提示！' })
      }'>操作提示</LButton>
      <LButton type='success' @click='() => {
        onShowFn({ type: 'success', message: '操作成功！' })
      }'>操作成功</LButton>
      <LButton type='warning' @click='() => {
        onShowFn({ type: 'warning', message: '操作警告！' })
      }'>操作警告</LButton>
      <LButton type='warning' @click='() => {
        onShowFn({ type: 'question', message: '操作帮助！' })
      }'>操作帮助</LButton>
      <LButton type='danger' @click='() => {
        onShowFn({ type: 'danger', message: '操作严重后果！' })
      }'>操作严重后果</LButton>
    </template>
      `">
        <div class="Preview-Block">
          类型
        </div>
        <div class="Preview-Block">
          <LButton type='primary' @click="() => {
            onShowFn({ type: 'info', message: '操作提示！' })
          }">操作提示</LButton>
          <LButton type='success' @click="() => {
            onShowFn({ type: 'success', message: '操作成功！' })
          }">操作成功</LButton>
          <LButton type='warning' @click="() => {
            onShowFn({ type: 'warning', message: '操作警告！' })
          }">操作警告</LButton>
          <LButton type='warning' @click="() => {
            onShowFn({ type: 'question', message: '操作帮助！' })
          }">操作帮助</LButton>
          <LButton type='danger' @click="() => {
            onShowFn({ type: 'danger', message: '操作严重后果！' })
          }">操作严重后果</LButton>
        </div>
      </CodePreview>
    </div>
    <LMessage v-model="messageProps.show" :duration="messageProps.duration" :type="messageProps.type"
      :closeable="messageProps.closeable">{{ messageProps.message }}</LMessage>
  </MainWrap>
</template>

<script setup>
import MainWrap from "./components/MainWrap.vue";
import CodePreview from './components/CodePreview/index.vue'
import { useLMessage } from 'llj-vue3-ui'
/**
 * @Description message
 * @Author llj
 * @Date 2024-08-05 15:37:10
 */

const messageProps = reactive({
  show: false,
  type: 'info',
  closeable: false,
  duration: 3000,
  message: '操作成功！'
})
const onShow = (obj) => {
  messageProps.show = true
  messageProps.closeable = false
  messageProps.duration = 3000
  Object.keys(obj).forEach(k => {
    messageProps[k] = obj[k]
  })
}


const onShowFn = (obj) => {
  messageProps.show = false
  useLMessage({
    type: 'info',
    closeable: false,
    duration: 3000,
    message: '操作成功！',
    ...obj
  })
}

</script>

<style scoped lang='scss'>
</style>