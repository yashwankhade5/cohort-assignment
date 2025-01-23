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

  return (<div>
    <div style={{margin:"50px 10px",fontWeight:"bold",fontSize:"35px",textAlign:"center"}}>RandomUser</div>
    <div style={{display:"flex", gap:"30px"}}>
<Card/>
<Card/>
<Card/>
    </div>
    
    </div>
  )
}

function Card() {
  return<div style={{borderRadius:"5px",border:"0.5px solid black",width:"100px"}}>
<img src="https://randomuser.me/api/portraits/med/women/70.jpg" alt="" />
<span>Cristina</span>
  </div>
}

export default RandomUser