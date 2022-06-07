<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Modify_login_password') }}</span>
    </section>

    <section class="box">
      <div class="tip">{{ $t('Set_a_new_login_password') }}</div>

      <!-- <div class="item">
        <span class="title">已绑定的邮箱:12345@qq.com</span>
        <div class="input_box">
          <input type="text" placeholder="请输入邮箱验证码">
          <div class="code">{{ $t('send_code') }}</div>
        </div>
      </div> -->
      <div class="item">
        <span class="title">{{ $t('login_password') }}</span>
        <div class="input_box">
          <input v-model.trim="passwd" type="password" :placeholder="$t('please_enter_your_login_password')">
        </div>
      </div>
      <div class="item">
        <span class="title">{{ $t('new_password') }}</span>
        <div class="input_box">
          <input v-model.trim="npasswd" type="password" :placeholder="$t('Set_a_new_login_password')">
        </div>
      </div>
      <div class="item">
        <span class="title">{{ $t('confrm_password') }}</span>
        <div class="input_box">
          <input v-model.trim="snpasswd" type="password" :placeholder="$t('Please_enter_again')">
        </div>
      </div>
    </section>

    <div class="confirm" @click="handleSubmit">
      {{ $t('confrm') }}
    </div>
  </div>
</template>

<script>
import Resetpwd from '@/constant/resetpwd.vue'
export default {
  name: 'Resetpwd',

  extends: Resetpwd,

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
