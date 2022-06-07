<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ title }}</span>
    </section>

    <!-- <section class="item" v-for="index in 21" :key="index">
      <img
        class="logo"
        src="@/assets/images/alpha/Return of investment.png"
        alt=""
      />
      <div class="title">
        <span>{{ $t('invite_friends_to_invest_cash_back') }}</span>
        <img src="@/assets/images/alpha/查看更多.png" alt="" />
      </div>
      <span class="time">2022.01.01</span>
    </section> -->

    <section class="main" v-html="content"></section>
  </div>
</template>

<script>
import Activity from '@/constant/activity.vue'
export default {
  name: 'Activity',

  extends: Activity,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;

  .main {
    width: 100%;
    // min-height: 100vh;
    height: max-content;
    // background-color: #f8f8f8;
    padding: 16px 13px;
    overflow: hidden;

    /deep/ p {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 19px;
      &:first-child {
        margin-top: 0;
      }
      margin-top: 8px;

      img {
        width: 100%;
      }

      a {
        color: rgba(94, 99, 231, 1);
      }
    }
  }

  // .item {
  //   width: 348px;
  //   background: #fff;
  //   border-radius: 7px 7px 0px 0px;
  //   display: flex;
  //   flex-direction: column;
  //   margin-top: 10px;

  //   .logo {
  //     width: 100%;
  //     height: 146px;
  //   }

  //   .title {
  //     width: 100%;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     padding: 0 20px;
  //     margin-top: 19px;

  //     span {
  //       flex: 1 0;
  //       font-size: 15px;
  //       font-family: PingFang SC;
  //       font-weight: bold;
  //       color: #323232;
  //       word-break: break-word;
  //     }

  //     img {
  //       margin-left: 16px;
  //       height: 13px;
  //     }
  //   }

  //   .time {
  //     font-size: 15px;
  //     font-family: PingFang SC;
  //     font-weight: 500;
  //     color: #999999;
  //     padding: 0 20px;
  //     margin-top: 12px;
  //     padding-bottom: 16px;
  //   }
  // }
}
</style>
