<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="rgba(255, 255, 255, 1)"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Invest_now') }}</span>
    </section>

    <section class="header">
      <span class="label">{{ $t('account_balance') }}(USDT)</span>
      <span class="value">{{ money || 0 }}</span>
    </section>

    <section class="box">
      <div class="item">
        <div class="item_title">
          <span></span>
          <p>{{ $t('project_name') }}</p>
        </div>
        <span class="value">{{ data.title }}</span>
      </div>
      <div class="item">
        <div class="item_title">
          <span></span>
          <p>{{ $t('daily_rate') }}</p>
        </div>
        <span class="value"> +{{ (data.rate * data.day).toFixed(2) }}%</span>
      </div>
      <div class="item">
        <div class="item_title">
          <span></span>
          <p>{{ $t('minimum_investment') }}</p>
        </div>
        <span class="value">{{ data.min }}USDT</span>
      </div>
      <div class="item">
        <div class="item_title">
          <span></span>
          <p>{{ $t('maximum_investment') }}</p>
        </div>
        <span class="value">{{ data.max }}USDT</span>
      </div>

      <div class="item">
        <div class="item_title">
          <span></span>
          <p>{{ $t('investment_amount') }}</p>
        </div>
        <input v-model="real_money" class="value" type="number" />
      </div>
      <div class="item">
        <div class="item_title">
          <span></span>
          <p>{{ $t('payment_password') }}</p>
        </div>
        <input v-model="pwd" class="value" type="password" />
      </div>
      <span class="total">{{ $t('total_revenue') }}: ≈ {{ shouru }}USDT</span>
    </section>

    <section class="confirm" @click="handleSubmit">
      {{ $t('confirm_investment') }}
    </section>
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
  padding: 48px 17px;
  min-height: 100vh;
  background-color: rgba(245, 167, 0, 1);

  .topbar {
    background-color: transparent;
    span {
      color: rgba(255, 255, 255, 1);
    }
  }

  .header {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    padding: 22px 19px;

    .value {
      width: 100%;
      min-height: 65px;
      background: #f9f9f9;
      border-radius: 7px;
      font-size: 32px;
      font-family: DIN Alternate;
      font-weight: bold;
      color: #505050;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 19px;
    }

    .label {
      width: 100%;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #4b4b4b;
    }
  }

  .box {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
    border-radius: 7px;
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    padding: 24px 20px;

    .item {
      width: 100%;
      min-height: 58px;
      display: flex;
      flex-direction: column;
      margin-top: 20px;

      .item_title {
        width: 100%;
        display: flex;
        align-items: center;

        span {
          width: 6px;
          height: 6px;
          background: #17c67d;
          border-radius: 50%;
          margin-right: 13px;
        }

        p {
          flex: 1 0;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #3b4257;
        }
      }

      .value {
        width: 100%;
        padding: 10px 15px;
        background: #f9f9f9;
        border-radius: 7px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #838383;
        display: flex;
        align-items: center;
        margin-top: 13px;
        outline: none;
        border: none;
      }
    }

    .total {
      width: 100%;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #f5a700;
      margin-top: 13px;
    }
  }

  .confirm {
    width: 329px;
    height: 47px;
    background: #ff7236;
    border-radius: 24px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin: 18px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
