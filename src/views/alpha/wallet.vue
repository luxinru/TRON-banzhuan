<template>
  <div class="page_root">
    <div class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="rgba(0, 0, 0, 1)"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Transaction_details') }}</span>
    </div>

    <section class="info_item" v-for="(item, index) in list" :key="index">
      <div class="info">
        <span>{{ item.reason }}</span>
        <span>{{ item.time }}</span>
      </div>
      <div class="value">
        <span
          :style="
            item.type === 2
              ? 'color: rgba(255, 0, 0, 1)'
              : 'color: rgba(16, 174, 0, 1)'
          "
        >
          {{ item.type === 1 ? '+' : '-' }}
        </span>
        {{ item.money }}
      </div>
    </section>

    <van-popup v-model="isShowSelect" round position="bottom">
      <van-picker
        show-toolbar
        :default-index="5"
        :columns="classArr"
        @cancel="isShowSelect = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import Wallet from '@/constant/wallet.vue'
export default {
  name: 'Wallet',

  extends: Wallet,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 48px 21px;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);

  .topbar {
    background-color: rgba(255, 255, 255, 1);
    span {
      color: rgba(0, 0, 0, 1);
    }

    .select {
      position: absolute;
      right: 16px;
      display: flex;
      align-items: center;

      span {
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-weight: 400;
        margin-right: 4px;
      }
    }
  }

  .balance {
    position: relative;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    margin-top: -136px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .info {
      width: 100%;
      padding: 0 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 34px;
      padding-bottom: 60px;

      span {
        &:first-child {
          width: 100%;
          text-align: center;
          font-size: 30px;
          font-family: Arial;
          font-weight: bold;
          color: #ed5217;
          word-break: break-word;
        }

        &:last-child {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #3b3b3b;
          margin-top: 18px;
        }
      }
    }

    .btns {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 41px;
      background: #fafafa;
      border-radius: 7px;
      display: flex;
      .item {
        flex: 1 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 16px;
          margin-right: 13px;
        }

        span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #636363;
        }
      }
    }
  }

  .info_item {
    width: 100%;
    min-height: 80px;
    background: rgba(246, 248, 250, 1);
    border-radius: 7px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    padding: 20px;

    .info {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        word-break: break-word;

        &:first-child {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #3b4257;
        }

        &:last-child {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #a1a9be;
          margin-top: 16px;
        }
      }
    }

    .value {
      flex: 1 0;
      margin-left: 16px;
      word-break: break-word;
      font-size: 17px;
      font-family: DIN Alternate;
      font-weight: bold;
      color: #3b4257;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
