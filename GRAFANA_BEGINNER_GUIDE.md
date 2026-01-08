# 📊 Grafana Dashboard Setup Guide for Beginners

## Step 1: Create New Dashboard
1. In Grafana, click **+ (Plus)** → **Dashboard**
2. Click **Add visualization**
3. Select **Prometheus** as data source

## Step 2: Add Your First Panel - Total Likes

### Panel Settings:
- **Query**: `app_likes_total`
- **Panel Title**: "Total Likes"
- **Visualization**: Stat
- **Unit**: None
- **Color**: Green

### Steps:
1. In query box, type: `app_likes_total`
2. Click **Run queries**
3. On right panel, change **Panel title** to "Total Likes"
4. Under **Visualization**, select **Stat**
5. Click **Apply**

## Step 3: Add Second Panel - Likes Rate

### Panel Settings:
- **Query**: `rate(app_likes_total[5m])`
- **Panel Title**: "Likes per Minute"
- **Visualization**: Time series
- **Unit**: /min

### Steps:
1. Click **Add panel** → **Add visualization**
2. Query: `rate(app_likes_total[5m])`
3. Title: "Likes per Minute"
4. Visualization: **Time series**
5. Click **Apply**

## Step 4: Add Third Panel - Page Views

### Panel Settings:
- **Query**: `app_page_views_total`
- **Panel Title**: "Total Page Views"
- **Visualization**: Stat
- **Color**: Blue

## Step 5: Save Dashboard
1. Click **💾 Save dashboard** (top right)
2. Name: "React App Monitoring"
3. Click **Save**

## 🎯 Why These Panels?

### **Total Likes (Stat Panel)**
- **What**: Shows current total number of likes
- **Why**: Quick overview of user engagement
- **When to use**: Always - it's your main KPI

### **Likes Rate (Time Series)**
- **What**: Shows how fast people are liking (per minute)
- **Why**: Helps you see trends and spikes in activity
- **When to use**: To understand user behavior patterns

### **Page Views (Stat Panel)**
- **What**: Total number of people who visited
- **Why**: Shows reach and traffic
- **When to use**: To measure app popularity

## 🚀 Advanced Tips

### **Refresh Settings**
- Set auto-refresh to **5s** (top right dropdown)
- This updates your dashboard automatically

### **Time Range**
- Use **Last 1 hour** to see recent activity
- Use **Last 24 hours** for daily patterns

### **Alerts** (Later)
- Set alert if likes stop coming (app might be down)
- Set alert if too many likes (might be spam)

## 🎨 Dashboard Best Practices

### **Layout**:
```
[Total Likes]    [Page Views]
[Likes Rate Chart - Full Width]
```

### **Colors**:
- Green: Good metrics (likes, views)
- Red: Error metrics
- Blue: Information metrics
- Yellow: Warning metrics

## 📈 What to Monitor

### **User Engagement**:
- Total likes (growing = good)
- Like rate (spikes = viral content)
- Page views (traffic trends)

### **App Health**:
- Response time (add later)
- Error rate (add later)
- Uptime (add later)

## 🔍 Reading Your Dashboard

### **Good Signs**:
- ✅ Numbers going up
- ✅ Steady growth in charts
- ✅ No gaps in data

### **Bad Signs**:
- ❌ Numbers stuck at same value
- ❌ Flat lines (no activity)
- ❌ Missing data points

## 🎯 Next Steps

1. **Create the basic dashboard** (follow steps above)
2. **Generate more data** (click like button more)
3. **Watch the charts update** in real-time
4. **Experiment** with different time ranges
5. **Add more metrics** as you learn

Remember: **Start simple, add complexity gradually!**
