# 🚀 Railway Deployment Steps

## Quick Deploy (5 minutes)

### 1. Go to Railway
Visit: https://railway.app

### 2. Sign Up/Login
- Click "Login" 
- Use your GitHub account

### 3. Deploy Your Metrics Server
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose: `abhi002shek/react-cicd-actions`
- **Important**: Set root directory to `metrics-server`

### 4. Configure Deployment
- Railway will auto-detect Node.js
- It will use your `package.json` start script
- No environment variables needed

### 5. Get Your URL
- After deployment, Railway gives you a URL like:
- `https://your-app-name.up.railway.app`

### 6. Update React App
Replace the Railway URL in `src/App.jsx` with your actual URL

## What Happens Next

✅ Your metrics server runs 24/7 on Railway
✅ Every like button click sends data to Railway
✅ You can monitor metrics from anywhere
✅ Prometheus can scrape your Railway endpoint

## Test Your Deployment

1. Visit your Railway URL
2. Check `/health` endpoint
3. Check `/metrics` endpoint
4. Click like buttons on your GitHub Pages app
5. Watch metrics increase in real-time!
