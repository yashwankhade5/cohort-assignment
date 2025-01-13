import React,{useState,useContext, useEffect, useRef} from 'react'
import {shownum,ShowProvider} from "./Context"
import { TimerDisplay } from "./TimerDisplay";
import  "./Timerstyle.css";




const Ti = () => {
  
  return (
    <div className='timerApp'>
      <ShowProvider>
      <TimerDisplay/>
      
      {<InputValue/>}
      <Button/>
      
      </ShowProvider>
    </div>
  )
}
function Timer() {
 
}
function Button(){
  const {setisRunning}=useContext(shownum)
  function start() {
    setisRunning(r=>r=true)
  }
  return<button onClick={start}>Start</button>
}

function InputValue(){
  const{time,setTime}=useContext(shownum)
const[hr,sethr]=useState(0)
const[min,setmin]=useState(0)
const[sec,setsec]=useState(0)

function calculateTimme(hr,min,sec) {
  const totaltime=(parseInt(hr)*3600 || 0)+(parseInt(min)*60 || 0)+parseInt(sec || 0)
  setTime(totaltime)
}

function handlechange(e,unit) {
  const value= parseInt(e.target.value)
  if (unit==="hr") {
    sethr(value)
    calculateTimme(value,min,sec)
  } else if(unit === "min"){
    setmin(value)
    calculateTimme(hr,value,sec)
  }else if(unit==="sec"){
    setsec(value)
    calculateTimme(hr,min,value)
  }
}
useEffect(()=>{
 sethr( Math.floor(time / 3600))
 setmin(Math.floor((time % 3600) / 60))
 setsec(Math.floor((time% 60)))
},[time])

return(<>
 <input type="number" value={hr} onChange={(e)=>{handlechange(e,'hr')}}className={'timeInput timeUnit'}/><span className='colon'>:</span>
  <input type="number" value={min} onChange={(e)=>{handlechange(e,'min')}} className={'timeInput timeUnit'}/><span className='colon'>:</span>
  <input type="number" value={sec} onChange={(e)=>{handlechange(e,'sec')}} className={'timeInput timeUnit'}/>
  </>
)

}




export default Ti