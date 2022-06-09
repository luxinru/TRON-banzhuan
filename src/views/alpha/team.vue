<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('team') }}</span>
    </section>

    <section class="header">
      <div class="info">
        <img class="mine" src="@/assets/images/alpha/TRWin 拷贝.png" />
        <span class="title">{{ $t('Reward_introduction') }}</span>
        <div class="labels">
          <div class="item">
            <span>{{ $t('Level_1') }} swap :</span>
            <span>{{ reward1 }}%</span>
          </div>
          <div class="item">
            <span>{{ $t('Level_2') }} swap :</span>
            <span>{{ reward2 }}%</span>
          </div>
          <div class="item">
            <span>{{ $t('Level_3') }} swap :</span>
            <span>{{ reward3 }}%</span>
          </div>
        </div>
      </div>
    </section>

    <div class="copy">
      <div class="item">
        <span class="label">{{ $t('invitation_link') }}</span>
        <div class="value_box">
          <span>{{ register_url }}</span>
          <img
            class="url"
            src="@/assets/images/alpha/复制 (1).png"
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
            src="@/assets/images/alpha/复制 (1).png"
            :data-clipboard-text="code"
            @click="onCopyCode"
          />
        </div>
      </div>
    </div>

    <section class="box">
      <div class="item">
        <span>{{ interest_arbitrage_money_trx }}</span>
        <span>{{ $t('achievements') }}(TRX)</span>
      </div>
      <div class="item">
        <span>{{ interest_arbitrage_money_usdt }}</span>
        <span>{{ $t('achievements') }}(USDT)</span>
      </div>
      <div class="item">
        <span>{{ s_trx_money_rebate }}</span>
        <span>{{ $t('total_reward') }}(TRX)</span>
      </div>
      <div class="item">
        <span>{{ s_usdt_money_rebate }}</span>
        <span>{{ $t('total_reward') }}(USDT)</span>
      </div>
    </section>

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

    <div class="list_box">
      <div class="list_item" v-for="(item, index) in teamList" :key="index">
        <span>{{ item.phone }}</span>
        <span>{{ item.time }}</span>
      </div>
    </div>
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
  padding: 0;
  min-height: 100vh;
  background-color: rgba(246, 246, 246, 1);

  .topbar {
    background-color: transparent;
    span {
      color: rgba(255, 255, 255, 1);
    }
  }

  .header {
    width: 100%;
    height: 249px;
    background: #f5a700;
    display: flex;
    flex-direction: column;
    padding: 48px 0 0 0;

    .info {
      width: 333px;
      background: #ffffff;
      box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px auto 0;
      z-index: 2;
      padding: 0 16px 31px;

      .mine {
        width: 53px;
        height: 53px;
        border-radius: 50%;
        margin-top: -26.5px;
      }

      .title {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        margin-top: 23px;
      }

      .labels {
        min-width: 200px;
        width: max-content;
        display: flex;
        flex-direction: column;
        margin-top: 2px;

        .item {
          margin-top: 14px;
          width: 100%;
          display: flex;
          align-items: center;

          span {
            flex: 1 0;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #ffffff;
            background-color: rgba(245, 167, 0, 1);
            padding: 5.5px 10px;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: center;

            &:last-child {
              background-color: rgba(245, 167, 0, 0.2);
              font-size: 15px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #f5a700;
            }
          }
        }
      }
    }
  }

  .copy {
    width: 333px;
    background: #ffffff;
    box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 21px 16px;
    margin-top: 88px;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 25px;

      &:first-child {
        margin-top: 0;
      }

      .label {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #3b4257;
      }

      .value_box {
        width: 100%;
        height: 29px;
        display: flex;
        align-items: center;
        overflow: hidden;
        margin-top: 19px;

        span {
          flex: 1 0;
          height: 29px;
          background: rgba(245, 167, 0, 0.1);
          border-radius: 4px;
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #f5a700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 10px;
          display: flex;
          align-items: center;
        }

        img {
          height: 16px;
          margin-left: 23px;
        }
      }
    }
  }

  .box {
    width: 333px;
    background: #ffffff;
    box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
    border-radius: 7px;
    z-index: 1;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 10px;
    margin-top: 13px;
    padding: 20px;

    .item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        width: 100%;
        word-break: break-word;
        text-align: center;
        &:first-child {
          font-size: 24px;
          font-family: DIN Alternate;
          font-weight: bold;
          color: #1a1c22;
        }

        &:last-child {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #9294a1;
          margin-top: 8px;
        }
      }
    }
  }

  .tabs {
    width: 100%;
    height: 58px;
    background-color: #ffffff;
    margin-top: 21px;
    display: flex;

    div {
      flex: 1 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        height: 100%;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .active {
        border-bottom: 3px solid rgba(245, 167, 0, 1);
      }
    }
  }

  .tabs_all {
    grid-template-columns: repeat(4, 1fr);
  }

  .list_box {
    width: 333px;
    background: #ffffff;
    box-shadow: 0px 1px 18px 0px rgba(0, 29, 124, 0.08);
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    margin-top: 14px;

    .list_item {
      width: 100%;
      padding: 0 20px;
      min-height: 55px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #878B97;
        word-break: break-word;
      }
    }
  }
}
</style>
