const { merge } = require('webpack-merge');
const path = require('path');

const base = require('./webpack.config');

module.exports = merge(base, {
    output: {
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        host: 'localhost',
        hot: true,
    }
});