<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'PrizeCollection',

  components: {},

  data () {
    return {
      list: []
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data } = await Fetch('/index/getReceiveAwardList')
      this.list = data || []
    },

    async onSubmit () {
      const { data } = await Fetch('/index/receiveAward')
      this.$notify('兑换成功')
      this.init()
    }
  }
}
</script>
