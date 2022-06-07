<template>
  <div class="page_root">
    <section class="header">
      <img
        class="logo"
        src="@/assets/images/alpha/bee472e499d22fc6b9e5c9db8bd4cba72e15675e1c4f4-n8dTiC_fw1200.png"
        alt=""
      />
      <span class="value">+{{ rate }}%</span>
      <span class="tip">{{ $t('cloud_mining_is_working') }}...</span>

      <div class="btns">
        <span @click="$router.push({ path: 'transfer', query: { type: 1 } })">
          {{ $t('Go_to_investment_account') }}
        </span>
        <span @click="$router.push({ path: 'transfer', query: { type: 2 } })">
          {{ $t('transfer_to_basicaccount') }}
        </span>
      </div>
    </section>

    <section class="balance">
      <span class="value">
        {{ money }}
      </span>
      <span class="label">
        {{ $t('basic_account_balance') }}(TRX)
      </span>
    </section>

    <section class="content">
      <div class="title">
        <div class="left">
          <span>{{ $t('trading_profit') }}</span>
          <span>24 {{ $t('hour_settlement') }}</span>
        </div>
        <!-- <div class="right">{{ $t('More') }}</div> -->
      </div>
      <div class="item" v-for="item in data.list" :key="item.id">
        <div class="info">
          <span>{{ item.reason || '-' }}</span>
          <span>{{ item.money }}TRX</span>
        </div>
        <div
          class="btn"
          v-if="item.type == 2 && Number(item.money) > 0"
          @click="receive(item.id)"
        >
          {{ $t('receive') }}
        </div>
        <div v-else class="btn active">{{ $t('receive') }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import Invest from '@/constant/invest.vue'
export default {
  name: 'Invest',

  extends: Invest,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 60px 0;
  min-height: 100vh;

  .header {
    position: relative;
    width: 100%;
    min-height: 286px;
    background: linear-gradient(0deg, #055acf 0%, #043793 100%);
    padding: 0 21px 20px;
    display: flex;
    flex-direction: column;

    .logo {
      position: absolute;
      right: 2px;
      bottom: 52px;
      width: 200px;
      height: 131px;
      z-index: 0;
    }

    .value {
      font-size: 33px;
      font-family: Arial;
      font-weight: bold;
      color: #ffffff;
      margin-top: 62px;
    }

    .tip {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      margin-top: 15px;
    }

    .btns {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      z-index: 1;

      span {
        width: max-content;
        margin-top: 10px;
        padding: 10px 28px;
        background: #ffffff;
        border-radius: 16px;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #054cb7;
        word-break: break-word;
      }
    }
  }

  .balance {
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 24px;
    margin: -24px 0 0 0;
    z-index: 1;

    span {
      text-align: center;
      width: 100%;
      word-break: break-word;
    }

    .value {
      font-size: 33px;
      font-family: Arial;
      font-weight: bold;
      color: #0442A4;
      margin-top: 5px;
    }

    .label {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #313030;
      margin-top: 24px;
    }
  }

  .content {
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 23px;
    margin: 12px 0 24px 0;
    z-index: 1;

    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 21px;

      .left {
        display: flex;
        flex-direction: column;

        span {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #050505;

          &:last-child {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #99999b;
            margin-top: 15px;
          }
        }
      }

      .right {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #b5b5b5;
      }
    }

    .item {
      width: 100%;
      min-height: 72px;
      border-top: 1px solid rgba(238, 238, 238, 1);
      padding-bottom: 18px;
      display: flex;
      align-items: flex-end;
      overflow: hidden;

      .info {
        flex: 1 0;
        height: 100%;
        margin-right: 10px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        span {
          width: 100%;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #444254;
          margin-top: 15px;
          word-break: break-word;

          &:last-child {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #0452c1;
            margin-top: 13px;
          }
        }
      }

      .btn {
        height: 26px;
        background: rgba(3, 54, 146, 1);
        border-radius: 3px;
        padding: 0 22px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .active {
        color: rgba(255, 255, 255, 1);
        background-color: rgba(3, 54, 146, 0.3);
      }
    }
  }
}
</style>
