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

    <section class="header"></section>

    <section class="current">
      <span class="current_vip">当前级别</span>
      <div class="value">
        <img src="@/assets/images/alpha/等级.png" alt="" />
        <span>{{ vip }}</span>
      </div>
      <div class="money">
        <span class="label"> {{ $t('investment_amount') }}(TRX+USDT) </span>
        <span class="money_value"> {{ usdSum }}USD </span>
      </div>
    </section>

    <section class="main_title">
      {{ $t('VIP_level') }}
    </section>

    <section class="info_item" v-for="(item, index) in dataInfo" :key="index">
      <span class="name">{{ item.title }}</span>
      <div class="info">
        <div class="item">
          <span>
            <img src="@/assets/images/alpha/勾 (1).png" alt="" />
          </span>
          {{ $t('investment_amount') }} : {{ item.money }} USD (TRX + USDT)
        </div>
        <div class="item">
          <span>
            <img src="@/assets/images/alpha/勾 (1).png" alt="" />
          </span>
          {{ $t('trade_num') }} : {{ item.interest_arbitrage_num }} swap
        </div>
        <div class="item">
          <span>
            <img src="@/assets/images/alpha/勾 (1).png" alt="" />
          </span>
          {{ $t('trade_fee') }} : {{ item.cash_rate }}%
        </div>
      </div>
    </section>
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
  position: relative;
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    position: relative;
    background-color: transparent;
    z-index: 2;

    span {
      color: rgba(255, 255, 255, 1);
    }
  }

  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 249px;
    background: #282d54;
    border-radius: 0 0 10% 10%;
  }

  .current {
    position: relative;
    width: 326px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 21px 26px;
    background: url('~@/assets/images/alpha/形状 3.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 70px;

    .current_vip {
      position: absolute;
      right: 8px;
      top: 4px;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }

    .value {
      width: 100%;
      display: flex;
      align-items: center;

      img {
        height: 15px;
        margin-right: 8px;
      }

      span {
        font-size: 20px;
        font-family: DIN Alternate;
        font-weight: bold;
        color: #35517a;
      }
    }

    .money {
      width: 100%;
      display: flex;
      flex-direction: column;

      .label {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #5a79a3;
      }

      .money_value {
        font-size: 27px;
        font-family: DIN Alternate;
        font-weight: bold;
        color: #35517a;
      }
    }
  }

  .main_title {
    width: 326px;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #141c30;
    margin: 25px 0;
  }

  .info_item {
    position: relative;
    width: 326px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 21px 16px;
    margin-top: 14px;

    &:first-child {
      margin-top: 0;
    }

    .name {
      position: absolute;
      top: 0;
      right: 0;
      width: 65px;
      height: 25px;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .info {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .item {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #35517a;
        margin-top: 11px;

        span {
          width: 13px;
          height: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: RGBA(53, 81, 122, 1);
          margin-right: 9px;

          img {
            height: 6px;
          }
        }
      }
    }

    &:nth-child(3n + 1) {
      background: url('~@/assets/images/alpha/形状 3 (2).png') no-repeat;
      background-size: 100% 100%;

      .info {
        .item {
          color: rgba(95, 107, 178, 1);

          span {
            background-color: rgba(95, 107, 178, 1);
          }
        }
      }
    }

    &:nth-child(3n + 2) {
      background: url('~@/assets/images/alpha/形状 3.png') no-repeat;
      background-size: 100% 100%;
    }

    &:nth-child(3n + 3) {
      background: url('~@/assets/images/alpha/形状 3 (1).png') no-repeat;
      background-size: 100% 100%;

      .info {
        .item {
          color: rgba(172, 118, 46, 1);

          span {
            background-color: rgba(172, 118, 46, 1);
          }
        }
      }
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
