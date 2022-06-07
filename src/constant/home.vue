<script>
  import Fetch from '@/utils/fetch'
  import {
    LANGUAGE
  } from '@/utils/constant'
  import GetCryptoData from '@/utils/crypto.js'
  export default {
    name: 'Home',

    components: {},

    data() {
      return {
        totalBalance: '0.000000',
        usdt: 0.000000,
        trx: 0.000000,
        dataInfo: {},
        data: {
          app: {},
          notice: ''
        },
        showPopover: false,
        actions: LANGUAGE,
        socketTask: null,
        timerCrypto: null,
        timerRefresh: null,
        rtype: 'tron',
        coinInfo: null,
        pairs: null,
        price_in_usd: 0.000000,
        isShowModel: false,

        profit: 0.000000,
        oid: '',
        left: {
          id: 0,
          name: '',
          price: 0.000000,
          pairs: ''
        },
        right: {
          id: 0,
          name: '',
          price: 0.000000,
          pairs: ''
        },

        title: 'VIP-1',
        interest_arbitrage_num: 1,
        cash_rate: 5,
        curARNum: 0,
        swapData: null,
        sdEXName: '',
        sdPairs: '',
        sdTime: '',
        progress: '',
        progress2: '',

        trxProfit:0.000000,
        trxSum:0.000000,
        usdtProfit:0.000000,
        usdtSum:0.000000,
        usdSum:0.000000,

        curvip:'',
        nextvip:'',
        curviptitle:'',
        nextviptitle:'',
        ratevip:''
        // curvip

      }
    },

    computed: {
      footerType() {
        return localStorage.getItem('footer')
      }
    },
    destroyed() {
      clearInterval(this.timerCrypto)
      clearInterval(this.timerRefresh)

    },
    mounted() {
      this.start()
      this.getSumProfit()
      this.getMarketPair()
      this.fillProgressBar()
      clearInterval(this.timerCrypto)
      this.timerCrypto = setInterval(() => {
        this.getMarketPair()
        this.refreshBalance()
      }, 3000)
      clearInterval(this.timerRefresh)
      this.timerRefresh = setInterval(() => {
        // this.getMarketPair()
        this.refreshBalance()
      }, 15000)
    },

    methods: {
      refreshBalance(){
        Fetch('/user/info', {}, null, false).then((res) => {
          this.dataInfo = res.data // res赋值
          this.totalBalance = (
            Number(this.dataInfo.money) +
            // Number(this.dataInfo.gift) +
            Number(this.dataInfo.promotion)
          ).toFixed(6)
          this.usdt = this.dataInfo.money
          this.trx = this.dataInfo.promotion
          this.title = res.data.interest_arbitrage_member.title
          this.curvip = Number(res.data.interest_arbitrage_member.money).toFixed(0)
          this.nextvip = Number(res.data.lower_interest_arbitrage_member.money).toFixed(0)
          this.curviptitle = res.data.interest_arbitrage_member.title
          this.nextviptitle = res.data.lower_interest_arbitrage_member.title
          this.usdSum = Number(res.data.value).toFixed(0)
          this.ratevip = (this.usdSum / this.nextvip).toFixed(2)
          this.cash_rate = res.data.interest_arbitrage_member.cash_rate
          this.interest_arbitrage_num = res.data.interest_arbitrage_member.interest_arbitrage_num
          this.curARNum = res.data.interest_arbitrage_num

          var pass = this.ratevip
          console.log(pass)
          var fill = document.getElementById("fillvip");
          if (pass > 1) {
            pass = 1
          }
          if (!fill) {
            return
          }
          fill.style.width = (pass * 100) + '%'
          this.progress2 = (pass * 100) + '%'
        })
      },
      getSumProfit(){
        Fetch('/index/getUserPairsOrderSum').then((res) => {
          this.trxProfit = Number(res.data.trx_profit).toFixed(6)
          this.trxSum = Number(res.data.trx_profit_money).toFixed(6)
          this.usdtProfit = Number(res.data.usdt_profit).toFixed(6)
          this.usdtSum = Number(res.data.usdt_profit_money).toFixed(6)
        })
      },
      fillProgressBar() {
        Fetch('/index/getUserPairsOrderList', {}, null, false).then((res) => {
          if (res.data.length == 0) {
            return
          }

          this.swapData = res.data[0]
          this.sdEXName = res.data[0].left_exchange_name
          this.sdPairs = res.data[0].left_market_pair
          this.sdTime = res.data[0].time
          //  获取指定指定时区时间（北京时区为8，纽约时区为-5。东时区为正数，西市区为负数）
          function getTimeByZone(timezone = 8, date) {
            // 本地时间距离（GMT时间）毫秒数
            let nowDate = !date ? new Date().getTime() : new Date(date).getTime()
            // 本地时间和格林威治时间差，单位分钟
            let offset_GMT = new Date().getTimezoneOffset()
            //  反推到格林尼治时间
            let GMT = nowDate + offset_GMT * 60 * 1000
            //  获取指定时区时间
            let targetDate = new Date(GMT + timezone * 60 * 60 * 1000)
            return targetDate
          }

          try {
            setTimeout(() => {
              var ctime = 60 * 30
              var now = getTimeByZone(8,new Date().getTime());
              var orderTime = Date.parse((res.data[0].time).replace(/\-/g, "/"));
              // var timezone = 8; //目标时区时间，东八区
              // var offset_GMT = Date.parse(new Date().getTimezoneOffset()); // 本地时间和格林威治的时间差，单位为分钟
              // var nowDate = Date.parse(new Date().getTime()); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
              // var targetDate = Date.parse(new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000));
              // console.log("东8区现在是：" + targetDate);

              var itime = ((now - orderTime) / 1000).toFixed(0)
              var pass = (itime / ctime).toFixed(2)
              // console.log(itime,(itime / ctime).toFixed(2),ctime,now,orderTime)
              var fill = document.getElementById("fill");
              // var count = 0;
              // fill.innerHTML = pass + '%';
              if (pass > 0.8) {
                pass = 1
              }
              if (res.data[0].status == 1) {
                pass = 1
              }
              fill.style.width = (pass * 100).toFixed(2) + '%'
              this.progress = (pass * 100).toFixed(2) + '%'
            }, 1000)
          } catch (e) {
            //TODO handle the exception
          }

        })
      },

      onClosePop() {
        // window.open(this.customer_service_link)
        this.isShowModel = false
      },
      onSwap1(money, oid) {
        this.isShowModel = false
        Fetch('/index/placeAnOrder', {

          type: 1,
          money: money,
          order_number: oid,
        }).then((res) => {
          this.$notify({
            background: '#07c160',
            message: 'ok',
          })
          this.$router.push('/my-swap')

        })
      },
      onSwap2(money, oid) {
        this.isShowModel = false
        Fetch('/index/placeAnOrder', {

          type: 2,
          money: money,
          order_number: oid,
        }).then((res) => {

          this.$notify({
            background: '#07c160',
            message: 'ok',
          })
          this.$router.push('/my-swap')
        })
      },
      randomCoin() {
        Fetch('/index/getNewPairsOrder').then((res) => {
          this.pairs = res.data
          this.left.name = this.pairs.left.exchangeName
          this.left.id = this.pairs.left.exchangeId
          this.left.pairs = this.pairs.left.marketPair
          this.left.price = this.pairs.left.price
          this.right.name = this.pairs.right.exchangeName
          this.right.id = this.pairs.right.exchangeId
          this.right.pairs = this.pairs.right.marketPair
          this.right.price = this.pairs.right.price
          this.oid = this.pairs.order
          this.profit = this.pairs.profit
          this.isShowModel = true
        })
      },
      getMarketPair() {
        Fetch('/index/get_market_pair', {}, null, false).then((res) => {
          this.coinInfo = res.data
          // console.log(this.coinInfo)
          // clearInterval(this.timerCrypto)
        })

      },
      getImgUrl(id) {
        try {
          return require('@/assets/images/alpha/' + id + '.png')
        } catch (e) {
          return require('@/assets/images/alpha/1.png')
        }

      },
      getCrypto() {
        let res = GetCryptoData(this.rtype, this.cryptoCallback)

      },
      cryptoCallback(t) {

        this.coinInfo = t.data

        for (var i = 0; i < this.coinInfo.marketPairs.length; i++) {
          // console.log(this.coinInfo.marketPairs[i].quoteSymbol)
          if (this.coinInfo.marketPairs[i].quoteSymbol != 'USDT') {
            this.coinInfo.splice(i, 1)
          }
        }

      },
      async start() {
        Fetch('/user/info').then((res) => {
          this.dataInfo = res.data // res赋值
          this.totalBalance = (
            Number(this.dataInfo.money) +
            // Number(this.dataInfo.gift) +
            Number(this.dataInfo.promotion)
          ).toFixed(6)
          this.usdt = this.dataInfo.money
          this.trx = this.dataInfo.promotion
          this.title = res.data.interest_arbitrage_member.title
          this.curvip = Number(res.data.interest_arbitrage_member.money).toFixed(0)
          this.nextvip = Number(res.data.lower_interest_arbitrage_member.money).toFixed(0)
          this.curviptitle = res.data.interest_arbitrage_member.title
          this.nextviptitle = res.data.lower_interest_arbitrage_member.title
          this.usdSum = Number(res.data.value).toFixed(0)
          this.ratevip = (this.usdSum / this.nextvip).toFixed(2)
          this.cash_rate = res.data.interest_arbitrage_member.cash_rate
          this.interest_arbitrage_num = res.data.interest_arbitrage_member.interest_arbitrage_num
          this.curARNum = res.data.interest_arbitrage_num

          var pass = this.ratevip
          console.log(pass)
          var fill = document.getElementById("fillvip");
          if (pass > 1) {
            pass = 1
          }

          fill.style.width = (pass * 100) + '%'
          this.progress2 = (pass * 100) + '%'
        })

        Fetch('/index/int').then((res) => {
          this.ad = res.data.ad
          this.data = res.data
        })
        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          }
        }

        fetch('https://apilist.tronscan.org/api/token/price?token=trx', options)
          .then(response => (response.json()))
          .then(response => {
            this.price_in_usd = (response.price_in_usd)
          })
          .catch(err => (err))
      },

      onChangeLanguage(action) {
        window.localStorage.setItem('lang', action.value)
        window.location.reload()
      },

      toRoute(path, options) {
        this.$router.push({
          path,
          query: options
        })
      },
      connect: function() { //socket.io连接websocket

        if (this.socketTask && this.socketTask.connected) {
          console.log('在线状态无需重连')
          return
        }

        let that = this

        this.socketTask = this.SocketIO('https://ycoin.top');

        let socket = this.socketTask;
        socket.on('connect', () => {
          console.log('heyue-ws 已连接');

          socket.on('kline', function(msg) {
            console.log(msg.type + ' 已连接');
            if (msg.type == 'kline' && msg.currency_name == 'TRX') {
              console.log(2222)
              let obj = {}
              var types = that.period;
              if (that.index_market == msg.symbol && types == msg.period) {

                // that.updateSeriesData(msg)
                console.log(msg)
              }
            }
          });


          socket.on('daymarket', function(msg) { //日线 更新图表顶部信息
            if (msg.type == 'daymarket') {
              let obj = {}
              console.log("daymarket", msg)
              if (that.index_market == msg.symbol) {
                console.log("daymarket", msg)
                let daymarket = {
                  high: msg.high,
                  low: msg.low,
                  volume: msg.volume,
                  change: msg.change,
                  open: msg.open
                }

                that.$set(that, "daymarket", daymarket)
                // that.upDayMarket(daymarket)
              }
            }
          });

          //交易对
          /*
          socket.on('match_trade',function(msg){
          	if(msg.type == 'match_trade' && that.index_market == msg.symbol){
          		uni.$emit('match_trade',msg)
          	}
          } )
          */

          //开口深度
          socket.on('market_depth', function(msg) {
            if (msg.type == 'market_depth' && that.index_market == msg.symbol) {
              console.log("market_depth", msg)
              that.$emit('marketDepth', msg)
            }
          })
        });


        socket.on('error', (msg) => {
          console.log('ws error', msg);
        })
      },
    }
  }
</script>
