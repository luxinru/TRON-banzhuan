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
        <span>{{ $t('my_investment') }}</span>
      </div>

      <div class="btns">
        <div class="item">
          <span>{{ data.money }}</span>
          <span>{{ $t('investment_amount') }}(USDT)</span>
          <span>{{ $t('investment_time') }}: {{ data.addtime_date }}</span>
        </div>
        <div class="item">
          <span>{{ data.apr_money }}</span>
          <span>{{ $t('Expected_earnings') }}(USDT)</span>
          <span>{{ $t('Expire_date') }}: {{ data.end_time_date }}</span>
        </div>
      </div>
    </section>

<!--    <section class="list">
      <div class="item" v-for="item in data.apr_plan" :key="item.id">
        <div class="title">
          <span class="value">{{ item.title }}</span>
          <span class="status">{{ item.time2 !== "0000-00-00 00:00:00" ? $t('finish') : $t('undone') }}</span>
        </div>

        <div class="info">
          <span>{{ $t('investment_amount') }}: {{ item.money2 }}TRX</span>
          <span>{{ $t('Expected_earnings') }}: {{ item.money1 }}TRX</span>
        </div>

        <div class="time">
          <span>{{ $t('Receivable_time') }}: {{ item.time1 }}</span>
          <div v-if="item.time2 !== '0000-00-00 00:00:00'">{{ $t('completed') }}</div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import MyInvestment from '@/constant/my-investment.vue'
export default {
  name: 'MyInvestment',

  extends: MyInvestment,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 60px 0;
  min-height: 100vh;

  .header {
    width: 100%;
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

    .btns {
      margin: 0 auto;
      width: calc(100% - 10px * 2);
      flex: 1 0;
      display: flex;
      align-items: center;

      .item {
        flex: 1 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          margin-top: 15px;
          width: 100%;
          text-align: center;
          word-break: break-word;
          &:nth-child(1) {
            font-size: 20px;
            font-family: Arial;
            font-weight: bold;
            color: #FFFFFF;
            margin-top: 0;
          }
          &:nth-child(2) {
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
          }
          &:nth-child(3) {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -16px;

    .item {
      width: 348px;
      background: #FFFFFF;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      margin-top: 15px;
      padding: 4px 20px 20px;

      &:first-child {
        margin-top: 0;
      }

      .title {
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(233, 234, 236, 1);

        .value {
          flex: 1 0;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #323232;
          margin-right: 16px;
        }

        .status {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ED2B2A;
        }
      }

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 2px;

        span {
          margin-top: 11px;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #2D2D2D;
          word-break: break-word;
        }
      }

      .time {
        margin-top: 3px;
        width: 100%;
        display: flex;
        align-items: flex-end;

        span {
          flex: 1 0;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #6F6D70;
        }
        div {
          padding: 0 16px;
          height: 26px;
          background: rgba(243, 134, 24, 0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #FF661B;
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
