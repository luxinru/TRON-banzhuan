<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Recharge',

  components: {},

  data () {
    return {
      data: {}
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/index/interest', {
        id: this.id
      }).then((res) => {
        if (res.data && res.data.apr_plan && res.data.apr_plan.length) {
          res.data.apr_plan.forEach((item) => {
            item.time1Copy = item.time1 ? item.time1.split(' ')[0] : ''
            item.time2Copy = item.time1 ? item.time2.split(' ')[0] : ''
          })
        }
        this.data = res.data
      })
    }
  }
}
</script>
