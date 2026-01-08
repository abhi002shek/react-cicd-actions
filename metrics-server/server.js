import express from 'express';
import client from 'prom-client';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple counters
let likesCount = 0;
let pageViewsCount = 0;

// Routes
app.post('/api/like', (req, res) => {
  likesCount++;
  console.log('Like recorded! Total:', likesCount);
  res.json({ success: true, message: 'Like recorded!' });
});

app.post('/api/pageview', (req, res) => {
  pageViewsCount++;
  console.log('Page view recorded! Total:', pageViewsCount);
  res.json({ success: true, message: 'Page view recorded!' });
});

app.get('/metrics', (req, res) => {
  const metrics = `# HELP app_likes_total Total number of likes received
# TYPE app_likes_total counter
app_likes_total ${likesCount}

# HELP app_page_views_total Total number of page views
# TYPE app_page_views_total counter
app_page_views_total ${pageViewsCount}
`;
  
  res.set('Content-Type', 'text/plain; version=0.0.4; charset=utf-8');
  res.send(metrics);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    likes: likesCount,
    pageViews: pageViewsCount
  });
});

app.get('/', (req, res) => {
  res.json({
    message: 'React App Metrics Server - WORKING!',
    likes: likesCount,
    pageViews: pageViewsCount,
    endpoints: {
      health: '/health',
      metrics: '/metrics',
      like: 'POST /api/like',
      pageview: 'POST /api/pageview'
    }
  });
});

app.listen(port, () => {
  console.log(`✅ Metrics server running on port ${port}`);
  console.log(`📊 Metrics: http://localhost:${port}/metrics`);
  console.log(`❤️ Likes: ${likesCount}, 👀 Views: ${pageViewsCount}`);
});
