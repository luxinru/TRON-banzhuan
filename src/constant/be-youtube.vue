<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'BeYoutube',

  components: {},

  data () {
    return {
      status: 0,
      innerStatus: 0,
      telegram_channel: '',
      youtube_num_concerns: '',
      telegram_account: '',
      isShow: false,
      telegramuRL: '',
      invitation_rebate1: 0,
      invitation_rebate2: 0,
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data: { telegram_channel: telegramChannel, data: innerData, status, invitation_rebate1, invitation_rebate2 } } = await Fetch('/user/get_youtube_promoter')
      this.status = status
      this.invitation_rebate1 = invitation_rebate1
      this.invitation_rebate2 = invitation_rebate2
      if (this.status === 1) {
        this.innerStatus = innerData.status
        this.telegramuRL = telegramChannel
        if (this.innerStatus === 0 || this.innerStatus === 2) {
          this.isShow = true
        }
      }
    },

    async submit () {
      if (this.status === 1) return

      if (!this.telegram_channel) return this.$notify(this.$t('please_enter') + this.$t('Your_Youtube_channel_link'))
      if (!this.youtube_num_concerns) return this.$notify(this.$t('please_enter') + this.$t('Number_of_subscriptions_to_your_Youtube_channel'))
      if (!this.telegram_account) return this.$notify(this.$t('please_enter') + this.$t('Your_Telegarm_account'))

      const { data } = await Fetch('/user/set_youtube_promoter', {
        youtube_link: this.telegram_channel,
        youtube_num_concerns: this.youtube_num_concerns,
        telegram_account: this.telegram_account
      })
      this.$notify({
        background: '#07c160',
        message: this.$t('successful_application')
      })
      this.init()
    },

    onOk () {
      // window.open(this.telegramuRL)
      window.location.href = this.telegramuRL
      // this.$router.go(-1)
    },

    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>
