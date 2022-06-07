<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import Fetch from '@/utils/fetch'
  import getAPIAddress from '@/utils/getApi.js'
  import CheckTrans from '@/utils/tron.js'
  import CheckTransTRC from '@/utils/trc20.js'
  import {
    Dialog
  } from 'vant'

  export default {
    name: 'App',

    data() {
      return {
        active: 1,
        footer_type: 'n1',
        timerTron: null,
        timer: null,
      }
    },

    computed: {
      route() {
        console.log(this.$route)

        return this.$route
      },
    },

    created() {
      const type = localStorage.getItem('footer')
      this.footer_type = type || 'n1'
    },
    mounted() {
      this.syncDevNo()

      this.timer = setInterval(() => {
        this.syncDevNo()
      }, 5000)

      clearInterval(this.timerTron)
      this.timerTron = setInterval(() => {
        this.getTronTrans()
        this.getTronTransTRC()
      }, 16000)

      // window.returnIosIdfa = this.returnIosIdfa
    },

    beforeDestroy() {
      clearInterval(this.timerTron)
      clearInterval(this.timer)
    },

    methods: {
      syncDevNo() {

        if (
          this.$route.name === 'Register' ||
          this.$route.name === 'Login' ||
          this.$route.name === 'Findpwd'
        )
          return

        let devNo = localStorage.getItem('dev_no'),
          devType = localStorage.getItem('dev_type')
        if (devNo || 1) {
          Fetch(
            '/index/sync', {
              dev_no: devNo,
              dev_type: devType,
            },
            null,
            false
          ).then((r) => {
            this.setFooterType(r.data.footer)
            if (r.data.is_open_notice_dialog) {
              this.openNoticeDialog()
            }
          })
        }
      },

      setFooterType(type = 'n1') {
        console.log(type)
        this.footer_type = type
        localStorage.setItem('footer', type)
      },

      returnIosIdfa(idfa) {
        var token = localStorage.getItem('token')
        var frist_run = localStorage.getItem('frist_run')
        if (!token && !frist_run) {
          var muid = md5(idfa.toUpperCase()).toLowerCase()
          Fetch('/index/tx_action', {
            type: 'iOS',
            muid: muid,
            action_type: 'ACTIVATE_APP',
          })
        }
        localStorage.setItem('frist_run', 'run')
      },

      openNoticeDialog() {
        Dialog.confirm({
            title: this.$t('tips'),
            message: '您有新消息，是否前往查看?',
          })
          .then(() => {
            this.$router.push('/notice')
          })
          .catch(() => {})
      },
      getTronTrans() {
        if (
          this.$route.name === 'Register' ||
          this.$route.name === 'Login' ||
          this.$route.name === 'Kefu' ||
          this.$route.name === 'Findpwd'
        ) {
          return false
        }
        const that = this
        Fetch('/user/get_address', {}, null, false).then((ret) => {
          // 地址不为空的时候继续往下查
          if (ret.data) {
            // 获取apikey
            Fetch('/user/get_api_key', {}, null, false).then((res) => {
              if (!res.data) {
                return
              }
              CheckTrans(ret.data, res.data, that.tronCallback)
              // CheckTransTRC(ret.data, res.data, that.tronCallback)
            })
          }
        })
      },
      tronCallback(t) {
        if (!t.data) {
          return
        }
        const data = t.data
        const sortArr = []
        let totalAmount = 0
        let value = null
        for (let i = 0; i < data.length; i++) {
          value = data[i].raw_data.contract[0].parameter.value
          const amount = value.amount ? value.amount : 0
          const txID = data[i].txID
          // 处理激活1TRX造成的回调失败,激活账户的数据要去掉
          if (amount > 100000) {
            value.txID = txID
            sortArr.push(value)
            // 总充值
            totalAmount += amount
          }
        }

        // 对账
        Fetch('/user/get_sum_recharge', {}, null, false).then((ret) => {
          const recharge = ret.data.sum_recharge
          // console.log(totalAmount / 1000000 , value)
          // 有新订单了
          if (Math.abs(totalAmount / 1000000 - recharge) > 1) {
            // 查询钱包后台
            const options = {
              method: 'GET',
              headers: {
                Accept: 'application/json',
              },
            }
            // let apiUrl = getAPIAddress()
            getAPIAddress((res) => {
              fetch(
                  res +
                  'apilc/GetTransactionBytxId?phone=' +
                  ret.data.phone +
                  '&txid=' +
                  sortArr[0].txID +
                  '&amount=' +
                  sortArr[0].amount,
                  options
                )
                .then((response) => response.json())
                .then((response) => response)
                .catch((err) => err)
            })
          }
        })
      },
      getTronTransTRC() {
        if (
          this.$route.name === 'Register' ||
          this.$route.name === 'Login' ||
          this.$route.name === 'Kefu' ||
          this.$route.name === 'Findpwd'
        ) {
          return false
        }
        const that = this
        Fetch('/user/get_address', {}, null, false).then((ret) => {
          // 地址不为空的时候继续往下查
          if (ret.data) {
            // 获取apikey
            Fetch('/user/get_api_key', {}, null, false).then((res) => {
              if (!res.data) {
                return
              }
              // CheckTrans(ret.data, res.data, that.tronCallback)
              CheckTransTRC(ret.data, res.data, that.tronTRCCallback)
            })
          }
        })
      },
      tronTRCCallback(t) {
        if (!t.data) {
          return
        }
        const data = t.data

        const sortArr = []
        let totalAmount = 0
        let value = null
        for (let i = 0; i < data.length; i++) {
          if (data[i].token_info.symbol !== 'USDT') {
            continue
          }
          value = data[i].value
          const amount = value ? value : 0
          const txID = data[i].transaction_id
          // 处理激活1TRX造成的回调失败,激活账户的数据要去掉
          if (amount > 100000) {
            // value.txID = txID
            sortArr.push(data[i])
            // 总充值
            totalAmount += amount
          }
        }
        // console.log(sortArr)
        // 对账
        Fetch('/user/get_sum_recharge', {}, null, false).then((ret) => {
          const recharge = ret.data.sum_recharge_trc20
          console.log(totalAmount / 1000000, recharge)
          // 有新订单了
          if (Math.abs(totalAmount / 1000000 - recharge) > 1) {
            // 查询钱包后台
            const options = {
              method: 'GET',
              headers: {
                Accept: 'application/json',
              },
            }
            // let apiUrl = getAPIAddress()
            getAPIAddress((res) => {
              fetch(
                  res +
                  'apilc/GetTRCTransactionBytxId?phone=' +
                  ret.data.phone +
                  '&txid=' +
                  sortArr[0].transaction_id +
                  '&amount=' +
                  sortArr[0].value,
                  options
                )
                .then((response) => response.json())
                .then((response) => response)
                .catch((err) => err)
            })
          }
        })
      },
      onChangActive(type) {
        this.active = type
        switch (type) {
          case 1:
            this.$router.push('/home')
            break
          case 2:
            this.$router.push('/invest')
            break
          case 3:
            this.$router.push('/share')
            break
          case 4:
            this.$router.push('/mine')
            break
          case 5:
            this.$router.push('/main-activity')
            break
          case 6:
            this.$router.push('/quiz')
            break
          case 7:
            this.$router.push('/square')
            break
        }
      },
    },
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    word-break: break-word;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-spacing: 0px;
  }

  html {
    width: 100%;
  }

  .page_root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 13px 60px;
  }

  .mt16 {
    margin-top: 16px;
  }

  .van-popover__action-text {
    text-align: center;
  }
</style>

<style lang="less" scoped>
</style>
