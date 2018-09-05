import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import 'babel-polyfill'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)

  // For each matched route, execute the 'loadData' imported by some components inside 'Routes'
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    // Wrap the promises into another promise, to allow for all the loadData to finish, rather that catch when the 1st one fails
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }

    res.send(content)
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
