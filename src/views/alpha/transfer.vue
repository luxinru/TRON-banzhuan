<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ active === 1 ? $t('basic_account') : $t('investment_account') }}</span>
    </section>

    <section class="header">
      <div class="item" :class="{active: active === 1}" @click="active = 1">
        <span class="label">{{ $t('Go_to_investment_account') }}</span>
        <span class="line"></span>
      </div>
      <div class="item" :class="{active: active === 2}" @click="active = 2">
        <span class="label">{{ $t('transfer_to_basicaccount') }}</span>
        <span class="line"></span>
      </div>
    </section>

    <section class="info">
      <div class="values">
        <div class="item" v-if="active === 1">
          <span>{{ $t('basic_account') }}(TRX)</span>
          <span>{{ basic_account }}</span>
        </div>
        <div class="item" v-if="active === 2">
          <span>{{ $t('investment_account') }}(TRX)</span>
          <span>{{ commission_account }}</span>
        </div>
        <img src="@/assets/images/alpha/矩形 628 拷贝.png" alt="" />
        <div class="item" v-if="active === 1">
          <span>{{ $t('investment_account') }}(TRX)</span>
          <span>{{ commission_account }}</span>
        </div>
        <div class="item" v-if="active === 2">
          <span>{{ $t('basic_account') }}(TRX)</span>
          <span>{{ basic_account }}</span>
        </div>
      </div>
      <!-- <div class="tip" v-if="active === 2">
        <img src="@/assets/images/alpha/拷贝@2x.png" alt="" />
        <span>{{ $t('operable_conversion', { value: operable_conversion }) }}</span>
      </div> -->
    </section>

    <section class="input_box">
      <div class="item">
        <span class="title">{{ $t('Transfer_amount') }}</span>
        <div class="input">
          <input type="number" v-model="conversion_amount" :placeholder="$t('quantity_to_be_converted')" />
          <span @click="allbalance">{{ $t('all') }}</span>
        </div>
      </div>
      <!-- <div class="item">
        <span class="title">{{ $t('security_password') }}</span>
        <div class="input">
          <input type="password" :placeholder="$t('please_enter_your_security_password')"/>
        </div>
      </div> -->
    </section>

    <section class="confirm" @click="handleSubmit">
      {{ $t('confrm') }}
    </section>
  </div>
</template>

<script>
import Transfer from '@/constant/transfer.vue'
export default {
  name: 'Transfer',

  extends: Transfer,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;
  background-color: #fff;

  .header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;

    .item {
      flex: 1 0;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .label{
        width: 100%;
        flex: 1 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #646464;
      }

      .line {
        width: 20px;
        height: 3px;
        background: transparent;
        border-radius: 1px;
      }
    }

    .active {
      .label {
        color: #043A98;
      }

      .line {
        background: #043A98;
      }
    }
  }

  .info {
    width: 100%;
    min-height: 132px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: #fff;

    .values {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 5px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);

      .item {
        flex: 1 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          width: 100%;
          word-break: break-word;
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #323232;

          &:last-child {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #666666;
            margin-top: 16px;
          }
        }
      }

      img {
        height: 18px;
        margin: 0 10px;
      }
    }

    .tip {
      width: 100%;
      flex: 1 0;
      display: flex;
      align-items: center;
      margin-top: 15px;

      img {
        width: 12px;
        margin-right: 16px;
      }

      span {
        font-size: 12px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #333333;
      }
    }
  }

  .input_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    background-color: #fff;
    border-top: 10px solid rgba(245, 244, 250, 1);

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;

      .title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
        margin-top: 24px;
      }

      .input {
        width: 100%;
        height: 47px;
        margin-top: 19px;
        background: #fbfbfe;
        border: 1px solid #f4f4f6;
        border-radius: 4px;
        padding: 0 18px;
        display: flex;
        align-items: center;

        input {
          flex: 1 0;
          height: 100%;
          outline: none;
          border: none;
        }

        span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ed2b2a;
          margin-left: 16px;
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
    margin: 35px auto;
  }
}
</style>
