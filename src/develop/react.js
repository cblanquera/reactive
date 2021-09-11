const path = require('path')
const React = require('react')
const { StaticRouter } = require('react-router')
const { renderToString } = require('react-dom/server')

const App = require('../client/App').default

function renderReact(req, res, next) {
  try {
    // Must create a mock window object for components that might need it
    global.window = {}

    // SSR render the full App
    const appHtml = renderToString(
      React.createElement(
        StaticRouter,
        { location: req.originalUrl, context: {} },
        React.createElement(App)
      )
    )
    const responseHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset='UTF-8'>
        </head>
        <body>
          <div id="react-app">${appHtml}</div>
        </body>
        <script type="text/javascript" src="/index.js"></script>
      </html>
    `

    // inject
    return res.send(responseHtml)
  } catch (err) {
    return next(err)
  }
}

module.exports = renderReact
