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

    <section class="new_msg">
      {{ $t('x_new_message', { value: isMsg }) }}
    </section>

    <section class="list">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="
          $router.push({ path: '/notice-content', query: { id: item.id } })
        "
      >
        <div class="title">
          <span class="value">{{ $t('dear_user') }}</span>
          <span class="time">{{ item.time | dateFormat }}</span>
        </div>
        <div class="text">
          {{ item.title }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Notice from '@/constant/notice.vue'
export default {
  name: 'Notice',

  extends: Notice,

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

  .new_msg {
    width: 100%;
    height: 57px;
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);

    span {
      color: #ed2b2a;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      width: 348px;
      min-height: 88px;
      background: #ffffff;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      padding: 16px;
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
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #6f6d70;
        line-height: 17px;
        word-break: break-word;
        margin-top: 13px;
      }
    }
  }
}
</style>
