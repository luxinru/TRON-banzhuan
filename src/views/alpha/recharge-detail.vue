<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('recharge') }}</span>
    </section>

    <section class="bar">
      <div class="info">
        <p @click="active = 1">TRC20-USDT</p>
        <span class="line"></span>
        <p @click="active = 2">TRX</p>
      </div>
      <div class="bar_item">
        <div class="item" :class="{ active: active === 1 }">
          <span></span>
        </div>
        <div class="item" :class="{ active: active === 2 }">
          <span></span>
        </div>
      </div>
    </section>

    <div class="box">
      <div class="tips">
        {{ $t('investment_text') }}
      </div>

      <div class="code_box" ref="codeBox">
        <div class="qrcode" ref="qrCodeUrl"></div>
      </div>

      <!-- <span class="title" v-if="type == 1">{{ $t('trx_address') }}</span>
      <span class="title" v-if="type == 2">{{ 'TRC20-USDT Address' }}</span>
      <span class="title" v-if="type == 3">{{ 'ERC20-USDT Address' }}</span>
      <span class="title" v-if="type == 4">{{ 'BNB Address' }}</span>
      <span class="title" v-if="type == 5">{{ 'BTC Address' }}</span>
      <span class="title" v-if="type == 6">{{ 'ETH Address' }}</span>
      <span class="title" v-if="type == 7">{{ 'DOGE Address' }}</span>
      <span class="title" v-if="type == 8">{{ 'UNI Address' }}</span> -->

      <div class="url">{{ address }}</div>

      <img class="tip_img" src="@/assets/images/alpha/矩形 793.png" alt="">

      <div
        class="btn"
        :data-clipboard-text="address"
        v-if="btn_show"
        @click="copy"
      >
        {{ $t('copy_link') }}
      </div>

      <!-- <div class="btn">1 TRX ≈ {{ trx2usdt }} USDT</div> -->
    </div>

    <div class="btns" @click="$router.push('/home')">
      <!-- <div v-if="btn_show" class="confirm" @click="$router.push('/home')">
        {{ $t('recharge_completed') }}
      </div> -->
      {{ $t('recharge_completed') }}
    </div>
  </div>
</template>

<script>
import RechargeDetail from '@/constant/recharge-detail.vue'
export default {
  name: 'RechargeDetail',
  extends: RechargeDetail
}
</script>
<style lang="less" scoped>
.page_root {
  position: relative;
  padding: 48px 0 0 0;
  align-items: center;
  background-color: rgba(245, 245, 245, 1);

  .bar {
    width: 100%;
    height: 52px;
    background-color: #fff;
    display: flex;
    flex-direction: column;

    .info {
      width: 100%;
      flex: 1 0;
      display: flex;
      align-items: center;

      p {
        flex: 1 0;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
      }

      .line {
        width: 1px;
        height: 22px;
        background: rgba(0, 0, 0, 0.1);
      }
    }

    .bar_item {
      width: 100%;
      height: 3px;
      display: flex;
      .item {
        flex: 1 0;
        display: flex;
        justify-content: center;

        span {
          width: 24px;
          height: 100%;
          border-radius: 2px;
          background-color: transparent;
        }
      }

      .active {
        span {
          background-color: rgba(245, 167, 0, 1);
        }
      }
    }
  }

  .box {
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    padding: 35px 53px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    .tips {
      width: 100%;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #1d3473;
      word-break: break-word;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .title {
      width: 100%;
      font-size: 15px;
      font-weight: 500;
      color: #000000;
      text-align: center;
      margin-top: 16px;
    }

    .code_box {
      width: 100%;
      height: 243px;
      padding: 3px;
      background-color: #fff;
      margin-top: 11px;

      .code {
        width: 100%;
        height: 100%;
      }
    }

    .tip {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      margin-top: 15px;
    }

    .url {
      width: 100%;
      padding: 7px 16px;
      display: flex;
      align-items: center;
      border-radius: 4px;
      word-break: break-word;
      background-color: rgba(245, 167, 0, 0.1);
      margin-top: 12px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #F5A700;
    }

    .tip_img {
      margin-top: 14px;
      height: 10px;
    }

    .btn {
      margin-top: 16px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      text-decoration: underline;
      color: #1D3473;
    }
  }

  .btns {
    width: 329px;
    height: 47px;
    background: #F5A700;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    margin: 28px 0;
  }
}
</style>
