import React, { useEffect, useState } from 'react'
import axios from "axios";
const RandomUser = () => {
  
  const [user ,setuser]=useState([])
  const [load,setloading]=useState(false)
  const [newuser,setnew]=useState(true)
  const [error,seterror]=useState(false)
 let post=user.map((e,index)=><Card key={index} Url={e}/>)
  async function randomuser(num=6) {
    try{
     
      
    setloading(true)
    const response = await axios.get(`https://randomuser.me/api/?results=${num}`)
    const cardsuser=response.data.results
    setloading(false)
    setuser([...user,...cardsuser])
    }catch(e){
      setloading(false)
seterror(true)
    }
   
  }
  function loader() {
    setnew(c=>!c)
    seterror(false)
  }
  useEffect(()=>{
     randomuser()

  },[newuser])

  return (<div style={{margin:"10px 30px"}}>
    <div style={{margin:"50px 10px",fontWeight:"bold",fontSize:"35px",textAlign:"center"}}>RandomUser</div>
    <div style={{display:"flex",flexWrap:"wrap", gap:"30px",justifyContent:"center"}}>
{post}
    </div>
    {load && <div style={{textAlign:"center",margin:"0px 20px",marginTop:"50px"}}>loading...</div>}
    {error && <div style={{textAlign:"center",margin:"30px 20px"}}><div>something went wrong</div><span onClick={loader} style={{margin:"10px 10px",background:"red",padding:"10px 80px",color:"white",position:"relative",bottom:"-40px"}}>Retry</span></div>}
    <br/>
   {!error && <div style={{textAlign:"center",margin:"30px 10px"}}> <span style={{background:"green",padding:"10px 80px",color:"white"}} onClick={loader}>Load More</span></div>}
   
   </div>
    
  )
}

function Card({Url}) {
  return<div style={{borderRadius:"5px",border:"0.8px solid #ddd",width:"200px",height:"200px",boxShadow: "5px 5px 5px lightgrey"}}>
<img style={{borderRadius:"50%",margin:"30px 64px"}} src={`${Url["picture"]["medium"]}`} alt="user picture" />
<div style={{textAlign:'center',fontSize:"20px",fontWeight:"550"}}>{Url.name.first+" "+Url.name.last}</div>
  </div>
}

export default RandomUser