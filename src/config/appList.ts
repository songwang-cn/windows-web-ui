import { AppConfigEntity } from '@/entity/AppConfigEntity'
import { DialogHelper } from '@/helper/DialogHelper'
import Browser from '@/components/Browser.vue'
import Music from '@/components/Music.vue'
import { appStore } from './store'

export const configList = [
  {
    id: 1,
    index: 1,
    name: 'Edge',
    icon: 'icon-Edge-01',
    action: () => DialogHelper.show(Browser),
  },
  {
    id: 2,
    index: 2,
    name: '网易云音乐',
    icon: 'icon-wangyiyunyinle',
    action: () => DialogHelper.show(Music),
  },
  {
    id: 3,
    index: 3,
    name: 'VSCode',
    icon: 'icon-vscode',
    action: () => DialogHelper.show(Browser)
    ,
  },
]

const appList: AppConfigEntity[] = []

for (let i = 0; i < configList.length; i++) {
  const app = configList[i]
  appList.push(
    new AppConfigEntity()
      .setId(app.id)
      .setIndex(app.index)
      .setName(app.name)
      .setIcon(app.icon)
      .setAction(app.action),
  )
}

export {
  appList,
}
