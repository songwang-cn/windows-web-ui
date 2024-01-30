<template>
  <div
    ref="menu"
    class="menu"
    :style="menuStyle"
  >
    <div
      v-for="item,index of menu"
      :key="index"
      class="menu_item"
      @click="onItemClick(item)"
      @contextmenu.prevent="onItemClick(item)"
    >
      {{ (item as any).name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { UseRandomBg } from '@/use/UseRandomBg'

const props = defineProps({
  event: {
    type: MouseEvent,
    default: null,
  },
  menu: {
    type: Array,
    default: () => [
      {
        name: '更换壁纸',
        do: UseRandomBg,
      },
      {
        name: '刷新',
        do: () => {
          window.location.reload()
        },
      },
    ],
  },
  onAction: {
    type: Function,
    default: () => {},
  },
  onClose: {
    type: Function,
    default: () => {},
  },
})

function onItemClick(item: any) {
  item.do()
  props.onAction()
}

const menuStyle = computed(() => ({
  left: props.event?.clientX || 0 + 120 > window.innerWidth ? `${props.event?.clientX || 0 - 120}px` : `${props.event?.clientX}px`,
  top: props.event?.clientY || 0 + props.menu.length * 30 > window.innerHeight ? `${props.event?.clientY || 0 - props.menu.length * 30}px` : `${props.event?.clientY}px`,
  transformOrigin: props.event?.clientY || 0 + props.menu.length * 30 > window.innerHeight ? '50% 100%' : '50% 0',
}))

onMounted(() => {
  document.body.addEventListener('click', () => props.onClose())
})

</script>

<style lang="scss" scoped>
.menu{
  user-select: none;
  position: absolute;
  width: 120px;
  border-radius: 5px;
  background-color: rgba($color: #fff, $alpha: 0.8);
  backdrop-filter: blur(3px);
  animation: menu-open 100ms forwards ease-in-out;
  // transform-origin: 50% 0;
  .menu_item{
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #575757;
    cursor: pointer;
    width: 100%;
    transition: 200ms;
    &:hover{
      background-color: rgba($color: #fff, $alpha: 0.5);
    }
    &:active{
        background-color: #575757;
        color: #fff;
    }
  }
}

</style>
