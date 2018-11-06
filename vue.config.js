process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  devServer: {
    proxy: 'http://localhost:9000'
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    },
    assetsVersion: process.env.VUE_APP_VERSION,
    themeColor: '#222222',
    msTileColor: '#222222'
  },
  productionSourceMap: false,
  configureWebpack: {
    devtool: false,
    // Prevent webpack from injecting eval / new Function through global polyfill
    node: {
      global: false
    }
  },
  chainWebpack: config => {
    config.plugins
      .delete('split-manifest')
      .delete('inline-manifest')
      // TODO: Fine-tune preloaded & prefetched assets
      .delete('prefetch')
      // .delete('preload')
  }
}
