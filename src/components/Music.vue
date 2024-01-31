<template>
  <Dialog
    ref="browser"
    dialog-id="APP_2"
    dheight="80%"
    dwidth="400px"
    bg-color="#111"
    :fullable="false"
  >
    <iframe
      src="https://song-wang.gitee.io/music-player/#/"
      width="100%"
      height="100%"
    />
  </Dialog>
</template>

<script lang="ts" setup>
import Dialog from '@/components/Dialog.vue'

</script>

<style lang="scss" scoped></style>
