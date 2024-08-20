import './assets/styles/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import LUI from './components/index'
// import LUI from '../lljui/lib/index'
import LUI from 'llj-vue3-ui'
import 'llj-vue3-ui/css'

const app = createApp(App)

app.use(router)
app.use(LUI)

app.mount('#app')
