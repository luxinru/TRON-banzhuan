const {
  defineConfig
} = require('@vue/cli-service')

const Version = new Date().getTime()

const TARGET = 'https://trwin.vip/'

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: `js/[name].js?t=${Version}`,
      chunkFilename: `js/[name].${Version}.js`
    }
  },
  css: {
    extract: {
      filename: `css/[name].css?t=${Version}`,
      chunkFilename: `css/[name].${Version}.css`
    },
    sourceMap: false,
    loaderOptions: {}
  },
  devServer: {
    proxy: {
      '/api': {
        target: TARGET,
        changeOrigin: true,
      },
      'apilc': {
        target: TARGET,
        changeOrigin: true,
      }
    }
  }
})
