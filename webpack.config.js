const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: { src: './client/index.js' },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: '/index.html',
    }),
  ],

  devServer: {
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, 'dist'),
    },

    proxy: {
      '/': 'http://localhost:3000',
    },
  },
};
