import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/iconfont/iconfont.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/index.scss'
import router from '@/config/router'
import app from './App.vue'
import { AppConfig } from './appConfig'

AppConfig.router = router

createApp(app)
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .mount('#app')
