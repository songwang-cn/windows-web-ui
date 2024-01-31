<template>
  <div class="shut-down">
    <div v-loading="loading" class="mask" :class="!loading && 'is-down'" />
    <div v-if="loading" class="center">
      {{ loadingTxt }}
    </div>
    <div v-else class="start" @click="onStart">
      开机
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AppConfig } from '@/appConfig'

const loading = ref(true)

const loadingTxt = ref('正在关机')

setTimeout(() => {
  loading.value = false
}, 5000)

function onStart() {
  loadingTxt.value = '正在开机'
  loading.value = true
  setTimeout(() => {
    AppConfig.router?.push('/')
  }, 5000)
}

</script>

<style lang="scss" scoped>
.shut-down{
    position: fixed;
    inset: 0;
    background: #111;
    background-image: url('../assets/img/wallPaper/1.png');
    background-size: cover;
    background-position: center center;

    .mask{
        position: absolute;
        inset: 0;
        backdrop-filter: blur(20px);
        background-color: rgba(0,0,0,0);
        transition: 2s;

        &.is-down{
            background-color: rgba(0,0,0,1);
        }
    }

    .center{
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 30px auto;
        color: #fff;
        font-size: 14px;
    }
    .start{
        background-color: rgba(255,255,255,.8);
        backdrop-filter: blur(20px);
        cursor: pointer;
        border-radius: 5px;
        position: absolute;
        width: 100px;
        line-height: 36px;
        text-align: center;
        top: calc(50% - 20px);
        font-size: 14px;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: 300ms;
        animation: dialog-in 1000ms ease;
        &:hover{
            background-color: rgba(255,255,255,.6);
        }
    }
}
</style>
