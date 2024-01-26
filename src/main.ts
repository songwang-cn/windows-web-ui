import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/config/router'
import app from './App.vue'
import { AppConfig } from './appConfig'

AppConfig.router = router

createApp(app)
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .mount('#app')
