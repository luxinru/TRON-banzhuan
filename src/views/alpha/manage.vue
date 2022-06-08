<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="rgba(0, 0, 0, 1)"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Account_management') }}</span>
    </section>

    <section class="box">
      <!-- <div class="item">
        <span class="name">{{ $t('Email_authentication') }}</span>
        <div class="left_info" @click="$router.push('/verify-email')">
          <span>{{ $t('de_authenticate') }}</span>
          <img src="@/assets/images/alpha/方向 - 下 拷贝 10.png" alt="">
        </div>
      </div> -->

      <!-- <div class="item" @click="$router.push('/wallet-management')">
        <span class="name">{{ $t('Wallet_management') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/方向 - 下 拷贝 10.png" alt="">
        </div>
      </div> -->

      <!-- <div class="item">
        <span class="name">{{ $t('language_preference') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/方向 - 下 拷贝 10.png" alt="">
        </div>
      </div> -->

      <div class="item" @click="$router.push('/resetpwd')">
        <span class="name">{{ $t('Modify_login_password') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/矩形 792.png" alt="" />
        </div>
      </div>

      <div class="item" @click="$router.push('/resetpayment')">
        <span class="name">{{ $t('Change_payment_password') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/矩形 792.png" alt="" />
        </div>
      </div>

      <div class="item" @click="$router.push('/agreement')">
        <span class="name">{{ $t('user_agreement') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/矩形 792.png" alt="" />
        </div>
      </div>

      <div class="item" @click="$router.push('/privacy')">
        <span class="name">{{ $t('Privacy_Policy') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/矩形 792.png" alt="" />
        </div>
      </div>

      <div class="item" @click="logout">
        <span class="name">{{ $t('log_out') }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/矩形 792.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Manage from '@/constant/manage.vue'
export default {
  name: 'Manage',

  extends: Manage,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 48px 13px;
  min-height: 100vh;
  background-color: rgba(247, 246, 249, 1);

  .topbar {
    background-color: rgba(247, 246, 249, 1);
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
    margin-top: 13px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;

    .item {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.14);
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        border: none;
      }

      .name {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #0d1114;
      }

      .left_info {
        display: flex;
        align-items: center;

        span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #043d9e;
        }

        img {
          height: 5px;
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
