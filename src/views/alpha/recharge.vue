<template>
  <div class="page_root">
    <section class="header">
      <div class="topbar">
        <van-icon
          class="icon"
          name="arrow-left"
          color="#fff"
          @click="$router.go(-1)"
        />
        <span>{{ $t('recharge') }}</span>
      </div>

      <div class="btns">
        <div
          class="item"
          @click="
            $router.push({ path: '/recharge-detail', query: { type: 1 } })
          "
        >
          <div class="img_box1">
            <img src="@/assets/images/alpha/组505@2x.png" alt="" />
          </div>

          <!-- <span>{{ $t('Go_to_investment_account') }}</span> -->
          <span>TRX</span>
        </div>
        <div class="line"></div>
        <div class="item" @click="
            $router.push({ path: '/recharge-detail', query: { type: 2 } })
          ">
          <div class="img_box2">
            <img src="@/assets/images/alpha/组505拷贝@2x.png" alt="" />
          </div>

          <!-- <span>{{ $t('transfer_to_basicaccount') }}</span> -->
          <span>TRC20-USDT</span>
        </div>
      </div>
    </section>

    <section class="tip">
      <!-- {{ $t('investment_is_divided_into_two_modes') }} -->
    </section>

<!--    <section class="box">
      <p>{{ $t('recharge_text1') }}</p>

      <p>
        {{ $t('recharge_text2') }}
      </p>

      <div class="info">
        <p>{{ $t('view_notes') }}：</p>
        <p>
          {{ $t('recharge_text3') }}
        </p>
      </div>
    </section> -->
  </div>
</template>

<script>
import Recharge from '@/constant/recharge.vue'
export default {
  name: 'Recharge',

  extends: Recharge,

  components: {},
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 60px 0;
  min-height: 100vh;

  .header {
    width: 375px;
    min-height: 191px;
    background: linear-gradient(180deg, #043895 0%, #055ace 100%);
    display: flex;
    flex-direction: column;

    .topbar {
      background-color: transparent;
      span {
        color: rgba(255, 255, 255, 1);
      }
    }

    .btns {
      margin: 12px auto 5px;
      width: calc(100% - 10px * 2);
      min-height: 130px;
      background: #fefefe;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
      display: flex;
      align-items: center;

      .item {
        flex: 1 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img_box1 {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 31px;

          img {
            // width: 26px;
            height: 31px;
          }
        }

        .img_box2 {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 31px;
          img {
            // width: 31px;
            height: 31px;
          }
        }

        span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #323232;
          width: 100%;
          margin-top: 18px;
          padding: 0 13px;
          word-break: break-word;
          text-align: center;
        }
      }

      .line {
        width: 1px;
        height: 50px;
        background-color: rgba(221, 221, 221, 1);
      }
    }
  }

  .tip {
    width: 100%;
    padding: 0 13px;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #ed2b2a;
    line-height: 9px;
    margin: 16px 0;
  }

  .box {
    width: 356px;
    background: #fefefe;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    padding: 30px 16px 46px;
    display: flex;
    flex-direction: column;

    p {
      width: 100%;
      word-break: break-word;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #3f3f3f;
      margin-top: 16px;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
    }
  }
}
</style>
