import { BaseEntity } from './BaseEntity'

export class AppConfigEntity extends BaseEntity {
  /**
    * 🤞
    * 应用唯一id
    */
  index!: number

  icon?: string

  action?: any
}
