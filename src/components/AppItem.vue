<template>
  <div
    ref="appRef"
    class="appitem"
    :style="style"
    @mousedown="onMousedown"
  >
    <div class="icon" />
    <div class="name">
      {{ config.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType, computed, onMounted, ref,
} from 'vue'
import { PosEntity } from '@/entity/PosEntity'
import { AppConfig } from '@/appConfig'

const appRef = ref()

const props = defineProps({
  pos: {
    type: Object as PropType<PosEntity>,
    default: new PosEntity(),
  },
  config: {
    type: Object as PropType<any>,
    default: new AppConfig(),
  },
})

const isDraging = ref(false)

const dragPos = ref(new PosEntity())

const style = computed(() => ({
  width: `${AppConfig.appSize}px`,
  height: `${AppConfig.appSize}px`,
  left: `${isDraging.value ? dragPos.value.x : props.pos.x}px`,
  top: `${isDraging.value ? dragPos.value.y : props.pos.y}px`,
}))

const clickStartTime = ref(0)

function onMousedown() {
  console.log('mousedown')
  isDraging.value = true
  AppConfig.dragAppRef = appRef.value
  clickStartTime.value = Date.now()
}

function onClick() {
  console.log('click')
}

function onMouseUp() {
  if (Date.now() - clickStartTime.value < 300) {
    onClick()
  }
  isDraging.value = false
  AppConfig.dragAppRef = null
}

function isJiaocha(el1, el2) {
  const rect1 = el1.getBoundingClientRect()
  const rect2 = el2.getBoundingClientRect()

  return !(
    rect1.top > rect2.bottom
      || rect1.right < rect2.left
      || rect1.bottom < rect2.top
      || rect1.left > rect2.right
  )
}

onMounted(() => {
  document.getElementById('desktop')?.addEventListener('mousemove', (e: MouseEvent) => {
    const x = e.x > AppConfig.appSize / 2 ? e.x - AppConfig.appSize / 2 : 0
    const y = e.y > AppConfig.appSize / 2 ? e.y - AppConfig.appSize / 2 : 0
    dragPos.value.setX(x).setY(y)
    if (AppConfig.dragAppRef && isJiaocha(appRef.value, AppConfig.dragAppRef)) {
      console.log(isJiaocha(appRef.value, AppConfig.dragAppRef), props.config.name)
    }
  })

  document.getElementById('desktop')?.addEventListener('mouseup', onMouseUp)
})

</script>

<style lang="scss" scoped>
.appitem{
  user-select: none;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .icon{
    background: #fff;
    width: 60%;
    height: 60%;
    border-radius: 5px;
  }
  .name{
    color: #fff;
    font-size: 12px;
  }
}
</style>
