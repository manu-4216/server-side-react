const path = require('path')

module.exports = {
  // Inform webpack that we're building a bundle for nodeJS,
  // rather then for the browser
  target: 'node',

  // Define the root file of our server application
  entry: './src/index.js',

  // Define output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions']
                }
              }
            ]
          ]
        }
      }
    ]
  }
}
