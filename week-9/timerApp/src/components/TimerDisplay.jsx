import React,{useState,useContext, useEffect, useRef} from 'react'
import  "./Ti";
import  "./Timerstyle.css";
import {shownum,ShowProvider} from "./Context"
import { createContext } from 'react';

export function TimerDisplay() {
    const {time,setTime,isRunning,setisRunning}=useContext(shownum)
    const hr = time/3600
    const min=(time%3600)/60
    const sec=time%60
    
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
      
    return<div className='timerDisplay'>
        <span >{hr}</span>
        <span >{min}</span>
        <span>{sec}</span>
    </div>
}






