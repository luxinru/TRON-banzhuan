<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('invite_to_join') }}</span>
    </section>

    <section class="logo"></section>

    <section class="title">
      {{ $t('Invite_Youtube_to_join_partner_instructions') }}
    </section>

    <section class="box">
      <div class="info">
        <span>{{ $t('Invite_YouTube_bloggers_text1') }}</span>
        <span>{{ $t('Invite_YouTube_bloggers_text2') }}</span>
        <span>{{ $t('Invite_YouTube_bloggers_text3', { value: invitation_rebate1 }) }}</span>
      </div>

      <div class="copy">
        <div class="item">
          <span class="label">{{ $t('invitation_link') }}</span>
          <div class="value_box">
            <span>{{ data.register_url }}</span>
            <img
              class="url"
              src="@/assets/images/alpha/文件 (2) 拷贝.png"
              alt=""
              :data-clipboard-text="data.register_url"
              @click="onCopyUrl"
            />
          </div>
        </div>
        <div class="item">
          <span class="label">{{ $t('invitation_code') }}</span>
          <div class="value_box">
            <span>{{ data.code }}</span>
            <img
              class="code"
              src="@/assets/images/alpha/文件 (2) 拷贝.png"
              alt=""
              :data-clipboard-text="data.code"
              @click="onCopyCode"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="tab">
      <span :class="{ active: active === 1 }" @click="active = 1">{{
        $t('my_youtube_blogger_list')
      }}</span>
      <span :class="{ active: active === 2 }" @click="active = 2">{{
        $t('YouTube_bloggers_contribute_profits')
      }}</span>
    </section>

    <section class="part">
      <div class="part_title" v-if="active === 2">
        <span>{{
          $t('Number_of_people_eligible_for_the_award', {
            value: team_num || 0,
          })
        }}</span>
        <span>{{
          $t('Reward_amount_XTRX', { value: reward_money || 0 })
        }}</span>
      </div>

      <table v-if="active === 1">
        <tr>
          <th>{{ $t('my_youtube_blogger') }}</th>
          <th>{{ $t('my_invitation_reward') }}</th>
        </tr>
        <tr v-for="(item, index) in team" :key="index">
          <td>{{ item.sphone }}</td>
          <td>+{{ item.money }}TRX</td>
        </tr>
      </table>

      <table v-if="active === 2">
        <tr>
          <th>{{ $t('YouTube_Blogger_Referral_Member') }}</th>
          <th>{{ $t('my_reward') }}</th>
          <th>{{ $t('bonus_time') }}</th>
        </tr>
        <tr v-for="(item, index) in youtube_team" :key="index">
          <td>{{ item.sphone }}</td>
          <td>+{{ item.money }}TRX</td>
          <td>{{ item.time }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>
<script>
import InviteToJoin from '@/constant/invite-to-join.vue'
export default {
  name: 'InviteToJoin',

  extends: InviteToJoin,

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
    background: url('~@/assets/images/alpha/头图 拷贝.png') no-repeat;
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

  .box {
    width: calc(100% - 16px * 2);
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 27px 17px;

    .info {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ed5530;
      line-height: 20px;
      display: flex;
      flex-direction: column;
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

  .tab {
    width: calc(100% - 16px * 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    margin-top: 25px;

    span {
      width: 100%;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      padding-bottom: 9px;
      border-bottom: 2px solid transparent;
      text-align: center;
    }

    .active {
      color: rgba(0, 0, 0, 1);
      border-bottom: 2px solid rgba(4, 58, 152, 1);
    }
  }

  .part {
    width: calc(100% - 16px * 2);
    padding: 16px;
    background: #ffffff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    margin: 16px 0;

    .part_title {
      width: 100%;
      background: #ff6137;
      display: flex;

      span {
        flex: 1 0;
        padding: 10px 4px;
        text-align: center;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
      }
    }

    table {
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
        font-size: 11px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
