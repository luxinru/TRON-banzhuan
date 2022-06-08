<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('become_a_promoter') }}</span>
    </section>

    <section class="logo"></section>

    <section class="title">
      {{ $t('Advantages_of_Youtube_Blogger_Promoter') }}
    </section>

    <section class="part">
      <table class="table1">
        <tr>
          <th>
            {{ $t('Ordinary_member') }}
          </th>
          <th>
            {{ $t('Youtube_Blogger_Promoter') }}
          </th>
        </tr>
        <tr>
          <td>
            {{
              $t('Invitation_to_register_successfully_and_reward_XTRX', {
                value: invitation_rebate1,
              })
            }}
          </td>
          <td>
            {{
              $t('Invitation_to_register_successfully_and_reward_XTRX', {
                value: invitation_rebate2,
              })
            }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('No_Youtube_video_reward') }}
          </td>
          <td>
            {{ $t('Have_Youtube_Video_Rewards') }}
          </td>
        </tr>
        <tr>
          <td>
            {{ $t('low_task_reward') }}
          </td>
          <td>
            {{ $t('Update_Youtube_blogger_task_rewards') }}
          </td>
        </tr>
      </table>
    </section>

    <section class="title">
      {{ $t('Apply_to_join_Youtube_Blogger_Promoter') }}
    </section>

    <section class="part">
      <div class="item">
        <span class="label">{{ $t('Your_Youtube_channel_link') }}</span>
        <input
          v-model="telegram_channel"
          type="text"
          :placeholder="$t('please_enter') + $t('Your_Youtube_channel_link')"
        />
      </div>

      <div class="item">
        <span class="label">{{
          $t('Number_of_subscriptions_to_your_Youtube_channel')
        }}</span>
        <input
          v-model="youtube_num_concerns"
          type="text"
          :placeholder="
            $t('please_enter') +
            $t('Number_of_subscriptions_to_your_Youtube_channel')
          "
        />
      </div>

      <div class="item">
        <span class="label">{{ $t('Your_Telegarm_account') }}</span>
        <input
          v-model="telegram_account"
          type="text"
          :placeholder="$t('please_enter') + $t('Your_Telegarm_account')"
        />
      </div>

      <span class="tip">
        {{ $t('YouTube_profileTelegram_account_information') }}
      </span>
    </section>

    <section class="btn" :class="{ no_active: status === 1 }" @click="submit">
      {{ $t('Submit_review') }}
    </section>

    <van-dialog
      class="dialog"
      v-model="isShow"
      closeOnClickOverlay
      :showConfirmButton="false"
    >
      <section class="dialog_content">
        <img src="@/assets/images/alpha/审核中.png" />
        <span>{{
          innerStatus === 0
            ? $t('Waiting_for_admin_review')
            : $t('verification_failed')
        }}</span>
        <span>{{ $t('please_follow_the_Telegram_channel') }}</span>
        <a :href="telegramuRL">{{ telegramuRL }}</a>
        <div class="ok" @click="onOk">{{ $t('ok') }}</div>
        <div class="back" @click="onBack">{{ $t('back') }}</div>
      </section>
    </van-dialog>
  </div>
</template>
<script>
import BeYoutube from '@/constant/be-youtube.vue'
export default {
  name: 'BeYoutube',

  extends: BeYoutube,

  components: {},

  data () {
    return {}
  },

  mounted () {},

  methods: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;
  padding: 0;
  .topbar {
    background-color: #f9f9f9;
  }

  .logo {
    width: calc(100% - 16px * 2);
    height: 180px;
    margin-top: 16px;
    background: url('~@/assets/images/alpha/组 2 (1).png') no-repeat;
    background-size: 100% 100%;
  }

  .title {
    width: calc(100% - 16px * 2);
    font-size: 17px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #050505;
    margin: 22px 0;
  }

  .part {
    width: calc(100% - 16px * 2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    .table1 {
      width: 100%;
      border-collapse: collapse;

      th {
        border: 1px solid rgba(3, 11, 74, 1);
        padding: 15px 4px;
        text-align: center;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        background-color: rgba(72, 110, 201, 1);
      }

      td {
        border: 1px solid rgba(3, 11, 74, 1);
        padding: 15px 4px;
        text-align: center;
        word-break: break-word;
        overflow: hidden;

        &:first-child {
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.5);
        }

        &:last-child {
          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ff8a00;
        }
      }
    }

    .item {
      width: 100%;
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      grid-column-gap: 10px;
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }

      .label {
        font-size: 10px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 14px;
      }

      input {
        width: 100%;
        min-height: 36px;
        padding: 0 8px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        border: none;
        outline: none;
        font-size: 12px;
      }
    }

    .tip {
      width: 70%;
      font-size: 11px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ff8a00;
      line-height: 14px;
      text-align: center;
      word-break: break-word;
      margin-top: 16px;
    }
  }

  .btn {
    width: calc(100% - 16px * 2);
    height: 47px;
    background: linear-gradient(90deg, #eb8d3a 0%, #ed522f 100%);
    border-radius: 23px 23px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    margin: 16px 0;
  }

  .no_active {
    background: linear-gradient(
      90deg,
      rgba(235, 141, 58, 0.3) 0%,
      rgba(237, 82, 47, 0.3) 100%
    );
  }

  .dialog {
    width: 80vw;
    padding: 32px 27px;

    .dialog_content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 44px;
        height: 44px;
        margin: 13px 0 22px;
      }

      span {
        width: 100%;
        text-align: center;
        word-wrap: break-word;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 24px;
      }

      a {
        color: rgba(237, 83, 47, 1);
        text-decoration: underline;
      }

      .ok {
        width: 100%;
        height: 36px;
        background: linear-gradient(92deg, #eb8c39 0%, #ed5330 100%);
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        margin-top: 32px;
      }

      .back {
        width: 100%;
        height: 36px;
        border: 1px solid #ed5330;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ed5330;
        margin-top: 8px;
      }
    }
  }
}
</style>
