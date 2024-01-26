import { Ref } from 'vue'
import { Router } from 'vue-router'

export class AppConfig {
  /**
    *🐱‍🏍router
    * 全局路由对象
    */
  static router?: Router

  /**
   * ✨appSize
   * 桌面app图标大小
   */
  static appSize = 100

  /**
   * ✨columnAppNum
   * 桌面一列显示的app数量
   */
  static columnAppNum = 8

  static dragAppRef: any
}
