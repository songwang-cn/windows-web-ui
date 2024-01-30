<template>
  <div
    class="appitem"
    :class="isDraging && 'drag'"
    :style="style"
    @mouseenter="onMouseEnter"
    @mousemove="onMouseMove"
  >
    <div
      class="icon"
      @mousedown="onMousedown"
    />
    <div class="name">
      {{ config.name }}
    </div>
  </div>
  <!--  <div
    class="fake"
    :style="{
      opacity: isDraging ? 1 : 0,
      width: `${AppConfig.appSize}px`,
      height: `${AppConfig.appSize}px`,
      left: `${props.pos.x}px`,
      top: `${props.pos.y}px`,
    }"
  /> -->
</template>

<script lang="ts" setup>
import {
  PropType, computed, onMounted, ref,
} from 'vue'
import { PosEntity } from '@/entity/PosEntity'
import { AppConfigEntity } from '@/entity/AppConfigEntity'
import { AppConfig } from '@/appConfig'
import { appStore } from '@/config/store'

const props = defineProps({
  pos: {
    type: Object as PropType<PosEntity>,
    default: new PosEntity(),
  },
  config: {
    type: Object as PropType<AppConfigEntity>,
    default: new AppConfig(),
  },
  dragPos: {
    type: Object as PropType<PosEntity>,
    default: new PosEntity(),
  },
})

const isDraging = ref(false)

const style = computed(() => ({
  width: `${AppConfig.appSize}px`,
  height: `${AppConfig.appSize}px`,
  left: `${isDraging.value ? props.dragPos.x : props.pos.x}px`,
  top: `${isDraging.value ? props.dragPos.y : props.pos.y}px`,
}))

const clickStartTime = ref(0)

function onMousedown() {
  console.log('mousedown')
  clickStartTime.value = Date.now()
  AppConfig.dragApp = props.config
}

function onMouseMove() {
  if (AppConfig.dragApp.id === props.config.id) {
    isDraging.value = true
  }
}

function onMouseEnter() {
  if (AppConfig.dragApp.id && !isDraging.value) {
    appStore().changeAppListIndex(props.config)
  }
}

function onClick() {
  console.log('click')
}

function onMouseUp() {
  if (Date.now() - clickStartTime.value <= 300) {
    onClick()
  }
  isDraging.value = false
  AppConfig.dragApp = new AppConfigEntity()
}

onMounted(() => {
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
  z-index: 99;
  &.drag{
    z-index: 999;
    transition: none;
    pointer-events: none;
    .icon{
      box-shadow: 0 0 20px #7e7e7e;
    }
  }

  .icon{
    background: #fff;
    width: 60%;
    height: 60%;
    border-radius: 5px;
  }
  .name{
    position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 12px;
  }
}

.fake{
  transition: 500ms all ease;
  position: absolute;
  border: 4px dashed #ffffff;
  border-radius: 20px;
  transform: scale(.6);
  background-color: rgba(255,255,255,.2);
  backdrop-filter: blur(10px);
}
</style>
