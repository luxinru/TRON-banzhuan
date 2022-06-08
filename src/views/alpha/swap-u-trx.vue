<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#060606"
        @click="$router.go(-1)"
      />
      <span>TRX/USDT Swap</span>

      <span class="right" @click="$router.push('/my-invests')">
        {{ $t('my_investment') }}
      </span>
    </section>

    <section class="btns">
      <div class="item">
        <img src="@/assets/images/alpha/825.png" />

        <div class="info">
          <div class="title">
            <span> USDT </span>
            <img
              src="@/assets/images/alpha/309下一页、前进、查看更多-线性圆框 拷贝.png"
              alt=""
              @click="getRecord"
            />
          </div>

          <div class="labels">
            <span>{{ usdt }} USDT</span>
            <span>{{ usdt }} USD </span>
          </div>

          <div class="btn" @click="U2Trx()">Buy TRX</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="item">
        <img src="@/assets/images/alpha/1958.png" />

        <div class="info">
          <div class="title">
            <span> TRX </span>
            <img
              src="@/assets/images/alpha/309下一页、前进、查看更多-线性圆框 拷贝.png"
              alt=""
              @click="getRecord"
            />
          </div>

          <div class="labels">
            <span>{{ trx }} TRX</span>
            <span>{{ price_in_usd * trx }} USD </span>
          </div>

          <div class="btn" @click="Trx2U()">Sell TRX</div>
        </div>
      </div>
    </section>

    <div class="list">
      <div
        class="item"
        v-for="(item, index) in data.list"
        :key="index"
        @click="toRoute('/invest-detail', { id: item.id })"
      >
        <div class="title">
          <span>{{ item.title }}</span>
          <img src="@/assets/images/alpha/方向 - 下 拷贝 10.png" alt="" />
        </div>
        <div class="box">
          <span>
            {{ $t('minimum_investment_amount') }}:
            <p>{{ item.min || 0 }} USDT</p>
          </span>
          <span>
            {{ $t('investment_cycle') }}:
            <p>
              {{ item.day }}{{ $t('day') }} ≈ +{{
                (item.rate * item.day).toFixed(2) || 0
              }}%
            </p>
          </span>
        </div>
      </div>
    </div>
    <van-dialog
      class="dialog"
      v-model="isShowModel"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <section class="topbar">
        <van-icon
          class="icon"
          name="arrow-left"
          color="#060606"
          @click="isShowModel = false"
        />
        <span>TRX/USDT Swap</span>
      </section>
      <div class="item" v-for="(item, index) in record" :key="index">
        <div class="label">
          <span>USDT: </span>
          <span>
            {{ item.type == 1 ? item.money || 0 : item.money1 || 0}}
          </span>
        </div>
        <div class="label">
          <span>TRX: </span>
          <span :style="{color: '#000'}">
            {{ item.type == 2 ? item.money1 || 0 : item.money || 0 }}
          </span>
        </div>
      </div>
    </van-dialog>
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
  padding: 48px 13px;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);

  .topbar {
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(222, 222, 222, 1);
    span {
      color: rgba(0, 0, 0, 1);
    }

    .right {
      position: absolute;
      right: 16px;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #f5a700;
    }
  }

  .btns {
    width: 100%;
    height: max-content;
    background: #f3f3f3;
    border-radius: 7px;
    padding: 14px 12px 20px;
    display: flex;
    align-items: flex-start;
    margin-top: 16px;

    .item {
      flex: 1 0;
      height: 100%;
      display: flex;

      img {
        height: 23px;
        margin-right: 14px;
      }

      .info {
        flex: 1 0;
        display: flex;
        flex-direction: column;

        .title {
          width: 100%;
          display: flex;
          align-items: center;

          span {
            flex: 1 0;
          }

          img {
            height: 16px;
            margin-right: 0;
          }
        }

        .labels {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-top: 15px;

          span {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #808080;
            word-break: break-word;

            &:last-child {
              margin-top: 12px;
            }
          }
        }

        .btn {
          width: 82px;
          height: 27px;
          background: #f5a700;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          margin-top: 14px;
        }
      }
    }

    .line {
      width: 1px;
      height: 67px;
      background: rgba(128, 128, 128, 0.3);
      margin: 0 14px;
    }
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 13px;

    .item {
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
      border-radius: 7px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      padding: 16px;
      margin-top: 12px;

      .title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          flex: 1 0;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #141c30;
          word-break: break-word;
        }

        img {
          height: 13px;
          margin-left: 16px;
        }
      }

      .box {
        width: 100%;
        min-height: 46px;
        background: #f4f8fe;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        margin-top: 18px;
        overflow: hidden;
        padding: 10px 16px;

        span {
          width: 100%;
          display: flex;
          align-items: flex-start;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #151c31;
          white-space: nowrap;
          overflow: hidden;

          p {
            flex: 1 0;
            color: rgba(245, 167, 0, 1);
            margin-left: 5px;
            word-break: break-word;
            text-align: left;
            white-space: normal;
          }
        }
      }
    }
  }
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  transform: none;
  border-radius: 0;
  padding: 48px 13px;

  .van-dialog__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .item {
    width: 100%;
    min-height: 79px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(222, 222, 222, 1);

    .label {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      span {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #575757;

        &:last-child {
          font-size: 19px;
          font-family: PingFang SC;
          font-weight: 600;
          color: #f65348;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
