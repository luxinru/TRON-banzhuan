<template>
  <div class="page_root">
    <div class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>VIP</span>
    </div>
    <section class="funs" style="overflow: hidden">
      <van-swipe class="swipe" indicator-color="black">
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/financial-profit.png" alt="" />
              <div class="fs-12 fw-500">
                {{ vip }}<span balances_ps_usd="100"></span>
              </div>
              <!-- <img style="width: 15px;" @click="$router.go(0)" src="@/assets/images/alpha/refresh.png" alt="" /> -->
            </div>
            <div class="currency_slider_item_bottom" style="color: black">
              <div class="fs-12 fw-500">
                {{ $t('investment_amount') }}<span balances_ps_usd="100"></span>
              </div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">( TRX + USDT ) </span>
                <!-- <span class="color-00004 fs-12 fw-500"> USD</span> -->
              </div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">{{ usdSum }} </span>
                <span class="color-00004 fs-12 fw-500"> USD</span>
              </div>
              <!-- <div class="fs-12 fw-500">USD <span balances_ps_usd="100">{{usdt}}</span></div> -->
            </div>
            <div class="currency_slider_item_bottom" style="color: black">
              <!-- <div class="fs-12 fw-500">TRX <span balances_ps_usd="100"></span></div> -->

              <!--             <div class="fs-22 fw-250">
                <span balances_ps="100">{{trxProfit}} </span>
                <span class="color-00004 fs-12 fw-500"> TRX</span>
              </div> -->
              <!-- <div class="fs-12 fw-500">USD <span balances_ps_usd="100">{{(price_in_usd * trx).toFixed(6)}}</span></div> -->
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </section>

    <section class="info_item" v-for="(item, index) in dataInfo" :key="index">
      <div class="info">
        <span
          style="
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
          "
          >{{ item.title }}</span
        >

        <span
          style="
            background: linear-gradient(
              92.43deg,
              #f5b67d 0.81%,
              #ec4553 99.58%
            );
            text-align: center;
            border-radius: 20px;
            color: white;
            padding: 6px;
            font-weight: 700;
          "
        >
          {{ $t('investment_amount') }} : {{ item.money }} USD (TRX +
          USDT)</span
        >
        <span>
          {{ $t('trade_num') }} : {{ item.interest_arbitrage_num }} swap</span
        >
        <span> {{ $t('trade_fee') }} : {{ item.cash_rate }}%</span>
        <!-- <span> {{$t('project_deadline')}} : 2032-01-01</span> -->
        <!--        <span v-if="item.status == 1" :style="item.status == 0 ? 'color:#E85420' : 'color:#6AAF99'">
          {{$t('trading')}} :
          {{ item.status == 1 ? '' : '' }} {{ item.money }} TRX
        </span> -->
      </div>

      <!--      <div class="buy" v-if="item.status == 1" @click="goBuy(item.id)">
        {{$t('upgrade')}}
      </div> -->
    </section>
    <!-- <div class="rocket"></div> -->
  </div>
</template>

<script>
import Fetch from '@/utils/fetch'
export default {
  name: 'Wallet',

  components: {},

  data () {
    return {
      totalBalance: '0.000000',
      usdt: '0.000000',
      trx: 0.0,
      dataInfo: {},
      trxProfit: 0.0,
      trxSum: 0.0,
      usdtProfit: 0.0,
      usdtSum: 0.0,
      usdSum: 0.0,
      vip: 'VIP-1'
    }
  },

  computed: {
    footerType () {
      return localStorage.getItem('footer')
    }
  },

  mounted () {
    this.start()
  },
  methods: {
    goBuy (id) {
      Fetch('/index/interest_arbitrage_shop_apply', {
        id: id
      }).then((res) => {
        this.$notify({
          background: '#07c160',
          message: 'ok'
        })
        this.$router.push('/home')
      })
    },
    start () {
      Fetch('/index/interest_arbitrage_shop_list', {}).then((res) => {
        console.log(res)
        this.dataInfo = res.data
      })
      Fetch('/user/info').then((res) => {
        this.vip = res.data.interest_arbitrage_member.title
        this.usdSum = res.data.value
      })
    }
  }

  // index/interest_arbitrage_shop_list
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    background-color: rgba(4, 61, 158, 1);

    span {
      color: rgba(255, 255, 255, 1);
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

  .balance {
    position: relative;
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    margin-top: -136px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .info {
      width: 100%;
      padding: 0 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 34px;
      padding-bottom: 60px;

      span {
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-family: Arial;
        font-weight: bold;
        color: #ed5217;
        word-break: break-word;
      }
    }

    .btns {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 41px;
      background: #fafafa;
      border-radius: 7px;
      display: flex;

      .item {
        flex: 1 0;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 16px;
          margin-right: 13px;
        }

        span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #636363;
        }
      }
    }
  }

  .info_item {
    width: 348px;
    min-height: 77px;
    background: url('@/assets/images/alpha/left-crl.png') 10px 1px / 35px
      no-repeat rgb(255, 255, 255);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    margin-top: 15px;
    display: grid;
    align-items: center;
    padding: 20px;

    .info {
      flex: 1 0;
      display: flex;
      flex-direction: column;

      span {
        width: 100%;
        word-break: break-word;

        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #6f6d70;
        margin-top: 14px;
      }
    }

    .value {
      flex: 1 0;
      margin-left: 16px;
      word-break: break-word;
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ee322a;
      text-align: right;
    }
  }
}

.buy {
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(56, 97, 251);
  border: 0px;
  border-radius: 8px;
  display: inline-flex;
  color: rgb(255, 255, 255);
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  font-weight: 600;
  // width: auto;
  height: 48px;
  font-size: 14px;
  padding: 0px 24px;
  line-height: 48px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 15px;
  display: block;
  text-align: center;
  // position: fixed;
  // bottom: 0;
}

.rocket {
  position: absolute;
  bottom: -10px;
  right: 17px;
  width: 113px;
  height: 101px;
  background-image: url(https://s2.coinmarketcap.com/static/cloud/img/events/event-2022-conference.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.funs {
  width: 100%;
  padding: 0 13px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  // grid-row-gap: 27px;
  // margin-top: 29px;

  .item {
    // background: linear-gradient(-67deg, #feffff 0%, #ef522f 0%, #eb913b 100%);
    // box-shadow: 0px 6px 13px 0px rgba(239, 79, 47, 0.38);
    display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    justify-content: space-around;
    // background: url('@/assets/images/alpha/left-crl.png') 10px 1px / 35px no-repeat, url('@/assets/images/alpha/event-2022-bg-2.png') right top / 38px no-repeat rgb(20, 22, 34);

    img {
      height: 100%px;
    }

    span {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 700;
      color: #000000;
      margin-top: 11px;
    }
  }
}

.swipe {
  width: 348px;
  // height: 100px;
  border-radius: 7px;
  overflow: hidden;

  /deep/ img {
    // width: 100%;
    // height: 100%;
  }
}

// *****
.currency_slider_item {
  box-shadow: rgb(88 102 126 / 8%) 0px 1.06667vw 6.4vw,
    rgb(88 102 126 / 12%) 0px 1px 0.53333vw;

  // position: relative;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 8px;
  background: white;
  // min-width: 165px;
  margin: 5px;
  margin-top: 3px;
}

.currency_slider_item_top {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none !important;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}

.currency_slider_item_top img {
  display: block;
  width: 25px;
  margin-right: 6px;
}

.currency_slider_item_bottom {
  margin-left: 10px;
  display: grid;
}

.currency_slider_item_buttom {
  line-height: 100%;
  text-align: center;
  display: grid;
}
</style>
