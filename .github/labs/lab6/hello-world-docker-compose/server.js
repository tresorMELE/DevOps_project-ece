'use strict';

const express = require('express');
const client = require('./dbClient');
const promClient = require('prom-client')
const PORT = 8080;

function get_hit_count(callback) {
  client.incr('hits', (err) => {
    client.get('hits', (err, res) => {
      console.log(res)
      callback(res)
    })
  });
}

const app = express();
app.get('/', (req, res) => {
  get_hit_count((count) => {
    res.send('Hello World from Docker! I have been seen ' + count + ' times');
  })
});
app.get('/metrics', (req, res) => {
  res.set('Content-Type', promClient.register.contentType)
  res.end(promClient.register.metrics())
})


app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
