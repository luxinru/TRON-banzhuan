<script>
export default {
  name: 'Manage',

  components: {},

  data () {
    return {
    }
  },

  mounted () {
  },

  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.replace('/login')
    }
  }
}
</script>
