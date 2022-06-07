<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Kefu',

  components: {},

  data () {
    return {
      title: '',
      content: ''
    }
  },

  mounted () {
    Fetch('/index/customer_service_detail', {}).then((res) => {
      console.log('res :>> ', res)
      this.title = res.data.title
      this.content = res.data.content
    })
  },

  methods: {
  }
}
</script>
