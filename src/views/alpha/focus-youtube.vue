<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('Follow_Telegram_channel') }}</span>
    </section>

    <section class="logo"></section>

    <section class="title">
      {{ $t('Follow_the_reward_XTRX', { value: 2 }) }}
    </section>

    <section class="sub_title">{{ $t('Follow_Telegram_channel') }}</section>
    <a :href="telegramChannel" class="sub_title" style="color: rgba(4, 66, 164, 1);">{{ telegramChannel }}</a>

    <section class="input_box">
      <span>{{
        $t('Please_follow_the_Telegram_channel_first_to_get_the_code')
      }}</span>
      <input v-model="code" type="text" :placeholder="$t('Please_enter_the_pick_up_code')" />
    </section>

    <section class="btn" :class="{ no_acitve: status === 1 }" @click="submit">
      {{ $t('Receive_award') }}
    </section>
  </div>
</template>
<script>
import FocusYoutube from '@/constant/focus-youtube.vue'
export default {
  name: 'FocusYoutube',

  extends: FocusYoutube,

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
  background-color: #fff;
  .topbar {
    background-color: #fff;
  }

  .logo {
    width: 315px;
    height: 275px;
    background: url('~@/assets/images/alpha/e0c5ae8776571f7803c96e931e82a887d918f773c2d0-x7WxdE_fw1200.png')
      no-repeat;
    background-size: 100% 100%;
    margin: 16px 0 0 59px;
  }

  .title {
    width: calc(100% - 16px * 2);
    word-break: break-word;
    text-align: center;
    font-size: 19px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ed532f;
    line-height: 13px;
    margin: 50px 0 24px 0;
  }

  .sub_title {
    width: calc(100% - 16px * 2);
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 24px;
    margin-top: 15px;
    text-align: center;
  }

  a {
    text-decoration: underline;
  }

  .input_box {
    width: calc(100% - 16px * 2);
    display: flex;
    flex-direction: column;
    margin-top: 46px;

    span {
      width: 100%;
      word-break: break-word;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #323232;
    }

    input {
      width: 100%;
      height: 47px;
      background: #fbfbfe;
      border: 1px solid #f4f4f6;
      border-radius: 4px;
      margin-top: 18px;
      padding: 0 20px;
      display: flex;
      align-items: center;
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
    margin: 39px 0;
  }

  .no_active {
    background: linear-gradient(
      90deg,
      rgba(235, 141, 58, 0.3) 0%,
      rgba(237, 82, 47, 0.3) 100%
    );
  }
}
</style>
