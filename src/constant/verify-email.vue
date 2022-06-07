<script>
export default {
  name: 'VerifyEmail',

  components: {},

  data () {
    return {
      time: 60000,
      isSend: false
    }
  },

  mounted () {
  },

  methods: {
    onSendCode () {
      this.isSend = true
    },

    onFinish () {
      this.isSend = false
    }
  }
}
</script>
