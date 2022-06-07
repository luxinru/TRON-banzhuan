<template>
  <div class="page_root">
    <section class="topbar">
      <van-icon
        class="icon"
        name="arrow-left"
        color="#000"
        @click="$router.go(-1)"
      />
      <span>{{ $t('about_us') }}</span>
    </section>

    <section class="box">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        @click="
          $router.push({ path: '/about-content', query: { id: item.id } })
        "
      >
        <span class="name">{{ item.title }}</span>
        <div class="left_info">
          <span></span>
          <img src="@/assets/images/alpha/方向 - 下 拷贝 10.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import About from '@/constant/about.vue'
export default {
  name: 'About',

  extends: About,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 0 0;
  min-height: 100vh;

  .topbar {
    background-color: #fff;
  }

  .box {
    margin-top: 13px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    background-color: #fff;

    .item {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.14);
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:last-child {
        border: none;
      }

      .name {
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }

      .left_info {
        display: flex;
        align-items: center;

        span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #043d9e;
        }

        img {
          height: 14px;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
