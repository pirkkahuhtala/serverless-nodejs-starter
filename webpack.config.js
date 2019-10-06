const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  node: {
    __dirname: true
  },
  devtool: 'source-map',
  externals: [nodeExternals()],
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  }
};
