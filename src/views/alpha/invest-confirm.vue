<template>
  <div class="page_root">
    <section class="header">
      <div class="topbar">
        <van-icon
          class="icon"
          name="arrow-left"
          color="#fff"
          @click="$router.go(-1)"
        />
        <span>{{ $t('Invest_now') }}</span>
      </div>

      <span class="value">{{ money || 0 }}</span>
      <span class="label">{{ $t('account_balance') }}(USDT)</span>
    </section>

    <section class="box">
      <div class="item">
        <span>{{ $t('project_name') }}</span>
        <span>{{ data.title }}</span>
      </div>
      <div class="item">
        <!-- <span>{{ $t('daily_rate') }}</span> -->
        <span> +{{ (data.rate*data.day).toFixed(2) }}%</span>
      </div>
      <div class="item">
        <span>{{ $t('minimum_investment') }}</span>
        <span>{{ data.min }}USDT</span>
      </div>
      <div class="item">
        <span>{{ $t('maximum_investment') }}</span>
        <span>{{ data.max }}USDT</span>
      </div>

      <div class="info">
        <span class="title">{{ $t('investment_amount') }}</span>
        <input v-model="real_money" type="number">
        <span class="title">{{ $t('payment_password') }}</span>
        <input v-model="pwd" type="password">
        <span class="total">{{ $t('total_revenue') }}: ≈ {{ shouru }}USDT</span>
      </div>
    </section>

    <section class="confirm" @click="handleSubmit">{{ $t('confirm_investment') }}</section>
  </div>
</template>

<script>
import InvestConfirm from '@/constant/invest-confirm.vue'
export default {
  name: 'InvestConfirm',

  extends: InvestConfirm,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 60px 0;
  min-height: 100vh;

  .header {
    width: 375px;
    min-height: 191px;
    background: linear-gradient(180deg, #043895 0%, #055ace 100%);
    display: flex;
    flex-direction: column;

    .topbar {
      background-color: transparent;
      span {
        color: rgba(255, 255, 255, 1);
      }
    }

    .value {
      width: 100%;
      padding: 0 13px;
      text-align: center;
      font-size: 33px;
      font-family: Arial;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 32px;
      word-break: break-word;
      margin-top: 35px;
    }

    .label {
      width: 100%;
      padding: 0 13px;
      text-align: center;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 15px;
    }
  }

  .box {
    width: 348px;
    background: #FFFFFF;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    margin-top: -24px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .item {
      width: 100%;
      min-height: 58px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(233, 234, 236, 1);

      &:last-child {
        border: none;
      }

      span {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #414141;

        &:last-child {
          flex: 1 0;
          margin-left: 16px;
          word-break: break-word;
          text-align: right;
          padding: 8px 0;
        }
      }
    }

    .info {
      width: 100%;
      padding: 0 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 22px 0;

      .title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #414141;
      }

      input {
        width: 190px;
        height: 43px;
        background: #F9F9FC;
        border-radius: 7px;
        outline: none;
        border: none;
        margin: 22px 0;
        text-align: center;
      }

      .total {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #EF4315;
      }
    }
  }

  .confirm {
    width: 348px;
    height: 47px;
    background: rgba(4, 61, 158, 1);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin: 18px 0;
  }
}
</style>
