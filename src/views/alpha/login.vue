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
        <van-popover
          class="popover"
          v-model="showPopover"
          trigger="click"
          placement="bottom-end"
          :actions="actions"
          @select="onChangeLanguage"
        >
          <template #reference>
            <img src="@/assets/images/alpha/多语言 拷贝.png" alt="" />
          </template>
        </van-popover>
      </div>
    </section>

    <div class="title">
      <img src="@/assets/images/alpha/矢量智能对象 (1).png" alt="" />
      <!-- {{ $t('sign_in') }} -->
      欢迎来到Remtx
    </div>

    <!-- <div class="imgs"></div> -->
    <div class="input_box">
      <div class="item">
        <!-- <span>{{ $t('Login_account') }}</span> -->
        <div class="input">
          <!-- <span @click="isShowTelAddressSelect = true">+{{ data.prefix }}</span> -->
          <input
            v-model="data.username"
            type="number"
            :placeholder="$t('Please_enter_the_login_account')"
          />
        </div>
      </div>

      <div class="item">
        <!-- <span>{{ $t('login_password') }}</span> -->
        <div class="input">
          <input
            v-model="data.password"
            type="password"
            :placeholder="$t('please_enter_your_login_password')"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <span></span>
      <!-- <div class="remember">
        <div class="tick" @click="onClickRemember">
          <img v-if="checked" src="@/assets/images/alpha/对勾.png" alt="" />
        </div>
        {{ $t('remember_the_password') }}
      </div> -->

      <span class="foget" @click="$router.push('/findpwd')">
        {{ $t('Forgot_password') }}?
      </span>
      <!-- <img
        style="width: 30px"
        src="@/assets/images/alpha/customer-service.png"
        alt=""
        @click="toRoute('/kefu')"
      /> -->
    </div>

    <div class="btns">
      <div class="submit" @click="handleSubmit">
        {{ $t('sign_in') }}
      </div>
      <div class="cancel" @click="toRegister">
        {{ $t('sign_up') }}
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
import Login from '@/constant/login.vue'

export default {
  extends: Login,
}
</script>

<style lang="less" scoped>
.page_root {
  // background: url('~@/assets/images/alpha/椭圆 9 拷贝.png') no-repeat;
  background-size: 353px 232px;
  background-position: 22px 0px;
  align-items: flex-start;
  background-color: #fff;
  padding: 0 13px;

  .header {
    width: 100%;
    margin-top: 15px;

    .header_title {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 21px;

      // .img {
      //   width: 113px;
      //   height: 46px;
      // }

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

  .title {
    width: 100%;
    margin-top: 40px;
    display: flex;
    align-items: center;
    padding: 0 21px;
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
    padding: 0 21px;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      // border-bottom: 1px solid rgba(227, 227, 227, 1);
      margin-top: 25px;

      span {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 2px;
        line-height: 26px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #000000;
      }

      input {
        width: 100%;
        height: 41px;
        outline: none;
        border: none;
        background-color: transparent;
      }

      .input {
        background-color: rgba(241, 242, 246, 1);
        border-radius: 20px;
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        max-width: 100%;
        outline: 0px;
        padding: 0px 16px;
        width: 100%;
        font-size: 14px;
        height: 48px;
        width: 100%;
        height: 41px;
        display: flex;
        align-items: center;

        input {
          width: max-content;
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
      }
    }
  }

  .footer {
    width: 100%;
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 21px;

    .remember {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #000000;

      .tick {
        width: 17px;
        height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('~@/assets/images/alpha/椭圆 8.png') no-repeat;
        background-size: 100% 100%;
        margin-right: 15px;

        img {
          width: 9px;
          height: 7px;
        }
      }
    }

    .foget {
      font-size: 14px;
      font-weight: 400;
      color: #37383c;
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

.bzZMcs {
  font-size: 24px;
  line-height: 34px;
  font-weight: 700;
  color: var(--color-primary-black);
}

.bzZMcs {
  padding-top: 28px;
  text-align: center;
}

.VzaP {
  text-align: center;
}

.VzaP {
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 24px;
  color: var(--color-light-neutral-6);
}

.kIcwIq {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.kIcwIq .label {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
  line-height: 26px;
}

.dqGVRN {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(207, 214, 228);
  border-radius: 8px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  max-width: 100%;
  outline: 0px;
  padding: 0px 16px;
  width: 100%;
  font-size: 14px;
  height: 48px;
  line-height: 21px;
}

.kIcwIq input {
  height: 56px;
  padding: 0px 18px !important;
}

.kIcwIq {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.kIcwIq.last {
  margin-bottom: 0px;
}

.kIcwIq .label {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
  line-height: 26px;
}

.kIcwIq .label {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 2px;
  line-height: 26px;
}

.kIcwIq .label .label-pwd {
  color: var(--color-light-neutral-5);
  cursor: pointer;
}

.hHFyBc {
  position: relative;
}

.dqGVRN {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(207, 214, 228);
  border-radius: 8px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  max-width: 100%;
  outline: 0px;
  padding: 0px 16px;
  width: 100%;
  font-size: 14px;
  height: 48px;
  line-height: 21px;
}

.kIcwIq input {
  height: 56px;
  padding: 0px 18px !important;
}

.VzaP {
  width: 100%;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 24px;
  color: var(--color-light-neutral-6);
}

.create-account {
  cursor: pointer;
  color: var(--color-primary-blue);
}
</style>
