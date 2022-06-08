<template>
  <div class="page_root">
    <section class="topbar" style="top: 0; position: fixed">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#060606"
        @click="$router.go(-1)"
      />
      <span>TRX/USDT Swap</span>
    </section>
    <div class="sc-16r8icm-0 tu1guj-1" @click="$router.push('/my-invests')">
      <img style="width: 50px" src="@/assets/images/alpha/notes2.png" alt="" />
    </div>
    <div class="list">
      <div class="item" v-for="(item, index) in data.list" :key="index">
        <div class="title" @click="toRoute('/invest-detail', { id: item.id })">
          {{ item.title }}
        </div>
        <!--        <div class="info">
          <span>{{ $t('daily_rate') }}</span>
          <span>≈ {{ item.rate || 0 }}%</span>
        </div> -->
        <div class="info">
          <span>{{ $t('minimum_investment_amount') }}</span>
          <span>{{ item.min || 0 }} USDT</span>
        </div>
        <!--        <div class="info">
          <span>{{ $t('daily_dividend') }}</span>
          <span>{{ item.apr_money || 0 }}TRX</span>
        </div>
        <div class="info">
          <span>{{ $t('total_dividend') }}</span>
          <span>{{ item.sun_apr_money || 0 }}TRX</span>
        </div> -->
        <div class="info">
          <span>{{ $t('investment_cycle') }}</span>
          <span
            >{{ item.day }}{{ $t('day') }} ≈ +{{
              (item.rate * item.day).toFixed(2) || 0
            }}%</span
          >
        </div>
        <!--        <div class="info">
          <span>{{ $t('Repayment') }}</span>
          <span>{{ item.type_name }}</span>
        </div> -->

        <div class="btn" @click="toRoute('/invest-detail', { id: item.id })">
          {{ $t('mts') }}
        </div>
      </div>
    </div>
    <van-dialog
      class="dialog"
      v-model="isShowModel"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <div class="content">
        <!-- <span class="title">Swap</span> -->
        <div
          class="currency_slider_item item"
          v-for="(item, index) in record"
          :key="index"
        >
          <div class="currency_slider_item_top">
            <span
              style="font-size: 14px; font-weight: 700"
              v-if="item.type == 1"
              >USDT: <span style="color: firebrick">{{ item.money }}</span> /
              TRX :{{ item.money1 }}
            </span>
            <span
              style="font-size: 14px; font-weight: 700"
              v-if="item.type == 2"
              >USDT: <span style="color: firebrick">{{ item.money1 }}</span> /
              TRX :{{ item.money }}
            </span>
          </div>
        </div>
      </div>
    </van-dialog>

    <div display="block,inline-block" class="sc-16r8icm-0 dbuYiO">
      <div
        style="position: fixed; padding: 15px; font-weight: 700; top: 100px"
      ></div>
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="title">
          <span class="value">{{ item.title }}</span>
        </div>
      </div>
      <section class="funs-trade">
        <div class="currency_slider_item item">
          <div class="currency_slider_item_top">
            <!-- :src="getImgUrl(item.exchangeId)" -->
            <img src="@/assets/images/alpha/825.png" alt="" />
            <span style="font-size: 14px; font-weight: 700">USDT</span>
            <span class="color-00004 fs-12 fw-500"
              ><img
                style=" margin-left:20px; 25px;"
                @click="getRecord"
                src="@/assets/images/alpha/document.png"
                alt=""
            /></span>
          </div>
          <div class="currency_slider_item_bottom">
            <div class="fs-22 fw-250">
              <span
                balances_ps="100"
                style="
                  font-family: PingFang SC;
                  font-weight: 400;
                  color: #8f8f8f;
                  text-decoration: none;
                  font-weight: 500;
                "
                >{{ usdt }}USDT
              </span>
              <!-- <span class="color-00004 fs-12 fw-500">ASDASD</span> -->
            </div>
            <span class="color-00004 fs-12 fw-500">USD {{ usdt }}</span>
          </div>
        </div>

        <div class="currency_slider_item item">
          <div class="currency_slider_item_top">
            <!-- :src="getImgUrl(item.exchangeId)" -->
            <img src="@/assets/images/alpha/1958.png" alt="" />
            <span style="font-size: 14px; font-weight: 700">TRX</span>
            <span class="color-00004 fs-12 fw-500"
              ><img
                @click="getRecord"
                style=" margin-left:20px; 25px;"
                src="@/assets/images/alpha/document.png"
                alt=""
            /></span>
          </div>
          <div class="currency_slider_item_bottom">
            <div class="fs-22 fw-250">
              <span
                balances_ps="100"
                style="
                  font-family: PingFang SC;
                  font-weight: 400;
                  color: #8f8f8f;
                  text-decoration: none;
                  font-weight: 500;
                "
                >{{ trx }}TRX
              </span>
              <span class="color-00004 fs-12 fw-500"
                >USD {{ price_in_usd * trx }}</span
              >
            </div>
          </div>
        </div>
      </section>
      <button
        class="x0o17e-0 lgnbfA piv2lb-0 khvEXx newsletter-btn"
        style="width: 49%"
        @click="U2Trx()"
      >
        Buy TRX
      </button>
      <button
        class="x0o17e-0 lgnbfA piv2lb-0 khvEXx newsletter-btn"
        style="width: 49%; float: right"
        @click="Trx2U()"
      >
        Sell TRX
      </button>

      <!--      <button class="x0o17e-0 lgnbfA piv2lb-0 khvEXx newsletter-btn" style="margin-top: 5px;background: firebrick;"
        @click="getVIP">{{ $t('mts')}}</button> -->
      <!-- <button class="x0o17e-0 lgnbfA piv2lb-0 khvEXx newsletter-btn" style="margin-top: 5px;background: firebrick;"  @click="">{{ $t('financial_records')}}</button> -->
    </div>
  </div>
