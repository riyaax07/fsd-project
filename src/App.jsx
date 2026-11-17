import { useState } from 'react'
import Login from './Login.jsx'
import Register from './Register.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login')

  return (
    <div>
      {currentPage === 'login' ? (
        <Login onSwitchToRegister={() => setCurrentPage('register')} />
      ) : (
        <Register onSwitchToLogin={() => setCurrentPage('login')} />
      )}
    </div>
  )
}

export default App
