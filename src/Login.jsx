import { useState } from 'react'

function Login({ onSwitchToRegister }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) {
      setMessage('Please enter both username and password.')
      return
    }
    setMessage(`Logged in as: ${username}`)
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-username">Username: </label>
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="login-password">Password: </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Log In</button>
      </form>

      {message && <p>{message}</p>}

      <p>
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchToRegister}>
          Register here
        </button>
      </p>
    </div>
  )
}

export default Login
