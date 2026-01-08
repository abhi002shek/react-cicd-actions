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
register.registerMetric(likesCounter);

// Routes
app.post('/api/like', (req, res) => {
  likesCounter.inc();
  res.json({ success: true });
});

app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Metrics server running on port ${port}`);
});
