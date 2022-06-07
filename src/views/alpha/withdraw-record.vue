<template>
  <div class="page_root">
    <div class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Withdrawals_record') }}</span>
    </div>

    <!-- <section class="balance">
      <div class="info">
        <span>10000.000000</span>
        <span>{{ $t('total_balance') }}（TRX）</span>
      </div>
      <div class="btns">
        <div class="item">
          <img src="@/assets/images/alpha/分享－自动转入.png" alt="">
          <span>{{ $t('transfer_in') }}</span>
        </div>
        <div class="item">
          <img src="@/assets/images/alpha/分享－自动转入 (1).png" alt="">
          <span>{{ $t('transfer_out') }}</span>
        </div>
      </div>
    </section> -->

    <section class="info_item" v-for="(item, index) in data.list" :key="index">
      <div class="part">
        <span>{{ $t('withdrawal') }}</span>
        <span :style="`color: ${statusName[item.status].color}`">{{
          statusName[item.status] ? statusName[item.status].text : '未知'
        }}</span>
      </div>
      <div class="part">
        <span>{{ item.time }}</span>
        <span v-if="item.bank == 'usdt'"> -{{ item.money1 }} USDT</span>
        <span v-if="item.bank == 'trx'"> -{{ item.money }} TRX</span>
      </div>
      <div class="error" v-if="item.status === 2">
        {{ statusName[item.status] ? statusName[item.status].text : '未知' }}
      </div>
    </section>
  </div>
</template>

<script>
import WithdrawRecord from '@/constant/withdraw-record.vue'
export default {
  name: 'WithdrawRecord',

  extends: WithdrawRecord,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    background-color: rgba(4, 61, 158, 1);
    span {
      color: rgba(255, 255, 255, 1);
    }
  }

  .balance {
    position: relative;
    width: 348px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    margin-top: -136px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .info {
      width: 100%;
      padding: 0 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 34px;
      padding-bottom: 60px;

      span {
        &:first-child {
          width: 100%;
          text-align: center;
          font-size: 30px;
          font-family: Arial;
          font-weight: bold;
          color: #ed5217;
          word-break: break-word;
        }

        &:last-child {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #3b3b3b;
          margin-top: 18px;
        }
      }
    }

    // .btns {
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 41px;
    //   background: #fafafa;
    //   border-radius: 7px;
    //   display: flex;
    //   .item {
    //     flex: 1 0;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;

    //     img {
    //       height: 16px;
    //       margin-right: 13px;
    //     }

    //     span {
    //       font-size: 14px;
    //       font-family: PingFang SC;
    //       font-weight: 500;
    //       color: #636363;
    //     }
    //   }
    // }
  }

  .info_item {
    width: 348px;
    min-height: 77px;
    background: #ffffff;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    .part {
      flex: 1 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10px;

      span {
        flex: 1 0;
        word-break: break-word;

        &:first-child {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #323232;
          margin-bottom: 14px;
        }
      }

      &:first-child {
        span {
          &:last-child {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #6f6d70;
            text-align: right;
          }
        }
      }

      &:nth-child(2) {
        span {
          &:first-child {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #6f6d70;
          }

          &:last-child {
            text-align: right;
          }
        }
      }

      .value {
        flex: 1 0;
        margin-left: 16px;
        word-break: break-word;
        font-size: 17px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ee322a;
        text-align: right;
      }
    }

    .error {
      width: 100%;
      word-break: break-word;
      font-size: 12px;
      color: #ee322a;
    }
  }
}
</style>
