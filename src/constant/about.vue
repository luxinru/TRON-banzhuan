<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'About',

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
      const { data: { list } } = await Fetch('/index/about', {}, { method: 'get' })
      this.list = list
    }
  }
}
</script>
