<template>
  <div class="footer">
    <div class="part size-1" />
    <div class="part size-2" />
    <div class="part size-2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.footer{
    margin: 10px auto;
    height: 58px;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    display: flex;
    .part{
      cursor: pointer;
      height: 58px;
      border-radius: 5px;
      background: rgba(255,255,255,.2);
      backdrop-filter: blur(8px);
      margin: 0 1px;
      transition: 300ms;

      &:hover{
        background: rgba(255,255,255,.4);
      }
    }

    .size-1{
      width: 100px;
    }

    .size-2{
      width: 200px;
    }
}
</style>
