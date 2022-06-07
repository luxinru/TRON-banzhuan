<script>
import Fetch from '@/utils/fetch'
import Clipboard from 'clipboard'

export default {
  name: 'Team',

  components: {},

  data() {
    return {
      active: 0,
      myData: {},
      team: {},
      teamCount: {},
      isLevel: false,
      code: '',
      register_url: '',
      profit: 0,
      total_performance: 0,
      invest1: 0,
      invest2: 0,
      invest3: 0,
      totalContractAmount: 0,
      totalContractList: [],
      member: {},
      teamData: {},
      isLoading: false,

      s_trx_money_rebate: "0.000000",
      s_usdt_money_rebate: "0.000000",

      interest_arbitrage_money_trx: 0,
      interest_arbitrage_money_usdt: 0,

      reward1: "0.00",
      reward2: "0.00",
      reward3: "0.00",
    }
  },

  computed: {
    teamList() {
      switch (this.active) {
        case 0:
          return this.team.all
        case 1:
          return this.team.lev1
        case 2:
          return this.team.lev2
        case 3:
          return this.team.lev3
        default:
          return []
      }
    },
  },

  mounted() {
    this.start()
  },

  methods: {
    start() {
      this.isLoading = false
      Fetch('/user/info').then((res) => {
        const { data } = res
        this.myData = data
        console.log('this.myData :>> ', this.myData)
      })

      Fetch('/user/my_team').then((res) => {
        console.log('res :>> ', res)
        const {
          data: {
            team: {
              team_info: teamInfo,
              total_performance: totalPerformance,
              team_count: teamCount,
              data: teamData,
            },
            share,
            profit,
            invest1,
            invest2,
            invest3,
            total_contract_amount: totalContractAmount,
            total_contract_list: totalContractList,
            member
          },
        } = res
        this.code = share ? share.code : ''
        this.register_url = share ? share.register_url : ''
        this.profit = profit || 0
        this.total_performance = totalPerformance
        this.team = teamInfo
        this.teamCount = teamCount
        this.invest1 = invest1
        this.invest2 = invest2
        this.invest3 = invest3
        this.totalContractAmount = totalContractAmount || 0
        this.totalContractList = totalContractList || []
        this.member = member
        this.teamData = teamData
        this.s_trx_money_rebate =res.data.s_trx_money_rebate
        this.s_usdt_money_rebate=res.data.s_usdt_money_rebate
        this.reward1=res.data.reward1
        this.reward2=res.data.reward2
        this.reward3=res.data.reward3
        this.interest_arbitrage_money_trx=res.data.team.interest_arbitrage_money_trx
        this.interest_arbitrage_money_usdt=res.data.team.interest_arbitrage_money_usdt
        console.log('this.teamData :>> ', this.teamData);
        if (teamInfo.all) {
          this.active = 0
          this.isLevel = false
        } else {
          this.active = 1
          this.isLevel = true
        }
        this.isLoading = true
      })

    },
    onCopyCode() {
      const clipboard = new Clipboard('.code')
      clipboard.on('success', (e) => {
        console.log('e :>> ', e)
        this.$notify({
          type: 'success',
          message: this.$t('copy_successfully'),
        })
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        console.log('e :>> ', e)
        // 不支持复制
        this.$notify({
          type: 'danger',
          message: this.$t('copy_failed'),
        })
        // 释放内存
        clipboard.destroy()
      })
    },

    onCopyUrl() {
      const clipboard = new Clipboard('.url')
      clipboard.on('success', (e) => {
        console.log('e :>> ', e)
        this.$notify({
          type: 'success',
          message: this.$t('copy_successfully'),
        })
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        console.log('e :>> ', e)
        // 不支持复制
        this.$notify({
          type: 'danger',
          message: this.$t('copy_failed'),
        })
        // 释放内存
        clipboard.destroy()
      })
    },
    onChangeType(type) {
      this.active = type
    },
  },
}
</script>
