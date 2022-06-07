<script>
import Fetch from '@/utils/fetch'
import { LANGUAGE } from '@/utils/constant'

export default {
  name: 'Mine',

  components: {},

  data () {
    return {
      data: {
        money: 0,
        promotion: 0,
        value: 0
      },
      value: 0,

      config: {},
      totalBalance: '0.000000',
      appstore: '',
      google: '',
      showPopover: false,
      actions: LANGUAGE,
      vip:'VIP-1'
    }
  },

  computed: {
    footerType () {
      return localStorage.getItem('footer')
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/user/info').then((res) => {
        this.data = res.data // res赋值
        this.totalBalance = (
          // Number(this.data.money) +
          // Number(this.data.gift) +
          Number(this.data.promotion)
        ).toFixed(6)
      })
      Fetch('/user/get_sum_recharge', {}, null, false).then((ret) => {
        this.value = ret.data.sum_recharge
      })
      Fetch('/index/webconfig', {
        type: 'web'
      }).then((res) => {
        this.config = res.data
        this.appstore = res.data.app_link.split(',')[0]
        this.google = res.data.app_link.split(',')[1]
        // console.log(this.appstore)
      })
      /* 待删除 */
    },

    onChangeLanguage (action) {
      window.localStorage.setItem('lang', action.value)
      window.location.reload()
    }
  }
}
</script>
