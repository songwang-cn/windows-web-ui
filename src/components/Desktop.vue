<template>
  <div
    id="desktop"
    class="desktop"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
  >
    <TransitionGroup tag="div" name="appList">
      <div
        v-for="item,index of appStore().appList"
        :key="item.name"
        class="appitem"
        :class="item.id === appStore().dragApp.id && 'drag'"
        :style="{
          width: `${AppConfig.appSize}px`,
          height: `${AppConfig.appSize}px`,
          left: `${item.id === appStore().dragApp.id && isDraging ? dragPos.x : getPosByIndex(index).x}px`,
          top: `${item.id === appStore().dragApp.id && isDraging ? dragPos.y : getPosByIndex(index).y}px`,
        }"
        @mousedown="onMousedown(item)"
        @mousemove="onItemMove(item, index)"
      >
        <div class="icon">
          <svg style="height: 100%;width: 100%;" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`" />
          </svg>
        </div>
        <div class="name">
          {{ item.name }}
        </div>
      </div>
      <div
        v-if="isDraging"
        class="fake"
        :style="{
          width: `${AppConfig.appSize}px`,
          height: `${AppConfig.appSize}px`,
          left: `${getPosByIndex(dragIndex).x}px`,
          top: `${getPosByIndex(dragIndex).y}px`,
        }"
      />
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { PosEntity } from '@/entity/PosEntity'
import { AppConfig } from '@/appConfig'
import { appStore } from '@/config/store'
import { AppConfigEntity } from '@/entity/AppConfigEntity'

function getPosByIndex(index: number) {
  return new PosEntity()
    .setX(Math.floor(index / AppConfig.columnAppNum) * AppConfig.appSize)
    .setY((index % AppConfig.columnAppNum) * AppConfig.appSize)
}

const dragPos = ref(new PosEntity())

function onMouseMove(e: MouseEvent) {
  if (appStore().dragApp.id) {
    isDraging.value = true
  }
  const x = e.x > AppConfig.appSize / 2 ? e.x - AppConfig.appSize / 2 : 0
  const y = e.y > AppConfig.appSize / 2 ? e.y - AppConfig.appSize / 2 : 0
  dragPos.value.setX(x).setY(y)
}

const isDraging = ref(false)

const clickStartTime = ref(0)

const dragIndex = computed(() => appStore().appList.findIndex((app) => app.id === appStore().dragApp.id))

function onMousedown(config: AppConfigEntity) {
  console.log('mousedown')
  clickStartTime.value = Date.now()
  appStore().setDragApp(config)
}

const changeAppTimer = ref(null as any)

function onItemMove(config: AppConfigEntity, index: number) {
  if (changeAppTimer.value) return
  changeAppTimer.value = true
  const dropPos = getPosByIndex(index)
  if (appStore().dragApp.id !== config.id && isDraging.value && Math.abs(dragPos.value.x - dropPos.x) <= 24 && Math.abs(dragPos.value.y - dropPos.y) <= 24) {
    appStore().changeAppListIndex(config)
  }
  setTimeout(() => {
    changeAppTimer.value = false
  }, 100)
}

function onClick() {
  appStore().dragApp.onAction()
}

function onMouseUp() {
  if (Date.now() - clickStartTime.value <= 300) {
    onClick()
  }
  isDraging.value = false
  appStore().setDragApp(new AppConfigEntity())
}

</script>

<style lang="scss" scoped>
.appList-move{ /* 对移动中的元素应用的过渡 */
  transition: 200ms;
}

.desktop{
    flex: 1;
    position: relative;

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

      .icon{
        width: 60%;
        height: 60%;
        border-radius: 5px;
      }
      .name{
        position: absolute;
        bottom: -5px;
        color: #fff;
        font-size: 10px;
      }
    }
}

.fake{
  position: absolute;
  border: 4px dashed #ffffff;
  border-radius: 20px;
  transform: scale(.6);
  background-color: rgba(255,255,255,.2);
  backdrop-filter: blur(10px);
  transition: 100ms;
}
</style>
