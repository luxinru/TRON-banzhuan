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

    <div class="box" v-html="content">
    </div>
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
  padding: 0 0 24px 0;
  min-height: 100vh;

  .topbar {
    background-color: #fff;
  }

  .box {
    width: 100%;
    // min-height: 100vh;
    height: max-content;
    // background-color: #f8f8f8;
    padding: 16px 13px;
    overflow: hidden;

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
