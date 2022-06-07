<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'NoticeContent',

  components: {},

  data () {
    return {
      title: '',
      content: '',
      add_time: ''
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  mounted () {
    Fetch('/user/notice_view', { id: this.id }).then((res) => {
      console.log('res :>> ', res)
      this.title = res.data.view.title
      this.content = res.data.view.content
      this.add_time = res.data.view.add_time
    })
  },

  methods: {
  }
}
</script>
