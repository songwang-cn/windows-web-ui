<template>
  <div
    id="desktop"
    class="desktop"
    @mouseup="onMouseUp"
  >
    <div
      id="wall"
      @mousemove="onMouseMove"
    >
      <TransitionGroup tag="div" name="appList">
        <div
          v-for="item,index of imgList"
          :key="item.id"
          class="appitem"
          :class="item.id === dragingImg.id && 'drag'"
          :style="{
            width: `${imgSize}px`,
            height: `${imgSize}px`,
            left: `${item.id === dragingImg.id && isDraging ? dragPos.x : getPosByIndex(index).x}px`,
            top: `${item.id === dragingImg.id && isDraging ? dragPos.y : getPosByIndex(index).y}px`,
          }"
          @mousedown="onMousedown(item)"
          @mouseenter="onItemEnter(item, index)"
        >
          <el-image
            style="width: 95%;"
            :src="item.icon"
            :preview-src-list="imgList.map(v => v.icon)"
          />
        </div>
        <div
          v-if="isDraging"
          class="fake"
          :style="{
            width: `${imgSize}px`,
            height: `${imgSize}px`,
            left: `${getPosByIndex(dragIndex).x}px`,
            top: `${getPosByIndex(dragIndex).y}px`,
          }"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { PosEntity } from '@/entity/PosEntity'
import { AppConfigEntity } from '@/entity/AppConfigEntity'

const modules = import.meta.glob('../assets/img/wallPaper/*.*', { eager: true })

const imgList = ref([] as any[])

// eslint-disable-next-line guard-for-in
for (const k in modules) {
  imgList.value.push({
    id: k,
    icon: (modules[k]as any).default,
  })
}

const scrollLeft = ref(0)

onMounted(() => {
  const wall = document.getElementById('wall') as HTMLElement
  document.getElementById('desktop')?.addEventListener('wheel', (e) => {
    if (scrollLeft.value - e.deltaY > 0) {
      scrollLeft.value = 0
    } else if (scrollLeft.value - e.deltaY < -wall.offsetWidth) {
      scrollLeft.value = -wall.offsetWidth + window.innerWidth
    } else {
      scrollLeft.value -= e.deltaY
    }
    wall.style.left = `${scrollLeft.value}px`
  })
})

console.log(modules)

const imgSize = ref(300)

function getPosByIndex(index: number) {
  return new PosEntity()
    .setX(Math.floor(index / 3) * imgSize.value)
    .setY((index % 3) * imgSize.value)
}

const dragPos = ref(new PosEntity())

const dragingImg = ref({} as any)

function onMouseMove(e: MouseEvent) {
  console.log(e)
  if (dragingImg.value.id) {
    isDraging.value = true
  }
  const x = e.x > imgSize.value / 2 ? e.x - imgSize.value / 2 : 0
  const y = e.y > imgSize.value / 2 ? e.y - imgSize.value / 2 : 0
  dragPos.value.setX(x - scrollLeft.value).setY(y)
}

const isDraging = ref(false)

const clickStartTime = ref(0)

const dragIndex = computed(() => imgList.value.findIndex((app) => app.id === dragingImg.value.id))

function onMousedown(config: AppConfigEntity) {
  console.log('mousedown')
  clickStartTime.value = Date.now()
  dragingImg.value = config
}

const changeAppTimer = ref(null as any)

function changeList(app: AppConfigEntity) {
  const dropIndex = imgList.value.findIndex((item) => item.id === app.id)
  const dragIndex = imgList.value.findIndex((item) => item.id === dragingImg.value.id)

  imgList.value[dropIndex] = dragingImg.value

  imgList.value[dragIndex] = app

  // this.appList.splice(dragIndex, 1)

  // this.appList.splice(dropIndex, 0, this.dragApp)
}

function onItemEnter(config: AppConfigEntity, index: number) {
  if (changeAppTimer.value) return
  changeAppTimer.value = true
  const dropPos = getPosByIndex(index)
  if (dragingImg.value.id !== config.id && isDraging.value) {
    changeList(config)
  }
  setTimeout(() => {
    changeAppTimer.value = false
  }, 100)
}

function onMouseUp() {
  isDraging.value = false
  dragingImg.value = {}
}

</script>

<style lang="scss" scoped>
.appList-move{ /* 对移动中的元素应用的过渡 */
  transition: 200ms;
}

/* ::-webkit-scrollbar{
  widows: 0;
  height: 0;
} */
.desktop{
    position: fixed;
    inset: 0;
    background-color: #505050;
    background-image: url('../assets/img/wallPaper/photowallbg.png');
    overflow-x: auto;

    #wall{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      min-width: 100vw;
    }
    .appitem{
      user-select: none;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      z-index: 99;
      cursor: pointer;
      &.drag{
        z-index: 999;
        transition: none;
        pointer-events: none;

      }
    }
}

.fake{
  position: absolute;
  border: 4px dashed #ffffff;
  border-radius: 20px;
  transform: scale(.8);
  background-color: rgba(255,255,255,.2);
  backdrop-filter: blur(10px);
  transition: 100ms;
}
</style>
