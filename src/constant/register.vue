<script>
import Fetch from '@/utils/fetch'
import { LANGUAGE } from '@/utils/constant'

export default {
  name: 'Register',

  components: {},

  data () {
    return {
      data: {
        prefix: '',
        mobile: '',
        password: '',
        cpassword: '',
        t_mobile: '',
        code: ''
      },
      config: {},
      time: 60000,
      isSend: false,
      isShowTelAddressSelect: false,
      actions: [],
      actionsText: '',
      showPopover: false,
      languageActions: LANGUAGE,
      footerType: 'n1',
      captcha: '',
      captchaUrl: '',
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
    this.data.t_mobile = this.$route.query.m
    this.init()
    this.fetchImgCode()
  },

  methods: {
    toLogin () {
      this.$router.push('/login')
    },

    onChangeLanguage (action) {
      window.localStorage.setItem('lang', action.value)
      window.location.reload()
    },

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

      Fetch('/index/webconfig', {
        type: 'web'
      }).then((res) => {
        this.config = res.data
      })
    },

    async fetchImgCode () {
      const {
        data: { image, uniqid }
      } = await Fetch('/index/img_code')
      this.captchaUrl = image
      this.uniqid = uniqid
    },

    onSelect (item) {
      this.isShowTelAddressSelect = false
      this.data.prefix = item.name
    },

    onSendCode () {
      // if (!this.data.prefix) {
      //   return this.$notify(this.$t('Please_select_an_area_code'))
      // }
      if (!this.data.mobile) {
        return this.$notify(this.$t('please_enter_your_mobile_phone_number'))
      }
      if (!this.captcha) {
        return this.$notify(
          this.$t('Please_enter_the_graphic_verification_code')
        )
      }

      Fetch('/index/register_code', {
        mobile: this.data.mobile,
        prefix: this.data.prefix,
        code_img: this.captcha,
        app_uniqid: this.uniqid
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: this.$t('sent_successfully')
        })
        this.isSend = true
      })
    },

    onFinish () {
      this.isSend = false
    },

    handleSubmit () {
      if (!this.data.mobile) {
        this.$notify(this.$t('please_enter_your_mobile_phone_number'))
        return
      }

      if (!this.data.password) {
        this.$notify(this.$t('login_password_cannot_be_blank'))
        return
      }

      if (this.data.password !== this.data.cpassword) {
        this.$notify(this.$t('does_not_match'))
        return
      }

      // if (!this.data.code) {
      //   this.$notify(this.$t('please_enter_verification_code'))
      //   return
      // }

      Fetch('/index/register', {
        ...this.data
      }).then(async (res) => {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token)
        }
        this.$notify({
          background: '#07c160',
          message: this.$t('registration_success')
        })

        const { data } = await Fetch('/index/sync', {}, null, false)
        localStorage.setItem('footer', data.footer || 'n1') // n1隐藏投资内容 n2开放投资内容
        this.footerType = data.footer || 'n1'

        if (this.footerType === 'n2') {
          this.$router.replace('/home')
        } else {
          this.$router.replace('/main-activity')
        }
      })
    }
  }
}
</script>
