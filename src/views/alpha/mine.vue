<template>
  <div class="page_root">
    <van-icon
      class="back_icon"
      name="arrow-left"
      color="#000"
      @click="$router.go(-1)"
    />
    <section class="header">
      <div class="info">
        <img class="logo" src="@/assets/images/alpha/TRWin 拷贝.png" />
        <div class="info_detail">
          <span>{{ data.mobile }}</span>
          <div>
            {{ data.interest_arbitrage_member.title }}
          </div>
        </div>
      </div>
    </section>

    <section class="contents">
      <div class="balance">
        <template v-if="footerType === 'n2'">
          <div class="value">
            <span>{{ data.money || 0 }}</span>
            <p class="line"></p>
            <span>{{ data.promotion || 0 }}</span>
          </div>

          <div class="label">
            <span>USDT</span>
            <p class="line none"></p>
            <span>TRX</span>
          </div>

          <div class="btns">
            <span>
              <div
                class="btn"
                @click="
                  active = 1
                  isShowModel = true
                "
              >
                {{ $t('recharge') }}
              </div>
            </span>
            <p class="line none"></p>
            <span>
              <div class="btn" @click="$router.push('/withdraw')">
                {{ $t('withdrawal') }}
              </div>
            </span>
          </div>
        </template>
      </div>

      <span class="balance_tip">
        *{{ $t('open_the_withdrawal_function') }}
      </span>

      <span class="main_title">
        {{ $t('More') }}
      </span>

      <div class="funs">
        <div class="item" @click="$router.push('/team')">
          <span>{{ $t('team') }}</span>
          <img src="@/assets/images/alpha/矩形 792.png" />
        </div>
        <div class="item" @click="$router.push('/wallet')">
          <span>{{ $t('Transaction_details') }}</span>
          <img src="@/assets/images/alpha/矩形 792.png" />
        </div>
        <div
          v-if="footerType === 'n2'"
          class="item"
          @click="$router.push('/recharge-record')"
        >
          <span>{{ $t('Recharge_record') }}</span>
          <img src="@/assets/images/alpha/矩形 792.png" />
        </div>
        <div class="item" @click="$router.push('/withdraw-record')">
          <span>{{ $t('Withdrawals_record') }}</span>
          <img src="@/assets/images/alpha/矩形 792.png" />
        </div>

        <div class="item" @click="$router.push('/manage')">
          <span>{{ $t('Account_Settings') }}</span>
          <img src="@/assets/images/alpha/矩形 792.png" />
        </div>
      </div>

      <div class="kefu" @click="$router.push('/kefu')">我的客服</div>

      <div class="tips">
        <p>
          SwapIt Tech Pte Ltd is a company incorporated in Singapore and
          regulated by the Monetary Authority of Singapore (MAS) as a remittance
          business (License No. RA01543).
        </p>
        <p>2019 © SwapIt(TRWinSwap) Tech Pte Ltd. All Rights Reserved.</p>
      </div>
    </section>

    <van-dialog
      v-model="isShowModel"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <div class="dialog">
        <span class="title"> 选择充值方式 </span>
        <div class="content">
          <div
            class="item"
            :class="{ active: active === 1 }"
            @click="active = 1"
          >
            <img class="img1" src="@/assets/images/alpha/USDT (3) 拷贝.png" />
            <span>TRC20-USDT</span>
            <div class="img">
              <img src="@/assets/images/alpha/勾 拷贝.png" />
            </div>
          </div>

          <div
            class="item"
            :class="{ active: active === 2 }"
            @click="active = 2"
          >
            <img class="img1" src="@/assets/images/alpha/TRX (2) 拷贝.png" />
            <span>TRC20-USDT</span>
            <div class="img">
              <img src="@/assets/images/alpha/勾 拷贝.png" />
            </div>
          </div>
        </div>

        <div class="footer">
          <img
            src="@/assets/images/alpha/差 (1) 拷贝.png"
            @click="isShowModel = false"
          />
          <img
            src="@/assets/images/alpha/箭头 (1).png"
            @click="
              $router.push({
                path: '/recharge-detail',
                query: { type: active },
              })
            "
          />
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import Mine from '@/constant/mine.vue'
export default {
  name: 'Mine',

  extends: Mine
}
</script>

