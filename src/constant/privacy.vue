<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Privacy',

  components: {},

  data () {
    return {
      title: '',
      content: ''
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    async start () {
      const { data } = await Fetch('/index/article_detail', { id: 13 })
      console.log('data :>> ', data)
      this.title = data.title || ''
      this.content = data.content || ''
    }
  }
}
</script>
