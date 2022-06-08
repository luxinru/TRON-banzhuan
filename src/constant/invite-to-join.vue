<script>
import Fetch from '@/utils/fetch'
import Clipboard from 'clipboard'

export default {
  name: 'InviteToJoin',

  components: {},

  data () {
    return {
      active: 1,
      code: '',
      register_url: '',
      youtube_team: '',
      team: '',
      team_num: '',
      reward_money: '',
      data: {},
      invitation_rebate1: 0
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    async init () {
      Fetch('/user/share').then((res) => {
        this.data = res.data
      })

      const {
        data: {
          youtube_team: youtubeTeam,
          team,
          team_num: teamNum,
          reward_money: rewardMoney
        }
      } = await Fetch('/user/get_rebate_record')
      this.youtube_team = team
      this.team = youtubeTeam
      this.team_num = teamNum
      this.reward_money = rewardMoney

      Fetch('/user/get_rebate_record').then((res) => {
        console.log('res :>> ', res)
        const { invitation_rebate1: invitationRebate1 } = res.data
        this.invitation_rebate1 = invitationRebate1
      })
    },

    onCopyCode () {
      const clipboard = new Clipboard('.code')
      clipboard.on('success', (e) => {
        console.log('e :>> ', e)
        this.$notify({
          type: 'success',
          message: this.$t('copy_successfully')
        })
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        console.log('e :>> ', e)
        // 不支持复制
        this.$notify({
          type: 'danger',
          message: this.$t('copy_failed')
        })
        // 释放内存
        clipboard.destroy()
      })
    },

    onCopyUrl () {
      const clipboard = new Clipboard('.url')
      clipboard.on('success', (e) => {
        console.log('e :>> ', e)
        this.$notify({
          type: 'success',
          message: this.$t('copy_successfully')
        })
        //  释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        console.log('e :>> ', e)
        // 不支持复制
        this.$notify({
          type: 'danger',
          message: this.$t('copy_failed')
        })
        // 释放内存
        clipboard.destroy()
      })
    }
  }
}
</script>
