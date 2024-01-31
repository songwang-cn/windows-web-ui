<template>
  <Dialog
    ref="browser"
    dialog-id="APP_1"
  >
    <template #left>
      <img src="@/assets/svg/edge.svg" style="height: 30px;width: 30px;">
      <div class="browser-bar">
        <div
          v-for="bar,index of barList"
          :key="bar.name"
          class="bar"
          :class="showIndex === index ? 'active' : ''"
          @click="showIndex = index"
        >
          <span>{{ bar.name }}</span>
          <i
            class="iconfont icon-guanbi"
            @click.stop="onDeleteBar(index)"
          />
        </div>
        <i
          class="add iconfont icon-add"
          @click="onAddBar"
        />
      </div>
    </template>
    <template
      v-for="bar,index of barList"
      :key="bar.name"
    >
      <div
        v-show="showIndex === index"
        class="frameBox"
      >
        <div class="top">
          <i
            class="iconfont icon-arrow-left-line"
            @click="back"
          />
          <i
            class="forward iconfont icon-arrow-left-line"
            @click="goNext"
          />
          <i class="iconfont icon-shuaxin" @click="reload()" />
          <el-input
            v-model="bar.url"
            style="flex: 1;margin-left: 10px;"
            placeholder=""
          />
        </div>
        <iframe
          style="flex: 1;"
          :src="bar.url"
        />
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from '@/components/Dialog.vue'

const browser = ref()

const showIndex = ref(0)

const barList = ref([
  {
    name: 'bing',
    url: 'https://cn.bing.com/search',
  },
])

function onAddBar() {
  barList.value.push({
    name: '新建标签页',
    url: 'https://cn.bing.com',
  })
  showIndex.value = barList.value.length - 1
}

function onDeleteBar(index: number) {
  barList.value.splice(index, 1)
  if (showIndex.value >= barList.value.length) {
    showIndex.value = barList.value.length - 1
  }

  if (barList.value.length === 0) browser.value.closeHandler()
}

function back() {
  window.history.back()
}

function goNext() {
  window.history.forward()
}

function reload() {
  window.location.reload()
}

</script>

<style lang="scss" scoped>

::-webkit-scrollbar{
    width: 0;
    height: 0;
}

.browser-bar{
  padding: 2px 10px;
  display: flex;
  align-items: center;
  overflow: auto;

  .add{
    height: 30px;
    width: 30px;
    font-size: 20px;
    text-align: center;
    text-indent: 2px;
    line-height: 30px;
    cursor: pointer;

    &:hover{
      background: #eee;
      border-radius: 100%;
    }
  }

  .bar{
    width: 120px;
    height: 30px;
    margin-right:2px;
    line-height: 30px;
    font-size: 12px;
    padding: 0 5px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    background-color: #d6d6d6;

    &.active{
      background-color: #eee;
      box-shadow: 0 0 10px #999 ;
    }

    span{
      flex: 1;
    }
    .iconfont{
        height: 20px;
        width: 20px;
        text-align: center;
        font-size: 10px;
        line-height: 20px;
        text-indent: 2px;
      &:hover{
        background: #eee;
        border-radius: 100%;
      }
    }
  }
}

.frameBox{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .top{
    min-height: 40px;
    background: #fff;
    padding: 10px;
    display: flex;
    align-items: center;

    .iconfont{
      font-size: 20px;
      padding: 5px;
      border-radius: 100%;
      &:hover{
        background-color: #eee;
      }
    }

    .forward{
      transform: rotate(180deg);
    }
  }
}
</style>
