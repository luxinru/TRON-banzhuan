<template>
  <div class="page_root">
    <section class="header">
      <div class="title">
        <img class="img" src="@/assets/images/alpha/logo.png" alt="" />
        <div class="imgs">
          <van-popover class="popover" v-model="showPopover" trigger="click" placement="bottom-end" :actions="actions"
            @select="onChangeLanguage">
            <template #reference>
              <img src="@/assets/images/alpha/world.png" alt="" />
            </template>
          </van-popover>
          <img src="@/assets/images/alpha/envelope.png" alt="" style="margin-right: 20px;"
            @click="toRoute('/notice')" />
          <img src="@/assets/images/alpha/user.png" alt="" @click="toRoute('/mine')" style="margin-right: 20px;" />
          <!--          <img src="@/assets/images/alpha/diamond.png" alt="" @click="toRoute('/getVIP')"
            style="margin-right: 20px;height: 38px;" /> -->
          <img src="@/assets/images/alpha/headphones.png" alt="" @click="toRoute('/kefu')" />

        </div>
      </div>
    </section>
    <van-dialog class="dialog" v-model="isShowModel" closeOnClickOverlay :showConfirmButton="false">
      <div class="" style="background-color: white;float: right;" @click="onClosePop">
        <img style="width: 25px;" src="@/assets/images/alpha/cancel.png" alt="">
      </div>
      <div class="content">
        <div class="currency_slider_item item">
          <div class="currency_slider_item_top">
            <img :src="getImgUrl(left.id)" alt="" />
            <span style="font-size: 14px;font-weight: 700;">{{left.name}}</span>
          </div>
          <div class="currency_slider_item_bottom">
            <div class="fs-22 fw-250">
              <span balances_ps="100"
                style="font-family: PingFang SC;font-weight: 400;color: #8f8f8f;text-decoration: none;font-weight: 500;">{{left.price}}
              </span>
              <span class="color-00004 fs-12 fw-500" style="color: black;">{{left.pairs}}</span>
            </div>
          </div>

        </div>
        <img style="width: 25px;" src="@/assets/images/alpha/refresh-button.png" alt="">
        <div class="currency_slider_item item">
          <div class="currency_slider_item_top">
            <!-- :src="getImgUrl(item.exchangeId)" -->
            <img :src="getImgUrl(right.id)" alt="" />
            <span style="font-size: 14px;font-weight: 700;">{{right.name}}</span>
          </div>
          <div class="currency_slider_item_bottom">

            <div class="fs-22 fw-250">
              <span balances_ps="100"
                style="font-family: PingFang SC;font-weight: 400;color: #8f8f8f;text-decoration: none;font-weight: 500;">{{right.price}}
              </span>
              <span class="color-00004 fs-12 fw-500" style="color: black;">{{left.pairs}}</span>
            </div>
            <!-- <div class="fs-12 fw-500">{{item.marketPair}} <span balances_ps_usd="100"></span></div> -->
          </div>

        </div>

        <!-- <span class="cSTqvK">Orders are processed within 5 minutes</span> -->
        <div class="cSTqvK" style="flex-direction: column;"><img src="@/assets/images/alpha/financial-profit.png"
            style="width: 25px;" alt=""> {{ $t('trading_profit') }}: {{(profit * 100 ).toFixed(2)}}%</div>
      </div>


      <div class="cSTqvK" style="flex-direction: column;"><img src="@/assets/images/alpha/financial-profit.png"
          style="width: 25px;" alt=""><span class="">USDT : {{usdt}}</span>{{ $t('trading_profit') }} :
        {{(usdt *profit).toFixed(6)}}USDT
      </div>
      <div class="btn" @click="onSwap2(usdt,oid)">Swap USDT </div>

      <div class="cSTqvK" style="flex-direction: column;"><img src="@/assets/images/alpha/financial-profit.png"
          style="width: 25px;" alt=""><span class="">TRX : {{trx}}</span>{{ $t('trading_profit') }} :
        {{(trx * profit).toFixed(6)}}TRX
      </div>
      <div class="btn" @click="onSwap1(trx,oid)">Swap TRX </div>

    </van-dialog>
    <div class="container" style="display: none;">
      <div class="cmc-global-stats__fade"></div>
      <div class="cmc-global-stats__content">
        <div class="cmc-global-stats__inner-content"><span class="sc-2bz68i-0 cVPJov">Cryptos
            <!-- -->: &nbsp;<span class="cmc-link">19,430</span>
          </span><span class="sc-2bz68i-0 cVPJov">Exchanges
            <!-- -->: &nbsp;<span class="cmc-link">526</span>
          </span><span class="sc-2bz68i-0 cVPJov">Market Cap
            <!-- -->: &nbsp;<span class="cmc-link">¥8,942,887,555,504</span>
          </span><span class="sc-2bz68i-0 cVPJov">24h Vol
            <!-- -->: &nbsp;<span class="cmc-link">¥928,105,648,148</span>
          </span><span class="sc-2bz68i-0 cVPJov">Dominance
            <!-- -->: &nbsp;<span class="cmc-link">BTC
              <!-- -->:
              <!-- -->44.3%
              <!-- -->&nbsp;
              <!-- -->ETH
              <!-- -->:
              <!-- -->19.4%
            </span>
          </span><span class="sc-2bz68i-0 cVPJov"><span class="icon-Gas-Filled"
              style="margin-right:4px;vertical-align:middle"></span>ETH Gas
            <!-- -->: &nbsp;<a>54
              <!-- -->
              <!-- -->Gwei<span class="sc-2bz68i-1 cEFmtT icon-Chevron-down"></span>
            </a>
          </span></div>
      </div>
    </div>

    <div id="cmc-slot--leaderboard-top" width="100%" class="sc-16r8icm-0 sc-16ipes8-1 kebcXZ">
    </div>
    <section class="money" style="display: none;">
      <span class="title">{{ $t('total_balance') }}</span>
      <span class="value">{{ totalBalance }}</span>
      <van-notice-bar class="notice_bar" background="#ffffff" color="#1B0A1C" :text="data.notice">
        <template #left-icon>
          <img src="@/assets/images/alpha/喇叭 拷贝.png" />
        </template>
      </van-notice-bar>
    </section>

    <section class="funs" style="overflow: hidden;">
      <van-swipe class="swipe" indicator-color="black">

        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/825.png" alt="" />
              <!-- <img style="width: 15px;" @click="$router.go(0)" src="@/assets/images/alpha/refresh-button.png" alt="" /> -->
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">TRC-USDT<span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">{{usdt.toFixed(6)}} </span>
                <span class="color-00004 fs-12 fw-500"> USDT</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">{{usdt.toFixed(6)}}</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 2 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom" @click="$router.push('/withdraw')">{{ $t('withdrawal') }} <span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/1958.png" alt="" />
              <!-- <img style="width: 15px;" @click="$router.go(0)" src="@/assets/images/alpha/refresh-button.png" alt="" /> -->
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">TRX <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">{{trx.toFixed(6)}} </span>
                <span class="color-00004 fs-12 fw-500"> TRX</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">{{(price_in_usd * trx).toFixed(6)}}</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 1 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom" @click="$router.push('/withdraw')">{{ $t('withdrawal') }} <span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/825.png" alt="" />
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">ERC-USDT <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">0.000000</span>
                <span class="color-00004 fs-12 fw-500">USDT</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">0.00</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 3 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom">{{$t('swap') }} TRC-USDT<span
                  balances_ps_usd="100"></span></div>
            </div>

          </div>
        </van-swipe-item>

        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/1839.png" alt="" />
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">BNB <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">0.000000</span>
                <span class="color-00004 fs-12 fw-500">BNB</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">0.00</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 4 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom">{{$t('swap') }} TRC-USDT<span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/1.png" alt="" />
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">BTC <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">0.000000</span>
                <span class="color-00004 fs-12 fw-500">BTC</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">0.00</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 5 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom">{{$t('swap') }} TRC-USDT<span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/1027.png" alt="" />
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">ETH <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">0.000000</span>
                <span class="color-00004 fs-12 fw-500">ETH</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">0.00</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 6 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom">{{$t('swap') }} TRC-USDT<span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/74.png" alt="" />
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">DOGE <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">0.000000</span>
                <span class="color-00004 fs-12 fw-500">DOGE</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">0.00</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 7 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom">{{$t('swap') }} TRC-USDT<span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/7083.png" alt="" />
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">UNI <span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">0.000000</span>
                <span class="color-00004 fs-12 fw-500">UNI</span>
              </div>
              <div class="fs-12 fw-500">USD <span balances_ps_usd="100">0.00</span></div>
            </div>
            <div class="currency_slider_item_buttom">
              <div class="buttom" @click="$router.push({ path: '/recharge-detail', query: { type: 8 } })">
                {{$t('recharge')}} <span balances_ps_usd="100"></span>
              </div>
              <div class="buttom">{{$t('swap') }} TRC-USDT<span
                  balances_ps_usd="100"></span></div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>









      <!-- <div class="item" @click="toRoute('/qiandao')">
        <img src="@/assets/images/alpha/825.png" alt="" />
        <span>{{ $t('sign_in2') }}</span>
      </div>
      <div class="item" @click="toRoute('/team')">
        <img src="@/assets/images/alpha/组 5000 拷贝.png" alt="" />
        <span>{{ $t('team') }}</span>
      </div>
      <div class="item" @click="toRoute('/recharge')">
        <img src="@/assets/images/alpha/组 5000 拷贝 2.png" alt="" />
        <span>{{ $t('recharge') }}</span>
      </div>
      <div class="item" @click="toRoute('/withdraw')">
        <img src="@/assets/images/alpha/组 5000 拷贝 3.png" alt="" />
        <span>{{ $t('withdrawal') }}</span>
      </div>
      <div class="item" @click="toRoute('/share')">
        <img src="@/assets/images/alpha/组 5000(1).png" alt="" />
        <span>{{ $t('share') }}</span>
      </div>
      <div class="item">
        <img src="@/assets/images/alpha/组 5000 拷贝(1).png" alt="" />
        <span>{{ $t('APP') }}</span>
      </div>
      <div class="item" @click="toRoute('/activity')">
        <img src="@/assets/images/alpha/组 5000 拷贝 2(1).png" alt="" />
        <span>{{ $t('activity') }}</span>
      </div>
      <div class="item" @click="toRoute('/about')">
        <img src="@/assets/images/alpha/组 5000 拷贝 3(1).png" alt="" />
        <span>{{ $t('about') }}</span>
      </div> -->
    </section>
    <!--    <section>
      <img style="width: 35px;" src="@/assets/images/alpha/angle-small-down.png" alt="" />
    </section> -->
    <section class="funs" style="overflow: hidden;">
      <van-swipe class="swipe" indicator-color="black">
        <van-swipe-item>
          <div class="currency_slider_item item">
            <div class="currency_slider_item_top">
              <img src="@/assets/images/alpha/financial-profit.png" alt="" />
              <!-- <img style="width: 15px;" @click="$router.go(0)" src="@/assets/images/alpha/refresh.png" alt="" /> -->
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">{{$t('investment_amount')}}<span balances_ps_usd="100"></span></div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">( TRX + USDT ) </span>
                <!-- <span class="color-00004 fs-12 fw-500"> USD</span> -->
              </div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">{{usdSum}} </span>
                <span class="color-00004 fs-12 fw-500"> USD</span>
              </div>
              <!-- <div class="fs-12 fw-500">USD <span balances_ps_usd="100">{{usdt}}</span></div> -->
            </div>
            <div class="currency_slider_item_bottom">
              <div class="fs-12 fw-500">{{$t('cumulative_income')}}<span balances_ps_usd="100"></span></div>
              <!-- <div class="fs-12 fw-500">TRX <span balances_ps_usd="100"></span></div> -->
              <div class="fs-22 fw-250">
                <span balances_ps="100">{{usdtProfit}} </span>
                <span class="color-00004 fs-12 fw-500"> USDT</span>
              </div>
              <div class="fs-22 fw-250">
                <span balances_ps="100">{{trxProfit}} </span>
                <span class="color-00004 fs-12 fw-500"> TRX</span>
              </div>
              <!-- <div class="fs-12 fw-500">USD <span balances_ps_usd="100">{{(price_in_usd * trx).toFixed(6)}}</span></div> -->
            </div>
          </div>
        </van-swipe-item>


      </van-swipe>
    </section>
    <section class="models">
      <div class="item" @click="$router.push('/recharge-record')">
        <!-- <img src="@/assets/images/mall/组 122 拷贝 4 (1).png" /> -->
        <span>{{ $t('Recharge_record') }}</span>
      </div>
      <div class="item" @click="$router.push('/withdraw-record')">
        <!-- <img src="@/assets/images/mall/组 122 拷贝 5 (1).png" /> -->
        <span>{{ $t('Withdrawals_record') }}</span>
      </div>
      <div class="item" @click="$router.push('/wallet')">
        <!-- <img src="@/assets/images/mall/组 122 拷贝 6 (1).png" /> -->
        <span>{{ $t('Transaction_details') }}</span>
      </div>
      <div class="item" @click="$router.push('/swap-u-trx')"
        style="background: linear-gradient(92.43deg, #f5b67d 0.81%, #ec4553 99.58%);">
        <img src="@/assets/images/alpha/financial-profit.png" />
        <span>{{ $t('swap') }} USDT/TRX</span>
      </div>

      <div class="item" @click="$router.push('/getVIP')">
        <img src="@/assets/images/alpha/vip-card.png" />
        <span>{{ $t('upgrade') }}</span>
      </div>
      <div class="item" @click="$router.push('/my-swap')">
        <img src="@/assets/images/alpha/notes2.png" />
        <span>{{ $t('my_investment') }}</span>
      </div>

    </section>

    <!-- <section class="sign_in" @click="toRoute('/qiandao')"></section> -->



    <div class="container">
      <div class="cmc-global-stats__fade"></div>

      <div class="cmc-global-stats__content">
        <div class="cmc-global-stats__inner-content">


          <!-- &nbsp;<span class="sc-2bz68i-0 cVPJov" style="font-size: 12px;font-weight: 500;"></span> -->
          <span class="sc-2bz68i-0 cVPJov">

            {{$t('current_level')}}

            <!-- -->: &nbsp;
            <div id="wrapper" class="cSTqvK" style="width: auto;">

              <!-- 进度条容器 -->
              <div id="progressbar" style="width: 50px;">
                <!-- 进度条 -->
                <div id="fillvip"></div>
              </div>
            </div>
            <span class="cmc-link">{{title}} ({{(usdSum)}} /
              {{(nextvip)}})</span>

          </span><span class="sc-2bz68i-0 cVPJov" v-if="interest_arbitrage_num - curARNum == 0"
            style="color: firebrick;font-size: 14px;font-weight: 500;">{{$t('trade_num')}}
            <!-- -->: &nbsp;<span class="cmc-link" v-if="interest_arbitrage_num - curARNum == 0"
              style="color: firebrick;font-size: 14px;font-weight: 700;">{{(interest_arbitrage_num - curARNum)<0?0:interest_arbitrage_num - curARNum}}
              /
              {{interest_arbitrage_num}}</span>
          </span><span class="sc-2bz68i-0 cVPJov" style="font-size: 14px;"
            v-if="interest_arbitrage_num - curARNum != 0">{{$t('trade_num')}}
            <!-- -->: &nbsp;<span class="cmc-link" v-if="interest_arbitrage_num - curARNum != 0"
              style="font-weight: 700;">{{(interest_arbitrage_num - curARNum)<0?0:interest_arbitrage_num - curARNum}} /
              {{interest_arbitrage_num}}</span>
          </span><span class="sc-2bz68i-0 cVPJov">{{$t('trade_fee')}}
            <!-- -->: &nbsp;<span class="cmc-link">{{cash_rate}}%</span>
          </span>
        </div>
      </div>
    </div>
    <div class="sc-16r8icm-0 tu1guj-1" @click="$router.push('/team')"> <img style="width: 50px;"
        src="@/assets/images/alpha/teamwork.png" alt=""></div>
