import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  // Track page view on load
  useEffect(() => {
    // Try Railway first, fallback to local
    const tryMetricsEndpoint = async (url) => {
      try {
        await fetch(`${url}/api/pageview`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
        return true
      } catch {
        return false
      }
    }

    // Try Railway, then local
    tryMetricsEndpoint('https://react-metrics-production.up.railway.app')
      .then(success => {
        if (!success) {
          tryMetricsEndpoint('http://localhost:3001')
        }
      })
  }, [])

  const handleLike = async () => {
    setLikes(likes + 1)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
    
    // Send metric to server (try Railway first, then local)
    const tryMetricsEndpoint = async (url) => {
      try {
        await fetch(`${url}/api/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
        return true
      } catch {
        return false
      }
    }

    const success = await tryMetricsEndpoint('https://react-metrics-production.up.railway.app')
    if (!success) {
      await tryMetricsEndpoint('http://localhost:3001')
    }
  }

  return (
    <>
      <h1>Github Actions and Sonarcloud</h1>
      <h2>Happy New year 2026, You have a great journey ahead!</h2>
      <div className="monitoring-info">
        <p>🔍 This app is used for monitoring and DevOps learning!</p>
        <p>Every click sends real metrics to Prometheus 📊</p>
        <p>If you want to wish me back, show some love:</p>
        <button onClick={handleLike} className="like-btn">
          ❤️ Like ({likes})
        </button>
        {showMessage && <p className="thank-you">Thank you! Metric recorded! 🎉</p>}
      </div>
      <div className="monitoring-links">
        <p>📊 <strong>Live Monitoring:</strong></p>
        <p>• <a href="https://react-metrics-production.up.railway.app/metrics" target="_blank" rel="noopener noreferrer">Live Metrics</a></p>
        <p>• <a href="https://react-metrics-production.up.railway.app/health" target="_blank" rel="noopener noreferrer">Health Check</a></p>
        <p>• Local Grafana: <code>http://localhost:3000</code></p>
      </div>
      <h5>Keep smiling</h5>
    </>
  )
}

export default App