</template>

<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'MyInvests',

  components: {},

  data () {
    return {
      data: {},
      swapData: null,
      totalBalance: '0.000000',
      price_in_usd: 0.0,
      usdt: 0.0,
      trx: 0.0,
      isShowModel: false,
      record: null
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    getRecord () {
      this.isShowModel = true
      Fetch('/user/get_wallet_list').then((res) => {
        this.record = res.data
      })
    },
    getVIP () {
      this.$notify({
        background: '#aa0000',
        message: this.$t('customer_service')
      })
    },
    U2Trx () {
      Fetch('/user/usdt_to_trx').then((res) => {
        // this.ad = res.data.ad
        // this.swapData = res.data
        // console.log(res)
        this.$notify({
          background: '#07c160',
          message: res.info
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
        window.location.reload()
      })
    },
    Trx2U () {
      Fetch('/user/trx_to_usdt').then((res) => {
        // this.ad = res.data.ad
        // this.swapData = res.data
        // console.log(res)
        this.$notify({
          background: '#07c160',
          message: res.info
        })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
        window.location.reload()
      })
    },
    getImgUrl (id) {
      try {
        return require('@/assets/images/alpha/' + id + '.png')
      } catch (e) {
        return require('@/assets/images/alpha/1.png')
      }
    },
    toRoute (path, options) {
      this.$router.push({
        path,
        query: options
      })
    },
    async init () {
      Fetch('/index/item').then((res) => {
        this.data = res.data
      })

      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }

      fetch('https://apilist.tronscan.org/api/token/price?token=trx', options)
        .then((response) => response.json())
        .then((response) => {
          this.price_in_usd = response.price_in_usd
        })
        .catch((err) => err)
      Fetch('/user/info').then((res) => {
        this.dataInfo = res.data // res赋值
        this.totalBalance = (
          Number(this.dataInfo.money) +
          Number(this.dataInfo.gift) +
          Number(this.dataInfo.promotion)
        ).toFixed(6)
        this.usdt = this.dataInfo.money
        this.trx = this.dataInfo.promotion
      })
      document.getElementById('app').style.minHeight = '50px'
    }
  }
}
</script>
<style lang="less" scoped>
.page_root {
  // position: fixed;
  // top: 0;
  margin-bottom: 250px;
  .header {
    width: 100%;
    // height: 181px;
    // background: #033692;

    .title {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 27px 0 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      .img {
        width: 150px;
        height: 40px;
      }

      .imgs {
        display: flex;
        align-items: center;

        .popover {
          height: 18px;
          line-height: 0;

          img {
            height: 100%;
          }
        }

        img {
          height: 18px;
          // width: 25px;
          fill-opacity: 1;

          &:first-child {
            margin-right: 20px;
          }
        }
      }
    }
  }

  .money {
    width: calc(100% - 27px * 2);
    background: linear-gradient(-67deg, #feffff 0%, #ef522f 0%, #eb913b 100%);
    box-shadow: 0px 6px 13px 0px rgba(239, 79, 47, 0.38);
    border-radius: 7px;
    margin-top: -120px;
    padding: 13px 22px;
    display: flex;
    flex-direction: column;

    .title {
      width: 100%;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
      margin-top: 12px;
    }

    .value {
      width: 100%;
      font-size: 34px;
      font-family: Arial;
      font-weight: 400;
      color: #ffffff;
      word-break: break-word;
      margin-top: 23px;
    }

    .notice_bar {
      margin-top: 43px;
      width: 100%;
      height: 35px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 7px;

      /deep/.van-notice-bar__content {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }

      img {
        height: 13px;
        margin-right: 9px;
      }
    }
  }

  .funs-funtion {
    width: 100%;
    padding: 0 13px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .funs-trade {
    background: white;
    width: 100%;
    // padding: 0 13px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
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

      img {
        height: 100%px;
      }

      span {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #8f8f8f;
        margin-top: 11px;
      }
    }
  }

  .sign_in {
    width: 358px;
    height: 111px;
    background: url('~@/assets/images/alpha/组 10.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 19px;
  }

  .recommend {
    width: 100%;
    // background: #f9f9f9;
    border-radius: 13px 13px 0px 0px;
    padding: 10px 13px;
    // margin-top: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      width: 100%;
      padding: 0 3px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #b5b5b5;

      span {
        &:first-child {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #050505;
        }
      }
    }

    .sub_title {
      width: 100%;
      padding: 0 3px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #99999b;
      margin-top: 15px;
    }

    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #ffffff;
        border-radius: 7px;
        overflow: hidden;
        margin-top: 19px;
        padding-bottom: 19px;
        overflow: hidden;

        img {
          width: 100%;
          height: 157px;
        }

        .title {
          width: 100%;
          min-height: 29px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #444254;
          margin-top: 14px;
          padding: 0 12px;

          span {
            &:first-child {
              flex: 1 0;
              word-break: break-word;
            }

            &:last-child {
              height: 29px;
              padding: 0 15px;
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(0deg, #f68431 0%, #fdcb4a 100%);
              border-radius: 7px;
              margin-left: 10px;
            }
          }
        }

        .tips {
          padding: 4px 15px;
          background: rgba(238, 82, 47, 0.3);
          border-radius: 13px;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ee522f;
          display: flex;
          justify-content: center;
          margin: 6px 0 0 12px;
          word-break: break-word;
          box-sizing: border-box;
        }

        .info {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 10px;
          padding: 0 13px;

          .info_item {
            display: flex;
            flex-direction: column;
            margin-top: 16px;

            span {
              font-size: 17px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #000000;
              word-break: break-word;

              &:last-child {
                font-size: 13px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #a0a0a0;
                margin-top: 4px;
              }
            }
          }
        }

        .btn {
          padding: 0 73px;
          width: max-content;
          height: 37px;
          background: #033692;
          border-radius: 7px;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 21px auto 0;
        }
      }
    }
  }
}

// *****
.currency_slider_item {
  // position: relative;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 8px;
  // min-width: 165px;
  margin: 5px;
  margin-top: 3px;
}

.currency_slider_item_top {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  text-align: center;
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

.color-00003 {
  color: rgba(0, 0, 0, 0.3);
}

.fw-500 {
  font-weight: 500;
  // font-size: 50px;
  color: rgb(88, 102, 126);
  // margin-right: 16px;
  white-space: nowrap;
}

.fs-12 {
  font-size: 12px;
  // font-size: 11px;
  color: rgb(88, 102, 126);
  // margin-right: 16px;
  white-space: nowrap;
}

.swipe {
  width: 348px;
  height: 100px;
  border-radius: 7px;
  overflow: hidden;

  /deep/ img {
    // width: 100%;
    // height: 100%;
  }
}

.buttom {
  -webkit-box-align: center;
  align-items: center;
  background: rgb(56, 97, 251);
  border: 0px;
  border-radius: 8px;
  display: inline-flex;
  color: white;
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  font-weight: 600;
  width: auto;
  height: 25px;
  font-size: 12px;
  padding: 16px;
  line-height: 18px;
  margin: 3px 0;
}

.models {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 348px;
  background: #ffffff;
  border-radius: 7px;
  // margin-top: 16px;
  padding: 10px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  // margin-bottom: 40px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(239, 242, 245);
    border: 0px;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    font-weight: 600;
    font-size: 12px;
    padding: 5px 16px;
    line-height: 18px;

    img {
      height: 36px;
    }

    span {
      text-align: center;
      // margin-top: 10px;
      font-size: 12px;
      font-weight: 500;
      color: #3b3b3b;
    }
  }
}

.container {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

.cmc-global-stats__fade {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255) 100%
  );
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 50px;
  z-index: 1;
}

