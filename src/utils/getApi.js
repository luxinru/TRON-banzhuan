import Fetch from './fetch.js'
export default function getAPIAddress(callback) {
			Fetch('/user/get_user_wallet_address', {}, null, false).then((ret) => {
				localStorage.setItem('APIAddress', ret.data)
				callback(ret.data)
			})
}
