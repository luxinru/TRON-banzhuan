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

    <section class="tabs">
      <!-- <span :class="{ active: active === 1 }" @click="onChangeType(1)">
        {{ $t('basic_account') }}
      </span> -->
      <span :class="{ active: active === 2 }" @click="onChangeType(2)">
        TRX
      </span>
      <span :class="{ active: active === 1 }" @click="onChangeType(1)">
        USDT
      </span>
    </section>

    <section class="info_box">
      <span class="value">{{ getPrice() }}</span>
      <!-- <span class="label">{{ getTitle() }}(TRX)</span> -->
      <span class="tip">24 {{ $t('hour_withdrawal') }}</span>
      <template v-if="active === 1">
        <!--        <div class="info">
          {{ $t('daily_withdrawal_limit') }}: {{ daily_withdrawal_limit }}
          <br />
          {{ withdrawal_limit_remaining_today }} trx
          {{ $t('withdrawal_limit_remaining_today') }}
        </div> -->
        <!--        <span
          class="btn"
          @click="$router.push('/transfer', { query: { type: 2 } })"
        >
          {{ $t('transfer_to_commission_account') }}
        </span> -->
      </template>
    </section>

    <section class="tips">
      <img src="@/assets/images/alpha/拷贝@2x.png" alt="" />
      <span>{{ $t('withdrawal_address_cannot_be_modified') }}</span>
    </section>

    <section class="input_box">
      <div class="item">
        <span class="title">{{ $t('Withdrawal_address') }}</span>
        <input
          type="text"
          :disabled="diasabledInput"
          v-model="address"
          :placeholder="$t('please_enter_the_withdrawal_address')"
        />
      </div>
      <div class="item">
        <span class="title">{{ $t('Withdrawal_limit') }} </span>
        <!-- <span class="title">VIP : {{title}}</span> -->
        <span class="title"
          >{{ title }} {{ $t('trade_fee') }} : {{ cash_rate }}%</span
        >
        <input
          v-model="money"
          type="number"
          :placeholder="$t('please_enter_withdrawal_limit')"
        />
      </div>
      <div class="item">
        <span class="title">{{ $t('Withdrawal_password') }}</span>
        <input
          v-model="pwd"
          type="password"
          :placeholder="$t('please_enter_the_withdrawal_password')"
        />
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
  padding: 0 0 0 0;
  min-height: 100vh;
  background-color: rgba(245, 244, 250, 1);

  .topbar {
    background-color: rgba(245, 244, 250, 1);
  }

  .tabs {
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 13px;

    span {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;
      border-bottom: 2px solid rgba(245, 244, 250, 1);
    }

    .active {
      border-bottom: 2px solid rgba(4, 58, 152, 1);
    }
  }

  .info_box {
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    padding: 20px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .value {
      width: 100%;
      text-align: center;
      font-size: 42px;
      font-family: Arial;
      font-weight: bold;
      color: #353338;
      margin-top: 13px;
      word-break: break-word;
    }

    .label {
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #353338;
      word-break: break-word;
      margin-top: 18px;
      text-align: center;
    }

    .tip {
      padding: 0 30px;
      height: 26px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #043a98;
      display: flex;
      align-items: center;
      margin-top: 14px;
      background: rgba(6, 62, 159, 0.2);
      border-radius: 4px;
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
    width: 100%;
    background: #ffffff;
    border-radius: 0px;
    padding: 17px 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    .item {
      margin-top: 18px;
      width: 100%;
      display: flex;
      flex-direction: column;

      &:first-child {
        margin-top: 6px;
      }

      .title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
      }

      input {
        width: 100%;
        height: 47px;
        background: #fbfbfe;
        border: 1px solid #f4f4f6;
        border-radius: 4px;
        padding: 0 21px;
        display: flex;
        align-items: center;
        margin-top: 8px;
      }
    }
  }

  .confirm {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(4, 58, 152, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
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
