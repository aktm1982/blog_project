const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/assets/script/index.js'],
    output: {
        filename: 'index.js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        port: 4200
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/npm_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}