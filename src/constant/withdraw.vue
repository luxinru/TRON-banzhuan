<script>
  import Fetch from '@/utils/fetch'
  import getAPIAddress from '@/utils/getApi.js'
  import Clipboard from 'clipboard'

  export default {
    name: 'Withdraw',

    data() {
      return {
        basic_account: '0.000000',
        gift_accoun: '0.000000',
        commission_account: '0.000000',
        withdrawal_limit_remaining_today: 0,
        daily_withdrawal_limit: 0,
        money: '',
        pwd: '',
        address: '',
        autoCash: 0,
        mobile: '',
        active: 2,
        gift_status: 0,
        diasabledInput: false,
        isShowModel: false,
        customer_service_link: '',
        code: '',
        isShowConfirmModel: false,
        title: 'VIP-1',
        interest_arbitrage_num: 1,
        cash_rate: 5
      }
    },
    computed: {},
    mounted() {
      this.start()
    },
    methods: {
      start() {
        Fetch('/user/info').then((res) => {
          this.title = res.data.interest_arbitrage_member.title
          this.cash_rate = res.data.interest_arbitrage_member.cash_rate
          this.interest_arbitrage_num = res.data.interest_arbitrage_member.interest_arbitrage_num
        })
        Fetch('/user/cash_info').then((res) => {
          this.mobile = res.data.mobile
          this.basic_account = res.data.basic_account
          this.gift_account = res.data.gift_account
          this.commission_account = res.data.commission_account
          this.daily_withdrawal_limit = res.data.daily_withdrawal_limit
          this.withdrawal_limit_remaining_today =
            res.data.withdrawal_limit_remaining_today
          this.autoCash = res.data.autoCash
          this.gift_status = res.data.gift_status
          this.address = res.data.address
          if (this.address) {
            this.diasabledInput = true
          } else {
            this.diasabledInput = false
          }
          // alert()
        })
      },

      onCopyCode() {
        var clipboard = new Clipboard('.btn2')
        clipboard.on('success', (e) => {
          console.log('e :>> ', e)
          this.$notify({
            type: 'success',
            message: this.$t('copy_successfully'),
          })
          //  释放内存
          clipboard.destroy()
        })
        clipboard.on('error', (e) => {
          console.log('e :>> ', e)
          // 不支持复制
          this.$notify({
            type: 'danger',
            message: this.$t('copy_failed'),
          })
          // 释放内存
          clipboard.destroy()
        })
      },

      // onOpenLink() {
      //   window.open(this.customer_service_link)
      //   this.isShowModel = false
      // },

      onCheckout(type) {
        const firstT = this.address.substr(0, 1)
        if (type === 1) {
          if (!this.money)
            return this.$notify(this.$t('please_enter_the_withdrawal_amount'))

          if (['t', 'T'].indexOf(firstT) < 0)
            return this.$notify(this.$t('t_address'))

          this.isShowConfirmModel = true
        } else {
          if (!this.money)
            return this.$notify(this.$t('please_enter_the_withdrawal_amount'))

          if (['t', 'T'].indexOf(firstT) < 0)
            return this.$notify(this.$t('t_address'))

          this.handleSubmit()
        }
      },

      handleSubmit() {
        Fetch('/user/cost_apply', {
          money: this.money,
          address: this.address,
          type: this.active,
          passwd: this.pwd,
        }).then((ret) => {
          // 自动提现开关
          if (this.autoCash) {
            var that = this
            if (!ret) {
              return
            }
              getAPIAddress((res) => {
                var httpRequest = new XMLHttpRequest() //第一步：建立所需的对象
                httpRequest.open(
                  'GET',
                  res +
                  'apilc/auto_cash?phone=' +
                  that.mobile +
                  '&balance=' +
                  that.money +
                  '&to=' +
                  that.address +
                  '&oid=' +
                  ret.info +
                  `&lang=${
                      window.localStorage.getItem('lang')
                        ? window.localStorage.getItem('lang')
                        : 'en'
                    }`,
                  true
                ) //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
                httpRequest.send() //第三步：发送请求  将请求参数写在URL中
                /**
                 * 获取数据后的处理程序
                 */
                httpRequest.onreadystatechange = function() {
                  if (
                    httpRequest.readyState == 4 &&
                    httpRequest.status == 200
                  ) {
                    // 如果返回了非0数字，证明钱包系统已经成功发起转账
                    let res = JSON.parse(httpRequest.responseText)
                    if (res.result && res.txid) {
                      // 自动确认提现订单
                      Fetch('/user/auto_cost_apply', {
                        oid: ret.info,
                        txid: res.txid,
                      }).then((ret) => {
                        console.log('ret :>> ', ret)
                      })
                    }
                  }
                }
              })
          } else {
            this.$notify({
              background: '#07c160',
              message: this.$t('successful_application'),
            })
          }

          this.$notify({
            background: '#07c160',
            message: this.$t('withdrawal_application_successful'),
          })
          this.$router.back()
        })
      },
      giftSubmit() {
        const firstT = this.address.substr(0, 1)

        if (['t', 'T'].indexOf(firstT) < 0)
          return this.$notify(this.$t('t_address'))

        if (this.gift_status == 1) {
          if (!this.money) {
            this.$notify(this.$t('please_enter_the_withdrawal_amount'))
            return
          }

          Fetch('/user/cost_apply', {
            money: this.money,
            address: this.address,
            type: 1,
            passwd: this.pwd,
          }).then((ret) => {
            Fetch('/index/cash_tips').then((rey) => {
                this.$notify({
                  background: '#07c160',
                  message: this.$t('successful_application'),
                })
                this.$router.back()
            })
          })
        }
      },
      getTitle() {
        switch (this.active) {
          case 2:
            return this.$t('commission_account_balance')
          case 3:
            return this.$t('gift_account_balance')
          default:
            return this.$t('basic_account_balance')
        }
      },

      getPrice() {
        switch (this.active) {
          case 2:
            return this.commission_account
          case 3:
            return this.gift_account
          default:
            return this.basic_account
        }
      },

      onChangeType(type) {
        this.active = type
      }
    },
  }
</script>
