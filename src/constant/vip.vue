<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'Vip',

  components: {},

  data () {
    return {
      info: {}
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data } = await Fetch('/user/get_member')
      console.log('data :>> ', data);
      this.info = data
    }
  }
}
</script>
