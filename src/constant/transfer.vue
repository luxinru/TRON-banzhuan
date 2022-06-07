<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Transfer',

  components: {},

  data () {
    return {
      active: 1,
      commission_account: 0,
      basic_account: 0,
      conversion_amount: 0,
      operable_conversion: 0
    }
  },

  created () {
    this.active = this.$route.query.type ? Number(this.$route.query.type) : 1
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/user/my_account_balance').then((res) => {
        this.commission_account = res.data.commission_account
        this.basic_account = res.data.basic_account
        this.operable_conversion =
          res.data.basic_to_commission_convertible_amount
      })
    },
    onChangeType (type) {
      this.active = type
      this.conversion_amount = 0
    },
    allbalance () {
      if (this.active === 1) {
        this.conversion_amount = this.basic_account
      } else {
        this.conversion_amount = this.commission_account
      }
    },
    handleSubmit () {
      if (!this.conversion_amount) { return this.$notify(this.$t('please_fill_in_the_transfer_amount')) }

      if (this.active === 2) {
        // commission_to_basic
        Fetch('/user/commission_to_basic', {
          conversion_amount: this.conversion_amount
        }).then((res) => {
          this.conversion_amount = 0
          this.$notify({
            background: '#07c160',
            message: res.info
          })
          this.start()
        })
      } else {
        // basic_to_commission
        Fetch('/user/basic_to_commission', {
          conversion_amount: this.conversion_amount
        }).then((res) => {
          this.conversion_amount = 0
          this.$notify({
            background: '#07c160',
            message: res.info
          })
          this.start()
        })
      }
    }
  }
}
</script>
