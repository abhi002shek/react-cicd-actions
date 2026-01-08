import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  // Track page view on load
  useEffect(() => {
    fetch('https://react-metrics-production.up.railway.app/api/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).catch(() => console.log('Metrics server unavailable'))
  }, [])

  const handleLike = async () => {
    setLikes(likes + 1)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
    
    // Send metric to server
    try {
      await fetch('https://react-metrics-production.up.railway.app/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.log('Metrics server unavailable:', error.message)
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
      <h5>Keep smiling</h5>
    </>
  )
}

export default App
