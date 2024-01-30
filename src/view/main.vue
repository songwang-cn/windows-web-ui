<template>
  <div
    v-loading="loading"
    class="main"
    :style="style"
  >
    <Header />
    <Desktop />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { appStore } from '@/config/store'
import Header from '@/components/Header.vue'
import Desktop from '@/components/Desktop.vue'
import Footer from '@/components/Footer.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 1000)

const style = computed(() => ({
  backgroundImage: `url(${appStore().bgUrl})`,
}))

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

}
</style>
