const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/app'
  ],
  output: {
    filename: "build.js",
    library: "app",
    path: '/public/',
    publicPath: '/',
  },

  devtool: NODE_ENV == 'development'? "source-map" : null,

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        plugins: ['transform-runtime'],
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