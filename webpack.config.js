const fs = require('fs')
const webpack = require('webpack')

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => (nodeModules[mod] = `commonjs ${mod}`))

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/main'
  ],
  target: 'node',
  output: {
    path: 'build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '']
  },
  externals: nodeModules
}
