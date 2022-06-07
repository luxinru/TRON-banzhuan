<template>
  <div class="page_root">

    <section class="header">



      <div class="info">
        <van-icon class="icon" name="arrow-left" color="#fff" style="padding: 10px;" @click="$router.go(-1)" />
        <img class="logo" src="@/assets/images/alpha/TRWin 拷贝.png" />
        <div class="info_detail">
          <span>{{ data.mobile }}</span>
          <div>
            <span>{{ data.interest_arbitrage_member.title }}</span>
          </div>
        </div>
        <img class="bill" src="@/assets/images/alpha/我的账单 拷贝.png" />
      </div>

      <div class="assets">
        <!--        <div class="item">
          <span>{{ $t('Total_assets') }}(TRX)</span>
          <span>{{ totalBalance || 0 }}</span>
        </div>
        <div class="item">
          <span>TRC20-USDT</span>
          <span>{{ data.income_investment || 0 }}</span>
        </div> -->
        <!--        <template v-if="footerType === 'n2'">
          <div class="item">
            <span>{{ $t('Principal_to_be_received') }}(TRX)</span>
            <span>{{ data.ds_money || 0 }}</span>
          </div>
          <div class="item">
            <span>{{ $t('Interest_to_be_received') }}(TRX)</span>
            <span>{{ data.ds_apr_money || 0 }}</span>
          </div>
          <div class="item">
            <span>{{ $t('cumulative_income') }}(TRX)</span>
            <span>{{ data.income_investment || 0 }}</span>
          </div>
        </template> -->
      </div>
    </section>

    <section class="contents">
      <div class="balance">
        <template v-if="footerType === 'n2'">
          <span class="tip">
            {{ $t('open_the_withdrawal_function') }}
          </span>
          <div class="value">
            <div class="item">
              <span>{{ data.money || 0 }}</span>
              <span>USDT</span>
            </div>
            <div class="item" v-if="footerType === 'n2'">
              <span>{{ data.promotion || 0 }}</span>
              <span>TRX</span>
            </div>
          </div>
        </template>

        <div class="btns">
          <span v-if="footerType === 'n2'" @click="$router.push('/recharge')">{{
            $t('recharge')
          }}</span>
          <span @click="$router.push('/withdraw')">{{ $t('withdrawal') }}</span>
        </div>
      </div>



      <div class="funs">
        <div class="item" @click="$router.push('/team')">
          <img class="img" src="@/assets/images/alpha/users.png" alt="" />
          <div class="info">
            <span>{{ $t('team') }}</span>
            <img src="@/assets/images/alpha/箭头.png" alt="" />
          </div>
        </div>
        <div class="item" @click="$router.push('/wallet')">
          <img class="img" src="@/assets/images/alpha/chart-histogram.png" alt="" />
          <div class="info">
            <span>{{ $t('Transaction_details') }}</span>
            <img src="@/assets/images/alpha/箭头.png" alt="" />
          </div>
        </div>
        <div v-if="footerType === 'n2'" class="item" @click="$router.push('/recharge-record')">
          <img class="img" src="@/assets/images/alpha/document.png" alt="" />
          <div class="info">
            <span>{{ $t('Recharge_record') }}</span>
            <img src="@/assets/images/alpha/箭头.png" alt="" />
          </div>
        </div>
        <div class="item" @click="$router.push('/withdraw-record')">
          <img class="img" src="@/assets/images/alpha/document.png" alt="" />
          <div class="info">
            <span>{{ $t('Withdrawals_record') }}</span>
            <img src="@/assets/images/alpha/箭头.png" alt="" />
          </div>
        </div>

        <!-- <div class="item">
          <img class="img" src="@/assets/images/alpha/我的－心愿.png" alt="" />
          <div class="info">
            <span>{{ $t('Reward_introduction') }}</span>
            <img src="@/assets/images/alpha/箭头.png" alt="" />
          </div>
        </div> -->
        <div class="item" @click="$router.push('/manage')">
          <img class="img" src="@/assets/images/alpha/settings-sliders.png" alt="" />
          <div class="info">
            <span>{{ $t('Account_Settings') }}</span>
            <img src="@/assets/images/alpha/箭头.png" alt="" />
          </div>
        </div>

      </div>
      <div class="pfzfmi-3 eXqvah">
        <div><span class="pfzfmi-4 gkmSOs"><a class="pfzfmi-5 kNmryD cmc-link">SwapIt Tech Pte Ltd is a company
              incorporated in Singapore and regulated by the Monetary Authority of Singapore (MAS) as a remittance
              business (License No. RA01543). </a></span></div>
        <div><span class="pfzfmi-4 gkmSOs"><a class="pfzfmi-5 kNmryD cmc-link">2019 © SwapIt(TRWinSwap)
              Tech Pte Ltd. All Rights Reserved.</a></span><span class="pfzfmi-4 gkmSOs"><a
              class="pfzfmi-5 kNmryD cmc-link"></a></span></div>
        <hr>
      </div>
      <!--      <div class="models">
        <div v-if="footerType === 'n2'" class="item" @click="$router.push('/my-invests')">
          <img src="@/assets/images/alpha/快递 (1).png" alt="" />
          <span>{{ $t('about_us') }}</span>
        </div>
        <div class="item" @click="$router.push('/team')">
          <img src="@/assets/images/alpha/users.png" alt="" />
          <span>{{ $t('APP_download') }}</span>
        </div>
        <div class="item" @click="$router.push('/transfer')">
          <img src="@/assets/images/alpha/swapit.png" alt="" />
          <span>SwapIt</span>
        </div>
        <div class="item" @click="$router.push('/notice')">
          <img src="@/assets/images/alpha/信息.png" alt="" />
          <span>Coinmarketcap</span>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script>
  import Mine from '@/constant/mine.vue'
  export default {
    name: 'Mine',

    extends: Mine,

    components: {},

    data() {
      return {}
    },

    mounted() {},

    methods: {}
  }
