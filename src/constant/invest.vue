<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Invest',

  components: {},

  data () {
    return {
      data: {
        list: []
      },
      rate: '',
      money: 0
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/user/info').then((res) => {
        this.rate = res.data.rate
        this.money = res.data.money
      })

      Fetch('/user/getTRXDetail').then((res) => {
        this.data = res.data
      })
    },
    receive (id) {
      Fetch('/user/receiveTRX', {
        id: id
      }).then((res) => {
        this.$notify({
          background: '#07c160',
          message: res.info
        })
        if (res.code === 1) {
          this.strat()
        }
      })
    },
    toDetail (data) {}
  }
}
</script>
