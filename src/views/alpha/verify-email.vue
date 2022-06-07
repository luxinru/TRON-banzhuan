<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Verify_phone_number') }}</span>
    </section>

    <section class="box">
      <div class="tip">{{ $t('Verify_phone_number') }}</div>

      <div class="item">
        <span class="title">a979797@gmail.com</span>
        <div class="input_box">
          <input type="number" :placeholder="$t('please_enter_your_mobile_phone_number')">
          <van-count-down v-if="isSend" class="code" :time="time" format="ss" @finish="onFinish"/>
          <div class="code" v-else @click="onSendCode">{{ $t('send_code') }}</div>
        </div>
      </div>
    </section>

    <div class="confirm">
      {{ $t('complete_verification') }}
    </div>
  </div>
</template>

<script>
import VerifyEmail from '@/constant/verify-email.vue'
export default {
  name: 'VerifyEmail',

  extends: VerifyEmail,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;
  background-color: #fff;

  .topbar {
    background-color: rgba(4, 66, 164, 1);

    span {
      color: #fff;
    }
  }

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 13px;
    margin-top: 25px;
    .tip {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #323232;
    }

    .item {
      width: 100%;
      margin-top: 18px;
      display: flex;
      flex-direction: column;

      .title{
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
      }

      .input_box {
        width: 100%;
        height: 47px;
        background: #FBFBFE;
        border: 1px solid #F4F4F6;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        margin-top: 10px;

        input {
          flex: 1 0;
          height: 100%;
          outline: none;
          border: none;
        }

        .code {
          height: 32px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0442A4;
          border-radius: 16px;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
        }
      }
    }
  }

  .confirm {
    width: 348px;
    height: 47px;
    background: rgba(4, 61, 158, 1);
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin: 18px 0;
  }
}
</style>
