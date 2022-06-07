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
    </section>

    <section class="list">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="title">
          <span class="value">{{ item.title }}</span>
          <van-icon
            class="icon"
            name="arrow"
            color="#000"
            @click="
              $router.push({ path: '/my-investment', query: { id: item.id } })
            "
          />
        </div>

        <!-- <div class="info">
          <span>{{ $t('investment_amount') }}: {{ item.money }}TRX</span>
          <div>{{ $t('contract') }}</div>
        </div> -->

        <div class="time">
          <span>{{ $t('investment_amount') }}: {{ item.money }}TRX</span>
          <!-- <div>{{ $t('contract') }}</div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MyInvests from '@/constant/my-invests.vue'
export default {
  name: 'MyInvests',

  extends: MyInvests,

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
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -127px;

    .item {
      width: 348px;
      background: #ffffff;
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
          color: #ed2b2a;
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
          color: #2d2d2d;
          word-break: break-word;
        }
      }

      .time {
        margin-top: 8px;
        width: 100%;
        display: flex;
        align-items: flex-end;

        span {
          flex: 1 0;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #2d2d2d;
          word-break: break-word;
        }
        div {
          padding: 0 16px;
          height: 26px;
          background: rgba(4, 58, 152, 1);
          border-radius: 4px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
