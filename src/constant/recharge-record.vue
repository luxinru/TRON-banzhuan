<script>
import Fetch from '@/utils/fetch'
import moment from 'moment'

export default {
  name: 'RechargeRecord',

  components: {},

  data () {
    return {
      data: {}
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    moment,

    start () {
      Fetch('/user/recharge_record').then((res) => {
        this.data = res.data
        console.log(this.data)
      })
    }
  }
}
</script>
