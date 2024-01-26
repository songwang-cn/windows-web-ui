<template>
  <div class="header">
    <div class="left" />

    <div class="center">
      {{ HH }} : {{ mm }}
    </div>

    <div class="right" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UseTime } from '@/use/UseTime'

const { HH, mm } = UseTime()
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 40px;
    background: rgba(255,255,255,.2);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .center{
      font-size: 17px;
      font-weight: bold;
      color: #fff;
    }
}
</style>
