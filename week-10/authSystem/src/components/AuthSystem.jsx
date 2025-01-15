import React, { useState } from 'react'
import AppBar from './AppBar';
import Home from "./Home"; 
import Login from './Login';
const AuthSystem = () => {

  const [username,setUsername]=useState("")
  const [LoggedIn,setLoggedIn]=useState(false)
  
  return (
    <div>
    <AppBar LoggedIn={LoggedIn} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />
    {LoggedIn && <Home/>}
    {!LoggedIn && <Login setUsername={setUsername} setLoggedIn={setLoggedIn}/>}
    </div>
  )
}

export default AuthSystem