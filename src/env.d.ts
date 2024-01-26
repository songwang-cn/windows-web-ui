/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
// / <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string | boolean>> {
  /**
   * 环境名称
   */
  VITE_APP_NAME: string

  /**
   * # 项目API地址
   */
  VITE_APP_API_URL: string

  /**
   * # 公共服务访问地址
   * ---
   * ### 💡 配置环境变量请勿使用 ```https://``` ```http://``` ```//```开头
   */
  VITE_APP_COMMON_URL: string

  /**
   * # 公共服务API地址
   */
  VITE_APP_COMMON_API_URL: string

  /**
   * # 静态资源访问地址
   */
  VITE_APP_STATIC_URL: string

  /**
   * # 应用域名
   * ---
   * ### 💡 用于取出租户编码 配置环境变量请勿使用 ```https://``` ```http://``` ```//```开头
   */
  VITE_APP_SSO_DOMAIN: string

  /**
   * 是否开发模式
   */
  DEV: boolean

  /**
   * 是否生产模式
   */
  PROD: boolean

  /**
   * 当前环境模式
   */
  MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
