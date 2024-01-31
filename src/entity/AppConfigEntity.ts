import { appStore } from '@/config/store'
import { BaseEntity } from './BaseEntity'

export class AppConfigEntity extends BaseEntity {
  /**
    * 🤞
    * 应用唯一id
    */
  index!: number

  icon?: string

  action?: any

  setIndex(index: number) {
    this.index = index
    return this
  }

  setIcon(icon: string) {
    this.icon = icon
    return this
  }

  setAction(action: any) {
    this.action = action
    return this
  }

  async onAction() {
    // eslint-disable-next-line no-unused-expressions
    if (this.action) {
      appStore().onAppAction(this)
      await this.action()
      console.log('onAction', this)
      appStore().onAppClose(this.id)
    }
  }
}
