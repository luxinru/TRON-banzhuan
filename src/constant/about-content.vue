<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'AboutContent',

  components: {},

  data () {
    return {
      title: '',
      content: ''
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data } = await Fetch('/index/article_detail', { id: this.id })
      this.title = data.title || ''
      this.content = data.content || ''
    }
  }
}
</script>
