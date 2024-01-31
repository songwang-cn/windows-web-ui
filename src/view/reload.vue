<template>
  <div class="reload">
    <div v-loading="loading" class="mask" />
    <div class="center">
      重启中 {{ timeLeft }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AppConfig } from '@/appConfig'

const loading = ref(true)

const timeLeft = ref(10)

const timer = setInterval(() => {
  timeLeft.value -= 1
}, 1000)

setTimeout(() => {
  AppConfig.router?.push('/')
  clearInterval(timer)
}, 10000)

</script>

<style lang="scss" scoped>
.reload{
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
}
</style>
