<template>
  <div class="page_root">
    <van-icon
      class="icon"
      name="arrow-left"
      color="#000"
      @click="$router.go(-1)"
    />

    <div class="box">
      <div class="code_box" ref="codeBox">
        <div class="qrcode" ref="qrCodeUrl"></div>
      </div>

      <span class="title" v-if=" type == 1">{{
         $t('trx_address')
      }}</span>
      <span class="title" v-if=" type == 2">{{
         'TRC20-USDT Address'
      }}</span>
      <span class="title" v-if=" type == 3">{{
         'ERC20-USDT Address'
      }}</span>
      <span class="title" v-if=" type == 4">{{
         'BNB Address'
      }}</span>
      <span class="title" v-if=" type == 5">{{
         'BTC Address'
      }}</span>
      <span class="title" v-if=" type == 6">{{
         'ETH Address'
      }}</span>
      <span class="title" v-if=" type == 7">{{
         'DOGE Address'
      }}</span>
      <span class="title" v-if=" type == 8">{{
         'UNI Address'
      }}</span>
      <span class="tip2"> </span>

      <div class="url">{{ address }}</div>

      <div
        class="btn"
        :data-clipboard-text="address"
        v-if="btn_show"
        @click="copy"
      >
        {{ $t('copy_link') }}
      </div>

      <div class="btn">1 TRX ≈ {{ trx2usdt }} USDT</div>
    </div>

    <div class="btns">
      <div class="tips">
        {{ $t('investment_text') }}
      </div>

      <!-- <div v-if="btn_show" class="confirm" @click="$router.push('/home')">
        {{ $t('recharge_completed') }}
      </div> -->
      <div class="confirm" @click="$router.push('/home')">
        {{ $t('recharge_completed') }}
      </div>
    </div>
  </div>
</template>

<script>
import RechargeDetail from '@/constant/recharge-detail.vue'
export default {
  name: 'RechargeDetail',
  extends: RechargeDetail,
}
</script>
<style lang="less" scoped>
.page_root {
  position: relative;
  padding: 0;
  align-items: center;
  background-color: rgba(191, 211, 239, 1);

  .icon {
    position: absolute;
    left: 13px;
    top: 11px;
  }

  .box {
    width: 348px;
    background: #ffffff;
    border-radius: 7px 7px 0 0;
    padding: 45px 0 23px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 66px;

    .title {
      width: 100%;
      font-size: 15px;
      font-weight: 500;
      color: #000000;
      text-align: center;
      margin-top: 16px;
    }

    .code_box {
      width: 170px;
      height: 170px;
      padding: 3px;
      background-color: #fff;

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
      padding: 7px 16px;
      display: flex;
      align-items: center;
      width: 320px;
      border-radius: 4px;
      word-break: break-word;
      background-color: rgba(236, 241, 255, 1);
      margin-top: 26px;
      font-size: 13px;
      font-weight: 400;
      color: rgba(57, 96, 213, 1);
    }

    .btn {
      height: 31px;
      background: #ff850e;
      border-radius: 4px;
      margin-top: 20px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
  }

  .btns {
    width: 348px;
    height: 92px;
    background: #363d54;
    display: flex;
    border-radius: 0px 0px 7px 7px;
    .tips {
      flex: 6;
      height: 100%;
      font-size: 13px;
      font-weight: 400;
      color: #ffffff;
      word-break: break-word;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 24px;
    }

    .confirm {
      text-align: center;
      flex: 4;
      height: 100%;
      background: rgba(57, 96, 213, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-weight: 500;
      color: #ffffff;
    }
  }
}
</style>
