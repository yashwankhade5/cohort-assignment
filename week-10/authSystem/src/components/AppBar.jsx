import React from 'react'

const AppBar = () => {
  return (
    <div style={{color:"white",display:"flex",justifyContent:"space-between",margin:"0px 0px",background:"#4099b5",fontWeight:"bolder"}}>
      <span style={{margin:"20px 20px"}}>Auth System Demo</span>
      <Login/>
    </div>
  )
}


function Login() {
  return<button style={{width:"70px",height:"40px", margin:"10px 20px",borderRadius:"5px",color:'blue'}}>Login</button>
  
}
export default AppBar