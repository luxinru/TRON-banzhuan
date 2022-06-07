<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('notifcation') }}</span>
    </section>

    <div class="box">
      <div class="title">
        <span class="value">{{ title }}</span>
        <!-- <span class="time">2022-02-11 14:56:43</span> -->
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
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    background-color: rgba(4, 66, 164, 1);

    span {
      color: #fff;
    }
  }

  .box {
    width: 348px;
    min-height: 88px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 35px 16px;
    margin-top: 16px;

    .title {
      width: 100%;
      display: flex;
      align-items: center;

      .value {
        flex: 1 0;
        word-break: break-word;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #323232;
      }

      .time {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #6f6d70;
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
