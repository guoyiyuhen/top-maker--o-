
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
      port: 3001,
      proxy: {
          '/': {
              target: 'http://api.top.tmaker.com:80',
              changeOrigin: true,
              pathRewrite: {
                  '^/': '/'
              }
          }
      }
  },
  lintOnSave: false,
};
