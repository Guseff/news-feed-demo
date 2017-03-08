const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: "./src/app",
  output: {
    filename: "build.js",
    library: "app",
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

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      }
    ]
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