<script>
export default {
  name: 'MyInvestment',

  components: {},

  data () {
    return {
      active: 1
    }
  },

  mounted () {
  },

  methods: {
    onChangeType (type) {
      this.active = type
    },
    acconutNotice () {
      this.$notify({
        background: '#07c160',
        message: 'coming soon...'
      })
    }
  }
}
</script>
