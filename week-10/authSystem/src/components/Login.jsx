import React, { useRef } from 'react'

const Login = ({setUsername,setLoggedIn}) => {
  const inputvalue=useRef()
  function handle() {
    
    setLoggedIn(true)
    setUsername(inputvalue.current.value)
    inputvalue.current.value=""
  }
  return (
    <div style={{display:"flex",justifyContent:"center",margin:"80px 0px",flexDirection:"row"}}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><input ref={inputvalue} type="text" id="user" name="user1"/>
      <button style={{margin:"10px 10px",padding:"5px 20px",borderRadius:"7px"}} onClick={handle}>Login</button>
      </div>
    </div>
  )
}

export default Login