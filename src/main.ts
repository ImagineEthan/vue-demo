import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import routes from '@/router/index'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.use(routes)
app.use(ElementPlus)

app.mount('#app')
