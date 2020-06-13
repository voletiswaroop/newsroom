const merge = require('webpack-merge');
const common = require('./common');
const { join } = require('path');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const StatsWebpackPlugin = require('stats-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  name: 'client',
  target: 'web',
  entry: [join(__dirname, '../src/client/index')],
  devtool: 'hidden-source-map',
  output: {
    filename: 'app.client.[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          ExtractCssChunksPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|otf|woff|ttf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'bootstrap'
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    }
  },
  plugins: [
    new ExtractCssChunksPlugin(
      {
        filename: "[name].[hash].css",
        chunkFilename: "[name].[hash].css",
      }
    ),
    new StatsWebpackPlugin('stats.json')
  ]
});
