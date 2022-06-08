<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="rgba(0, 0, 0, 1)"
        @click="$router.go(-1)"
      />
      <span>{{ $t('notifcation') }}</span>
    </section>

    <div class="box">
      <div class="title">
        <span class="value">{{ title }}</span>
        <span class="time">{{ add_time }}</span>
      </div>
      <div class="text" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import NoticeContent from '@/constant/notice-content.vue'
export default {
  name: 'NoticeContent',

  extends: NoticeContent,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 48px 13px;
  min-height: 100vh;

  .topbar {
    background-color: rgba(247, 246, 249, 1);

    span {
      color: rgba(0, 0, 0, 1);
    }
  }

  .box {
    width: 100%;
    min-height: 345px;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-top: 16px;

    .title {
      width: 100%;
      height: 71px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(225, 227, 234, 1);

      .value {
        flex: 1 0;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #38394B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .time {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #BEC1CB;
        margin-left: 16px;
      }
    }

    .text {
      width: 100%;
      height: max-content;
      padding: 16px 0;
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
  }
}
</style>
