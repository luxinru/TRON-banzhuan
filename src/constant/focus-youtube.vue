<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'FocusYoutube',

  components: {},

  data () {
    return {
      status: 1,
      code: '',
      telegramChannel: ''
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data: { is_follow_telegram_channel: status, telegram_channel: telegramChannel } } = await Fetch('/user/get_telegram_channel')
      console.log('status :>> ', status)
      this.status = status
      this.telegramChannel = telegramChannel
    },

    async submit () {
      if (!this.code) return this.$notify(this.$t('Please_enter_the_pick_up_code'))

      if (this.submit === 1) return
      const { data } = await Fetch('/user/follow_telegram_channel', {
        code: this.code
      })
      console.log('data :>> ', data)
      this.$notify({
        background: '#07c160',
        message: this.$t('successful_application')
      })
    },

    onOk () {
      this.$router.go(-1)
    }
  }
}
</script>
