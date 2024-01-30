<template>
  <div class="box">
    <svg v-if="icon" style="width: 100%;height:100%" aria-hidden="true">
      <use :xlink:href="`#${icon}`" />
    </svg>
    <div v-else class="un-svg">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  icon: {
    type: Object,
    default: () => ({}),
  },
  name: {
    type: String,
    default: '',
  },
})

</script>

<style lang="scss" scoped>
.box{
    margin: 0 auto;
    user-select: none;
    transition: 300ms all;
    cursor: pointer;
    &:active{
        transform: scale(0.9);
    }
}

.un-svg{
    width: 100%;
    height:100%;
    background-color: #111111;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
}

.name{
    text-align: center;
    padding-top: 5px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    user-select: none;
}
</style>
