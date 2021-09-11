const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./config/webpack')

const compiler = webpack(config)
const dirName = path.resolve(__dirname, '../client/')

compiler.hooks.afterEmit.tap('cleanup-the-require-cache', () => {
  // After webpack rebuild, clear the files from the require cache,
  // so that next server side render wil be in sync
  Object.keys(require.cache)
    .filter((key) => key.includes(dirName))
    .forEach((key) => delete require.cache[key])
})

const dev = webpackDevMiddleware(compiler, {
  serverSideRender: true,
  publicPath: config.output.publicPath || '/',
  writeToDisk(filePath) {
    return false
  }
})

const hot = webpackHotMiddleware(compiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
})

module.exports = { dev, hot }
