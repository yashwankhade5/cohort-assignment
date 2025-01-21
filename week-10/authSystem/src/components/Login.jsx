import React, { useContext, useRef } from 'react'
import {provid} from "./AuthSystem";

const Login = ({setUser,setLog}) => {
  const contextValue=useContext(provid)
  const inputvalue=useRef()
  function handlechange() {
    contextValue.setLoggedIn(true)
    contextValue.setUsername(inputvalue.current.value)
    inputvalue.current.value=""
  }
  function handle() {
    
    setLog(true)
    setUser(inputvalue.current.value)
    inputvalue.current.value=""
  }
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"80px 0px",flexDirection:"row"}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><input ref={inputvalue} type="text" id="user" name="user1"/>
      {contextValue ? <button style={{margin:"10px 10px",padding:"5px 20px",borderRadius:"7px"}} onClick={handlechange}>Login</button>:
      <button style={{margin:"10px 10px",padding:"5px 20px",borderRadius:"7px"}} onClick={handle}>Login</button>}
      </div>
    </div>
  )
}

export default Login