<template>
  <div class="page_root">
    <section class="header">
      <div class="header_title">
        <span></span>
        <!-- <img
          style="width: 190px"
          class="img"
          src="@/assets/images/alpha/logo.png"
          alt=""
        /> -->
        <div class="imgs">
          <van-popover
            class="popover"
            v-model="showPopover"
            trigger="click"
            placement="bottom-end"
            :actions="languageActions"
            @select="onChangeLanguage"
          >
            <template #reference>
              <img src="@/assets/images/alpha/多语言 拷贝.png" alt="" />
            </template>
          </van-popover>
        </div>
      </div>
    </section>

    <div class="title">
      <img src="@/assets/images/alpha/矢量智能对象 (1).png" alt="" />
      <!-- {{ $t('sign_in') }} -->
      欢迎来到Remtx
    </div>

    <div class="input_box">
      <div class="item">
        <!-- <span>{{ $t('mobile_number') }}</span> -->
        <div class="input">
          <!-- <span @click="isShowTelAddressSelect = true">+{{ data.prefix }}</span> -->
          <input
            v-model="data.mobile"
            type="number"
            :placeholder="$t('please_enter_your_mobile_phone_number')"
          />
        </div>
      </div>

      <div class="item">
        <!-- <span>{{ $t('login_password') }}</span> -->
        <div class="input">
          <input
            v-model="data.password"
            type="password"
            :placeholder="$t('Please_enter_the_login_password')"
          />
        </div>
      </div>

      <div class="item">
        <!-- <span>{{ $t('confrm_password') }}</span> -->
        <div class="input">
          <input
            v-model="data.cpassword"
            type="password"
            :placeholder="$t('Please_enter_the_password_again')"
          />
        </div>
      </div>

      <div class="item">
        <!-- <span>{{ $t('Captcha') }}</span> -->
        <div class="input">
          <div class="box">
            <input
              v-model="captcha"
              type="text"
              :placeholder="$t('Please_enter_the_graphic_verification_code')"
            />
          </div>
          <img :src="captchaUrl" alt="" @click="fetchImgCode" />
        </div>
      </div>

      <!--      <div class="item">
        <span>{{ $t('verification_code') }}</span>
        <div class="input">
          <input v-model="data.code" type="text" :placeholder="$t('please_enter_verification_code')" />
          <van-count-down v-if="isSend" class="code" :time="time" format="ss" @finish="onFinish" />
          <div class="code" v-else @click="onSendCode">
            {{ $t('send_code') }}
          </div>
        </div>
      </div> -->

      <div class="item">
        <!-- <span>{{ $t('invite_code') }}</span> -->
        <div class="input">
          <input
            v-model="data.t_mobile"
            type="text"
            :placeholder="$t('Please_enter_the_invitation_code')"
          />
        </div>
      </div>
    </div>

    <div class="btns">
      <div class="submit" @click="handleSubmit">
        {{ $t('sign_up') }}
      </div>
      <div class="cancel" @click="toLogin">
        {{ $t('sign_in') }}
      </div>
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
import Register from '@/constant/register.vue'

export default {
  extends: Register,
}
</script>

<style lang="less" scoped>
.page_root {
  // background: url('~@/assets/images/alpha/椭圆 9 拷贝.png') no-repeat;
  background-color: #fff;
  padding: 0 34px 50px;

  .header {
    width: 100%;
    margin-top: 15px;

    .header_title {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;

      .img {
        width: 113px;
        height: 46px;
      }

      .imgs {
        display: flex;
        align-items: center;

        .popover {
          height: 21px;
          line-height: 0;

          img {
            height: 100%;
          }
        }

        img {
          height: 21px;

          &:first-child {
            margin-right: 11px;
          }
        }
      }
    }
  }

  .title {
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    font-size: 25px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #414548;

    img {
      width: 31px;
      height: 31px;
      margin-right: 12px;
    }
  }

  .input_box {
    margin-top: 46px;
    width: 100%;
    display: flex;
    flex-direction: column;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      // border-bottom: 1px solid rgba(227, 227, 227, 1);
      margin-top: 25px;

      // span {
      //   font-size: 16px;
      //   font-family: PingFang SC;
      //   font-weight: bold;
      //   color: #000000;
      //   display: flex;
      //   -webkit-box-pack: justify;
      //   justify-content: space-between;
      //   font-size: 3.2vw;
      //   font-weight: 600;
      //   margin-bottom: 0.53333vw;
      //   line-height: 6.93333vw;
      //   font-size: 4.26667vw;
      //   font-family: PingFang SC;
      //   font-weight: bold;
      //   color: #000000;
      // }

      input {
        width: 100%;
        height: 41px;
        outline: none;
        border: none;
        background-color: transparent;
      }

      .input {
        background-color: rgba(241, 242, 246, 1);
        // border: 1px solid rgb(207, 214, 228);
        border-radius: 20px;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        max-width: 100%;
        padding: 0px 16px;
        width: 100%;
        font-size: 14px;
        height: 41px;
        display: flex;
        align-items: center;

        input {
          flex: 1 0;
          height: 100%;
        }

        span {
          height: 100%;
          padding: 0 8px 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: normal;
        }

        .box {
          flex: 1 0;
        }

        .code {
          height: 32px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0442a4;
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

  .btns {
    width: 100%;
    margin-top: 54px;
    display: flex;
    flex-direction: column;
    padding: 0 21px;

    div {
      width: 100%;
      height: 41px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .submit {
      background: rgba(245, 167, 0, 1);
      font-size: 15px;
      font-weight: 500;
      color: #ffffff;
    }

    .cancel {
      font-size: 15px;
      font-weight: 500;
      color: rgba(245, 167, 0, 1);
      margin-top: 12px;
    }
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
