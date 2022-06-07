<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#fff"
        @click="$router.go(-1)"
      />
      <span>{{ title }}</span>
    </section>

    <div class="main" v-html="content"></div>
  </div>
</template>

<script>
import Kefu from '@/constant/kefu.vue'
export default {
  name: 'Kefu',

  extends: Kefu,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    background-color: rgba(4, 66, 164, 1);

    span {
      color: #fff;
    }
  }

  .main {
    width: 100%;
    height: max-content;
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
