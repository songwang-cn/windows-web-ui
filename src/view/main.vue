<template>
  <div class="main" :style="style">
    <Header />
    <Desktop />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { appStore } from '@/config/store'
import Header from '@/components/Header.vue'
import Desktop from '@/components/Desktop.vue'
import Footer from '@/components/Footer.vue'

const style = computed(() => ({
  background: `url(${appStore().bgUrl})`,
}))

</script>

<style lang="scss" scoped>

.main{
    position: fixed;
    inset: 0;
    background-size: cover;
    display: flex;
    flex-direction: column;
    font-family: 'AlimamaFangYuan';
}
</style>
