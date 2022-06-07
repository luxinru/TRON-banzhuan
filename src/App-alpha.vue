<template>
  <div id="app" class="alpha">
    <router-view />

    <section class="footer" v-if="!route.meta.hideFooter" style="display: none">
      <div
        v-if="footer_type === 'n2'"
        class="item"
        :class="{ active: route.name === 'Home' }"
        @click="onChangActive(1)"
      >
        <img
          v-if="route.name === 'Home'"
          src="@/assets/images/alpha/yy-home 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/alpha/yy-home 拷贝 2.png" alt="" />
        <span>{{ $t('home') }}</span>
      </div>

      <div
        class="item"
        :class="{ active: route.name === 'MainActivity' }"
        @click="onChangActive(5)"
      >
        <img
          v-if="route.name === 'MainActivity'"
          src="@/assets/images/alpha/奖杯 拷贝 2.png"
          alt=""
        />
        <img v-else src="@/assets/images/alpha/奖杯 拷贝.png" alt="" />
        <span>{{ $t('task') }}</span>
      </div>

      <div
        v-if="footer_type === 'n2'"
        class="item"
        :class="{ active: route.name === 'Invest' }"
        @click="onChangActive(2)"
      >
        <img
          v-if="route.name === 'Invest'"
          src="@/assets/images/alpha/投资理财 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/alpha/投资理财 拷贝 2.png" alt="" />
        <span>{{ $t('invest') }}</span>
      </div>

      <div
        class="item"
        :class="{ active: route.name === 'Share' }"
        @click="onChangActive(3)"
      >
        <img
          v-if="route.name === 'Share'"
          src="@/assets/images/alpha/icon_分享 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/alpha/icon_分享 拷贝 2.png" alt="" />
        <span>{{ $t('share') }}</span>
      </div>

      <div
        class="item"
        :class="{ active: route.name === 'Mine' }"
        @click="onChangActive(4)"
      >
        <img
          v-if="route.name === 'Mine'"
          src="@/assets/images/alpha/我的小 拷贝.png"
          alt=""
        />
        <img v-else src="@/assets/images/alpha/我的小 拷贝 2.png" alt="" />
        <span>{{ $t('mine') }}</span>
      </div>
    </section>

    <!-- <Kefu></Kefu> -->
  </div>
</template>

<script>
import App from './App.vue'
import Kefu from '@/utils/kefu.vue'

export default {
  extends: App,

  components: {
    Kefu,
  },
}
</script>

<style lang="less">
.alpha {
  .page_root {
    padding: 48px 34px;

    .topbar {
      position: fixed;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 1);

      span {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
      }

      .icon {
        position: absolute;
        left: 16px;
      }
    }
  }

  .van-icon {
    font-size: 20px;
  }
}
</style>

<style lang="less" scoped>
#app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 249, 249, 1);

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    z-index: 3;

    .item {
      flex: 1 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        height: 20px;
      }

      span {
        font-size: 10px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #474747;
        margin-top: 6px;
        text-align: center;
        word-break: break-word;
      }
    }

    .active {
      span {
        color: #033692;
      }
    }
  }
}
</style>
