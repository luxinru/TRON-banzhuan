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

    <!-- <img class="logo" :src="data.thumb" /> -->

    <section class="detail">
      <div class="daily">
        <img src="@/assets/images/alpha/日期 (1).png" />
        <span
          >{{ $t('investment_cycle') }}：:{{ data.day }}{{ $t('day') }}</span
        >
      </div>
      <div class="title">
        {{ data.title }}
      </div>
      <!-- <span class="tip" v-if="data.type_name">{{ data.desc }}</span> -->

      <div class="bar">
        <div class="background">
          <div class="value" :style="`width: ${Number(data.percent)}%`"></div>
        </div>
        <span class="percentage">{{ data.percent }}%</span>
      </div>

      <div class="info">
        <div class="info_item">
          {{ $t('Expected_earnings') }}：≈{{
            (data.rate * data.day).toFixed(2) || 0
          }}%
        </div>
        <div class="info_item">
          {{ $t('minimum_investment_amount') }}：{{ data.min || 0 }}USDT
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
    </section>

    <span class="main_title">
      {{ $t('product_details') }}
    </span>

    <section class="product_info">
      <div class="item">
        <span>{{ $t('project_name') }}</span>
        <div class="item_info">
          <img src="@/assets/images/alpha/勾.png" alt="" />
          <span>{{ data.title }}</span>
        </div>
      </div>
      <div class="item">
        <span>{{ $t('project_deadline') }}</span>
        <div class="item_info">
          <img src="@/assets/images/alpha/勾.png" alt="" />
          <span>
            {{ $t('holidays_are_counted_as_usual', { value: data.day }) }}
          </span>
        </div>
      </div>
      <div class="item">
        <span>{{ $t('earnings_calculation') }}</span>
        <div class="item_info">
          <img src="@/assets/images/alpha/勾.png" alt="" />
          <span>
            <!--          {{ $t('daily_dividend') }}
          ≈{{ data.apr_money }}TRX *
          {{ $t('investment_cycle') }} {{ data.day }}{{ $t('day') }} =
          {{ $t('total_dividend') }} -->
            ≈{{ data.sun_apr_money }}USDT
          </span>
        </div>
      </div>
      <div class="item" v-if="data.type_name">
        <span>{{ $t('dividend_method') }}</span>
        <div class="item_info">
          <img src="@/assets/images/alpha/勾.png" alt="" />
          <span>{{ data.type_name }}</span>
        </div>
      </div>
      <div class="item">
        <span>{{ $t('referral_reward') }}</span>
        <div class="item_info">
          <img src="@/assets/images/alpha/勾.png" alt="" />
          <span>{{ $t('click_member_center') }}</span>
        </div>
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
  padding: 48px 13px;
  min-height: 822px;
  background: linear-gradient(151deg, #fff7df 0%, #ffffff 100%);

  .logo {
    width: 353px;
    height: 181px;
  }

  .topbar {
    background-color: transparent;
  }

  .detail {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    margin-top: 19px;
    padding: 18px 0 0 0;
    overflow: hidden;

    .daily {
      width: max-content;
      display: flex;
      align-items: center;
      background: #f9f4ee;
      border: 1px solid #ff7236;
      border-radius: 1px;
      padding: 1px 4px;
      margin: 0 18px;

      img {
        height: 11px;
        margin-right: 4px;
      }

      span {
        font-size: 9px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ff7236;
      }
    }

    .title {
      width: calc(100% - 18px * 2);
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #303030;
      margin: 13px 18px 0;
      word-break: break-word;
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
      min-height: 53px;
      background: linear-gradient(90deg, #faecd8 0%, #f5cd9d 100%);
      border-radius: 0px 0px 7px 7px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      margin-top: 13px;

      .info_item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #987345;
      }
    }

    .bar {
      margin: 13px 18px 0;
      width: calc(100% - 18px * 2);
      display: flex;
      align-items: center;

      .background {
        position: relative;
        flex: 1 0;
        height: 5px;
        background: rgba(0, 0, 0, 0.04);
        border-radius: 3px;
        overflow: hidden;
        margin-right: 23px;

        .value {
          position: absolute;
          top: 0;
          left: 0;
          height: 5px;
          background: rgba(245, 167, 0, 1);
          border-radius: 3px;
        }
      }

      .percentage {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #757d8e;
      }
    }
  }

  .main_title {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #141c30;
    margin-top: 20px;
  }

  .product_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    // padding: 20px 16px;
    margin-top: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    padding: 35px 28px;

    .item {
      width: 100%;
      min-height: 80px;
      padding: 16px 0;
      display: flex;
      flex-direction: column;

      span {
        word-break: break-word;
        width: 100%;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #3b4257;
      }

      .item_info {
        width: 100%;
        display: flex;
        align-items: flex-start;
        margin-top: 13px;

        img {
          height: 17px;
          margin-right: 14px;
          margin-top: 2px;
        }

        span {
          flex: 1 0;
          word-break: break-word;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #3b4257;
          width: 100%;
        }
      }
    }
  }

  .btn {
    width: 329px;
    height: 47px;
    background: #f5a700;
    border-radius: 24px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
