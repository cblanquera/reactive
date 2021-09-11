const path = require('path')
const express = require('express')
const react = require('./react')
const webpack = require('./webpack')

const app = express()

app.use(webpack.dev)
app.use(webpack.hot)

// static assets server from the "client" folder
app.use(express.static(path.join(__dirname, '../../client'), { index: false }))
app.use(express.json())
app.use(express.urlencoded())

app.get('/*', react)

// 404 not found
app.use((req, res) => {
  return res.send('errors/404');
});

// unhandled error handling
app.use((err, req, res, next) => {
  console.log(err);
  return res.json(err);
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.info([`App is listening on port ${port}!`])
})
