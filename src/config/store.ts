import { defineStore } from 'pinia'
import { BgType } from '@/enum'

export const appStore = defineStore('app', {
  state: () => ({
    bgType: localStorage.getItem('bgType') || BgType.SYSTEM,
    theme: localStorage.getItem('theme') || 'light',
    bgUrl: localStorage.getItem('bgUrl') || new URL('@/assets/img/wallPaper/1.png', import.meta.url).href,
    lastBgUrl: localStorage.getItem('lastBgUrl') || new URL('@/assets/img/wallPaper/1.png', import.meta.url).href,
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
  },
})
