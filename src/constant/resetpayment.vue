<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Resetpayment',

  components: {},

  data () {
    return {
      passwd: '',
      npasswd: '',
      snpasswd: ''
    }
  },

  mounted () {
  },

  methods: {
    handleSubmit () {
      if (!this.passwd) {
        this.$notify(this.$t('please_enter_your_login_password'))
        return
      }

      if (!this.npasswd) {
        this.$notify(this.$t('new_password_cannot_be_blank'))
        return
      }

      if (!this.snpasswd) {
        this.$notify(this.$t('confirm_password_can_not_be_blank'))
        return
      }

      if (this.npasswd !== this.snpasswd) {
        this.$notify(this.$t('does_not_match'))
        return
      }

      Fetch('/user/resetpaypwd', {
        passwd: this.passwd,
        npasswd: this.npasswd
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: this.$t('modified_successfully')
        })
        this.$router.back()
      })
    }
  }
}
</script>
