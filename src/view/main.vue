<template>
  <div
    v-loading="loading"
    class="main"
  >
    <Desktop />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { appStore } from '@/config/store'
import Desktop from '@/components/Desktop.vue'
import Footer from '@/components/Footer.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)

window.addEventListener('storage', (event) => {
  if (event.key === 'bgUrl') {
    appStore().setBgUrl(event.newValue as string)
  }
})

</script>

<style lang="scss" scoped>

.main{
    position: fixed;
    inset: 0;
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/img/wallPaper/1.png');
    background-position: center center;
    animation: fade-in 1s;
}
</style>
