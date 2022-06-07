<script>
import Fetch from '@/utils/fetch'
import moment from 'moment'

export default {
  name: 'Notice',

  components: {},

  data () {
    return {
      list: [],
      timer: null,
      isMsg: 0
    }
  },

  filters: {
    dateFormat (time) {
      return moment(time).format('YYYY-MM-DD')
    }
  },

  mounted () {
    this.init()

    Fetch('/user/notice', {}, null, false).then((r) => {
      const {
        data: { list }
      } = r
      const idReadArr = list.filter((item) => !item.is_read)
      this.isMsg = idReadArr.length
    })

    this.timer = setInterval(() => {
      Fetch('/user/notice', {}, null, false).then((r) => {
        const {
          data: { list }
        } = r
        const idReadArr = list.filter((item) => !item.is_read)
        this.isMsg = idReadArr.length
      })
    }, 15 * 1000)
  },

  beforeDestroy () {
    window.clearInterval(this.timer)
  },

  methods: {
    async init () {
      const { data: { list } } = await Fetch('/user/notice')
      this.list = list
    }
  }
}
</script>
