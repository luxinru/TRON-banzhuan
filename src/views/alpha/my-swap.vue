<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>My Swap</span>
    </section>

    <section class="list">
      <div class="item" v-for="(item, index) in swapData" :key="index">
        <div class="main_title">
          {{ item.left_market_pair }}
        </div>
        <div class="item_info">
          <div class="title">
            <img :src="getImgUrl(item.left_exchange_id)" alt="" />
            <span>
              {{ item.left_exchange_name }}
            </span>
          </div>
          <div class="value">{{ item.left_price }}</div>
        </div>

        <div class="jiantou">
          <img src="@/assets/images/alpha/箭头 (2).png" alt="" />
        </div>

        <div class="item_info">
          <div class="title">
            <img :src="getImgUrl(item.right_exchange_id)" alt="" />
            <span>
              {{ item.right_exchange_name }}
            </span>
          </div>
          <div class="value">{{ item.right_price }}</div>
        </div>

        <div class="box">
          <div class="time">
            <span>{{ item.money }} {{ item.type == 1 ? 'TRX' : 'USDT' }}</span>
            <span>* {{ (item.profit_ratio * 100).toFixed(2) }}%</span>
            <!-- <div>{{ $t('contract') }}</div> -->
          </div>
          <div class="time">
            <span
              >{{ item.profit_money }}
              {{ item.type == 1 ? 'TRX' : 'USDT' }}</span
            >
            <div v-if="item.status == 1">{{ $t('completed') }}</div>
            <div
              v-if="item.status == 0"
              style="padding: 1px; background: 0; margin-left: 0"
            >
              <span
                id="wrapper"
                style="
                  padding: 1px;
                  background: 0;
                  margin-left: 0;
                  display: block;
                "
              >
                <span
                  id="progressbar"
                  style="padding: 1px; margin-left: 0; display: block"
                >
                  <span id="fill" style="margin-left: 0; display: block"></span>
                </span>
              </span>
              <span>{{ progress }}</span>
            </div>
            <div v-if="item.status == 2" style="background-color: orangered">
              {{ $t('undone') }}
            </div>
          </div>
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
  padding: 48px 0 0 0;
  min-height: 100vh;

  .topbar {
    border-bottom: 1px solid rgba(222, 222, 222, 1);
    span {
      color: #000;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: -127px;
    z-index: 1;
    background-color: #fff;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      padding: 0 20px;
      border-bottom: 10px solid rgba(0, 0, 0, 0.04);

      .main_title {
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #f5a700;
      }

      .item_info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 23px;

        .title {
          background: #f3f3f3;
          border-radius: 20px;
          padding: 10px 16px;
          display: flex;
          align-items: center;

          img {
            height: 17px;
            margin-right: 16px;
          }
          span {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #000000;
          }
        }

        .value {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #000000;
          margin-top: 26px;
        }

        .unit {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #5a5c65;
          margin-top: 16px;
        }
      }

      .jiantou {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid rgba(222, 222, 222, 1);
        margin-top: 14px;

        img {
          height: 17px;
        }
      }

      .box {
        width: 100%;
        background: rgba(245, 167, 0, 0.1);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        margin: 19px 0;
        padding: 24px;

        .time {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #3B3A40;

          &:last-child {
            margin-top: 18px;
          }

          span {
            flex: 1 0;
            word-break: break-word;

            &:last-child {
              text-align: right;
            }
          }
          div {
            padding: 0 16px;
            height: 26px;
            background: rgba(167, 184, 215, 0.2);
            border-radius: 4px;
            display: flex;
            align-items: center;
            margin-left: 16px;
          }
        }
      }
    }
  }
}
#wrapper {
  // width: 200px;
  // height: 100px;
  // border: 1px solid #000000;
  // margin: 0 auto;
  margin-right: 16px;
}

#progressbar {
  // width: 180px;
  width: 100px;
  height: 6px;
  margin: 0 auto;
  // margin-top: 40px;
  // border: 1px solid #000000;
  background: aliceblue;
}

/* 设置进度条动画 */
#fill {
  // animation: move 2s;
  text-align: center;
  width: 100px;
  height: 5px;
  border-radius: 5px;
  background-color: rgba(245, 167, 0, 1);
  color: #ffffff;
}
.container {
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  width: 100%;
  max-width: 1400px;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
}
</style>
