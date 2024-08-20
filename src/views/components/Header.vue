<template>
  <div class="Header">
    <div class="left">
      <img src="~@/assets/images/logo.png" alt="logo" class="logo">
      <p>鸟欲高飞先振翅，人求上进先读书</p>
    </div>
    <div class="right">
      <a href="https://cn.vuejs.org/guide/quick-start.html" target="_blank">
        <VueSvg />
      </a>
    </div>
  </div>
</template>

<script setup>
import VueSvg from "../../assets/svgs/vueSvg.vue";
/**
 * @Description 
 * @Author llj
 * @Date 2024-08-05 16:14:52
 */

</script>

<style scoped lang='scss'>
.Header {
  padding: 0 30px;
  height: 100%;
  border-bottom: 1px solid var(--layout-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;

  >div {
    display: flex;
    align-items: center;
  }

  .logo {
    max-height: 48px;
  }

  .left {
    p {
      font-size: 18px;
      padding-left: 8px;
      font-weight: 500;
    }
  }

  .right {
    a {
      display: inline-flex;
    }
  }


}
</style>