let webpack = require("webpack");

module.exports = {
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
        }
    }
};
