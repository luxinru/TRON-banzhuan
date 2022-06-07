<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'ParticipationRecord',

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
      const { data } = await Fetch('/index/participation_record')
      this.list = data || []
    }
  }
}
</script>
