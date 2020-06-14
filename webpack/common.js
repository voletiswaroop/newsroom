const join = require('path').join;

module.exports = {
  output: {
    path: join(__dirname, '../public/resources'),
    publicPath: '/resources/'
  },
  resolve: {
    extensions: ['.js'],
    modules: [join(__dirname, '../node_modules'), join(__dirname, '../src')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
