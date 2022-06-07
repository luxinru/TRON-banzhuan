<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ $t('daily_check_in') }}</span>
    </section>

    <section class="title">
      <span>{{ data.team_count || 0 }}</span>
      <span>{{ $t('Invite_friends_to_withdraw_successfully') }}</span>
    </section>

    <section class="tips">
      <span class="tips_title">{{
        $t('Sign_in_task_reward_description')
      }}</span>
      <div class="tips_content">
        <div>
          <span></span>
          {{ $t('Sign_in_task_reward_description_text1') }}
        </div>
        <div>
          <span></span>
          {{ $t('Sign_in_task_reward_description_text2') }}
        </div>
        <div>
          <span></span>
          {{ $t('Sign_in_task_reward_description_text3') }}
        </div>
      </div>
      <span class="tips_title mt16">{{ $t('Reward_amount_introduction') }}</span>
      <div class="tips_content">
        <div>
          <span></span>
          {{
            $t('Reward_amount_introduction_text', { value1: data.sign_num1, value2: data.sign_money1 })
          }}
        </div>
        <div>
          <span></span>
          {{
            $t('Reward_amount_introduction_text', { value1: data.sign_num2, value2: data.sign_money2 })
          }}
        </div>
        <div>
          <span></span>
          {{
            $t('Reward_amount_introduction_text', { value1: data.sign_num3, value2: data.sign_money3 })
          }}
        </div>
      </div>
    </section>

    <section class="calendar">
      <!-- <div class="info">
        <span>2</span>
        <span>{{ $t('You_have_accumulated_check_ins') }}/{{ $t('day') }}</span>
      </div>

      <span class="line"></span> -->

      <div class="content">
        <van-calendar
          readonly
          row-height="36"
          color="rgba(42, 31, 220, 1)"
          :show-mark="false"
          :show-title="false"
          :poppable="false"
          :show-confirm="false"
        />
      </div>

      <div class="btn" :class="{no_active: data.status === 1}" @click="checkin">
        {{ $t('Sign_in_now') }}
      </div>
    </section>
  </div>
</template>

<script>
import Qiandao from '@/constant/qiandao.vue'
export default {
  name: 'Qiandao',

  extends: Qiandao
}
</script>

<style lang="less" scoped>
.page_root {
  position: relative;
  min-height: 987px;
  background: url('~@/assets/images/alpha/矩形 1686.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  padding: 0;
  .topbar {
    background-color: transparent;

    span {
      color: #fff;
    }
  }

  .title {
    margin-top: 74px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      text-align: center;
      word-break: break-word;
      &:first-child {
        font-size: 33px;
        font-family: DIN Alternate;
        font-weight: bold;
        color: #ffffff;
      }

      &:last-child {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 13px;
        margin-top: 8px;
      }
    }
  }

  .tips {
    width: 349px;
    padding: 24px 20px;
    background: #ffffff;
    border-radius: 7px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    .tips_title {
      width: 100%;
      word-break: break-word;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #142e67;
    }

    .tips_content {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 8px;
      div {
        width: 100%;
        word-break: break-word;
        display: flex;
        align-items: center;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(20, 46, 103, 1);
        line-height: 21px;
        span {
          width: 2px;
          height: 2px;
          background-color: rgba(236, 88, 48, 1);
          margin-right: 4px;
        }
      }
    }
  }

  .calendar {
    width: 349px;
    background: #FFFFFF;
    border-radius: 7px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 14px;

    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 12px;

      span {
        text-align: center;
        word-break: break-word;
        &:first-child {
          font-size: 33px;
          font-family: DIN Alternate;
          font-weight: bold;
          color: #EC5830;
        }

        &:last-child {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #000000;
          margin-top: 8px;
        }
      }
    }

    .line {
      width: 50px;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.3);
      margin: 25px 0;
    }
    .content {
      width: 100%;
      overflow: hidden;

      /deep/ .van-calendar {
        width: 100%;
        height: 255px;

        .van-calendar__header {
          background-color: RGBA(242, 246, 255, 1);
        }

        .van-calendar__month-title {
          display: none;
        }
      }
    }

    .btn {
      width: 274px;
      height: 47px;
      background: linear-gradient(90deg, #EB8D3A 0%, #ED522F 100%);
      border-radius: 23px 23px 24px 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>
