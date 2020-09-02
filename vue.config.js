var webpack = require("webpack")
const path = require("path");
module.exports = {
<<<<<<< HEAD
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        port: 3001,
        proxy: {
            '/api/*': {
                target: 'http://api.top.tmaker.com:80',
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
=======
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
>>>>>>> 344817956090cbd76dd6e8eb9877013f63c6030a
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
