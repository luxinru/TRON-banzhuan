<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('project_details') }}</span>
    </section>

    <img class="logo" :src="data.thumb" />

    <section class="detail">
      <div class="title">
        <span>{{ data.title }}</span>
        <div>{{ $t('investment_cycle') }}：:{{ data.day }}{{ $t('day') }}</div>
      </div>
      <span class="tip" v-if="data.type_name">{{ data.desc }}</span>

      <div class="info">
        <div class="info_item">
          <span style="color: rgba(255, 59, 67, 1)">≈ {{ (data.rate * data.day).toFixed(2) || 0 }}%</span>
          <span></span>
        </div>
       <div class="info_item">
          <span>{{ data.min || 0 }}USDT</span>
          <span>{{ $t('minimum_investment_amount') }}</span>
        </div>
 <!--       <div class="info_item">
          <span>{{ data.apr_money || 0 }}TRX</span>
          <span>{{ $t('daily_dividend') }}</span>
        </div> -->
<!--        <div class="info_item">
          <span>{{ data.sun_apr_money || 0 }}TRX</span>
          <span>{{ $t('total_dividend') }}</span>
        </div> -->
      </div>

      <div class="bar">
        <div class="background">
          <div class="value" :style="`width: ${Number(data.percent)}%`"></div>
        </div>
        <span class="percentage">{{ data.percent }}%</span>
      </div>
    </section>

    <section class="product_info">
      <span class="title">
        {{ $t('product_details') }}
      </span>
      <div class="item">
        <span>{{ $t('project_name') }}</span>
        <span>{{ data.title }}</span>
      </div>
      <div class="item">
        <span>{{ $t('project_deadline') }}</span>
        <span>{{
          $t('holidays_are_counted_as_usual', { value: data.day })
        }}</span>
      </div>
      <div class="item">
        <span>{{ $t('earnings_calculation') }}</span>
        <span>
<!--          {{ $t('daily_dividend') }}
          ≈{{ data.apr_money }}TRX *
          {{ $t('investment_cycle') }} {{ data.day }}{{ $t('day') }} =
          {{ $t('total_dividend') }} -->
          ≈{{ data.sun_apr_money }}USDT
        </span>
      </div>
      <div class="item" v-if="data.type_name">
        <span>{{ $t('dividend_method') }}</span>
        <span>{{ data.type_name }}</span>
      </div>
      <div class="item">
        <span>{{ $t('referral_reward') }}</span>
        <span>{{ $t('click_member_center') }}</span>
      </div>
    </section>

    <section
      class="btn"
      @click="$router.push({ path: '/invest-confirm', query: { id: data.id } })"
    >
      {{ $t('mts') }}
    </section>
  </div>
</template>

<script>
import InvestDetail from '@/constant/invest-detail.vue'
export default {
  name: 'InvestDetail',

  extends: InvestDetail,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;
  background-color: #fff;

  .logo {
    width: 353px;
    height: 181px;
  }

  .detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 19px;
    padding: 0 13px;
    overflow: hidden;
    border-bottom: 14px solid rgba(249, 249, 249, 1);

    .title {
      width: 100%;
      min-height: 29px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 29px;
      overflow: hidden;

      span {
        flex: 1 0;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #444254;
        margin-right: 16px;
        word-break: break-word;
      }

      div {
        width: max-content;
        height: 29px;
        background: linear-gradient(0deg, #f68431 0%, #fdcb4a 100%);
        border-radius: 7px;
        padding: 0 15px;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        align-items: center;
      }
    }

    .tip {
      margin-top: 13px;
      padding: 4px 15px;
      background: rgba(238, 82, 47, 0.3);
      border-radius: 13px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ee522f;
      display: flex;
      justify-content: center;
      word-break: break-word;
      box-sizing: border-box;
    }

    .info {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-column-gap: 10px;
      padding: 0 13px;

      .info_item {
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        span {
          font-size: 17px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          word-break: break-word;

          &:last-child {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #a0a0a0;
            margin-top: 8px;
          }
        }
      }
    }

    .bar {
      margin: 24px 0;
      padding: 0 13px;
      width: 100%;
      display: flex;
      align-items: center;

      .background {
        position: relative;
        flex: 1 0;
        height: 8px;
        background: rgba(27, 37, 55, 0.2);
        border-radius: 4px;
        overflow: hidden;
        margin-right: 16px;

        .value {
          position: absolute;
          top: 0;
          left: 0;
          height: 8px;
          background: #033692;
          border-radius: 4px;
        }
      }

      .percentage {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #033692;
      }
    }
  }

  .product_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 16px;

    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #050505;
      margin-top: 9px;
    }

    .item {
      width: 100%;
      min-height: 80px;
      padding: 16px 0;
      border-bottom: 1px solid rgba(222, 222, 222, 0.5);
      display: flex;
      flex-direction: column;

      span {
        word-break: break-word;
        &:first-child {
          width: 100%;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #333333;
        }

        &:last-child {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666666;
          line-height: 15px;
          margin-top: 13px;
          width: 100%;
        }
      }
    }
  }

  .btn {
    width: calc(100% - 16px * 2);
    height: 42px;
    background: #033692;
    border-radius: 4px;
    margin: 18px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
