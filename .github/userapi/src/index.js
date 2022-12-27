const express = require('express')
const userRouter = require('./routes/user')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');

const app = express()
const port = process.env.PORT || 3000

const db = require('./dbClient')
db.on("error", (err) => {
  console.error(err)
})

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user', userRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup());


const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})


module.exports = server
