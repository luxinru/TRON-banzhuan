<script>
import Fetch from '@/utils/fetch'
import { Notify } from 'vant'

export default {
  name: 'MallConfirm',

  components: {},

  data() {
    return {
      active: 0,
      info: {},
      num: 0,
      password: '',
    }
  },

  computed: {
    id() {
      return this.$route.query.id
    },
  },

  mounted() {
    this.init()
  },

  methods: {
    async init() {
      const {
        data: { data },
      } = await Fetch('/index/new_shop_apply_view', { id: this.id })
      console.log('data :>> ', data)
      this.info = data
      this.num = Number(this.info.min || 0)
    },

    onDebugging(type) {
      if (type === 1) {
        if (this.num === Number(this.info.min)) {
          this.num = Number(this.info.min)
        } else {
          this.num -= 1
        }
      } else {
        if (this.num === Number(this.info.max)) {
          this.num = Number(this.info.max)
        } else {
          this.num += 1
        }
      }
    },

    async onSubmit() {
      await Fetch('/index/new_shop_apply', {
        id: this.id,
        num: this.num,
        pwd: this.password,
      })
      Notify({ type: 'success', message: '购买成功' })
      this.$router.replace('/home')
    },
  },
}
</script>
