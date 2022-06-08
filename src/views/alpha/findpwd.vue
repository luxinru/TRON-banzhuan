<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="rgba(0, 0, 0, 1)"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Forgot_password') }}</span>
    </section>

    <section class="box">
      <div class="item">
        <!-- <span class="title">{{ $t('mobile_number') }}</span> -->
        <div class="input_box">
          <span @click="isShowTelAddressSelect = true">+{{ data.prefix }}</span>
          <input
            v-model.trim="data.mobile"
            type="text"
            :placeholder="$t('please_enter_your_mobile_phone_number')"
          />
        </div>
      </div>

      <div class="item">
        <!-- <span class="title">{{ $t('Captcha') }}</span> -->
        <div class="input_box">
          <div class="box2">
            <input
              v-model.trim="data.captcha"
              type="text"
              :placeholder="$t('Please_enter_the_graphic_verification_code')"
            />
          </div>
          <img :src="captcha" alt="" @click="fetchImgCode" />
        </div>
      </div>

      <div class="item">
        <!-- <span class="title">{{ $t('verification_code') }}</span> -->
        <div class="input_box">
          <div class="box2">
            <input
              v-model.trim="data.code"
              type="text"
              :placeholder="$t('please_enter_verification_code')"
            />
          </div>
          <van-count-down
            v-if="isSend"
            class="code"
            :time="time"
            format="ss"
            @finish="onFinish"
          />
          <div class="code" v-else @click="onSendCode">
            {{ $t('send_code') }}
          </div>
        </div>
      </div>

      <div class="item">
        <!-- <span class="title">{{ $t('login_password') }}</span> -->
        <div class="input_box">
          <input
            v-model.trim="data.passwd"
            type="text"
            :placeholder="$t('please_enter_your_login_password')"
          />
        </div>
      </div>

      <div class="item">
        <!-- <span class="title">{{ $t('confrm_password') }}</span> -->
        <div class="input_box">
          <input
            v-model.trim="data.npasswd"
            type="text"
            :placeholder="$t('Please_enter_the_password_again')"
          />
        </div>
      </div>
    </section>

    <div class="confirm" @click="handleSubmit">
      {{ $t('edit_now') }}
    </div>

    <van-action-sheet v-model="isShowTelAddressSelect">
      <div class="action_sheet_content">
        <input
          v-model="actionsText"
          type="text"
          :placeholder="$t('Please_enter_the_area_code_to_search')"
        />
        <div class="list">
          <span
            v-for="(item, index) in showActions"
            :key="index"
            @click="onSelect(item)"
          >
            +{{ item.name }}
          </span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import Findpwd from '@/constant/findpwd.vue'
export default {
  name: 'Findpwd',

  extends: Findpwd,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 34px 50px;
  min-height: 100vh;
  background-color: #fff;

  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 49px;
    .item {
      width: 100%;
      margin-top: 25px;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
      }

      .input_box {
        width: 100%;
        height: 41px;
        background: rgba(241, 242, 246, 1);
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 10px;

        span {
          height: 100%;
          padding: 3px 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: normal;
        }

        .box2 {
          flex: 1 0;
          height: 100%;

          input {
            width: 100%;
            background-color: transparent;
          }
        }

        input {
          flex: 1 0;
          height: 100%;
          outline: none;
          border: none;
          background-color: transparent;
        }

        .code {
          height: 32px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 167, 0, 1);
          border-radius: 16px;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          margin-left: 16px;
        }

        img {
          width: 120px;
          height: 100%;
          margin-left: 16px;
        }
      }
    }
  }

  .confirm {
    width: 100%;
    height: 41px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(245, 167, 0, 1);
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    margin-top: 58px;
  }

  /deep/ .van-action-sheet__content {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .action_sheet_content {
      flex: 1 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;

      input {
        width: 90%;
        height: 44px;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin: 16px 0;
        padding: 0 16px;
      }

      .list {
        flex: 1 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;

        span {
          width: 100%;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
