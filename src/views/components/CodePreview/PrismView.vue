<script setup lang='ts'>
/**
 * @Description prismjs 预览 代码
 * @Author llj
 * @Date 2024-08-07 14:24:35
 */
import Prism from 'prismjs'
import { onMounted, onUpdated } from 'vue'
const props = defineProps({
  codes: {
    default: ''
  },
  language: {
    default: 'html'
  }
})
onMounted(() => {
  Prism.highlightAll()
})
onUpdated(() => {
  Prism.highlightAll()
})

</script>

<template>
  <pre v-if="language === 'js'"><code class="language-html line-numbers">{{ codes }}</code></pre>
  <pre v-else><code class="language-html line-numbers">{{ codes }}</code></pre>
</template>

<style scoped lang='scss'>
</style>