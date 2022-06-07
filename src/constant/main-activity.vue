<script>
import Fetch from '@/utils/fetch'
import { LANGUAGE } from '@/utils/constant'

export default {
  name: 'MainActivity',

  components: {},

  data () {
    return {
      showPopover: false,
      actions: LANGUAGE,
      data: {
        notice: ''
      },
      banners: [],
      statusData: {},
      invitation_rebate1: 0,
      loading: false
    }
  },

  computed: {
    footerType () {
      return localStorage.getItem('footer')
    }
  },

  created () {
    this.start()
  },

  methods: {
    async start () {
      this.loading = false
      const { data } = await Fetch('/index/banner', {}, { method: 'get' })
      this.banners = data

      Fetch('/index/int').then((res) => {
        this.data = res.data
      })

      const { data: statusData } = await Fetch('/user/get_activity_status')
      console.log('statusData :>> ', statusData)
      this.statusData = statusData
      // "is_youtube_promoter": 0, //是否为youtube推广员 1是0 否
      //  "sign_status": 1, //签到状态 0 未签到 1 已签到
      //  "youtube_by_reward": 0,//成为推广员奖励金额
      //  "is_follow_telegram_channel": 0,//是否关注
      //  "follow_telegram_channel_money": 0//关注获得金额

      Fetch('/user/get_activity_status').then((res) => {
        console.log('get_activity_status :>> ', res);
        const { invitation_rebate1 } = res.data
        this.invitation_rebate1 = invitation_rebate1
      })

      this.loading = true
    },
    onChangeLanguage (action) {
      window.localStorage.setItem('lang', action.value)
      window.location.reload()
    },

    toRoute (path, options) {
      this.$router.push({
        path,
        query: options
      })
    }
  }
}
</script>
