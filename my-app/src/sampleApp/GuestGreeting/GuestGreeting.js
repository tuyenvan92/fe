import React, { useState} from 'react'


import GuestComponent from './GuestComponent'
import UserComponent from './UserComponent'


function GuestGreeting() {
  const [isLogin, setIsLogin] = useState(false)
  
  function handleLogin() {
    setIsLogin(true)
  }

  function handleLogout() {
    setIsLogin(false)
  }

  return (
    <div>
      <h2>Sample App: GuestGreeting</h2>

      {isLogin ? (
        <UserComponent text="Welcome To" name="Truong" handleLogout={handleLogout}  />
      ) : (
        <GuestComponent text="Please Sign Up" handleLogin={handleLogin} />
      )}

    </div>
  )
}

export default GuestGreeting
