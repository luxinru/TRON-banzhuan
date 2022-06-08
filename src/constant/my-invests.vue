<script>
import Fetch from '@/utils/fetch'

export default {
  name: 'MyInvests',

  components: {},

  data () {
    return {
      data: {},
      swapData: null,
      swapData0: null,
      sdEXName: '',
      sdPairs: '',
      sdTime: '',
      progress: '',
      width: ''
    }
  },

  mounted () {
    this.init()
    // this.fillProgressBar()
  },

  methods: {
    getImgUrl (id) {
      try {
        return require('@/assets/images/alpha/' + id + '.png')
      } catch (e) {
        return require('@/assets/images/alpha/1.png')
      }
    },
    async init () {
      const {
        data: { list }
      } = await Fetch('/user/invest')
      this.data = list

      Fetch('/index/getUserPairsOrderList').then((res) => {
        // this.ad = res.data.ad
        this.swapData = res.data
        // console.log(this.swapData)
        if (res.data.length === 0) {
          return
        }

        this.swapData0 = res.data[0]
        this.sdEXName = res.data[0].left_exchange_name
        this.sdPairs = res.data[0].left_market_pair
        this.sdTime = res.data[0].time
        //  获取指定指定时区时间（北京时区为8，纽约时区为-5。东时区为正数，西市区为负数）
        function getTimeByZone (timezone = 8, date) {
          // 本地时间距离（GMT时间）毫秒数
          const nowDate = !date
            ? new Date().getTime()
            : new Date(date).getTime()
          // 本地时间和格林威治时间差，单位分钟
          const offsetGMT = new Date().getTimezoneOffset()
          //  反推到格林尼治时间
          const GMT = nowDate + offsetGMT * 60 * 1000
          //  获取指定时区时间
          const targetDate = new Date(GMT + timezone * 60 * 60 * 1000)
          return targetDate
        }
        setTimeout(() => {
          const ctime = 60 * 30
          const now = getTimeByZone(8, new Date().getTime())
          // eslint-disable-next-line no-useless-escape
          const orderTime = Date.parse(res.data[0].time.replace(/\-/g, '/'))
          const itime = ((now - orderTime) / 1000).toFixed(0)
          let pass = (itime / ctime).toFixed(2)
          const fill = document.getElementById('fill')
          // var count = 0;
          // fill.innerHTML = pass + '%';
          if (pass > 0.8) {
            pass = 1
          }
          if (res.data[0].status === 1) {
            pass = 1
          }
          // this.width = (pass * 100).toFixed(2) + '%'
          fill.style.width = (pass * 100).toFixed(2) + '%'
          this.progress = (pass * 100).toFixed(2) + '%'
          // console.log(this.progress , 555)
        }, 1000)
      })
    }
  }
}
</script>
