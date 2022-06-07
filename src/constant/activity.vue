<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Activity',

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
      const { data } = await Fetch('/index/activity_detail', {})
      console.log('data :>> ', data)
      this.title = data.title
      this.content = data.content
    }
  }
}
</script>
