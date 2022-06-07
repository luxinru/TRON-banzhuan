<template>
  <div class="page_root">
    <section class="header">
      <img
        class="logo"
        src="@/assets/images/alpha/08729c40786b95da2d171d5b31b93aac1fc909af5e481-VTx5AJ.png"
        alt=""
      />
      <div class="topbar">
        <van-icon
          class="icon"
          name="arrow-left"
          color="#fff"
          @click="$router.go(-1)"
        />
        <span>{{ $t('team') }}</span>
      </div>

      <div class="info">
        <span class="title">{{ $t('Reward_introduction') }}</span>
        <div class="labels">
          <span>{{ $t('Level_1')}} swap : {{reward1}}%</span>
          <span>{{ $t('Level_2' )}} swap : {{reward2}}%</span>
          <span>{{ $t('Level_3') }} swap : {{reward3}}%</span>
        </div>
      </div>
    </section>

    <section class="box">
      <div class="info">
<!--        <span class="tip"> {{ $t('total_reward') }} </span>

        <span class="value"> {{ profit }} </span> -->

        <div class="btns">
<!--          <div class="item">
            <span>{{ $t('team') }}({{ $t('person') }})</span>
            <span>{{ teamList ? teamList.length : 0 }}</span>
          </div> -->
          <div class="item">
            <span>{{ $t('achievements') }}(TRX)</span>
            <span>{{ interest_arbitrage_money_trx }}</span>
          </div>
          <div class="item">
            <span>{{ $t('achievements') }}(USDT)</span>
            <span>{{ interest_arbitrage_money_usdt }}</span>
          </div>
          <div class="item">
            <span>{{ $t('total_reward') }}(TRX)</span>
            <span>{{ s_trx_money_rebate }}</span>
          </div>
          <div class="item">
            <span>{{ $t('total_reward') }}(USDT)</span>
            <span>{{ s_usdt_money_rebate }}</span>
          </div>
        </div>

        <div class="copy">
          <div class="item">
            <span class="label">{{ $t('invitation_link') }}</span>
            <div class="value_box">
              <span>{{ register_url }}</span>
              <img
                class="url"
                src="@/assets/images/alpha/文件 (2) 拷贝.png"
                alt=""
                :data-clipboard-text="register_url"
                @click="onCopyUrl"
              />
            </div>
          </div>
          <div class="item">
            <span class="label">{{ $t('invitation_code') }}</span>
            <div class="value_box">
              <span>{{ code }}</span>
              <img
                class="code"
                src="@/assets/images/alpha/文件 (2) 拷贝.png"
                alt=""
                :data-clipboard-text="code"
                @click="onCopyCode"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="tabs" :class="{ tabs_all: !isLevel }">
        <div v-if="!isLevel">
          <span :class="{ active: active === 0 }" @click="onChangeType(0)">
            {{ $t('all_subordinates') }}({{ teamCount.all }})
          </span>
        </div>
        <div>
          <span :class="{ active: active === 1 }" @click="onChangeType(1)">
            {{ $t('Level_1') }}({{ teamCount.lev1 }})
          </span>
        </div>
        <div>
          <span :class="{ active: active === 2 }" @click="onChangeType(2)">
            {{ $t('Level_2') }}({{ teamCount.lev2 }})
          </span>
        </div>
        <div>
          <span :class="{ active: active === 3 }" @click="onChangeType(3)">
            {{ $t('Level_3') }}({{ teamCount.lev3 }})
          </span>
        </div>
      </div>

      <div class="list_item" v-for="(item, index) in teamList" :key="index">
        <span>{{ item.phone }}</span>
        <span>{{ item.time }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import Team from '@/constant/team.vue'
export default {
  name: 'Team',

  extends: Team,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 24px 0;
  min-height: 100vh;

  .header {
    position: relative;
    width: 100%;
    min-height: 221px;
    background: linear-gradient(180deg, #043895 0%, #055ace 100%);
    display: flex;
    flex-direction: column;

    .logo {
      position: absolute;
      width: 198px;
      height: 162px;
      right: 0;
      bottom: 45px;
    }

    .topbar {
      background-color: transparent;
      span {
        color: rgba(255, 255, 255, 1);
      }
    }

    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      margin-left: 20px;
      z-index: 1;

      .title {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
      }

      .labels {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        span {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 18px;
        }
      }
    }
  }

  .box {
    width: 100%;
    border-radius: 13px 13px 0px 0px;
    margin-top: -45px;
    z-index: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      padding: 24px;

      .tip {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #323232;
        margin-top: 6px;
      }

      .value {
        width: 100%;
        font-size: 30px;
        font-family: Arial;
        font-weight: bold;
        color: #ed2b2a;
        word-break: break-word;
        text-align: center;
        margin-top: 18px;
      }

      .btns {
        width: 329px;
        min-height: 71px;
        background: rgba(4, 66, 164, 0.1);
        border-radius: 7px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        margin-top: 18px;

        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 0;

          span {
            width: 100%;
            word-break: break-word;
            text-align: center;
            &:first-child {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #323232;
            }

            &:last-child {
              font-size: 25px;
              font-family: Arial;
              font-weight: bold;
              color: #ed2b2a;
              margin-top: 11px;
            }
          }
        }
      }

      .copy {
        width: 100%;
        display: flex;
        flex-direction: column;

        .item {
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: 20px;

          .label {
            width: 64px;
            word-break: break-word;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #323232;
            line-height: 16px;
          }

          .value_box {
            flex: 1 0;
            height: 25px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            margin-left: 15px;
            display: flex;
            align-items: center;
            padding: 0 16px;
            overflow: hidden;

            span {
              font-size: 15px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #ffffff;
              flex: 1 0;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            img {
              height: 17px;
              margin-left: 16px;
            }
          }
        }
      }
    }

    .tabs {
      width: 100%;
      height: 64px;
      background-color: #ffffff;
      padding: 16px;
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          width: max-content;
          padding-bottom: 12px;
          border-bottom: 2px solid #fff;
        }

        .active {
          border-bottom: 2px solid rgba(4, 66, 164, 1);
        }
      }
    }

    .tabs_all {
      grid-template-columns: repeat(4, 1fr);
    }

    .list_item {
      width: 348px;
      min-height: 55px;
      background: #fff;
      box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.05);
      border-radius: 7px;
      margin: 13px auto 0;
      display: flex;
      align-items: center;
      padding: 0 20px;

      span {
        flex: 1 0;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #323232;
        word-break: break-word;

        &:last-child {
          flex: 0.8 0;
          margin-left: 16px;
          text-align: right;
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #6f6d70;
        }
      }
    }
  }
}
</style>
