import React,{useState,useContext, useEffect, useRef} from 'react'

import  "./Timerstyle.css";
import { createContext } from 'react';
const shownum = createContext()

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [editState, seteditState] = useState(false);
 
  useEffect(()=>{
    let intervalId;
    if (isRunning && time>0 ) {
      console.log("first")
       intervalId=setInterval(()=>{
        if(time===1){
          console.log("first")
          clearInterval(intervalId)
          setisRunning(false)
        }
        setTime(c=>c-1)},1000)   
    }
    
    return ()=>{
     
        clearInterval(intervalId)
      
       
    }
  },[isRunning,time])
  return (
    <div className='timerApp'>
      <shownum.Provider value={{time,setTime,isRunning,setisRunning}}>
      <InputValue/>
      <Button/>
      <ResetButton/>
      
      </shownum.Provider>
    </div>
  )
}

function InputValue(){
 let {setTime,time}=useContext(shownum)
 const [hr,sethr]=useState(Math.floor(time/3600))
 const [min,setmin]=useState(Math.floor(time/60))
 const [sec,setsec]=useState(time%60)
 function calculatetime(hour,minute,second) {
  const totalTime=(parseInt(hour)*3600)+(parseInt(minute)*60)+(parseInt(second))
  setTime(totalTime)
  console.log(time)
  
 }
  const handleChange=(e,unit)=>{
    if (unit == "hr") {
      sethr(e.target.value)
      calculatetime(e.target.value,min,sec)
      
    } else if(unit == "min") {
      setmin(e.target.value)
      calculatetime(hr,e.target.value,sec)
    }else{
      setsec(e.target.value)
      calculatetime(hr,min,e.target.value)
    }
  }
return(<>
  <input type="number" maxLength={2} onChange={e=>{handleChange(e,"hr")}} value={hr} className={'timeInput timeUnit'} /><span className='colon'>:</span>
  <input type="number" maxLength={2} onChange={e=>{handleChange(e,"min")}} value={min}  className={'timeInput timeUnit'} /><span className='colon'>:</span>
  <input type="number" maxLength={2} onChange={e=>{handleChange(e,"sec")}}  value={sec} className={'timeInput timeUnit'} />
  </>
)

}
function Button() {
  const {isRunning,setisRunning}=useContext(shownum)
  function start() {
    if (!isRunning) {
      console.log("issatrt")
      setisRunning(c=>c=true)
      console.log(isRunning)
    }
    
  }
  function pause() {
    if (isRunning) {
      setisRunning(c=>c=false)
      console.log(isRunning)
    }
    
  }
  return(<>
    <button onClick={pause} style={{marginTop:"10px",marginRight:"10px",padding:"10px 60px"}} className='actionButton'>Pause</button>
    <button  onClick={start} style={{marginTop:"10px",marginRight:"10px",padding:"10px 60px"}} className='actionButton'>Start</button>
    
    </>
  )
}
function ResetButton() {
  const {setTime,setisRunning}=useContext(shownum)
  function reset() {
    setTime(c=>c=0)
    setisRunning(c=>c=false)
  }
  return<div><button style={{margin:"20px 100px"}} className='actionButtons' onClick={reset} >Reset</button>
</div>
}


export default Timer