<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('withdrawal') }}</span>
    </section>

    <section class="bar">
      <div class="info">
        <p @click="onChangeType(2)">TRX</p>
        <span class="line"></span>
        <p @click="onChangeType(1)">USDT</p>
      </div>
      <div class="bar_item">
        <div class="item" :class="{ active: active === 2 }">
          <span></span>
        </div>
        <div class="item" :class="{ active: active === 1 }">
          <span></span>
        </div>
      </div>
    </section>

    <section class="info_box">
      <span class="tip">24 {{ $t('hour_withdrawal') }}</span>
      <span class="value">{{ getPrice() }}</span>
    </section>

    <section class="input_box">
      <div class="item">
        <span class="title">
          <p>*</p>
          {{ $t('Withdrawal_address') }}
        </span>
        <input
          type="text"
          :disabled="diasabledInput"
          v-model="address"
          :placeholder="$t('please_enter_the_withdrawal_address')"
        />
        <span class="tip">
          {{ $t('withdrawal_address_cannot_be_modified') }}
        </span>
      </div>
      <div class="item">
        <span class="title"><p>*</p>{{ $t('Withdrawal_limit') }} </span>
        <!-- <span class="title">VIP : {{title}}</span> -->
        <input
          v-model="money"
          type="number"
          :placeholder="$t('please_enter_withdrawal_limit')"
        />
        <span class="tip">
          {{ title }} {{ $t('trade_fee') }} : {{ cash_rate }}%
        </span>
      </div>
      <div class="item">
        <span class="title"><p>*</p>{{ $t('Withdrawal_password') }}</span>
        <input
          v-model="pwd"
          type="password"
          :placeholder="$t('please_enter_the_withdrawal_password')"
        />
        <span class="tip">
          6位数安全密码
        </span>
      </div>
    </section>

    <section
      style="z-index: 1"
      v-if="active !== 3"
      @click="onCheckout(active)"
      class="confirm"
    >
      {{ $t('confrm') }}
    </section>
    <section
      class="confirm"
      :class="{ submit_no: gift_status === 0 }"
      style="z-index: 1"
      v-if="active === 3"
      @click="giftSubmit()"
    >
      {{ $t('confrm') }}
    </section>

    <!--    <van-dialog
      class="dialog"
      v-model="isShowModel"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <div class="content">
        <span class="title">{{ $t('successful_verification') }}</span>
        {{
          $t('using_telegraph', {
            url: customer_service_link,
            code: code,
          })
        }}
      </div>
      <div class="btn" @click="onOpenLink">{{ $t('open_link') }}</div>
      <div class="btn2" :data-clipboard-text="code" @click="onCopyCode">
        {{ $t('copy_invitation_code') }}
      </div>
    </van-dialog> -->

    <van-dialog
      class="confirm_dialog"
      v-model="isShowConfirmModel"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <div class="content">
        <span class="title">{{ $t('tips') }}</span>
      </div>
      <div class="btn" @click="isShowConfirmModel = false">
        {{ $t('cancel_withdrawal') }}
      </div>
      <div class="btn2" :data-clipboard-text="code" @click="handleSubmit()">
        {{ $t('confirm_withdrawal') }}
      </div>
    </van-dialog>
  </div>
</template>

<script>
import Withdraw from '@/constant/withdraw.vue'
export default {
  name: 'Withdraw',

  extends: Withdraw
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 48px 0 0 0;
  min-height: 100vh;
  background-color: rgba(245, 245, 245, 1);

  .topbar {
    background-color: rgba(255, 255, 255, 1);
  }

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

  .info_box {
    width: 348px;
    background: #FFFFFF;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    padding: 42px 20px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .value {
      width: 100%;
      text-align: center;
      font-size: 36px;
      font-family: DIN Alternate;
      font-weight: bold;
      color: #222222;
      margin-top: 21px;
      word-break: break-word;
    }

    .tip {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #747474;
    }

    .info {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ee522f;
      margin-top: 19px;
    }

    .btn {
      min-width: 244px;
      padding: 0 16px;
      height: 41px;
      background: #043a98;
      border-radius: 21px;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }
  }

  .tips {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 15px;

    img {
      width: 12px;
      height: 12px;
      margin-right: 9px;
    }

    span {
      flex: 1 0;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #333333;
      word-break: break-word;
    }
  }

  .input_box {
    width: 348px;
    background: #FFFFFF;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    padding: 30px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 11px 0 0 0;

    .item {
      margin-top: 33px;
      width: 100%;
      display: flex;
      flex-direction: column;

      &:first-child {
        margin-top: 0px;
      }

      .title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #727380;
        display: flex;
        align-items: center;
        margin-left: -15px;

        p {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #FF0000;
          margin-right: 6px;
        }
      }

      input {
        width: 100%;
        height: 54px;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        border-bottom: 1px solid rgba(93, 101, 121, 0.2);
      }

      .tip {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #F5A700;
        margin-top: 9px;
      }
    }
  }

  .confirm {
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
    margin: 16px 0;
  }
  .submit_no {
    background-color: rgba(188, 190, 192, 1);
    // color: #000;
  }

  .dialog {
    max-height: 70vh;
    padding: 32px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #2f2f2f;
    line-height: 19px;
    overflow-y: scroll;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #2f2f2f;
      line-height: 19px;

      .title {
        font-size: 17px;
        font-family: Arial;
        font-weight: bold;
        color: #1e253c;
        margin-bottom: 25px;
      }
    }

    .btn {
      margin: 42px auto 0;
      width: 100%;
      height: 35px;
      background: rgba(4, 58, 152, 1);
      border-radius: 4px;
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn2 {
      margin: 12px auto 0;
      width: 100%;
      height: 35px;
      background: rgba(4, 58, 152, 1);
      border-radius: 4px;
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .confirm_dialog {
    max-height: 70vh;
    padding: 32px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #2f2f2f;
    line-height: 19px;
    overflow-y: scroll;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #2f2f2f;
      line-height: 19px;

      .title {
        font-size: 17px;
        font-family: Arial;
        font-weight: bold;
        color: #1e253c;
        margin-bottom: 25px;
      }
    }

    .btn {
      margin: 42px auto 0;
      width: 100%;
      padding: 12px 5px;
      background: rgba(4, 58, 152, 1);
      border-radius: 4px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .btn2 {
      margin: 12px auto 0;
      width: 100%;
      padding: 12px 5px;
      background: rgba(4, 58, 152, 0.5);
      border-radius: 4px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
