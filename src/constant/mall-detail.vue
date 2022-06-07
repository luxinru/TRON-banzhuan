<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'MallDetail',

  components: {},

  data () {
    return {
      active: 0,
      info: {},
      myLuckDrawList: [],
      lotteryNumber: [],
      luckDrawList: [],
      winningNumbers: [],
      showPopover: false,
      currentItem: {}
    }
  },

  computed: {
    id () {
      return this.$route.query.id
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      const { data: { data, my_luck_draw_list, lottery_number, luck_draw_list, winning_numbers } } = await Fetch('/index/new_shop_view', {id: this.id})
      console.log('data :>> ', data);
      this.info = data
      this.myLuckDrawList = my_luck_draw_list
      this.lotteryNumber = lottery_number
      this.luckDrawList = luck_draw_list
      this.winningNumbers = winning_numbers
    },

    onCheckNumber (item) {
      this.currentItem = item
      this.showPopover = true
    }
  }
}
</script>
