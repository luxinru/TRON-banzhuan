<script>
import Fetch from '@/utils/fetch'
import { LANGUAGE } from '@/utils/constant'

export default {
  name: 'Login',

  components: {},

  data() {
    return {
      checked: false,
      data: {
        prefix: '',
        username: '',
        password: '',
      },
      showPopover: false,
      actions: LANGUAGE,
      footerType: 'n1',
      isShowTelAddressSelect: false,
      actionsText: '',
      prefixActions: [],
    }
  },

  computed: {
    showActions() {
      return this.prefixActions.filter(
        (item) => (item.name + '').indexOf(this.actionsText) > -1
      )
    },
  },

  mounted() {
    this.getMobilePrefix()
  },

  methods: {
    toRoute(path, options) {
      this.$router.push({
        path,
        query: options
      })
    },
    getMobilePrefix() {
      Fetch('/index/get_mobile_prefix', {}).then((res) => {
        this.prefixActions = res.data.map((action) => {
          return {
            name: action.prefix,
          }
        })
        if (this.prefixActions.length) {
          this.data.prefix = this.prefixActions[0].name
        }
      })
    },

    onSelect(item) {
      this.isShowTelAddressSelect = false
      this.data.prefix = item.name
    },

    onClickRemember() {
      this.checked = !this.checked
    },

    toRegister() {
      this.$router.push('/register')
    },

    onChangeLanguage(action) {
      window.localStorage.setItem('lang', action.value)
      window.location.reload()
    },

    handleSubmit() {
      if (!this.data.username) {
        this.$notify(this.$t('mobile_phone_number_cannot_be_blank'))
        return
      }

      if (!this.data.password) {
        this.$notify(this.$t('login_password_cannot_be_blank'))
        return
      }

      Fetch('/index/login', {
        ...this.data,
      })
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem('token', res.data.token)
          }
          this.$notify({
            background: '#07c160',
            message: this.$t('login_successful'),
          })
        })
        .then(async () => {
          const { data } = await Fetch('/index/sync', {}, null, false)
          localStorage.setItem('footer', data.footer || 'n1') // n1隐藏投资内容 n2开放投资内容
          this.footerType = data.footer || 'n1'

          if (this.footerType === 'n2') {
            this.$router.replace({
              path: /* this.$router.history.current.query.redirect || */ '/home',
            })
          } else {
            this.$router.replace({
              path: /* this.$router.history.current.query.redirect || */ '/main-activity',
            })
          }
        })
    },
  },
}
</script>
