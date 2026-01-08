import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  // Track page view on load
  useEffect(() => {
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
    <div className="app-container">
      <div className="hero-section">
        <h1 className="main-title">🚀 DevOps Monitoring Lab</h1>
        <h2 className="subtitle">Happy New Year 2026! 🎉</h2>
        <p className="tagline">You have a great journey ahead!</p>
      </div>

      <div className="monitoring-card">
        <div className="card-header">
          <span className="icon">📊</span>
          <h3>Real-Time Monitoring Dashboard</h3>
        </div>
        <div className="card-content">
          <p>This app demonstrates production-grade monitoring with <strong>Prometheus</strong> & <strong>Grafana</strong></p>
          <p>Every interaction sends real metrics to our monitoring stack!</p>
          
          <div className="interaction-section">
            <p className="cta-text">Show some love and generate metrics:</p>
            <button onClick={handleLike} className="like-button">
              <span className="heart">❤️</span>
              <span className="text">Like</span>
              <span className="counter">({likes})</span>
            </button>
            {showMessage && (
              <div className="success-message">
                <span className="checkmark">✅</span>
                Metric recorded! Check Grafana dashboard!
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer">
        <p>Keep smiling & keep monitoring! 😊</p>
      </div>
    </div>
  )
}

export default App
