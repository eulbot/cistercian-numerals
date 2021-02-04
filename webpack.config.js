const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',

  plugins: [
    new webpack.ProgressPlugin(), 
    new HtmlWebpackPlugin({
      template: 'index.html'
    })],

  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      include: [path.resolve(__dirname, 'src')],
      exclude: [/node_modules/]
    }, {
      test: /.(sa|sc|c)ss$/,

      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: { sourceMap: true }
      }, 
      {
        loader: "sass-loader",
        options: { sourceMap: true }
      }]
    }]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  devServer: {
    open: true,
    host: 'localhost',
    port: 8084
  },

  devtool: 'source-map'
}