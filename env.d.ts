/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const vueComponent: DefineComponent<{}, {}, any>
  export default vueComponent
}

declare module 'nprogress'
declare module 'prismjs'
declare module 'llj-vue3-ui'
