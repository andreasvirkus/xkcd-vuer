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
  }
}
