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

    <section class="daily_info">
      <section class="vip">
        <img src="@/assets/images/alpha/vip.png" />
        <div class="vip_info">
          <span>
            {{ $t('current_level') }}
            {{ title }} ({{ usdSum }} / {{ nextvip }})
          </span>
          <div class="progress">
            <span class="bar" :style="{ width: '30%' }"></span>
          </div>
        </div>
      </section>

      <section class="taoli" v-if="interest_arbitrage_num - curARNum === 0">
        {{ $t('trade_num') }}:
        {{
          0 > interest_arbitrage_num - curARNum
            ? 0
            : interest_arbitrage_num - curARNum
        }}
        / {{ interest_arbitrage_num }}
      </section>

      <section class="taoli" v-if="interest_arbitrage_num - curARNum !== 0">
        {{ $t('trade_num') }}:
        {{
          0 > interest_arbitrage_num - curARNum
            ? 0
            : interest_arbitrage_num - curARNum
        }}
        /
        {{ interest_arbitrage_num }}
      </section>

      <section class="taoli">{{ $t('trade_fee') }}: {{ cash_rate }}%</section>
    </section>

    <section class="model_btns">
      <div class="item" @click="$router.push('/swap-u-trx')">
        <div class="item_info">
          <span>{{ $t('swap') }}</span>
          <span>USDT/TRX</span>
        </div>
        <img src="@/assets/images/alpha/板式换热.png" />
      </div>

      <div class="item" @click="$router.push('/my-swap')">
        <div class="item_info">
          <span>{{ $t('my_investment') }}</span>
          <span>{{ $t('Invest_now') }}</span>
        </div>
        <img src="@/assets/images/alpha/项目.png" />
      </div>
    </section>

    <section class="main_title">
      {{ $t('lnvest_products') }}
    </section>

    <section class="product_list" v-if="coinInfo">
      <div class="item" v-for="(item, index) in coinInfo" :key="index">
        <div class="item_top">
          <img :src="getImgUrl(item.exchangeId)" alt="" />
          <div class="item_info">
            <span>{{ item.exchangeName }}</span>
            <span>{{ item.marketPair }}</span>
          </div>
        </div>
        <span class="item_bottom">
          {{ item.price.toFixed(6) }}
        </span>
      </div>
    </section>

    <section class="jiaohuan" @click="randomCoin">
      {{ $t('swap') }} (
      {{
        0 > interest_arbitrage_num - curARNum
          ? 0
          : interest_arbitrage_num - curARNum
      }}
      / {{ interest_arbitrage_num }} )
    </section>

    <section class="dialog_page" v-if="isShowModel">
      <div class="top_bar">
        {{ $t('swap') }}
        <span @click="isShowModel = false">取消</span>
      </div>

      <div class="content">
        <div class="info">
          <div class="item">
            <div class="title">
              <img :src="getImgUrl(left.id)" alt="" />
              <span>
                {{ left.name }}
              </span>
            </div>
            <div class="value">{{ left.price }}</div>
            <div class="unit">
              {{
                left.pairs
              }}
            </div>
          </div>

          <div class="jiantou">
            <img src="@/assets/images/alpha/箭头 (2).png" alt="" />
          </div>

          <div class="item">
            <div class="title">
              <img :src="getImgUrl(right.id)" alt="" />
              <span>
                {{
              right.name
            }}
              </span>
            </div>
            <div class="value">{{ right.price }}</div>
            <div class="unit">
              {{
                left.pairs
              }}
            </div>
          </div>
        </div>

        <div class="lirun">
          <img src="@/assets/images/alpha/financial-profit.png" alt="" />
          <span>{{ $t('trading_profit') }}: {{ (profit * 100).toFixed(2) }}%</span>
        </div>

        <div class="btns">
          <div class="item">
            <img src="@/assets/images/alpha/financial-profit.png" alt="" />
            <div class="info">
              <span class="tilte"> USDT: {{ usdt }} </span>
              <div class="value">
                <span>{{ $t('trading_profit') }}: {{ (usdt * profit).toFixed(6) }}USDT</span>
              </div>
              <span class="btn" @click="onSwap2(usdt, oid)"> Swap USDT </span>
            </div>
          </div>
          <div class="item">
            <img src="@/assets/images/alpha/financial-profit.png" alt="" />
            <div class="info">
              <span class="tilte"> TRX: {{ trx }} </span>
              <div class="value">
                <span>{{ $t('trading_profit') }}: {{ (trx * profit).toFixed(6) }}TRX</span>
              </div>
              <span class="btn" @click="onSwap1(trx, oid)"> Swap TRX </span>
            </div>
          </div>
        </div>
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

  .daily_info {
    width: 333px;
    height: 60px;
    background: #fff7e9;
    box-shadow: 0px 1px 7px 0px rgba(19, 19, 20, 0.06);
    border-radius: 4px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    margin-top: 14px;
    padding: 0 16px;

    section {
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }
    }

    .vip {
      display: flex;
      align-items: center;

      img {
        height: 21px;
      }

      .vip_info {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-left: 9px;

        span {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #c67b1d;
        }

        .progress {
          position: relative;
          width: 109px;
          height: 4px;
          background: rgba(104, 38, 0, 0.2);
          border-radius: 2px;
          margin-top: 10px;

          .bar {
            position: absolute;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(198, 123, 29, 1);
            border-radius: 2px;
          }
        }
      }
    }

    .taoli {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #c67b1d;
      margin-bottom: 11px;
    }
  }

  .model_btns {
    width: calc(100% - 21px * 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 12px;
    margin-top: 14px;

    .item {
      width: 100%;
      background: linear-gradient(90deg, #ffffff 0%, #eefdfd 100%);
      box-shadow: 0px 1px 7px 0px rgba(19, 19, 20, 0.06);
      border-radius: 4px;
      padding: 14px 16px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      img {
        height: 28px;
      }

      .item_info {
        flex: 1 0;
        display: flex;
        flex-direction: column;

        span {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #4a4e66;

          &:last-child {
            font-size: 11px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #109e9b;
            margin-top: 14px;
          }
        }
      }

      &:last-child {
        background: linear-gradient(90deg, #ffffff 0%, #faf4ff 100%);

        .item_info {
          span {
            &:last-child {
              color: rgba(172, 139, 200, 1);
            }
          }
        }
      }
    }
  }

  .main_title {
    width: 100%;
    font-size: 19px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #121c32;
    padding: 22px 21px;
  }

  .product_list {
    width: calc(100% - 21px * 2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    .item {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      box-shadow: 0px 1px 7px 0px rgba(19, 19, 20, 0.06);
      border-radius: 4px;
      overflow: hidden;

      .item_top {
        display: flex;
        align-items: center;
        padding: 16px;
        overflow: hidden;
        margin-bottom: 27px;

        img {
          height: 28px;
          margin-right: 16px;
        }

        .item_info {
          flex: 1 0;
          display: flex;
          flex-direction: column;

          span {
            width: 100%;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #000000;
            word-break: break-word;

            &:last-child {
              font-size: 11px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #f06500;
              margin-top: 5px;
            }
          }
        }
      }

      .item_bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 27px;
        background: #ff7236;
        box-shadow: 0px 1px 7px 0px rgba(19, 19, 20, 0.06);
        border-radius: 0px 0px 4px 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
      }
    }
  }

  .jiaohuan {
    width: calc(100% - 21px * 2);
    min-height: 47px;
    background: #f5a700;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin: 21px 0;
  }

  .dialog {
    max-height: 75%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #2f2f2f;
    line-height: 19px;
    overflow-y: scroll;

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #2f2f2f;
      line-height: 19px;

      .title {
        font-size: 17px;
        font-family: Arial;
        font-weight: bold;
        color: #1e253c;
        margin-bottom: 25px;
      }
    }

    .btn {
      // margin: 22px auto 0;
      width: 100%;
      height: 35px;
      background: rgba(4, 58, 152, 1);
      border-radius: 4px;
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn2 {
      margin: 12px auto 0;
      width: 100%;
      height: 35px;
      background: rgba(4, 58, 152, 1);
      border-radius: 4px;
      font-size: 17px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // *****
    .currency_slider_item {
      box-shadow: rgb(88 102 126 / 8%) 0px 1.06667vw 6.4vw,
        rgb(88 102 126 / 12%) 0px 1px 0.53333vw;

      // position: relative;
      border: 1px solid #f0f0f0;
      border-radius: 20px;
      padding: 8px;
      background: white;
      // min-width: 165px;
      margin: 5px;
      margin-top: 3px;
    }

    .currency_slider_item_top {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none !important;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-tap-highlight-color: transparent;
    }

    .currency_slider_item_top img {
      display: block;
      width: 25px;
      margin-right: 6px;
    }

    .currency_slider_item_bottom {
      margin-left: 10px;
      display: grid;
    }

    .currency_slider_item_buttom {
      line-height: 100%;
      text-align: center;
      display: grid;
    }

    .color-00003 {
      color: rgba(0, 0, 0, 0.3);
    }

    .fw-500 {
      font-weight: 500;
      // font-size: 50px;
      color: rgb(255, 255, 255);
      // margin-right: 16px;
      white-space: nowrap;
    }

    .fs-12 {
      font-size: 12px;
      // font-size: 11px;
      color: rgb(255, 255, 255);
      // margin-right: 16px;
      white-space: nowrap;
    }

    .cVPJov {
      font-size: 11px;
      color: rgb(88, 102, 126);
      margin-right: 16px;
      white-space: nowrap;
    }

    .kebcXZ {
      box-sizing: border-box;
      margin: 16px 0px 0px;
      width: 100%;
    }

    .ivGjzC {
      position: relative;
    }

    .ivGjzC.cards div[class^='carousel-arrow'] {
      width: 24px;
    }

    .ivGjzC div.carousel-arrow-prev {
      top: 0px;
      left: 0px;
      background-image: linear-gradient(
        to right,
        var(--color-light-neutral-1) 0%,
        transparent 100%
      );
    }

    .ivGjzC .carousel-items-wrapper {
      overflow: scroll;
      white-space: nowrap;
      width: 100%;
    }

    .ivGjzC.cards .carousel-item {
      background-color: var(--bg-color);
      padding: 13px 16px;
      border-radius: 8px;
    }

    .gqEJJS {
      position: absolute;
      top: 0px;
      right: 0px;
    }

    .gqEJJS2 {
      box-sizing: border-box;
      margin: 0px;
    }

    .ekMmID {
      box-sizing: border-box;
      margin: 0px;
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
    }

    .FTuib {
      line-height: 1.5;
      margin: 0px 8px 0px 0px;
      color: rgb(88, 102, 126);
      font-weight: 500;
      font-size: 12px;
    }

    .cSTqvK {
      width: 100%;
      box-sizing: border-box;
      margin-top: 10px;
      display: inline-flex;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      background: rgb(239, 242, 245);
      border-radius: 8px;
      outline: 0px;
      font-weight: 600;
      cursor: pointer;
      color: rgb(0, 0, 0);
      padding: 5px 8px;
      font-size: 12px;
      line-height: 22px;
    }

    .dWGZqy {
      box-sizing: border-box;
      margin: 0px;
      height: 14px;
      width: 14px;
    }

    .dbuYiO {
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      display: block;
      position: fixed;
      bottom: 0;
    }

    .lgnbfA {
      width: 100%;
      -webkit-box-align: center;
      align-items: center;
      // background: rgb(56, 97, 251);
      background: linear-gradient(92.43deg, #f5b67d 0.81%, #ec4553 99.58%);
      border: 0px;
      border-radius: 8px;
      display: inline-flex;
      color: rgb(255, 255, 255);
      cursor: pointer;
      -webkit-box-pack: center;
      justify-content: center;
      outline: 0px;
      font-weight: 600;
      // width: auto;
      height: 48px;
      font-size: 14px;
      padding: 0px 24px;
      line-height: 24px;
    }
  }

  .dialog_page {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    background-color: #fff;

    .top_bar {
      position: relative;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(222, 222, 222, 1);

      span {
        position: absolute;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #367acf;
        right: 22px;
      }
    }

    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 21px;

      .info {
        width: 100%;
        display: flex;
        flex-direction: column;

        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 23px;

          .title {
            background: #f3f3f3;
            border-radius: 20px;
            padding: 10px 16px;
            display: flex;
            align-items: center;

            img {
              height: 17px;
              margin-right: 16px;
            }
            span {
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #000000;
            }
          }

          .value {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #000000;
            margin-top: 26px;
          }

          .unit {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #5a5c65;
            margin-top: 16px;
          }
        }

        .jiantou {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgba(222, 222, 222, 1);
          margin-top: 14px;

          img {
            height: 17px;
          }
        }
      }

      .lirun {
        width: max-content;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        margin: 19px auto 0;
        background-color: rgba(245, 167, 0, 0.1);

        img {
          height: 23px;
          margin-right: 10px;
        }

        span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #2c254c;
        }
      }

      .btns {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        .item {
          width: 100%;
          display: flex;
          background: #f3f3f3;
          border-radius: 7px;
          align-items: flex-start;
          padding: 20px 16px;
          margin-top: 16px;

          img {
            height: 23px;
            margin-right: 13px;
          }

          .info {
            flex: 1 0;
            display: flex;
            flex-direction: column;

            .title {
              font-size: 17px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #2c254c;
            }

            .value {
              width: 100%;
              display: flex;
              align-items: center;
              margin-top: 19px;

              span {
                flex: 1 0;
                font-size: 13px;
                font-family: PingFang SC;
                font-weight: 400;
                color: #808080;

                &:last-child {
                  margin-left: 5px;
                }
              }
            }

            .btn {
              width: max-content;
              padding: 10px 16px;
              background: #f5a700;
              border-radius: 18px;
              margin-top: 16px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
