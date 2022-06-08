<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Findpwd',

  components: {},

  data () {
    return {
      data: {
        prefix: '',
        mobile: '',
        passwd: '',
        npasswd: '',
        code: '',
        captcha: ''
      },
      time: 60000,
      isSend: false,
      isShowTelAddressSelect: false,
      actions: [],
      actionsText: '',
      captcha: '',
      uniqid: ''
    }
  },

  computed: {
    showActions () {
      return this.actions.filter(
        (item) => (item.name + '').indexOf(this.actionsText) > -1
      )
    }
  },

  mounted () {
    this.init()
    this.fetchImgCode()
  },

  methods: {
    async init () {
      Fetch('/index/get_mobile_prefix', {}).then((res) => {
        this.actions = res.data.map((action) => {
          return {
            name: action.prefix
          }
        })
        if (this.actions.length) {
          this.data.prefix = this.actions[0].name
        }
      })
    },

    async fetchImgCode () {
      const {
        data: { image, uniqid }
      } = await Fetch('/index/img_code')
      this.captcha = image
      this.uniqid = uniqid
    },

    onSendCode () {
      if (!this.data.captcha) {
        return this.$notify(
          this.$t('Please_enter_the_graphic_verification_code')
        )
      }
      if (!this.data.prefix) { return this.$notify(this.$t('Please_select_an_area_code')) }
      if (!this.data.mobile) { return this.$notify(this.$t('please_enter_your_mobile_phone_number')) }

      Fetch('/index/forget_code', {
        mobile: this.data.mobile,
        prefix: this.data.prefix,
        code_img: this.data.captcha,
        app_uniqid: this.uniqid
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: this.$t('sent_successfully')
        })
        this.isSend = true
      })
    },

    onSelect (item) {
      this.isShowTelAddressSelect = false
      this.data.prefix = item.name
    },

    onFinish () {
      this.isSend = false
    },

    handleSubmit () {
      if (!this.data.mobile) {
        this.$notify(this.$t('please_enter_your_mobile_phone_number'))
        return
      }

      if (!this.data.passwd) {
        this.$notify(this.$t('login_password_cannot_be_blank'))
        return
      }

      if (this.data.passwd !== this.data.npasswd) {
        this.$notify(this.$t('does_not_match'))
        return
      }

      if (!this.data.code) {
        this.$notify(this.$t('please_enter_verification_code'))
        return
      }

      Fetch('/index/forgetpwd', {
        type: 'forgetpwd',
        phone: this.data.mobile,
        password: this.data.passwd,
        code: this.data.code
      })
        .then(() => {
          this.$notify({
            background: '#07c160',
            message: this.$t('modified_successfully')
          })
        })
        .then(() => {
          this.$router.replace({
            path: '/login'
          })
        })
    }
  }
}
</script>
