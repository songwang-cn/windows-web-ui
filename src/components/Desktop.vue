<template>
  <div
    id="desktop"
    class="desktop"
    @mousemove="onMouseMove"
  >
    <AppItem
      v-for="item,index of appList.sort((a, b) => a.index - b.index)"
      :key="item.id"
      :pos="getPosByIndex(index)"
      :config="item"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AppItem from './AppItem.vue'
import { PosEntity } from '@/entity/PosEntity'
import { AppConfig } from '@/appConfig'

const appList = ref([
  {
    id: 1,
    index: 1,
    name: '浏览器',
  },
  {
    id: 2,
    index: 2,
    name: '微信',
  },
  {
    id: 3,
    index: 3,
    name: 'QQ',
  },
  {
    id: 4,
    index: 4,
    name: '支付宝',
  },
  {
    id: 5,
    index: 5,
    name: '百度',
  },
  {
    id: 6,
    index: 6,
    name: '京东',
  },
  {
    id: 7,
    index: 7,
    name: '淘宝',
  },
  {
    id: 8,
    index: 8,
    name: '网易云音乐',
  },
  {
    id: 9,
    index: 9,
    name: '百度网盘',
  },
  {
    id: 10,
    index: 10,
    name: '百度文库',
  },
  {
    id: 11,
    index: 11,
    name: '百度贴吧',
  },
])

function getPosByIndex(index: number) {
  return new PosEntity()
    .setX(Math.floor(index / AppConfig.columnAppNum) * AppConfig.appSize)
    .setY((index % AppConfig.columnAppNum) * AppConfig.appSize)
}

function onMouseMove() {

}
</script>

<style lang="scss" scoped>
.desktop{
    padding: 20px;
    flex: 1;
    background: rgba(0,0,0,.6);
    position: relative;
}
</style>