</script>

<style lang="less" scoped>
  .page_root {
    padding: 0 0 60px 0;

    .header {
      width: 100%;
      background: linear-gradient(0deg, #1f76d3 0%, #053695 100%);
      display: flex;
      flex-direction: column;
      padding: 0 20px 24px;

      .info {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        margin-top: 23px;

        .logo {
          width: 60px;
          height: 60px;
          margin-right: 20px;
        }

        .info_detail {
          flex: 1 0;
          display: flex;
          flex-direction: column;
          padding: 10px 0;

          span {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #ffffff;
          }

          div {
            min-width: 52px;
            width: max-content;
            height: 19px;
            display: flex;
            align-items: center;
            background: url('~@/assets/images/alpha/组 4983.png') no-repeat;
            background-size: 100% 100%;
            padding: 0 6px 0 22px;
            margin-top: 6px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              font-size: 12px;
              font-family: MicrosoftYaHei;
              font-weight: bold;
              color: #ffffff;
              zoom: 0.75;
            }
          }
        }

        .bill {
          height: 16px;
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
      padding: 17px 13px;
      background: #f5f5f5;
      border-radius: 13px 13px 0px 0px;
      margin-top: -13px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .balance {
        width: 100%;
        // min-height: 160px;
        background: #ffffff;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        padding: 17px;

        .tip {
          width: 100%;
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #053695;
          zoom: calc(11 / 12);
        }

        .value {
          width: 100%;
          display: flex;
          margin-top: 22px;
          overflow: hidden;

          .item {
            flex: 1 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            overflow: hidden;

            &:first-child {
              margin-right: 12px;
            }

            span {
              font-size: 20px;
              font-family: DIN Alternate;
              font-weight: bold;
              color: #302f35;
              text-align: center;

              &:last-child {
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #302f35;
                margin-top: 10px;
              }
            }
          }
        }

        .btns {
          width: 100%;
          margin-top: 17px;
          display: flex;
          justify-content: center;

          span {
            flex: 1 0;
            height: 36px;
            background: rgb(56, 97, 251);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;

            &:nth-child(2) {
              margin-left: 12px;
            }
          }
        }
      }

      .models {
        width: 100%;
        background: #ffffff;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        display: flex;
        margin-top: 15px;

        .item {
          flex: 1 0;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            height: 42px;
            margin-top: 22px;
          }

          span {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #101010;
            margin: 10px 0 22px;
            text-align: center;
          }
        }
      }

      .funs {
        width: 100%;
        // min-height: 260px;
        background: #ffffff;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        .item {
          width: 100%;
          height: 55px;
          display: flex;
          align-items: center;

          .img {
            width: 25px;
            height: 25px;
            margin: 0 3px 0 18px;
          }

          .info {
            flex: 1 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 21px;

            span {
              font-size: 13px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #333333;
            }

            img {
              width: 6px;
              height: 11px;
            }
          }
        }
      }
    }
  }

  .eXqvah {
    margin-top: 20px;
    color: rgb(88, 102, 126);
    text-align: center;
    line-height: 2em;
  }

  .eXqvah {
    color: rgb(88, 102, 126);
    text-align: center;
    line-height: 2em;
  }

  .eMnjPF {
    color: rgb(88, 102, 126);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    z-index: 932;
    color: rgb(23, 25, 36);
    right: 0px;
    transition: right 0.2s ease 0s;
  }

  .gkmSOs {
    font-size: 12px;
    font-weight: 600;
    line-height: 12px;
  }

  .eXqvah hr {
    border-color: rgb(235, 239, 242);
    margin: 15px 0px 20px;
  }

  hr {
    border: 0px none;
    height: 1px;
    background-color: rgb(245, 247, 248);
    margin: 0px 0px 24px;
  }

  .ecTTQy {
    display: inline-block;
    height: 18px;
    width: 18px;
    margin-right: 20px;
  }
</style>
