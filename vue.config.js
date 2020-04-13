var webpack = require("webpack")
const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/h5' : '/',
  outputDir: 'h5',
  devServer: {
    port: 80,
    disableHostCheck: true,
    proxy: {
      '/api/*': {
        target: 'http://xspace.dev.zhiheworld.com:80',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  lintOnSave: false,
  configureWebpack: {
    entry: {
      app: './src/main.js',
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
      })
    ],
  }
}
