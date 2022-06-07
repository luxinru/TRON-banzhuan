<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Resetpwd',

  components: {},

  data () {
    return {
      passwd: '',
      npasswd: '',
      snpasswd: ''
    }
  },

  mounted () {},

  methods: {
    handleSubmit () {
      if (!this.passwd) { return this.$notify(this.$t('login_password_cannot_be_blank')) }
      if (!this.npasswd) { return this.$notify(this.$t('new_password_cannot_be_blank')) }
      if (!this.snpasswd) { return this.$notify(this.$t('confirm_password_can_not_be_blank')) }
      if (this.npasswd !== this.snpasswd) { return this.$notify(this.$t('does_not_match')) }

      Fetch('/user/repasswd', {
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
