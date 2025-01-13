import React,{useContext, useEffect, useRef} from 'react'
import  "./Ti";
import  "./Timerstyle.css";
import 'react-circular-progressbar/dist/styles.css';
import {shownum} from "./Context"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


export function TimerDisplay() {
    const {time,setTime,isRunning,setisRunning,seteditState}=useContext(shownum)
    const hr = Math.floor(time / 3600);
const min = Math.floor((time % 3600) / 60);
const sec = time % 60;
const initialtime=useRef(time)

    
      const intervalId=useRef(0)
      useEffect(()=>{
        
        
        if (isRunning && time>0) {
          intervalId.current=setInterval(() => {
            setTime(c=>c-1)
            
          }, 1000);
       
        }
        else if(time===0){
    setisRunning(false)
          clearInterval(intervalId.current)
        }
        return ()=>{
          
    clearInterval(intervalId.current)
        }
    
      },[isRunning,time])
      function editable(e) {
        seteditState(r=>r=true)
      }
      
    return<CircularProgressbarWithChildren value={(time/initialtime.current)*100}><div onClick={editable} className=" timerTime">
    {`${ hr.toString().padStart(2,"0") }:${ min.toString().padStart(2,"0") }:${sec.toString().padStart(2,"0")}`}
  </div></CircularProgressbarWithChildren>
}






