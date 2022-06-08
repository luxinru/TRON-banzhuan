<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ title }}</span>
    </section>

    <div class="box" v-html="content"></div>
  </div>
</template>

<script>
import Privacy from '@/constant/privacy.vue'
export default {
  name: 'Privacy',

  extends: Privacy,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 48px 13px;
  min-height: 100vh;
  background-color: rgba(247, 246, 249, 1);

  .topbar {
    background-color: rgba(247, 246, 249, 1);
    span {
      color: rgba(0, 0, 0, 1);
    }

    .select {
      position: absolute;
      right: 16px;
      display: flex;
      align-items: center;

      span {
        color: rgba(255, 255, 255, 1);
        font-size: 12px;
        font-weight: 400;
        margin-right: 4px;
      }
    }
  }

  .box {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 9px 0px rgba(19, 19, 20, 0.08);
    border-radius: 7px;
    padding: 30px 20px;
    margin-top: 16px;

    /deep/ p {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 19px;
      &:first-child {
        margin-top: 0;
      }
      margin-top: 8px;

      img {
        width: 100%;
      }

      a {
        color: rgba(94, 99, 231, 1);
      }
    }
  }
}
</style>
