const join = require('path').join;

module.exports = {
  output: {
    path: join(__dirname, '../../public/assets/resources'),
    publicPath: '/resources/'
  },
  resolve: {
    extensions: ['.js'],
    modules: [join(__dirname, '../../node_modules'), join(__dirname, '../../src')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.styl/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader/locals',
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
  }
};
