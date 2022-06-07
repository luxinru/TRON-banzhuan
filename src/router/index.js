import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const alpha = [{
    path: '/',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Login" */ '@/views/alpha/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Register" */ '@/views/alpha/register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      hideFooter: false
    },
    component: () => import( /* webpackChunkName: "Home" */ '@/views/alpha/home.vue')
  },
  {
    path: '/invest',
    name: 'Invest',
    meta: {
      hideFooter: false
    },
    component: () => import( /* webpackChunkName: "Invest" */ '@/views/alpha/invest.vue')
  },
  {
    path: '/invest-detail',
    name: 'InvestDetail',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "InvestDetail" */ '@/views/alpha/invest-detail.vue')
  },
  {
    path: '/withdraw',
    name: 'Withdraw',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Withdraw" */ '@/views/alpha/withdraw.vue')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Recharge" */ '@/views/alpha/recharge.vue')
  },
  {
    path: '/recharge-detail',
    name: 'RechargeDetail',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "RechargeDetail" */ '@/views/alpha/recharge-detail.vue')
  },
  {
    path: '/share',
    name: 'Share',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Share" */ '@/views/alpha/share.vue')
  },
  {
    path: '/qiandao',
    name: 'Qiandao',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Qiandao" */ '@/views/alpha/qiandao.vue')
  },
  {
    path: '/my-invests',
    name: 'MyInvests',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "MyInvests" */ '@/views/alpha/my-invests.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Notice" */ '@/views/alpha/notice.vue')
  },
  {
    path: '/notice-content',
    name: 'NoticeContent',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "NoticeContent" */ '@/views/alpha/notice-content.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Activity" */ '@/views/alpha/activity.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Wallet" */ '@/views/alpha/wallet.vue')
  },
  {
    path: '/transfer',
    name: 'Transfer',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Transfer" */ '@/views/alpha/transfer.vue')
  },
  {
    path: '/kefu',
    name: 'Kefu',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Kefu" */ '@/views/alpha/kefu.vue')
  },
  {
    path: '/recharge-record',
    name: 'RechargeRecord',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "RechargeRecord" */ '@/views/alpha/recharge-record.vue')
  },
  {
    path: '/withdraw-record',
    name: 'WithdrawRecord',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "WithdrawRecord" */ '@/views/alpha/withdraw-record.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Manage" */ '@/views/alpha/manage.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "About" */ '@/views/alpha/about.vue')
  },
  {
    path: '/about-content',
    name: 'AboutContent',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "AboutContent" */ '@/views/alpha/about-content.vue')
  },
  {
    path: '/agreement',
    name: 'Agreement',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Agreement" */ '@/views/alpha/agreement.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Privacy" */ '@/views/alpha/privacy.vue')
  },
  {
    path: '/wallet-management',
    name: 'WalletManagement',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "WalletManagement" */ '@/views/alpha/wallet-management.vue')
  },
  {
    path: '/resetpwd',
    name: 'Resetpwd',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Resetpwd" */ '@/views/alpha/resetpwd.vue')
  },
  {
    path: '/resetpayment',
    name: 'Resetpayment',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Resetpayment" */ '@/views/alpha/resetpayment.vue')
  },
  {
    path: '/findpwd',
    name: 'Findpwd',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Findpwd" */ '@/views/alpha/findpwd.vue')
  },
  {
    path: '/be-youtube',
    name: 'BeYoutube',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "BeYoutube" */ '@/views/alpha/be-youtube.vue')
  },
  {
    path: '/focus-youtube',
    name: 'FocusYoutube',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "FocusYoutube" */ '@/views/alpha/focus-youtube.vue')
  },
  {
    path: '/invite-to-join',
    name: 'InviteToJoin',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "InviteToJoin" */ '@/views/alpha/invite-to-join.vue')
  },
  {
    path: '/main-activity',
    name: 'MainActivity',
    meta: {
      hideFooter: false
    },
    component: () => import( /* webpackChunkName: "MainActivity" */ '@/views/alpha/main-activity.vue')
  },
  {
    path: '/team',
    name: 'Team',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "Team" */ '@/views/alpha/team.vue')
  },
  {
    path: '/invest-confirm',
    name: 'InvestConfirm',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "InvestConfirm" */ '@/views/alpha/invest-confirm.vue')
  },
  {
    path: '/my-investment',
    name: 'MyInvestment',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "MyInvestment" */ '@/views/alpha/my-investment.vue')
  },
  {
    path: '/my-swap',
    name: 'MySwap',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "MyInvestment" */ '@/views/alpha/my-swap.vue')
  },
  {
    path: '/swap-u-trx',
    name: 'MySwap',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "MyInvestment" */ '@/views/alpha/swap-u-trx.vue')
  },
  {
    path: '/getVIP',
    name: 'GetVIP',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "MyInvestment" */ '@/views/alpha/getVIP.vue')
  },
  {
    path: '/verify-email',
    name: 'VerifyEmail',
    meta: {
      hideFooter: true
    },
    component: () => import( /* webpackChunkName: "VerifyEmail" */ '@/views/alpha/verify-email.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    meta: {
      hideFooter: false
    },
    component: () => import( /* webpackChunkName: "Mine" */ '@/views/alpha/mine.vue')
  }
]

const routers = {
  alpha: alpha,
}

const router = new VueRouter({
  routes: routers['alpha']
})

export default router
