var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'haixi.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'hey hey',
        template: "src/assets/test.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
        ],
    },
};
