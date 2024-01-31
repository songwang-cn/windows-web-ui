<template>
  <div class="footer">
    <div class="part size-1" />
    <div class="part">
      <template
        v-for="app,index of appStore().openAppPool"
        :key="app.id"
      >
        <el-popover width="auto" placement="top" trigger="hover">
          <div class="snapshot" />
          <template #reference>
            <div class="pool-icon" @mouseover="getElementByApp(app, index)">
              <svg style="height: 30px;width: 30px;" aria-hidden="true">
                <use :xlink:href="`#${app.icon}`" />
              </svg>
            </div>
          </template>
        </el-popover>
      </template>
    </div>
    <div class="part size-2" />
    <div class="part size-2" />
  </div>
</template>

<script lang="ts" setup>
import { appStore } from '@/config/store'
import { AppConfigEntity } from '@/entity/AppConfigEntity'

function getElementByApp(app: AppConfigEntity, index) {
  const snapshot = document.getElementsByClassName('snapshot')[index]
  // 清除节点所有子元素
  while (snapshot?.firstChild) {
    snapshot?.removeChild(snapshot?.firstChild)
  }
  const copyDom = document.getElementById(`APP_${app.id}`)?.cloneNode(true) as HTMLElement
  copyDom.style.position = 'relative'
  copyDom.style.inset = '0'
  copyDom.style.width = '300px'
  copyDom.style.height = '200px'
  copyDom.classList.remove('mini')
  copyDom.style.zIndex = '1'
  snapshot?.appendChild(copyDom)
  const mask = document.createElement('div')
  mask.style.position = 'absolute'
  mask.style.inset = '0'
  mask.style.background = 'rgba(0,0,0,0.1)'
  mask.style.zIndex = '2'
  snapshot?.appendChild(mask)
}

</script>

<style lang="scss" scoped>
.footer{
    margin: 10px auto;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    transition: 300ms;
    .part{
      cursor: pointer;
      height: 45px;
      border-radius: 5px;
      background: rgba(255,255,255,.2);
      backdrop-filter: blur(8px);
      margin: 0 1px;
      transition: 300ms;
      display: flex;
      align-items: center;
      display: flex;
      width: auto;
      align-items: center;

      &:hover{
        background: rgba(255,255,255,.4);
      }

    }
    .pool-icon{
      margin: 0 5px;
      animation: jump-in 1s ease-in-out forwards;

      @keyframes jump-in {
        0%{
          transform: scale(0.8) translateY(30px);
        }
        50%{
          transform: scale(1.2) translateY(-20px);
        }
        100%{
          transform: scale(1) translateY(0);
        }
      }
    }

    .size-1{
      width: 100px;
    }

    .size-2{
      width: 200px;
    }
}

.snapshot{
  position: relative;
}
</style>
