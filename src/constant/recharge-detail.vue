<script>
import Fetch from '@/utils/fetch'
import QRCode from 'qrcodejs2'
import Clipboard from 'clipboard'

/* eslint-disable no-new */
export default {
  name: 'RechargeDetail',

  components: {},

  data () {
    return {
      qrcode: '',
      address: 'Please wait. Loading...',
      btn_show: false,
      uid: '',
      apiUrl: '',
      trx2usdt: 0,
      active: 1
    }
  },

  computed: {
    type () {
      return this.$route.query.type || 1
    }
  },

  mounted () {
    this.start()
    this.getTRXPrice()
  },

  methods: {
    start () {
      // 获取钱包地址
      const that = this
      Fetch('/user/getCollectionWallet').then((res) => {
        console.log(res)
      })
      Fetch('/user/info').then((res) => {
        Fetch('/user/get_user_wallet_address').then((ret) => {
          const httpRequest = new XMLHttpRequest() // 第一步：建立所需的对象
          httpRequest.open(
            'GET',
            ret.data + 'apilc/createAccount?uid=' + res.data.mobile,
            true
          ) // 第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
          httpRequest.send() // 第三步：发送请求  将请求参数写在URL中
          /**
           * 获取数据后的处理程序
           */
          httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
              // var json = httpRequest.responseText; //获取到json字符串，还需解析
              // console.log(httpRequest.responseText)
              that.address = httpRequest.responseText
              that.creatQrCode()
              that.btn_show = true
              that.uid = res.data.mobile
              if (!that.address) {
                that.$router.refresh()
              }
              Fetch('/user/get_tron_account', {
                account: that.address
              }).then((res) => {})
            }
          }
        })
      })

      Fetch('/index/int').then((res) => {
        console.log('res.data :>> ', res.data)
        this.ad = res.data.ad
        this.data = res.data

        if (res.data.ad.activity_status === 1) {
          this.ad_show = true
        } else {
          this.ad_show = false
        }
      })
    },

    getTRXPrice () {
      const that = this
      const httpRequest = new XMLHttpRequest() // 第一步：建立所需的对象
      httpRequest.open(
        'GET',
        'https://apilist.tronscan.org/api/token/price?token=trx',
        true
      ) // 第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
      httpRequest.send() // 第三步：发送请求  将请求参数写在URL中
      /**
       * 获取数据后的处理程序
       */
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          // 如果返回了非0数字，证明钱包系统没有确认上分，平台发起充值记录(需手动确认)
          const res = JSON.parse(httpRequest.responseText)
          // console.log(res)
          that.price_in_usd = Number(res.price_in_usd).toFixed(6)
          that.trx2usdt = that.price_in_usd
        }
      }
    },
    creatQrCode () {
      const { clientWidth, clientHeight } = this.$refs.codeBox
      // console.log(this.$refs.codeBox)
      new QRCode(this.$refs.qrCodeUrl, {
        text: this.address,
        width: clientWidth - 10,
        height: clientHeight - 10,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },

    copy () {
      const clipboard = new Clipboard('.btn')
      clipboard.on('success', (e) => {
        console.log('e :>> ', e)
        this.$notify({
          type: 'success',
          message: this.$t('copy_successfully')
        })
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        console.log('e :>> ', e)
        // 不支持复制
        this.$notify({
          type: 'danger',
          message: this.$t('copy_failed')
        })
        // 释放内存
        clipboard.destroy()
      })
    },
    tgHistory () {
      this.$router.push('/home').catch((err) => {
        console.log('err :>> ', err)
      })
    },
    submit (trx, txID) {
      Fetch('/user/trx_apply', {
        trx: trx,
        remark: '',
        txID: txID,
        rid: 0
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: this.$t('submitted_successfully')
        })
        this.$router.push('/home').catch((err) => {
          console.log('err :>> ', err)
        })
      })
    }
  }
}
</script>
