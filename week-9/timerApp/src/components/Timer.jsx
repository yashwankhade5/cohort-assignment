import React,{useState,useContext, useEffect} from 'react'

import  "./Timerstyle.css";
import { createContext } from 'react';
const shownum = createContext()

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [editState, seteditState] = useState(false);
 
  useEffect(()=>{
    let intervalId;
   
    if (isRunning && time>0) {
       intervalId=setInterval(()=>{
        if(time==1){
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
      <InputValue timecon={Math.floor(time/3600)}/><span className='colon'>:</span>
      <InputValue timecon={Math.floor(time/60)}/><span className='colon'>:</span>
      <InputValue timecon={time%60}/>
      <Button/>
      <ResetButton/>
      
      </shownum.Provider>
    </div>
  )
}

function InputValue({timecon}){
 let {setTime}=useContext(shownum)
  const handleChange=(e)=>{
    setTime(parseInt(e.target.value))
  }
return(
  <input type="number" onChange={handleChange} value={timecon}  className={'timeInput timeUnit'} />
)

}
function Button() {
  const {isRunning,setisRunning}=useContext(shownum)
  function start() {
    if (!isRunning) {
      setisRunning(c=>c=true)
    }
    
  }
  function pause() {
    if (isRunning) {
      setisRunning(c=>c=false)
    }
    
  }
  return(<>
    <button onClick={pause} style={{marginRight:"10px",padding:"10px 60px"}} className='actionButton'>Pause</button>
    <button  onClick={start} style={{marginRight:"10px",padding:"10px 60px"}} className='actionButton'>Start</button>
    
    </>
  )
}
function ResetButton() {
  const {setTime,setisRunning}=useContext(shownum)
  function reset() {
    setTime(c=>c=0)
    setisRunning(c=>c=false)
  }
  return<div style={{width:"100%"}}><button style={{textAlign:"center"}} className='actionButtons' onClick={reset} >Reset</button>
</div>
}


export default Timer