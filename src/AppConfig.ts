import { Router } from 'vue-router'
import { AppConfigEntity } from './entity/AppConfigEntity'

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

  /**
   * ✨columnNum
   * 桌面显示的列量
   */
  static columnNum = 16

  static dragApp: AppConfigEntity = new AppConfigEntity()
}
