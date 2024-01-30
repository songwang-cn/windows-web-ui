import { AppConfigEntity } from '@/entity/AppConfigEntity'
import { DialogHelper } from '@/helper/DialogHelper'
import Browser from '@/components/Browser.vue'
import Music from '@/components/Music.vue'

export const appList: AppConfigEntity[] = [
  {
    id: 1,
    index: 1,
    name: '浏览器',
    icon: 'icon-Safariliulanqi',
  },
  {
    id: 2,
    index: 2,
    name: '微信',
    icon: 'icon-weixin1',
  },
  {
    id: 3,
    index: 3,
    name: 'QQ',
    icon: 'icon-QQ',
  },
  {
    id: 4,
    index: 4,
    name: '抖音',
    icon: 'icon-douyin',
  },
  {
    id: 5,
    index: 5,
    name: 'bilibili',
    icon: 'icon-bilibili',
  },
  {
    id: 6,
    index: 6,
    name: 'KEEP',
    icon: 'icon-Keep',
  },
  {
    id: 7,
    index: 7,
    name: '快手',
    icon: 'icon-kuaishou',
  },
  {
    id: 8,
    index: 8,
    name: '网易云音乐',
    icon: 'icon-wangyiyunyinle',
    action: () => DialogHelper.show(Music),
  },
  {
    id: 9,
    index: 9,
    name: '百度网盘',
    icon: 'icon-baiduwangpan',
  },
  {
    id: 10,
    index: 10,
    name: '谷歌浏览器',
    icon: 'icon-Chrome',
    action: () => DialogHelper.show(Browser),
  },
  {
    id: 11,
    index: 11,
    name: 'Docker',
    icon: 'icon-Docker',
  },
  {
    id: 12,
    index: 12,
    name: '腾讯会议',
    icon: 'icon-tengxunhuiyi',
  },
  {
    id: 13,
    index: 13,
    name: '腾讯视频',
    icon: 'icon-tengxunshipin',
  },
  {
    id: 14,
    index: 14,
    name: '百度地图',
    icon: 'icon-baidu-copy',
  },
  {
    id: 15,
    index: 15,
    name: 'vsCode',
    icon: 'icon-vscode',
  },
  {
    id: 16,
    index: 16,
    name: '优酷',
    icon: 'icon-youku',
  },
]