.cmc-global-stats__content {
  padding: 9px 16px;
  position: relative;
  white-space: nowrap;
  overflow: auto hidden;
}

*,
::before,
::after {
  box-sizing: border-box;
  border-spacing: 0px;
}

.cVPJov {
  font-size: 11px;
  color: rgb(88, 102, 126);
  margin-right: 16px;
  white-space: nowrap;
}

.kebcXZ {
  box-sizing: border-box;
  margin: 16px 0px 0px;
  width: 100%;
}

.ivGjzC {
  position: relative;
}

.ivGjzC.cards div[class^='carousel-arrow'] {
  width: 24px;
}

.ivGjzC div.carousel-arrow-prev {
  top: 0px;
  left: 0px;
  background-image: linear-gradient(
    to right,
    var(--color-light-neutral-1) 0%,
    transparent 100%
  );
}

.ivGjzC .carousel-items-wrapper {
  overflow: scroll;
  white-space: nowrap;
  width: 100%;
}

.ivGjzC.cards .carousel-item {
  background-color: var(--bg-color);
  padding: 13px 16px;
  border-radius: 8px;
}

.gqEJJS {
  position: absolute;
  top: 0px;
  right: 0px;
}

.gqEJJS2 {
  box-sizing: border-box;
  margin: 0px;
}

