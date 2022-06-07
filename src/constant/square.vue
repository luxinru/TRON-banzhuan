<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Square',

  components: {},

  data() {
    return {
      banners: [],
      list: []
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    async init() {
      const { data } = await Fetch('/index/banner', {}, { method: 'get' })
      this.banners = data

      const { data: list } = await Fetch('/index/getSquares')
      this.list = list || []
    },
  },
}
</script>
