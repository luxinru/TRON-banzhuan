<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span style="color: white">My Swap</span>
    </section>

    <section class="list">
      <div class="item" v-for="(item, index) in swapData" :key="index">
        <div class="title">
          <span class="value">{{ item.left_market_pair }}</span>

          <!--          <van-icon
            class="icon"
            name="arrow"
            color="#000"
            size="12"
            @click="
              $router.push({ path: '/my-investment', query: { id: item.id } })
            "
          /> -->
        </div>
        <div class="title">
          <span class="value"
            ><img
              style="width: 25px"
              :src="getImgUrl(item.left_exchange_id)"
              alt=""
            />{{ item.left_exchange_name }}</span
          >
          <img
            style="width: 25px"
            src="@/assets/images/alpha/refresh.png"
            alt=""
          />
          <span class="value"
            >{{ item.right_exchange_name
            }}<img
              style="width: 25px"
              :src="getImgUrl(item.right_exchange_id)"
              alt=""
          /></span>
        </div>
        <div class="title">
          <span class="value">{{ item.left_price }}</span>
          <img
            style="width: 25px"
            src="@/assets/images/alpha/arrow-right.png"
            alt=""
          />
          <span class="value">{{ item.right_price }}</span>
        </div>
        <!-- <div class="info">
          <span>{{ $t('investment_amount') }}: {{ item.money }}TRX</span>
          <div>{{ $t('contract') }}</div>
        </div> -->

        <div class="time">
          <span>{{ item.money }} {{ item.type == 1 ? 'TRX' : 'USDT' }}</span>
          <span>* {{ (item.profit_ratio * 100).toFixed(2) }}%</span>
          <!-- <div>{{ $t('contract') }}</div> -->
        </div>
        <div class="time">
          <span
            >{{ item.profit_money }} {{ item.type == 1 ? 'TRX' : 'USDT' }}</span
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

  .topbar {
    width: 100%;
    min-height: 264px;
    height: max-content;
    // background: url('~@/assets/images/bochang2/波场 2 (2).png') no-repeat;
    background-size: 100% 100%;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;

    span {
      margin-top: 22px;
    }

    .icon {
      position: fixed;
      margin-top: 24px;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -127px;
    z-index: 1;

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
        // border-bottom: 1px solid rgba(233, 234, 236, 1);

        .value {
          text-align: center;
          flex: 1 0;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(5, 52, 100, 1);
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
          font-weight: 500;
          color: #4e7091;
          line-height: 22px;
          word-break: break-word;
        }
        div {
          padding: 0 16px;
          height: 26px;
          background: rgba(167, 184, 215, 0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(34, 78, 155, 1);
          margin-left: 16px;
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
  background-color: rgb(56, 97, 251);
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
