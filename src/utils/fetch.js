import axios from 'axios'
import qs from 'qs'
import {
  Toast,
  Dialog
} from 'vant'
import router from '@/router'
import 'vant/lib/index.css'
let loadingCount = 0

export const showLoading = () => {
  if (loadingCount <= 0) {
    Toast.loading({
      // mask: true,
      duration: 20000
    })
  }
  loadingCount++
}

export const hideLoading = () => {
  loadingCount--
  if (loadingCount <= 0) {
    Toast.clear()
    loadingCount = 0
  }
}

const getErrorMsg = function (type = 1) {
  const lang = window.localStorage.getItem('lang') || 'en'
  if (type === 1) {
    switch (lang) {
      case 'ar':
        return ' خطأ في الشبكة ، يرجى المحاولة مرة أخرى في وقت لاحق !  '
      case 'de':
        return 'Netzwerkfehler, bitte versuchen Sie es später erneut!'
      case 'es':
        return '¡Error de red, por favor inténtelo de nuevo más tarde!'
      case 'fr':
        return 'Erreur réseau, Veuillez réessayer plus tard!'
      case 'id':
        return 'Galat jaringan, tolong coba lagi nanti!'
      case 'jp':
        return 'ネットワークエラーです。後で再試行してください。'
      case 'kr':
        return '네트워크 오류, 나중에 다시 시도하십시오!'
      case 'pt':
        return 'Erro de rede, tente novamente mais tarde!'
      case 'tr':
        return 'Ağ hatası, lütfen daha sonra tekrar deneyin!'
      case 'en':
        return 'Network error, please try again later!'
      case 'cn':
        return '网络错误，请稍后重试！'
      case 'hk':
        return '網絡錯誤，請稍後重試！'
      case 'vi':
        return 'Lỗi mạng, vui lòng thử lại sau!'
      case 'fa':
        return 'خطای شبکه، لطفاً بعداً دوباره امتحان کنید!'
    }
  } else {
    switch (lang) {
      case 'ar':
        return ' المستخدمين غير الشرعيين ، يرجى المحاولة مرة أخرى في وقت لاحق !  '
      case 'de':
        return 'Illegaler Benutzer, bitte versuchen Sie es später erneut!'
      case 'es':
        return '¡Usuario ilegal, por favor inténtelo de nuevo más tarde!'
      case 'fr':
        return 'Utilisateur illégal, Veuillez réessayer plus tard!'
      case 'id':
        return 'Pengguna ilegal, tolong coba lagi nanti!'
      case 'jp':
        return '不正なユーザーです。後で再試行してください。'
      case 'kr':
        return '불법 사용자, 잠시 후 다시 시도하세요!'
      case 'pt':
        return 'Usuário ilegal, tente novamente mais tarde!'
      case 'tr':
        return 'Yasadışı kullanıcı, lütfen daha sonra tekrar deneyin!'
      case 'en':
        return 'Illegal user, please try again later!'
      case 'cn':
        return '非法用户，请稍后重试！'
      case 'hk':
        return '非法用戶，請稍後重試！'
      case 'vi':
        return 'Người dùng bất hợp pháp, vui lòng thử lại sau!'
      case 'fa':
        return 'کاربر غیرقانونی، لطفاً بعداً دوباره امتحان کنید!'
    }
  }
}

const getConfirmLang = function () {
  const lang = window.localStorage.getItem('lang') || 'en'
  switch (lang) {
    case 'ar':
      return 'يتأكد'
    case 'de':
      return 'Bestätigen Sie'
    case 'es':
      return 'Confirmar'
    case 'fr':
      return 'Confirmer'
    case 'id':
      return 'Mengonfirmasi'
    case 'jp':
      return '確認'
    case 'kr':
      return '확인하다'
    case 'pt':
      return 'Confirmar'
    case 'tr':
      return 'Onaylamak'
    case 'en':
      return 'Confirm'
    case 'ch':
      return '确认'
    case 'hk':
      return '確認'
    case 'vi':
      return 'xác nhận'
    case 'fa':
      return 'تایید'
  }
}

export default async (url, data, opt, isLoad = true) => {
  data = {
    ...data,
    lang: window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'en'
  }
  // return;
  if (isLoad) {
    showLoading()
  }

  url = 'api' + url

  const set = {
    method: 'post',
    ...opt
  }
  const token = localStorage.getItem('token')
  return (set.method === 'post'
    ? axios.post(url + `?lang=${window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'en'}`, {
      ...data,
      token
    })
    : axios.get(
      url +
        '?' +
        qs.stringify({
          ...data,
          token
        })
    )
  )
    .then(r => {
      if (isLoad) {
        hideLoading()
      }

      if (r.status === 200) {
        // console.log(r.data)
        return r.data
      }

      if (r.data.code === 0) {
        return r.data
      }

      const message = {
        msg: getErrorMsg(1)
      }

      throw message
    })
    .then(r => {
      if (r.code === 1) {
        return r
      } else {
        let message = {}
        if (r.code === 0) {
          message = {
            msg: r.info
          }
          throw message
        }

        if (!r.code) {
          message = {
            msg: getErrorMsg(1)
          }
          throw message
        }

        if (r.code === 406) {
          router.push('/firstsetpaypwd')
        }

        if (r.code === 405) {
          const current = {
            ...router.currentRoute
          }
          router.push('/auth?redirect=' + current.path)
        }

        if (r.code === 500) {
          message = {
            msg: getErrorMsg(2)
          }
          throw message
        }

        if (r.code === 403 || r.code === 401) {
          if (r.code === 401) {
            localStorage.removeItem('token')
          }

          const current = {
            ...router.currentRoute
          }
          if (
            current &&
            current.path !== '/' &&
            !['/', '/reg', '/forgetpwd'].includes(current.path)
          ) {
            if (current.path !== '/login' && current.path !== '/home') {
              router.replace('/login??redirect=' + current.path)
            }
          }
        }
      }

      throw r
    })
    .catch(r => {
      if (isLoad) {
        hideLoading()
      }

      let message = getErrorMsg(1)
      if (r.info) {
        message = r.info
      }

      if (r.msg) {
        message = r.msg
      }

      if (isLoad) {
        Dialog.alert({
          message: message,
          confirmButtonText: getConfirmLang()
        })
      }

      // message = {
      //   msg: ''
      // }

      throw message
    })
}
