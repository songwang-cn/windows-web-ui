<template>
  <div v-loading="loading" class="login">
    <div class="mask" :style="maskStyle">
      <div v-if="opacity < 60" class="center">
        <div class="avatar">
          <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMjU3LDM0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgb3ZlcmZsb3c9ImhpZGRlbiI+PGRlZnM+PGNsaXBQYXRoIGlkPSJ1c2VyLWNsaXAwIj48cmVjdCB4PSIzODIiIHk9IjE5NSIgd2lkdGg9IjI1NyIgaGVpZ2h0PSIzNDQiLz48L2NsaXBQYXRoPjxsaW5lYXJHcmFkaWVudCB4MT0iMzUxLjQ2MiIgeTE9IjIzMy41NiIgeDI9IjY2OS40OTYiIHkyPSI1MDAuNDIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0IiBpZD0idXNlci1maWxsMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjQTk2NEM4Ii8+PHN0b3Agb2Zmc2V0PSIwLjM1IiBzdG9wLWNvbG9yPSIjQTk2NEM4Ii8+PHN0b3Agb2Zmc2V0PSIwLjg3IiBzdG9wLWNvbG9yPSIjMkQ4QUQ1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkQ4QUQ1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjM1MS40NjIiIHkxPSIyMzMuNTYiIHgyPSI2NjkuNDk2IiB5Mj0iNTAwLjQyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCIgaWQ9InVzZXItZmlsbDIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI0E5NjRDOCIvPjxzdG9wIG9mZnNldD0iMC4zNSIgc3RvcC1jb2xvcj0iI0E5NjRDOCIvPjxzdG9wIG9mZnNldD0iMC44NyIgc3RvcC1jb2xvcj0iIzJEOEFENSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzJEOEFENSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCN1c2VyLWNsaXAwKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM4MiAtMTk1KSI+PHBhdGggZD0iTTYzNy43NTUgNDMzLjg3MkM2NDIuMjE1IDUxNS4yMjEgNTc5LjU3NyA1MzcuOTgzIDUwOC4wMTEgNTM3Ljk4MyA0MzYuNDQ0IDUzNy45ODMgMzc2LjY3NiA1MDcuODMzIDM4My41MTMgNDM3LjExIDM4My4xMDkgNDI1LjIzNCAzODkuNTkgNDE0LjEzMyAzOTguNjM0IDQwOS44OTEgNDEzLjgyIDQwMi43NjggNDQ0Ljc1MyA0MDIuOTM2IDUwNy40ODQgNDAyLjk5NyA1NzAuMjE0IDQwMy4wNTggNjA5LjE2NCA0MDIuMjc5IDYyMS41MjEgNDA3Ljk0NyA2MzMuODc4IDQxMy42MTQgNjM4LjAxMSA0MjQuNjA5IDYzNy43NTUgNDMzLjg3MloiIGZpbGw9InVybCgjdXNlci1maWxsMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik00MjIgMjg1QzQyMiAyMzUuODQ3IDQ2MS42MjMgMTk2IDUxMC41IDE5NiA1NTkuMzc3IDE5NiA1OTkgMjM1Ljg0NyA1OTkgMjg1IDU5OSAzMzQuMTUzIDU1OS4zNzcgMzc0IDUxMC41IDM3NCA0NjEuNjIzIDM3NCA0MjIgMzM0LjE1MyA0MjIgMjg1WiIgZmlsbD0idXJsKCN1c2VyLWZpbGwyKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvc3ZnPg==">
        </div>
        <div class="user">
          Administator
        </div>
        <div
          class="login-btn"
          @click="onLogin"
        >
          登录
        </div>
      </div>
      <div class="footer">
        <div class="btn">
          <i class="iconfont icon-guanji" />
          <div class="text">
            关机
          </div>
        </div>
        <div class="btn">
          <i class="iconfont icon-zhongqi" />
          <div class="text">
            重启
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { AppConfig } from '@/appConfig'

const loading = ref(false)

const opacity = ref(100)

const timer = setInterval(() => {
  if (opacity.value > 0) {
    opacity.value -= 1
  } else {
    clearInterval(timer)
  }
}, 10)

const maskStyle = computed(() => ({
  background: `rgba(0,0,0,${opacity.value / 100})`,
}))

function onLogin() {
  loading.value = true
  setTimeout(() => {
    AppConfig.router?.push('./main')
  }, 3000)
}

</script>

<style lang="scss" scoped>
.login{
  position: fixed;
  inset: 0;
  background-size: cover;
  background-image: url('../assets/img/wallPaper/1.png');
  background-position: center center;
  .mask{
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,.1);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .center{
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: dialog-in 800ms ease-in forwards;

      .avatar{
        width: 100px;
        height: 100px;
        background-color: rgba($color: #fff, $alpha: .2);
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        img{
          height: 70px;
        }
      }

      .user{
        padding: 20px 0;
        color: #fff;
        font-size: 24px;
      }
      .login-btn{
        padding: 10px 50px;
        background-color: rgba($color: #fff, $alpha: .2);
        backdrop-filter: blur(10px);
        border-radius: 5px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
        transition: 300ms;

        &:hover{
          background-color: rgba($color: #fff, $alpha: .3);
        }
      }

    }

    .footer{
      position: absolute;
      bottom: 50px;
      margin: 0 auto;
      display: flex;

      .btn{
          color: #ddd;
          cursor: pointer;
          border-radius: 10px;
          transition: 400ms;
          padding: 10px 20px;
          margin: 0 10px;
        .iconfont{
          font-size: 30px;
        }
        .text{
          font-size: 14px;
          padding-top: 5px;
        }

        &:hover{
          background-color: rgba($color: #fff, $alpha: .2);
        }
      }

    }

  }
}
</style>
