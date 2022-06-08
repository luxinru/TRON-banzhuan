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
      <div
        class="item"
        v-for="(item, index) in data"
        :key="index"
        @click="
          $router.push({ path: '/my-investment', query: { id: item.id } })
        "
      >
        <div class="title">
          <span class="value">{{ item.title }}</span>
          <van-icon
            class="icon"
            name="arrow"
            color="rgba(71, 71, 71, 1)"
            size="12"
          />
        </div>

        <!-- <div class="info">
          <span>{{ $t('investment_amount') }}: {{ item.money }}TRX</span>
          <div>{{ $t('contract') }}</div>
        </div> -->

        <div class="time">
          {{ $t('investment_amount') }}(TRX): <span>{{ item.money }}</span>
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
      background: #ffffff;
      box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      margin-top: 12px;
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
          color: #141c30;
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
        margin-top: 18px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
        background: #f4f8fe;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #151c31;
        word-break: break-word;

        span {
          color: rgba(245, 167, 0, 1);
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
