import Vue from 'vue'
// import App from './App.vue'
import AppAlpha from './App-alpha.vue'
import router from './router'
import store from './store'
import Vant, { Locale } from 'vant'

import enUS from 'vant/es/locale/lang/en-US'
import 'vant/lib/index.css'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import jp from './lang/jp'
import kr from './lang/kr'
import ar from './lang/ar'
import de from './lang/de'
import fr from './lang/fr'
import pt from './lang/pt'
import tr from './lang/tr'
import es from './lang/es'
import id from './lang/id'
import cn from './lang/cn'
import hk from './lang/hk'
import vi from './lang/vi'
import fa from './lang/fa'
// import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

Vue.use(VueI18n)

const messages = {
  en,
  jp,
  kr,
  ar,
  de,
  fr,
  pt,
  tr,
  es,
  id,
  cn,
  hk,
  vi,
  fa
}

const i18n = new VueI18n({
  locale: window.localStorage.getItem('lang') || 'en',
  messages // 设置地区信息
})

Vue.use(Vant)
Locale.use('en-US', enUS)

Vue.config.productionTip = false
Vue.prototype.SocketIO = SocketIO
//  https://XXXXXX2120  是后台给你的长链接地址
// Vue.use(new VueSocketIO({
//   debug: true,  //测试的时候可以打开
//   connection: 'https://ycoin.top',
// }))
// Vue.use(new VueSocketIO({
//     debug: false,
//     connection: SocketIO.connect('https://ycoin.top', {
//         path: '',
//         transports: ['websocket', 'polling'],
//     })
// }));
/**
 * 进入每一个页面回到顶部
 */
router.beforeEach((to, from, next) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
  next()
})

console.log('process.env111 :>> ', process.env.NODE_ENV)

const version = {
  alpha: AppAlpha
}

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(version.alpha)
}).$mount('#app')
