<template>
  <router-view
    @contextmenu.prevent="openContextMenu"
  />
</template>

<script setup lang="ts">
import { UseContextMenu } from '@/use/UseContextMenu'

function openContextMenu(e: MouseEvent) {
  UseContextMenu(e)
}
</script>

<style lang="scss">

</style>
