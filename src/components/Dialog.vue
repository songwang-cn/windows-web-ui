<template>
  <div
    :id="dialogId"
    ref="main"
    :class="`main ${dialogKey} ${isClosing ? 'closing' : 'opening'} ${isFullScreen && 'fullscreen'} ${isMini && 'mini'}`"
    :style="{
      backgroundColor: bgColor,
      color: appStore().theme === 'light' ? '#111' : '#fff',
      height: height,
      width: width,
      top: posY + 'px',
      left: posX + 'px',
      zIndex
    }"
    @mousedown="onThisDialog"
  >
    <div
      class="dialog_top"
      @mousedown="onMouseDown"
    >
      <div class="left">
        <slot name="left" />
      </div>
      <div class="title">
        <slot name="title" />
      </div>
      <div class="right">
        <i v-if="miniable" class="mini iconfont icon-zuixiaohua1" @click.self="isMini = true" />
        <i v-if="fullable" :class="`full iconfont ${isFullScreen ? 'icon-xiaoxichuangkou-youshangjiao-suoxiaochuangkou' : 'icon-16gl-square'}`" @click.self="onFullScreen()" />
        <i class="iconfont close icon-guanbi1" @click.self="closeHandler()" />
      </div>
    </div>
    <div class="dialog_body">
      <slot>
        内容
      </slot>
    </div>
    <div v-if="!hideCtrl" class="dialog_footer">
      <slot name="footer">
        <slot name="footer-left" />
        <!--<van-button @click="onClose()" v-if="!hideCancel">取消</van-button> -->
        <slot name="footer-center" />
        <!--<van-button type="primary" v-if="!hideConfirm">确定</van-button> -->
        <slot name="footer-right" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { appStore } from '@/config/store'

const props = defineProps({
  dialogId: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '弹窗标题',
  },
  hideCtrl: {
    type: Boolean,
    default: false,
  },
  hideCancel: {
    type: Boolean,
    default: false,
  },
  hideConfirm: {
    type: Boolean,
    default: false,
  },
  onConfirm: {
    type: Function,
    default: () => {},
  },
  onClose: {
    type: Function,
    default: () => {},
  },
  dwidth: {
    type: String,
    default: '80%',
  },
  dheight: {
    type: String,
    default: '80%',
  },
  bgColor: {
    type: String,
    default: '#ccc',
  },
  fullable: {
    type: Boolean,
    default: true,
  },
  miniable: {
    type: Boolean,
    default: true,
  },
})

const dialogKey = ref(`${Date.now()}`)

localStorage.setItem('topDialogKey', dialogKey.value)

const zIndex = ref(999)

function onThisDialog() {
  const topDialogKey = localStorage.getItem('topDialogKey')
  if (dialogKey.value !== topDialogKey) {
    zIndex.value++
    localStorage.setItem('topDialogKey', dialogKey.value)
  }
}

onMounted(() => {
  document.body.addEventListener('mousemove', onMouseMove)
  document.body.addEventListener('mouseup', onMouseUp)
})

const isClosing = ref(false)

function closeHandler() {
  isClosing.value = true
  setTimeout(() => {
    props.onClose()
  }, 200)
}

defineExpose({
  closeHandler,
})

function onFullScreen() {
  if (!isFullScreen.value) {
    height.value = '100%'
    width.value = '100%'
    isFullScreen.value = true
    posX.value = 0
    posY.value = 0
  } else {
    height.value = props.dheight
    width.value = props.dwidth
    posX.value = getInitPosX()
    posY.value = getInitPosY()
    setTimeout(() => {
      isFullScreen.value = false
    }, 500)
  }
}

const main = ref()

const width = ref(props.dwidth)

const height = ref(props.dheight)

const posX = ref(getInitPosX())

const posY = ref(getInitPosY())

function getInitPosX() {
  if (props.dwidth.includes('px')) {
    return (window.innerWidth - Number(props.dwidth.split('px')[0])) * 0.5
  }
  const dw = Number(props.dwidth.split('%')[0]) / 100
  return (window.innerWidth - window.innerWidth * dw) * 0.5
}

function getInitPosY() {
  if (props.dheight.includes('px')) {
    return (window.innerHeight - Number(props.dheight.split('px')[0])) * 0.5
  }
  const dw = Number(props.dheight.split('%')[0]) / 100
  return (window.innerHeight - window.innerHeight * dw) * 0.5
}

/**
 * 记录下点击时鼠标在拖动元素内部的偏移量
 */
const offsetX = ref(0)

const offsetY = ref(0)

const isDraging = ref(false)

const isFullScreen = ref(false)

const isMini = ref(false)

/**
 * 四周吸附效果的临界值，小于这个值就吸附
 */
const maxCriticalValue = ref(10)

function onMouseDown(e: MouseEvent) {
  if (!isFullScreen.value && e.target?.className === 'dialog_top') {
    offsetX.value = e.offsetX
    offsetY.value = e.offsetY
    isDraging.value = true
  }
}

function onMouseUp() {
  isDraging.value = false
}

function onMouseMove(e: MouseEvent) {
  if (isDraging.value) {
    posX.value = e.x - offsetX.value
    posY.value = e.y - offsetY.value
    if (posX.value <= maxCriticalValue.value) {
      posX.value = 0
    }
    if (posX.value + main.value.offsetWidth >= window.innerWidth - maxCriticalValue.value) {
      posX.value = window.innerWidth - main.value.offsetWidth
    }
    if (posY.value <= maxCriticalValue.value) {
      posY.value = 0
    }
    if (posY.value + main.value.offsetHeight >= window.innerHeight - maxCriticalValue.value) {
      posY.value = window.innerHeight - main.value.offsetHeight
    }
  }
}

</script>

<style lang="scss" scoped>

::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.main{
        position: absolute;
        border-radius: 10px;
        transform-origin: 50% 80%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0 0 30px #494949;
        font-variant: normal;

        &.fullscreen{
            border-radius: 0;
            transition: 500ms;
        }

        &.mini{
          transform: scale(0);
          animation: mini 500ms ease-in-out;
        }

        @keyframes mini {
          0%{
            transform: scale(1);
            opacity: 1;
          }
          100%{
            transform: scale(0);
            opacity: 0
          }
        }
        .dialog_top{
            user-select: none;
            display: flex;
            height: 40px;
            justify-content: space-between;
            align-items: center;
            // cursor: grab;

            .left{
              display: flex;
              padding: 0 10px;
              align-items: center;
            }
            .right{
              display: flex;
              align-items: center;
                .iconfont{
                    height: 100%;
                    width: 40px;
                    line-height: 40px;
                    text-align: center;
                    color: #666;
                    font-size: 14px;
                    display: inline-block;
                    cursor: default;
                    transition: 200ms;
                    &:hover{
                      background: #eee;

                      &.close{
                        background-color: rgb(192, 4, 4);
                        color: #fff;
                      }
                    }
                }
            }

            .title{
                font-size: 17px;
                font-family:'PingFangSC-Medium';
                font-weight: bold;
            }

        }

        .dialog_body{
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }

        .dialog_footer{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            :deep(button){
                margin-left: 10px;
            }
        }
}

.opening{
    animation: dialog-in forwards 300ms ease-in-out;
}

.closing{
    animation: dialog-out forwards 200ms ease-in-out;
}

</style>
