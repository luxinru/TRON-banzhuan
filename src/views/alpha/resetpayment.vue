<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Change_payment_password') }}</span>
    </section>

    <section class="box">
      <div class="tip">{{ $t('Set_up_a_new_payment_password') }}</div>

      <!-- <div class="item">
        <span class="title">{{ $t('Binding_email') }}:12345@qq.com</span>
        <div class="input_box">
          <input type="text" :placeholder="$t('Please_enter_email_verification_code')">
          <div class="code">{{ $t('send_code') }}</div>
        </div>
      </div> -->
      <div class="item">
        <span class="title">{{ $t('login_password') }}</span>
        <div class="input_box">
          <input v-model.trim="passwd" type="text" :placeholder="$t('please_enter_your_login_password')">
        </div>
      </div>
      <div class="item">
        <span class="title">{{ $t('new_password') }}</span>
        <div class="input_box">
          <input v-model.trim="npasswd" type="text" :placeholder="$t('Please_enter_a_new_password')">
        </div>
      </div>
      <div class="item">
        <span class="title">{{ $t('confrm_password') }}</span>
        <div class="input_box">
          <input v-model.trim="snpasswd" type="text" :placeholder="$t('Please_enter_the_password_again')">
        </div>
      </div>
    </section>

    <div class="confirm" @click="handleSubmit">
      {{ $t('confrm') }}
    </div>
  </div>
</template>

<script>
import Resetpayment from '@/constant/resetpayment.vue'
export default {
  name: 'Resetpayment',

  extends: Resetpayment,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 48px 30px;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 1);

  .topbar {
    background-color: rgba(255, 255, 255, 1);
    span {
      color: rgba(0, 0, 0, 1);
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

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    // padding: 0 13px;
    .tip {
      font-size: 22px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #1F1F1F;
      margin: 50px 0 20px;
    }

    .item {
      width: 100%;
      margin-top: 18px;
      display: flex;
      flex-direction: column;
      margin-top: 30px;

      .title{
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #525252;
      }

      .input_box {
        width: 100%;
        height: 47px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(228, 228, 228, 1);

        input {
          flex: 1 0;
          height: 100%;
          outline: none;
          border: none;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #B8B8B8;
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
    width: 100%;
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
    margin: 50px 0;
  }
}
</style>