<style lang="less" scoped>
.page_root {
  position: relative;
  padding: 0 21px 60px;
  min-height: 812px;
  background: linear-gradient(151deg, #fff7df 0%, #ffffff 100%);

  .back_icon {
    position: absolute;
    top: 13px;
    left: 13px;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;

    .info {
      width: 100%;
      height: 53px;
      display: flex;
      align-items: center;
      margin-top: 35px;

      .logo {
        width: 53px;
        height: 53px;
        margin-right: 16px;
      }

      .info_detail {
        flex: 1 0;
        display: flex;
        align-items: center;

        span {
          font-size: 21px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #43424d;
        }

        div {
          min-width: 81px;
          width: max-content;
          height: 31px;
          display: flex;
          align-items: center;
          background: url('~@/assets/images/alpha/image-removebg-preview (5).png')
            no-repeat;
          background-size: 100% 100%;
          padding: 0 0 0 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #8f620c;
          margin-left: 7px;
        }
      }
    }

    .assets {
      width: 100%;
      flex: 1 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 8px;
      margin-top: 28px;

      .item {
        display: flex;
        flex-direction: column;

        span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ffffff;

          &:last-child {
            margin-top: 8px;
            font-size: 20px;
            font-family: Arial;
            font-weight: bold;
            color: #ffffff;
            word-break: break-word;
          }
        }
      }
    }
  }

  .contents {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;

    .balance {
      width: 100%;
      padding: 17px 25px;
      background: linear-gradient(164deg, #febf37 0%, #fea820 100%);
      border-radius: 7px;

      .value {
        width: 100%;
        display: flex;
        align-items: flex-start;
        overflow: hidden;

        span {
          flex: 1 0;
          font-size: 31px;
          font-family: DIN Alternate;
          font-weight: bold;
          color: #ffffff;
        }
      }

      .label {
        width: 100%;
        display: flex;
        align-items: flex-start;
        span {
          flex: 1 0;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ffffff;
          margin-top: 10px;
        }
      }

      .btns {
        margin-top: 18px;
        width: 100%;
        display: flex;
        align-items: flex-start;

        span {
          flex: 1 0;
          div {
            width: max-content;
            padding: 6.5px 24px;
            background: rgba(255, 255, 255, 1);
            border-radius: 16px;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #feaa22;
          }
        }
      }

      .line {
        width: 1px;
        height: 27px;
        background: #ffffff;
        margin: 16px 16px 0;
      }

      .none {
        opacity: 0;
        margin: 0 16px 0;
        padding: 0;
      }
    }

    .balance_tip {
      width: 100%;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ff4800;
      margin-top: 10px;
    }

    .main_title {
      width: 100%;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
      margin: 20px 0;
    }

    .funs {
      width: 100%;
      background: #ffffff;
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      padding: 0 20px;

      .item {
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(228, 228, 228, 1);

        span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #000000;
        }

        img {
          height: 6px;
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .kefu {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #5e6576;
      padding: 6.5px 20px;
      border: 1px solid #5e6576;
      border-radius: 14px;
      margin-top: 30px;
    }

    .tips {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 25px 0 0;

      p {
        width: 100%;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #54575e;
        line-height: 22px;
        text-align: center;
        word-break: break-word;
      }
    }
  }

  .dialog {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    padding: 35px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #222222;
    }

    .content {
      width: 100%;
      margin-top: 11px;
      display: flex;
      flex-direction: column;

      .item {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        border: 1px solid RGBA(131, 131, 131, 1);
        border-radius: 24px;
        padding: 0 20px;
        margin-top: 18px;

        .img1 {
          height: 25px;
        }

        span {
          flex: 1 0;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: RGBA(131, 131, 131, 1);
          margin-left: 10px;
        }

        .img {
          width: 16px;
          height: 16px;
          background-color: RGBA(131, 131, 131, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;

          img {
            height: 6px;
          }
        }
      }

      .active {
        border: 1px solid rgba(245, 167, 0, 1);

        span {
          color: rgba(245, 167, 0, 1);
        }

        .img {
          background-color: rgba(245, 167, 0, 1);
        }
      }
    }

    .footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;

      img {
        height: 15px;

        &:last-child {
          height: 18px;
        }
      }
    }
  }
}
</style>
