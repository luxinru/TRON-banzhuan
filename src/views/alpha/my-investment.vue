<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('my_investment') }}</span>
    </section>

    <section class="list">
      <div class="item" v-for="item in data.apr_plan" :key="item.id">
        <div class="title">
          <span class="value">{{ item.title }}</span>
          <span class="status">{{
            item.time2 !== '0000-00-00 00:00:00' ? $t('finish') : $t('undone')
          }}</span>
        </div>

        <div class="info">
          <div class="info_item">
            <span class="tick"></span>
            <span class="label">
              {{ $t('investment_amount') }}:
            </span>
            <span class="value">
              {{ item.money2 }}TRX
            </span>
          </div>

          <div class="info_item">
            <span class="tick"></span>
            <span class="label">
              {{ $t('Expected_earnings') }}:
            </span>
            <span class="value">
              {{ item.money1 }}TRX
            </span>
          </div>

          <div class="info_item">
            <span class="tick"></span>
            <span class="label">
              {{ $t('Receivable_time') }}:
            </span>
            <span class="value">
              {{ item.time1 }}
            </span>
          </div>

          <div class="info_item"  v-if="item.time2 !== '0000-00-00 00:00:00'">
            <span class="tick"></span>
            <span class="label">
              {{ $t('Expire_date') }}
            </span>
            <span class="value">
              {{ item.time2 }}
            </span>
          </div>
        </div>
      </div>
    </section>
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
  padding: 48px 13px;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);

  .topbar {
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(222, 222, 222, 1);
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

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      padding: 16px;

      .title {
        width: 100%;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .value {
          flex: 1 0;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #141C30;
          margin-right: 16px;
        }

        .status {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ed2b2a;
        }
      }

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        background: #F4F8FE;
        padding: 20px 16px;

        .info_item {
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: 16px;

          &:first-child {
            margin-top: 0;
          }

          .tick {
            width: 4px;
            height: 4px;
            background: #F5A700;
            border-radius: 50%;
          }

          .label {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #151C31;
            margin-left: 10px;
          }

          .value {
            flex: 1 0;
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #151C31;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
