const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true
    },

    entry: {
        index: '/src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                }
            }
        },

        {
            test: /\.s[ac]ss$/,
            include: path.resolve(__dirname, 'src'),
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['index'],
            template: './src/template.ejs',
            title: 'homepage',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        })
    ],

    resolve: {
        symlinks: false
    }
}