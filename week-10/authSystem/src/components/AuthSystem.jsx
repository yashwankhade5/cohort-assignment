import React, { useState,useContext,createContext } from 'react'
import AppBar from './AppBar';
import Home from "./Home"; 
import Login from './Login';
import {Contextbar} from "./Context"

const provid = createContext()

const AuthSystem = () => {

  const [username,setUsername]=useState("")
  const [LoggedIn,setLoggedIn]=useState(false)
  
  return (
    <provid.Provider value={{username,setUsername,LoggedIn,setLoggedIn}}>
    <div>
    <AppBar LoggedIn={LoggedIn} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />
    <Contextbar/>
    {LoggedIn && <Home/>}
    {!LoggedIn && <Login setUsername={setUsername} setLoggedIn={setLoggedIn}/>}
    </div></provid.Provider>
  )
}

export default AuthSystem