import { defineStore } from 'pinia'
import { BgType } from '@/enum'
import { appList } from './appList'
import { AppConfigEntity } from '@/entity/AppConfigEntity'

function getAppListFromStorage() {
  const list = localStorage.getItem('appList')
  if (list) {
    return JSON.parse(list)
  }
  return appList
}

export const appStore = defineStore('app', {
  state: () => ({
    bgType: localStorage.getItem('bgType') || BgType.SYSTEM,
    theme: localStorage.getItem('theme') || 'light',
    bgUrl: localStorage.getItem('bgUrl') || new URL('@/assets/img/wallPaper/1.png', import.meta.url).href,
    lastBgUrl: localStorage.getItem('lastBgUrl') || new URL('@/assets/img/wallPaper/1.png', import.meta.url).href,
    appList: getAppListFromStorage(),
    dragApp: new AppConfigEntity(),
  }),
  actions: {
    changeBgType(type: BgType) {
      this.bgType = type
      localStorage.setItem('bgType', this.bgType)
    },
    changeTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
    },
    setBgUrl(url: string) {
      this.bgUrl = url
      localStorage.setItem('bgUrl', this.bgUrl)
      if (this.bgType === 'system') {
        this.setLastBgUrl(this.bgUrl)
      }
    },
    setLastBgUrl(url: string) {
      this.lastBgUrl = url
      localStorage.setItem('lastBgUrl', this.lastBgUrl)
    },
    changeAppListIndex(app: AppConfigEntity) {
      const dropIndex = this.appList.findIndex((item) => item.index === app.index)
      const dragIndex = this.appList.findIndex((item) => item.index === this.dragApp.index)

      this.appList[dropIndex] = this.dragApp

      this.appList[dragIndex] = app

      // this.appList.splice(dragIndex, 1)

      // this.appList.splice(dropIndex, 0, this.dragApp)
    },
    setDragApp(config: AppConfigEntity) {
      this.dragApp = config
    },
  },
})
