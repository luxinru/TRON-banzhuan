<script>
import Fetch from '@/utils/fetch'
export default {
  name: 'InvestDetail',

  data () {
    return {
      data: {}
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/index/item_view', { id: this.id }).then(res => {
        this.data = res.data.view
      })
    }
  }
}
</script>

<style lang="less" scoped>
