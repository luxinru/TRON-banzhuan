<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'InvestConfirm',

  components: {},

  data () {
    return {
      data: {},
      money: 0,
      real_money: 0,
      pwd: '',
      min: 0
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    },

    shouru () {
      return (
        (this.real_money +
        this.real_money * (Number(this.data.rate) / 100) * this.data.day).toFixed(6)
      )
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/index/item_view', {
        id: this.id
      }).then((res) => {
        this.data = res.data.view
        this.min = Number(res.data.view.min)
        this.real_money = this.min
        this.money = res.data.money
      })
    },

    handleSubmit () {
      if (!this.real_money) {
        this.$notify(this.$t('Please_enter_the_investment_amount'))
        return
      }

      if (this.real_money < this.min) {
        this.$notify(this.$t('The_investment_amount_cannot_be_less_than_the_starting_investment_amount'))
        return
      }

      if (!this.pwd) {
        this.$notify(this.$t('please_enter_transaction_password'))
        return
      }

      Fetch('/index/item_apply', {
        id: this.id,
        money: this.real_money,
        pwd: this.pwd
      }).then(() => {
        this.$notify({
          background: '#07c160',
          message: this.$t('investment_success')
        })
        this.$router.replace('/home')
      })
    }
  }
}
</script>
