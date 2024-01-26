import { ref } from 'vue'

export function UseTime() {
  const YY = ref('')

  const MM = ref('')

  const DD = ref('')

  const HH = ref('')

  const mm = ref('')

  const ss = ref('')

  const chineseWeekString = ['日', '一', '二', '三', '四', '五', '六']

  const WEEK = ref('') // 星期几

  const leftString = ref('上午') // 上午/下午

  function updateTime() {
    const date = new Date()

    YY.value = `${date.getFullYear()}`

    MM.value = getFillString(date.getMonth() + 1)

    DD.value = getFillString(date.getDate())

    leftString.value = date.getHours() >= 12 ? '下午' : '上午'

    HH.value = getFillString(date.getHours())

    mm.value = getFillString(date.getMinutes())

    ss.value = getFillString(date.getSeconds())

    WEEK.value = `星期${chineseWeekString[date.getDay()]}`
  }

  function getFillString(num: number):string {
    return num >= 10 ? `${num}` : `0${num}`
  }

  updateTime()

  setInterval(() => {
    updateTime()
  }, 1000)

  return {
    YY,
    MM,
    DD,
    HH,
    mm,
    ss: Number(ss.value) > 10 ? ss.value : `0${ss.value}`,
    WEEK,
    leftString,
  }
}
