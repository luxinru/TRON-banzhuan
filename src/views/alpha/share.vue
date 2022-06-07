<template>
  <div class="page_root">
    <van-icon
      class="icon"
      name="arrow-left"
      color="#fff"
      @click="$router.go(-1)"
    />

    <span class="title"> {{ $t('invite_your_contacts') }} </span>

    <span class="sub_title"> {{ $t('or_friends_and_earn_rewards') }} </span>

    <span class="refer"> {{ $t('refer_and_earn_rewards') }} </span>

    <span class="tip"> {{ $t('share_your_referal_link_and_start_earning') }} </span>

    <div class="code_box">
      <div class="code">
        <img :src="data.share_image_url" class="qrcode" />
      </div>
    </div>

    <div class="url">{{ data.register_url }}</div>

    <div class="btn" :data-clipboard-text="data.register_url" @click="copy">
      {{ $t('copy_link') }}
    </div>
  </div>
</template>

<script>
import Share from '@/constant/share.vue'
export default {
  name: 'Share',

  extends: Share,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  position: relative;
  padding: 0 21px 0;
  min-height: 812px;
  background: url('~@/assets/images/alpha/组 7.png') no-repeat;
  background-size: 100% 812px;
  align-items: flex-start;

  .icon {
    position: absolute;
    left: 13px;
    top: 11px;
  }

  .title {
    width: 70%;
    font-size: 33px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #b30b15;

    background: linear-gradient(0deg, #efd19e 0%, #f4a667 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 106px;
    word-break: break-word;
    text-align: left;
  }

  .sub_title {
    width: 60%;
    font-size: 23px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #b30b15;

    background: linear-gradient(0deg, #efd19e 0%, #f4a667 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 18px;
  }

  .refer {
    height: 22px;
    background: #f0a05d;
    border-radius: 2px;
    padding: 0 22px;
    font-size: 13px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin-top: 28px;
  }

  .tip {
    width: 100%;
    word-break: break-word;
    font-size: 13px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 17px;
  }

  .code_box {
    width: 112px;
    height: 112px;
    margin-top: 31px;
    padding: 3px;
    background-color: #fff;
    .code {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .url {
    padding: 4px 11px;
    border: 1px solid #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    word-break: break-word;
    margin-top: 20px;
    opacity: 0.6;
  }

  .btn {
    margin-top: 11px;
    padding: 0 24px;
    height: 32px;
    background: #f0a05d;
    border-radius: 2px;
    display: flex;
    align-items: center;
    font-size: 13px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
  }
}
</style>
