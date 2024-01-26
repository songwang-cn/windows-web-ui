<template>
  <div class="login" :style="style">
    <div class="mask">
      <el-button type="warning" @click="AppConfig.router.push('./main')">
        进入系统
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { appStore } from '@/config/store'
import { AppConfig } from '@/appConfig'

const style = computed(() => ({
  background: `url(${appStore().bgUrl})`,
}))

</script>

<style lang="scss" scoped>
.login{
  position: fixed;
  background-color: red;
  inset: 0;
  background-size: cover;
  .mask{
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,.1);
    backdrop-filter: blur(5px);
  }
}
</style>
