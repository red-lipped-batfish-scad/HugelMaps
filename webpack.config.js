const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const { parsePath } = require('react-router');

module.exports = {
    mode: process.env.NODE-EnvironmentPlugin,
    entry: {src: '.client/index.js' },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Development',
            template: '/index.html'
        }),
    ],

    devServer: {
        static: {
            publicPath: '/dist',
            directory: parsePath.resolve(__dirname, 'dist')
        },

        proxy: {
            '/': 'http://localhost:3000'
        }
    }
}