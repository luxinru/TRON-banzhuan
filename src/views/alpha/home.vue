<template>
  <div class="page_root">
    <section class="header">
      <div class="title">
        <img class="img" src="@/assets/images/alpha/矢量智能对象(2).png" />
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
              <img src="@/assets/images/alpha/语言.png" />
            </template>
          </van-popover>
          <img
            src="@/assets/images/alpha/邮箱.png"
            @click="toRoute('/notice')"
          />
          <img
            src="@/assets/images/alpha/我的 (3).png"
            @click="toRoute('/mine')"
          />
          <img
            src="@/assets/images/alpha/客服3.png"
            @click="toRoute('/kefu')"
          />
        </div>
      </div>
    </section>

    <section class="funs">
      <van-swipe class="swipe" indicator-color="#fff">
        <van-swipe-item>
          <div class="item">
            <div class="info">
              <span class="info_title">TRC-USDT</span>
              <div class="labels">
                <span class="value">{{ usdt.toFixed(6) }}</span>
                <span class="label">USDT</span>
              </div>
              <div class="labels">
                <span class="value">{{ usdt.toFixed(6) }}</span>
                <span class="label">USD</span>
              </div>
            </div>
            <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 2 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div @click="$router.push('/withdraw')">
                {{ $t('withdrawal') }}
              </div>
            </div>
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <span class="info_title">TRX</span>
              <div class="labels">
                <span class="value">{{ trx.toFixed(6) }}</span>
                <span class="label">TRX</span>
              </div>
              <div class="labels">
                <span class="value">{{ (price_in_usd * trx).toFixed(6) }}</span>
                <span class="label">USD</span>
              </div>
            </div>
            <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 1 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div @click="$router.push('/withdraw')">
                {{ $t('withdrawal') }}
              </div>
            </div>
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <div class="info_title">ERC-USDT</div>
              <div class="labels">
                <span class="value">0.000000</span>
                <span class="label">USDT</span>
              </div>
              <div class="labels">
                <span class="value">0.00</span>
                <span class="label">USD</span>
              </div>
            </div>
            <!-- <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 3 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div>{{ $t('swap') }} TRC-USDT</div>
            </div> -->
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <div class="info_title">BNB</div>
              <div class="labels">
                <span class="value">0.000000 </span>
                <span class="label">BNB</span>
              </div>
              <div class="labels">
                <span class="value">0.00</span>
                <span class="label">USD</span>
              </div>
            </div>
            <!-- <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 4 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div>{{ $t('swap') }} TRC-USDT</div>
            </div> -->
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <div class="info_title">BTC</div>
              <div class="labels">
                <span class="value">0.000000</span>
                <span class="label">BTC</span>
              </div>
              <div class="labels">
                <span class="value">0.00</span>
                <span class="label">USD</span>
              </div>
            </div>
            <!-- <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 5 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div>{{ $t('swap') }} TRC-USDT</div>
            </div> -->
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <div class="info_title">ETH</div>
              <div class="labels">
                <span class="value">0.000000</span>
                <span class="label">ETH</span>
              </div>
              <div class="labels">
                <span class="value">0.00</span>
                <span class="label">USD</span>
              </div>
            </div>
            <!-- <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 6 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div>{{ $t('swap') }} TRC-USDT</div>
            </div> -->
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <div class="info_title">DOGE</div>
              <div class="labels">
                <span class="value">0.000000</span>
                <span class="label">DOGE</span>
              </div>
              <div class="labels">
                <span class="value">0.00</span>
                <span class="label">USD</span>
              </div>
            </div>
            <!-- <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 7 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div>{{ $t('swap') }} TRC-USDT</div>
            </div> -->
          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="item">
            <div class="info">
              <div class="info_title">UNI</div>
              <div class="labels">
                <span class="value">0.000000</span>
                <span class="label">UNI</span>
              </div>
              <div class="labels">
                <span class="value">0.00</span>
                <span class="label">USD</span>
              </div>
            </div>
            <!-- <div class="btns">
              <div
                @click="
                  $router.push({ path: '/recharge-detail', query: { type: 8 } })
                "
              >
                {{ $t('recharge') }}
              </div>
              <div>{{ $t('swap') }} TRC-USDT</div>
            </div> -->
          </div>
        </van-swipe-item>
      </van-swipe>

      <div class="funs_content">
        <div class="part">
          <span> {{ $t('investment_amount') }}(USD) </span>
          <span> {{ $t('cumulative_income') }}(USDT) </span>
          <span> {{ $t('cumulative_income') }}(TRX) </span>
        </div>
        <div class="part">
          <span> {{ usdSum }} </span>
          <span> {{ usdtProfit }} </span>
          <span> {{ trxProfit }} </span>
        </div>
      </div>

      <div class="upload_btn" @click="$router.push('/getVIP')">
        {{ $t('upgrade') }}
        <img src="@/assets/images/alpha/矩形 616.png" />
      </div>
    </section>
  </div>
</template>

<script>
import Home from '@/constant/home.vue'
export default {
  name: 'Home',

  extends: Home,

  components: {}
}
</script>

<style lang="less" scoped>
.page_root {
  padding: 0 0 50px 0;
  background-color: rgba(241, 244, 249, 1);

  .header {
    width: 100%;
    background-color: #fff;

    .title {
      width: 100%;
      height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px;

      .img {
        height: 31px;
      }

      .imgs {
        display: flex;
        align-items: center;

        img {
          height: 21px;
          margin-right: 20px;

          &:last-child {
            height: 23px;
            margin-right: 0;
          }
        }

        .popover {
          height: 23px;
          line-height: 0;
          margin-right: 20px;

          img {
            height: 100%;
          }
        }
      }
    }
  }

  .funs {
    position: relative;
    width: 333px;
    margin-top: 12px;
    padding: 24px 19px 64px;
    background-color: rgba(245, 167, 0, 1);
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .swipe {
      width: 100%;
      padding-bottom: calc(3.2vw + 16px);
      border-bottom: 1px dashed #fff;

      .item {
        width: 100%;

        .info {
          width: 100%;
          display: flex;
          flex-direction: column;

          .info_title {
            width: 100%;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            margin-bottom: 5px;
          }

          .labels {
            width: 100%;
            display: flex;
            align-items: flex-end;

            .value {
              font-size: 26px;
              font-family: PingFang SC;
              font-weight: 600;
              color: #ffffff;
            }

            .label {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #ffffff;
              margin: 0 0 5px 10px;
            }
          }
        }

        .btns {
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: 10px;

          div {
            padding: 6.5px 26px;
            background-color: rgba(255, 255, 255, 1);
            border-radius: 15px;
            font-size: 13px;
            font-weight: 400;
            color: #f5a700;

            &:last-child {
              margin-left: 13px;
            }
          }
        }
      }
    }

    .funs_content {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 21px;

      .part {
        width: 100%;
        display: flex;

        span {
          flex: 1 0;
          text-align: center;

          font-size: 11px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ffffff;
        }

        &:last-child {
          margin-top: 10px;
          span {
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
          }
        }
      }
    }

    .upload_btn {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffcb80;
      background-color: rgba(201, 137, 0, 1);
      padding: 0 19px;

      img {
        height: 8px;
      }
    }
  }
}
</style>
