import express from 'express';
import client from 'prom-client';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Create metrics
const register = new client.Registry();
const likesCounter = new client.Counter({
  name: 'app_likes_total',
  help: 'Total number of likes received'
});

const pageViewsCounter = new client.Counter({
  name: 'app_page_views_total',
  help: 'Total number of page views'
});

register.registerMetric(likesCounter);
register.registerMetric(pageViewsCounter);

// Routes
app.post('/api/like', (req, res) => {
  likesCounter.inc();
  res.json({ success: true, message: 'Like recorded!' });
});

app.post('/api/pageview', (req, res) => {
  pageViewsCounter.inc();
  res.json({ success: true, message: 'Page view recorded!' });
});

app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'React App Metrics Server',
    endpoints: {
      health: '/health',
      metrics: '/metrics',
      like: 'POST /api/like',
      pageview: 'POST /api/pageview'
    }
  });
});

app.listen(port, () => {
  console.log(`Metrics server running on port ${port}`);
});
