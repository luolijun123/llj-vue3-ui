import './assets/styles/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import LUI from './components/index'

import LUI from 'llj-vue3-ui'
import 'llj-vue3-ui/style'
// import LUI from '../node_modules/llj-vue3-ui'
// import '../node_modules/llj-vue3-ui/lljui/css'

const app = createApp(App)

app.use(router)
app.use(LUI)

app.mount('#app')
