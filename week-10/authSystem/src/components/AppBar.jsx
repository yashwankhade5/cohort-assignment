import React from 'react'


const AppBar = ({LoggedIn,username,setUsername,setLoggedIn}) => {
  console.log(username)
 
  return (
    <div style={{color:"white",display:"flex",justifyContent:"space-between",margin:"0px 0px",background:"#4099b5",fontWeight:"bolder"}}>
      <span style={{margin:"20px 20px"}}>Auth System Demo</span>
      <Show Logged={LoggedIn} user={username}/>
    </div>
  )
}


function Show({Logged,user}) {
  // console.log(user)

  return<div style={{margin:"15px 10px"}}>{Logged ? <span>{user}<button style={{padding:"5px 10px",margin:"0px 10px",borderRadius:"7px"}}>Log Out</button></span>:"Not logged in"}
  </div>
}
export default AppBar
//<button style={{width:"70px",height:"40px", margin:"10px 20px",borderRadius:"5px",color:'blue',border:"none"}}>Login</button>