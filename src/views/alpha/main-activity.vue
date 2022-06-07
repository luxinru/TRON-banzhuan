<template>
  <div class="page_root">
    <section class="header">
      <div class="title">
        <img class="img" src="@/assets/images/alpha/TRWin.png" alt="" />
        <div class="imgs">
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

          <img
            src="@/assets/images/alpha/消息提示 拷贝.png"
            alt=""
            @click="toRoute('/notice')"
          />
        </div>
      </div>
    </section>

    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img :src="item.thumb" alt="" />
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar
      class="notice_bar"
      background="#ffffff"
      color="#1B0A1C"
      :text="data.notice"
    >
      <template #left-icon>
        <img src="@/assets/images/alpha/喇叭 拷贝.png" />
      </template>
    </van-notice-bar>

    <section class="sub-title">{{ $t('Bounty_task') }}</section>

    <section class="list" v-if="loading">
      <div class="item" v-if="statusData.is_youtube_promoter !== 0">
        <img src="@/assets/images/alpha/Youtube (1).png" alt="" />
        <div class="info">
          <span>{{ $t('Invite_Youtube_partners') }}</span>
          <span>{{ $t('Invite_Youtube_partners_text') }}</span>
          <span>+2TRX</span>
        </div>
        <div class="btn" @click="$router.push('/invite-to-join')">
          {{ $t('go_to_pick_up') }}
        </div>
      </div>

      <div class="item">
        <img src="@/assets/images/alpha/签到.png" alt="" />
        <div class="info">
          <span>{{ $t('Daily_check_in_tasks') }}</span>
          <span>{{ $t('Daily_check_in_tasks_text') }}</span>
          <span>+2TRX</span>
        </div>
        <div v-if="statusData.sign_status === 1" class="btn no_active">
          {{ $t('received') }}
        </div>
        <div v-else class="btn" @click="$router.push('/qiandao')">
          {{ $t('go_to_pick_up') }}
        </div>
      </div>

      <div class="item">
        <img src="@/assets/images/alpha/邀请.png" alt="" />
        <div class="info">
          <span>{{ $t('Invite_friends_task') }}</span>
          <span>{{ $t('Invite_friends_task_text') }}</span>
          <span>+2TRX</span>
        </div>
        <div class="btn" @click="$router.push('/share')">
          {{ $t('invite_now') }}
        </div>
      </div>

      <div class="item">
        <img src="@/assets/images/alpha/youtube.png" alt="" />
        <div class="info">
          <span>{{ $t('YouTube_Blogger_Promoter') }}</span>
          <span>{{ $t('YouTube_Blogger_Promoter_text', {value: invitation_rebate1}) }}</span>
          <span> +{{statusData.youtube_by_reward}}TRX </span>
        </div>
        <div v-if="statusData.is_youtube_promoter === 1" class="btn no_active">
          {{ $t('joined') }}
        </div>
        <div v-else class="btn" @click="$router.push('/be-youtube')">
          {{ $t('Applications_for_Membership') }}
        </div>
      </div>

      <div class="item">
        <img src="@/assets/images/alpha/Telegram_telegram.png" alt="" />
        <div class="info">
          <span>{{ $t('Follow_Telegram_channel_tasks') }}</span>
          <span>{{ $t('Follow_Telegram_channel_tasks_text') }}</span>
          <span> +{{statusData.follow_telegram_channel_money}}TRX </span>
        </div>
        <div
          v-if="statusData.is_follow_telegram_channel === 1"
          class="btn no_active"
        >
          {{ $t('received') }}
        </div>
        <div v-else class="btn" @click="$router.push('/focus-youtube')">
          {{ $t('go_to_pick_up') }}
        </div>
      </div>

      <div class="item" v-if="footerType === 'n2'">
        <img src="@/assets/images/alpha/矿机.png" alt="" />
        <div class="info">
          <span>{{ $t('Participate_mining_investment') }}</span>
          <span>{{ $t('Participate_mining_investment_text') }}</span>
          <span>+2TRX</span>
        </div>
        <div class="btn" @click="$router.push('/home')">
          {{ $t('Participate_in_mining') }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MainActivity from '@/constant/main-activity.vue'
export default {
  name: 'MainActivity',

  extends: MainActivity,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 60px 0;
  min-height: 100vh;
  // background-color: #fff;
  .header {
    width: 100%;
    height: 181px;
    background: #033692;

    .title {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 27px 0 8px;

      .img {
        width: 113px;
        height: 46px;
      }

      .imgs {
        display: flex;
        align-items: center;

        .popover {
          height: 18px;
          line-height: 0;
          img {
            height: 100%;
          }
        }

        img {
          height: 18px;

          &:first-child {
            margin-right: 11px;
          }
        }
      }
    }
  }

  .swipe {
    width: calc(100% - 16px * 2);
    height: 180px;
    margin-top: -120px;

    /deep/ img {
      width: 100%;
      height: 100%;
    }
  }

  .notice_bar {
    margin-top: 14px;
    width: calc(100% - 16px * 2);
    height: 35px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;

    /deep/.van-notice-bar__content {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.5);
    }

    img {
      height: 13px;
      margin-right: 9px;
    }
  }

  .sub-title {
    width: calc(100% - 16px * 2);
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #050505;
    line-height: 16px;
    margin: 18px 0;
    word-break: break-word;
  }

  .list {
    width: calc(100% - 16px * 2);
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    margin-bottom: 24px;

    .item {
      width: 100%;
      // min-height: 100px;
      height: max-content;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      padding: 16px 0;

      &:last-child {
        border: none;
      }

      img {
        width: 47px;
        height: 47px;
        align-self: flex-start;
      }

      .info {
        flex: 1 0;
        min-height: 47px;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        span {
          width: 100%;
          word-wrap: break-word;

          &:nth-child(1) {
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #333333;
            line-height: 13px;
          }
          &:nth-child(2) {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #afafaf;
            line-height: 13px;
            margin-top: 10px;
          }
          &:nth-child(3) {
            width: max-content;
            height: 18px;
            padding: 0 10px;
            background: linear-gradient(90deg, #fc8a41 0%, #ff5f36 100%);
            border-radius: 9px;
            display: flex;
            align-items: center;
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            margin: 10px 0 0;
          }
        }
      }

      .btn {
        max-width: 80px;
        padding: 5px 16px;
        background: #033692;
        border-radius: 13px;
        text-align: center;
        font-size: 11px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        word-wrap: break-word;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .no_active {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
