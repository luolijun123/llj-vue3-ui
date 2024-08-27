<template>
  <MainWrap>
    <div class="Block" id="Button-Desc">
      <p class="Title">简介</p>
      <span class="Desc">
        一个vue3组件库（mini）
      </span>
    </div>
    <div class="Block" id="Button-Install">
      <p class="Title">安装</p>
      <span class="Desc">
        使用 npm 或 yarn 安装
      </span>
      <div class="Box">
        npm install llj-vue3-ui --save
      </div>
    </div>
    <div class="Block" id="Button-Use">
      <p class="Title">使用</p>
      <span class="Desc">
        在vue3项目人口文件注册组件
      </span>
      <div class="Box">
        <span>// src/main.ts</span>
        <div>import LUI from 'llj-vue3-ui';</div>
        <div>import 'llj-vue3-ui/css';</div>
        <div>app.use(LUI);</div>
      </div>
    </div>
  </MainWrap>
</template>

<script setup>
import MainWrap from "./components/MainWrap.vue";
/**
 * @Description Start
 * @Author llj
 * @Date 2024-08-05 15:43:30
 */

</script>

<style scoped lang='scss'>
</style>