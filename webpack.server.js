const path = require('path')

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  // Inform webpack that we're building a bundle for nodeJS,
  // rather then for the browser
  target: 'node',

  // Define the root file of our server application
  entry: './src/index.js',

  // Define output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, config)
