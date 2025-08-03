const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = 3000;

// Prometheus metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics(); // Collect Node.js default metrics

const counter = new client.Counter({
  name: 'app_requests_total',
  help: 'Total number of requests to the root route',
});

app.get('/', (req, res) => {
  counter.inc(); // Increment counter on each request
  res.send('🚀 Hello Amrutha, welcome to your DevOps App!');
});

// Health check route
app.get('/health', (req, res) => res.send('OK'));

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});

app.listen(PORT, () => console.log(`✅ App running on http://localhost:${PORT}`));
