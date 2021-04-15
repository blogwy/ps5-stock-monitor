const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const logger = require('./index')
app.use(express.static(path.join(__dirname, '../file')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`log app listening at http://localhost:${port}`)
  logger.info(`log app listening at http://localhost:${port}`)
})