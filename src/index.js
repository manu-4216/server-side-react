import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import 'babel-polyfill'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore()

  // For each matched route, execute the 'loadData' imported by some components inside 'Routes'
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