<!--    <div class="sc-16r8icm-0 tu1guj-1" style="bottom: 10%;" @click="$router.push('/team')"> <img style="width: 50px;"
        src="@/assets/images/alpha/refresh-button.png" alt=""></div> -->
    <section class="funs-trade" v-if="coinInfo">
      <div class="currency_slider_item item" v-for="(item, index) in coinInfo" :key="index">
        <div class="currency_slider_item_top">
          <!-- :src="getImgUrl(item.exchangeId)" -->
          <img :src="getImgUrl(item.exchangeId)" alt="" />
          <span style="font-size: 14px;font-weight: 700;">{{item.exchangeName}}</span>
        </div>
        <div class="currency_slider_item_bottom">

          <div class="fs-22 fw-250">
            <span balances_ps="100"
              style="font-family: PingFang SC;font-weight: 400;color: #8f8f8f;text-decoration: none;font-weight: 500;">{{item.price.toFixed(6)}}
            </span>
            <!-- <span class="color-00004 fs-12 fw-500">{{item.quoteSymbol}}</span> -->
          </div>
          <div class="fs-12 fw-500" style="color: #000080;">{{item.marketPair}} <span balances_ps_usd="100"></span>
          </div>
        </div>

      </div>

    </section>
    <div display="block,inline-block" class="sc-16r8icm-0 dbuYiO">
      <!--     <div class="container" style="background-color: white;">
        <div class="cmc-global-stats__content">
          <div class="cmc-global-stats__inner-content">

            </span>&nbsp;<span class="sc-2bz68i-0 cVPJov">
               &nbsp;<span class="cmc-link">{{$t('current_level')}}: {{title}}
              </span>
            </span>
            <div id="wrapper" class="cSTqvK" style="width: auto;">


              <div id="progressbar">

                <div id="fillvip"></div>
              </div>
            </div>
            <span class="sc-2bz68i-0 cVPJov">
              &nbsp;<span class="cmc-link">{{(usdSum)}} / {{(nextvip)}}</span>

            </span>
          </div>
        </div>

      </div> -->
      <div class="container" v-if="swapData" style="background-color: white;">
        <div class="cmc-global-stats__content">
          <div class="cmc-global-stats__inner-content">

            </span>&nbsp;<span class="sc-2bz68i-0 cVPJov">
              <!-- --> &nbsp;<span class="cmc-link">{{sdEXName}}
              </span>
            </span><span class="sc-2bz68i-0 cVPJov">
              <!-- --> &nbsp;<span class="cmc-link">{{sdPairs}}</span>
            </span><span class="sc-2bz68i-0 cVPJov">
              <!-- --> &nbsp;<span class="cmc-link"></span>

            </span>
            <div id="wrapper" class="cSTqvK" style="width: auto;">

              <!-- 进度条容器 -->
              <div id="progressbar">
                <!-- 进度条 -->
                <div id="fill"></div>
              </div>
            </div>
            <span class="sc-2bz68i-0 cVPJov">
              <!-- --> &nbsp;<span class="cmc-link">{{progress}}</span>

            </span>
          </div>
        </div>

      </div>
      <button class="x0o17e-0 lgnbfA piv2lb-0 khvEXx newsletter-btn" @click="randomCoin">
        {{ $t('swap') }} (
        {{(interest_arbitrage_num - curARNum)<0? 0:interest_arbitrage_num - curARNum}} /
        {{interest_arbitrage_num}} )

      </button>

    </div>
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
    padding: 0 0 60px 0;
    min-height: 100vh;
    background-color: #fff;

    .header {
      width: 100%;
      // height: 181px;
      // background: #033692;

      .title {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 27px 0 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .img {
          width: 100px;
          height: 30px;
        }

        .imgs {
          display: flex;
          align-items: center;

          .popover {
            height: 18px;
            line-height: 0;

            img {
              height: 100%;
            }
          }

          img {
            height: 18px;
            // width: 25px;
            fill-opacity: 1;

            &:first-child {
              margin-right: 20px;
            }
          }
        }
      }
    }

    .money {
      width: calc(100% - 27px * 2);
      background: linear-gradient(-67deg, #feffff 0%, #ef522f 0%, #eb913b 100%);
      box-shadow: 0px 6px 13px 0px rgba(239, 79, 47, 0.38);
      border-radius: 7px;
      margin-top: -120px;
      padding: 13px 22px;
      display: flex;
      flex-direction: column;

      .title {
        width: 100%;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-top: 12px;
      }

      .value {
        width: 100%;
        font-size: 34px;
        font-family: Arial;
        font-weight: 400;
        color: #ffffff;
        word-break: break-word;
        margin-top: 23px;
      }

      .notice_bar {
        margin-top: 43px;
        width: 100%;
        height: 35px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 7px;

        /deep/.van-notice-bar__content {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.5);
        }

        img {
          height: 13px;
          margin-right: 9px;
        }
      }
    }

    .funs-funtion {
      width: 100%;
      padding: 0 13px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    .funs-trade {
      margin-bottom: 100px;
      width: 100%;
      padding: 0 13px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }

    .funs {

      width: 100%;
      padding: 0 13px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      // grid-row-gap: 27px;
      // margin-top: 29px;

      .item {
        // background: linear-gradient(-67deg, #feffff 0%, #ef522f 0%, #eb913b 100%);
        // box-shadow: 0px 6px 13px 0px rgba(239, 79, 47, 0.38);
        display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
        justify-content: space-around;
        background: url('@/assets/images/alpha/left-crl.png') 10px 1px / 35px no-repeat, url('@/assets/images/alpha/event-2022-bg-2.png') right top / 38px no-repeat rgb(20, 22, 34);

        img {
          height: 100%px;
        }

        span {
          font-size: 13px;
          font-family: PingFang SC;
          font-weight: 700;
          color: #ffffff;
          margin-top: 11px;
        }
      }
    }

    .sign_in {
      width: 358px;
      height: 111px;
      background: url('~@/assets/images/alpha/组 10.png') no-repeat;
      background-size: 100% 100%;
      margin-top: 19px;
    }

    .recommend {
      width: 100%;
      // background: #f9f9f9;
      border-radius: 13px 13px 0px 0px;
      padding: 10px 13px;
      // margin-top: 22px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        padding: 0 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #b5b5b5;

        span {
          &:first-child {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #050505;
          }
        }
      }

      .sub_title {
        width: 100%;
        padding: 0 3px;
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #99999b;
        margin-top: 15px;
      }

      .list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border-radius: 7px;
          overflow: hidden;
          margin-top: 19px;
          padding-bottom: 19px;
          overflow: hidden;

          img {
            width: 100%;
            height: 157px;
          }

          .title {
            width: 100%;
            min-height: 29px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #444254;
            margin-top: 14px;
            padding: 0 12px;

            span {
              &:first-child {
                flex: 1 0;
                word-break: break-word;
              }

              &:last-child {
                height: 29px;
                padding: 0 15px;
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #ffffff;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(0deg, #f68431 0%, #fdcb4a 100%);
                border-radius: 7px;
                margin-left: 10px;
              }
            }
          }

          .tips {
            padding: 4px 15px;
            background: rgba(238, 82, 47, 0.3);
            border-radius: 13px;
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 400;
            color: #ee522f;
            display: flex;
            justify-content: center;
            margin: 6px 0 0 12px;
            word-break: break-word;
            box-sizing: border-box;
          }

          .info {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 10px;
            padding: 0 13px;

            .info_item {
              display: flex;
              flex-direction: column;
              margin-top: 16px;

              span {
                font-size: 17px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #000000;
                word-break: break-word;

                &:last-child {
                  font-size: 13px;
                  font-family: PingFang SC;
                  font-weight: 500;
                  color: #a0a0a0;
                  margin-top: 4px;
                }
              }
            }
          }

          .btn {
            padding: 0 73px;
            width: max-content;
            height: 37px;
            background: #033692;
            border-radius: 7px;
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 21px auto 0;
          }
        }
      }
    }
  }

  // *****
  .currency_slider_item {
    box-shadow: rgb(88 102 126 / 8%) 0px 1.06667vw 6.4vw, rgb(88 102 126 / 12%) 0px 1px 0.53333vw;

    // position: relative;
    border: 1px solid #F0F0F0;
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

  .swipe {
    width: 348px;
    // height: 100px;
    border-radius: 7px;
    overflow: hidden;

    /deep/ img {
      // width: 100%;
      // height: 100%;
    }
  }

  .buttom {
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(92.43deg, rgb(245, 182, 125) 0.81%, rgb(236, 69, 83) 99.58%);
    border: 0px;
    border-radius: 8px;
    display: inline-flex;
    color: white;
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    font-weight: 600;
    width: auto;
    height: 25px;
    font-size: 12px;
    padding: 16px;
    line-height: 18px;
    margin: 3px 0;
  }

  .models {
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 348px;
    // background: #ffffff;
    border-radius: 7px;
    // margin-top: 16px;
    padding: 10px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    // margin-bottom: 40px;

    .item {
      box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px, rgb(88 102 126 / 12%) 0px 1px 2px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      -webkit-box-align: center;
      align-items: center;
      // background: linear-gradient(92.43deg, #f5b67d 0.81%, #ec4553 99.58%);
      border: 0px;
      border-radius: 8px;
      color: rgb(0, 0, 0);
      cursor: pointer;
      -webkit-box-pack: center;
      justify-content: center;
      outline: 0px;
      font-weight: 600;
      font-size: 12px;
      padding: 5px 16px;
      line-height: 18px;

      img {
        height: 36px;
      }

      span {
        text-align: center;
        // margin-top: 10px;
        font-size: 12px;
        font-weight: 700;
        color: #3b3b3b;
      }
    }
  }

  .container {
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    width: 100%;
    max-width: 1400px;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;
  }

  .cmc-global-stats__fade {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255) 100%);
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 50px;
    z-index: 1;
  }

  .cmc-global-stats__content {
    padding: 9px 3px;
    position: relative;
    white-space: nowrap;
    overflow: auto hidden;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-spacing: 0px;
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

  .ivGjzC.cards div[class^="carousel-arrow"] {
    width: 24px;
  }

  .ivGjzC div.carousel-arrow-prev {
    top: 0px;
    left: 0px;
    background-image: linear-gradient(to right, var(--color-light-neutral-1) 0%, transparent 100%);
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
  }

  .confirm_dialog {
    max-height: 70vh;
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
      margin: 42px auto 0;
      width: 100%;
      padding: 12px 5px;
      background: rgba(4, 58, 152, 1);
      border-radius: 4px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .btn2 {
      margin: 12px auto 0;
      width: 100%;
      padding: 12px 5px;
      background: rgba(4, 58, 152, 0.5);
      border-radius: 4px;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }

  #wrapper {
    // width: 200px;
    // height: 100px;
    // border: 1px solid #000000;
    // margin: 0 auto;
  }

  #progressbar {
    // width: 180px;
    width: 100px;
    height: 5px;
    margin: 0 auto;
    // margin-top: 40px;
    // border: 1px solid #000000;
  }

  /* 设置进度条动画 */
  #fill {
    // animation: move 2s;
    text-align: center;
    // width: 100px;
    height: 5px;
    border-radius: 5px;
    background-color: rgb(56, 97, 251);
    color: #ffffff;
  }

  /* 设置进度条动画 */
  #fillvip {
    // animation: move 2s;
    text-align: center;
    // width: 100px;
    height: 5px;
    border-radius: 5px;
    background-color: rgb(56, 97, 251);
    color: #ffffff;
  }

  .tu1guj-1 {
    bottom: 16%;
    position: fixed;
    /* width: 100%; */
    /* float: right; */
    right: 20px;
  }
</style>
