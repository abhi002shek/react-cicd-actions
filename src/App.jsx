import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const handleLike = () => {
    setLikes(likes + 1)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
  }

  return (
    <>
      <h1>Github Actions and Sonarcloud</h1>
      <h2>Happy New year 2026, You have a great journey ahead!</h2>
      <div className="monitoring-info">
        <p>🔍 This app is also used for monitoring and DevOps learning!</p>
        <p>If you want to wish me back, show some love:</p>
        <button onClick={handleLike} className="like-btn">
          ❤️ Like ({likes})
        </button>
        {showMessage && <p className="thank-you">Thank you for the wishes! 🎉</p>}
      </div>
      <h5>Keep smiling</h5>
    </>
  )
}

export default App
