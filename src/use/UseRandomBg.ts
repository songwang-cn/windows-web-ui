import { ElMessage } from 'element-plus'
import { appStore } from '@/config/store'
import { BgType } from '@/enum'

export async function UseRandomBg() {
  ElMessage.warning('壁纸加载中')
  const res = await fetch('https://api.wetab.link/api/wallpaper/next?type=random')
  const json = await res.json()
  const img = document.createElement('img')
  img.src = json.data.rawSrc
  return new Promise((resolve) => {
    img.onload = () => {
      appStore().setBgUrl(json.data.rawSrc)
      appStore().changeBgType(BgType.RANDOM)
      resolve(json.data.rawSrc)
      ElMessage.success('壁纸加载成功')
    }
  })
}
