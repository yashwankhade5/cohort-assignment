import React,{useState,useContext, useEffect, useRef} from 'react'
import {shownum,ShowProvider} from "./Context"
import { TimerDisplay } from "./TimerDisplay";
import  "./Timerstyle.css";




const Ti = () => {
  return<ShowProvider>
    <Timer/>
  </ShowProvider>
  
}
function Timer() {
  const {editState,seteditState}=useContext(shownum)
  return (<div >
    <div className='timerApp '>
      
     {!editState && <TimerDisplay/>}
      
     {editState && <InputValue/>}
      <Button/>
      
      
    </div></div>
  )
}

function Button(){
  const {setisRunning,seteditState}=useContext(shownum)
  function start() {
    setisRunning(r=>r=true)
    seteditState(r=>r=false)
  
  }
  return<button onClick={start}>Start</button>
}

function InputValue(){
  const{time,setTime}=useContext(shownum)
const[hr,sethr]=useState(0)
const[min,setmin]=useState(0)
const[sec,setsec]=useState(0)
const second=useRef()
const minutes =useRef()

function calculateTimme(hr,min,sec) {
  const totaltime=(parseInt(hr)*3600 || 0)+(parseInt(min)*60 || 0)+parseInt(sec || 0)
  setTime(totaltime)
}

 function handlechange(e,unit) {
  const value= parseInt(e.target.value)

  if (unit==="hr") {
    if (value.toString().length>2) {
      minutes.current.focus()
      return
    }
    
    sethr(c=>c=value)
    
    calculateTimme(value,min,sec)
  } else if(unit === "min"){
    if (value.toString().length>2) {
      second.current.focus()
      return
    }
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
 <input  type="number" value={hr.toString().padStart(2,"0")} onChange={(e)=>{handlechange(e,'hr')}}className={'timeInput timeUnit'}/><span className='colon'>:</span>
  <input  ref={minutes} type="number" value={min.toString().padStart(2,"0")} onChange={(e)=>{handlechange(e,'min')}} className={'timeInput timeUnit'}/><span className='colon'>:</span>
  <input ref={second}type="number" value={sec.toString().padStart(2,"0")} onChange={(e)=>{handlechange(e,'sec')}} className={'timeInput timeUnit'}/>
  </>
)

}




export default Ti