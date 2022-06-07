<script>
import Fetch from '@/utils/fetch'
import Clipboard from 'clipboard'

export default {
  name: 'Share',

  components: {},

  data () {
    return {
      data: {}
    }
  },

  mounted () {
    this.start()
  },

  methods: {
    start () {
      Fetch('/user/share').then((res) => {
        this.data = res.data
      })
    },

    copy () {
      const clipboard = new Clipboard('.btn')
      clipboard.on('success', (e) => {
        this.$notify({ type: 'success', message: this.$t('copy_successfully') })
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        // 不支持复制
        this.$notify({ type: 'danger', message: this.$t('copy_failed') })
        // 释放内存
        clipboard.destroy()
      })
    }
  }
}
</script>
