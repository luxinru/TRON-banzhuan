<script>
import Fetch from '@/utils/fetch'
import moment from 'moment'

export default {
  name: 'Wallet',

  components: {},

  data () {
    return {
      list: [],
      currentClass: '6',
      classArr: [],
      isShowSelect: false
    }
  },

  computed: {
    name () {
      const finded = this.classArr.find(item => item.value === this.currentClass)
      return finded ? finded.text || '-' : '-'
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    moment,

    async init () {
      const { data: { class: classArr, list } } = await Fetch('/user/funds', {
        type: this.currentClass
      })
      this.list = list
      this.classArr = Object.keys(classArr).map(key => {
        return {
          text: classArr[key],
          value: key
        }
      })
      console.log('this.classArr :>> ', this.classArr)
    },

    onConfirm (data) {
      this.currentClass = data.value
      this.init()
      this.isShowSelect = false
    }
  }
}
</script>
