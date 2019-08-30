let webpack = require("webpack");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        port: 3001,
        proxy: {
            '/api/*': {
                target: 'http://bnl.dev.zhiheworld.com:81',
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
        }
    }
};
