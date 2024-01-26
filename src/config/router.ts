import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

/**
 * # 路由配置
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '登录',
    component: () => import('@/view/login.vue'),
  },
  {
    path: '/main',
    name: '主页面',
    component: () => import('@/view/main.vue'),
  },
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