.ekMmID {
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}

.FTuib {
  line-height: 1.5;
  margin: 0px 8px 0px 0px;
  color: rgb(88, 102, 126);
  font-weight: 500;
  font-size: 12px;
}

.cSTqvK {
  box-sizing: border-box;
  margin: 0px;
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(239, 242, 245);
  border-radius: 8px;
  outline: 0px;
  font-weight: 600;
  cursor: pointer;
  color: rgb(0, 0, 0);
  padding: 5px 8px;
  font-size: 12px;
  line-height: 22px;
}

.dWGZqy {
  box-sizing: border-box;
  margin: 0px;
  height: 14px;
  width: 14px;
}

.dbuYiO {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  display: block;
  position: fixed;
  bottom: 0;
}

.lgnbfA {
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
  line-height: 24px;
}
.list {
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    width: 329px;
    background: #ffffff;
    box-shadow: 0px 7px 13px 0px rgba(34, 78, 155, 0.16);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 26px;

    &:last-child {
      margin-bottom: 24px;
    }

    img {
      width: 100%;
      height: 141px;
    }

    .title {
      width: 100%;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #053464;
      padding: 0 15px;
      margin: 18px 0 6px 0;
      word-break: break-word;
    }

    .info {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;
      margin-top: 15px;
      padding: 0 15px;
      span {
        width: 100%;
        word-break: break-word;
        font-size: 13px;
        font-weight: 400;
        color: #1e2d49;
      }
    }

    .btn {
      width: 299px;
      height: 39px;
      background: #204d9b;
      border-radius: 4px;
      margin: 17px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
.tu1guj-1 {
  bottom: 25%;
  position: fixed;
  /* width: 100%; */
  /* float: right; */
  right: 20px;
}
</style>
