const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  // Define the root file of our server application
  entry: './src/client/client.js',

  // Define output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config)
