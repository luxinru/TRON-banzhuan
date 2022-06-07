<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Wallet_management') }}</span>
    </section>

    <section class="new_msg">
      {{ $t('x_bound_wallet', { value: 1 }) }}
    </section>

    <section class="list">
      <div
        class="item"
        v-for="index in 30"
        :key="index"
      >
        <img src="@/assets/images/alpha/钱包 (1).png" alt="" />
        <div class="info">
          <span>TRON</span>
          <span>false</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WalletManagement from '@/constant/wallet-management.vue'
export default {
  name: 'WalletManagement',

  extends: WalletManagement,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    background-color: rgba(4, 66, 164, 1);

    span {
      color: #fff;
    }
  }

  .new_msg {
    width: 100%;
    height: 57px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);

    span {
      // color: #ed2b2a;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      width: 348px;
      min-height: 88px;
      background: #ffffff;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
      display: flex;
      align-items: center;
      padding: 21px 16px;
      margin-top: 16px;

      img {
        height: 29px;
        margin: 0 20px 0 10px;
      }

      .info {
        flex: 1 0;
        display: flex;
        flex-direction: column;

        span {
          word-break: break-word;
          &:first-child {
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #323232;
          }

          &:last-child {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #6F6D70;
            margin-top: 14px;
          }
        }

      }
    }
  }
}
</style>
