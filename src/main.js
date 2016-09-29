let express = require('express')

let lib = require('./lib')

const app = express()

app
  .get('/', (req, res) => {
    res.end(lib)
  })

app.listen(3000, () => {
  console.log('server listening on port 3000');
})

if (module.hot) {
  module.hot.accept('./lib', () => {
    lib = require('./lib')
  })
}
