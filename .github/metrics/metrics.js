const promClient = require('prom-client')

const requestCounter = new promClient.Counter({
  name: 'my_app_request_count',
  help: 'Number of requests received by the app',
  labelNames: ['method']
})

app.use((req, res, next) => {
  requestCounter.inc({ method: req.method })
  next()
})
