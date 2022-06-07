<script>
import Fetch from '@/utils/fetch'
import moment from 'moment'
import { Dialog } from 'vant'

export default {
  name: 'Qiandao',

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
      Fetch('/user/get_sign').then((res) => {
        this.data = res.data
      })
    },
    checkin () {
      if (this.data.status === 1) return
      Fetch('/user/sign').then((res) => {
        if (res.data.coss === 1) {
          Dialog.alert({
            title: this.$t('tips'),
            message: res.info,
            showCancelButton: true
            // confirmButtonText: '去认证'
          })
        } else {
          this.start()
          this.$notify({
            background: '#07c160',
            message: this.$t('submitted_successfully')
          })
        }
      })
    }
  }
}
</script>
