<script>
import Fetch from '@/utils/fetch'
import moment from 'moment'

export default {
  name: 'WithdrawRecord',

  components: {},

  data () {
    return {
      data: {
        list: []
      },
    }
  },

  computed: {
    statusName () {
      return {
        0: {
          text: this.$t('pending_review'),
          color: 'rgba(153, 153, 153, 1)'
        },
        1: {
          text: this.$t('withdrawn'),
          color: 'rgba(44, 187, 54, 1)'
        },
        2: {
          text: this.$t('did_not_pass'),
          color: 'rgba(238, 50, 42, 1)'
        }
      }
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    moment,

    start () {
      Fetch('/user/cash_record').then((res) => {
        this.data = res.data
        console.log(this.data)
      })
    }
  }
}
</script>
