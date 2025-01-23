import React, { useEffect, useState } from 'react'
import axios from "axios";
const RandomUser = () => {
  const [user ,setuser]=useState([])
  async function userid() {
    const response = await axios.get("https://randomuser.me/api/")
    console.log(response.data.results)
    return response.data
  }
  useEffect(()=>{
    const userinfo=  userid()

  },[])

  return (<div style={{margin:"10px 60px"}}>
    <div style={{margin:"50px 10px",fontWeight:"bold",fontSize:"35px",textAlign:"center"}}>RandomUser</div>
    <div style={{display:"flex",flexWrap:"wrap", gap:"30px",justifyContent:"center"}}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
    </div>
    
    </div>
  )
}

function Card() {
  return<div style={{borderRadius:"5px",border:"0.8px solid #ddd",width:"200px",height:"200px"}}>
<img style={{borderRadius:"50%",margin:"30px 64px"}} src="https://randomuser.me/api/portraits/med/women/70.jpg" alt="" />
<div style={{textAlign:'center',fontSize:"20px",fontWeight:"550"}}>Cristina</div>
  </div>
}

export default RandomUser