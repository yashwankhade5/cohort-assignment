import React, { useContext } from 'react'
import { provid } from './AuthSystem'


const AppBar = ({Log,user,setUser,setLog}) => {
  const contextValue=useContext(provid)
 
  
  
 
  return (
    <div style={{color:"white",display:"flex",justifyContent:"space-between",margin:"0px 0px",background:"#4099b5",fontWeight:"bolder"}}>
      <span style={{margin:"20px 20px"}}>Auth System Demo</span>
      {contextValue ? <Show />: <Show Log={Log} user={user} setuser={setUser} setlog={setLog}/>}
     
    </div>
  )
}


function Show({Log,user,setuser,setlog}) {
  const contextValue=useContext(provid)
  console.log(Log)
  function logout(){
   
    setuser("")
    setlog(false)
  }
  function logouthandle(){
contextValue.setUsername("")
contextValue.setLoggedIn(false)

  }
  

  return<div>{contextValue ? <div style={{margin:"15px 10px"}}>{contextValue.LoggedIn ? <span>{contextValue.username}<button onClick={logouthandle} style={{padding:"5px 10px",margin:"0px 10px",borderRadius:"7px"}}>Log Out</button></span>:"Not logged in"}
  </div>:<div style={{margin:"15px 10px"}}>{Log ? <span>{user}<button onClick={logout} style={{padding:"5px 10px",margin:"0px 10px",borderRadius:"7px"}}>Log Out</button></span>:"Not logged in"}
  </div>}</div>
}
export default AppBar
