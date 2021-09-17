const path = require('path')
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const cwd = path.resolve(__dirname, '../../..')

const config = {
  mode: 'development',
  entry: {
    main: [
      'webpack-hot-middleware/client', 
      path.resolve(cwd, 'src/develop/client.js')
    ]
  },
  output: {
    path: path.resolve(cwd, './client'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { 'exclude': ['transform-regenerator'] }
              ], 
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              'react-refresh/babel'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin,
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: 'whm'
      }
    })
  ]
}

module.exports = config