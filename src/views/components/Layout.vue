<script setup>
/**
 * @Description Layout
 * @Author llj
 * @Date 2024-08-05 15:44:30
 */
import Header from "./Header.vue";
import { RouterView } from 'vue-router'
import Nav from './Nav.vue'

</script>

<template>
  <div class="Layout">
    <header>
      <Header />
    </header>
    <aside>
      <Nav />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang='scss'>
.Layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  --layout-border-color: rgba(60, 60, 60, 0.12);

  $asideWidth: 180px;
  $headerHeight: 55px;

  * {
    scrollbar-width: thin;
    // scrollbar-color: #f0f0f0 white;
  }


  >header {
    width: 100%;
    height: $headerHeight;
    position: fixed;
    left: 0;
    top: 0;
  }


  >aside {
    position: fixed;
    top: 55px;
    left: 0;
    width: $asideWidth;
    height: calc(100% - 55px);
    max-width: 100%;
  }

  >main {
    flex: 1;
    padding-left: $asideWidth;
    padding-top: $headerHeight;
    max-height: 100%;
  }
}
</style>