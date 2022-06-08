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

    <!-- <section class="new_msg">
      {{ $t('x_new_message', { value: isMsg }) }}
    </section> -->

    <section class="list">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="
          $router.push({ path: '/notice-content', query: { id: item.id } })
        "
      >
        <div class="header">
          <img src="@/assets/images/alpha/消息.png" alt="" />
          <span>系统消息</span>
          <div class="view_all">
            {{ $t('view_all') }}
            <van-icon
              class="icon"
              name="arrow"
              color="rgba(189, 191, 203, 1)"
            />
          </div>
        </div>
        <div class="title">
          <span class="value">{{ item.title }}</span>
          <span class="time">{{ item.time | dateFormat }}</span>
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
  padding: 48px 13px;
  min-height: 100vh;

  .topbar {
    background-color: rgba(247, 246, 249, 1);

    span {
      color: rgba(0, 0, 0, 1);
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
      width: 100%;
      min-height: 138px;
      background: #FFFFFF;
      box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      padding: 16px;
      margin-top: 16px;

      .header {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(225, 227, 234, 1);

        img {
          height: 23px;
          margin-right: 16px;
        }

        span {
          flex: 1 0;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #3B4257;
        }

        .view_all {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #BDBFCB;

          i {
            font-size: 12px;
            margin-left: 16px;
          }
        }
      }

      .title {
        width: 100%;
        flex: 1 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 16px;

        .value {
          flex: 1 0;
          word-break: break-word;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #38394B;
        }

        .time {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #BEC1CB;
          margin-top: 13px;
        }
      }
    }
  }
}
</style>
