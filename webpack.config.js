const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')

module.exports = {
  entry: "./src/home",
  output: {
    filename: "build.js",
    library: "home",
    path: '/public/',
    publicPath: '/',
  },

  devtool: NODE_ENV == 'development'? "source-map" : null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extentions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loaders', '*'],
    extentions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }]
  }
}

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false,
       }
    })
  )
}