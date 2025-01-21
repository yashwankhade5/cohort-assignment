import React, { useState,useContext,createContext } from 'react'
import AppBar from './AppBar';
import Home from "./Home"; 
import Login from './Login';
import {Contextbar} from "./Context"

export const provid = createContext()

// const AuthSystem = () => {

//   const [username,setUsername]=useState("")
//   const [LoggedIn,setLoggedIn]=useState(false)
//   const [context,setcontext]=useState(true)
  
//   return (
//     <provid.Provider value={{username,setUsername,LoggedIn,setLoggedIn}}>
//     <div>
//       {context && <AppBar/>}
//       {context && <Contextbar/>}
//       {!context && <AppBar Log={LoggedIn} user={username} setUser={setUsername} setLog={setLoggedIn} />}
//      {!context && <Contextbar v={context} setcon={setcontext} />}
//     {LoggedIn && <Home/>}
//     {(!context && !LoggedIn) ? <Login setUser={setUsername} setLog={setLoggedIn}/>:""}
//     {(context && !LoggedIn) ? <Login />:""}
//     </div></provid.Provider>
//   )
// }


function AuthSystem() {
  const [username,setUsername]=useState("")
    const [LoggedIn,setLoggedIn]=useState(false)
    const [context,setcontext]=useState(true)
    return( <provid.Provider value={{username,setUsername,LoggedIn,setLoggedIn,setcontext,context}}>
      <div>
        <AppBar LoggedIn={LoggedIn} username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} />
        {!context ? <Contextbar v={context} setcon={setcontext} />:<Contextbar/>}
        {LoggedIn && <Home/>}
        {(!context && !LoggedIn) ? <Login setUser={setUsername} setLog={setLoggedIn}/>:""}
        {(context && !LoggedIn) ? <Login />:""}
      </div></provid.Provider>
    )

 
}


export default AuthSystem