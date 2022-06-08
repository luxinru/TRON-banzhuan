export default function getCryptoData (type, cb) {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
      // CMC_PRO_API_KEY: 'fe1dc6e0-6ff9-4bd7-8654-84fcc32fa5fd'
    }
  }
  // https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=bitcoin&start=1&limit=100&category=spot&sort=cmc_rank_advanced
  const typeArr = [
    'bitcoin',
    'ethereum',
    'bnb',
    'tron',
    'dogecoin',
    'litecoin',
    'xrp',
    'cardano',
    'solana',
    'apecoin-ape',
    'cosmos'
  ]
  const rtype = typeArr[Math.floor(Math.random(0, 1) * 10)]
  // if (!rtype) {
  //   rtype = 'bitcoin'
  // }
  if (localStorage.getItem('limit') === 20) {
    localStorage.setItem('limit', 21)
  } else {
    localStorage.setItem('limit', 20)
  }

  const limit = localStorage.getItem('limit')
  fetch(
    'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?slug=' +
      rtype +
      '&start=1&limit=' +
      limit +
      '&category=spot&sort=cmc_rank_advanced',
    options
  )
    .then((response) => response.json())
    .then((response) => cb(response))
    .catch((err) => err)
}
