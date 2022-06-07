<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Agreement',

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
      const { data } = await Fetch('/index/article_detail', { id: 12 })
      console.log('data :>> ', data)
      console.log('data :>> ', data)
      this.title = data.title || ''
      this.content = data.content || ''
    }
  }
}
</script>
