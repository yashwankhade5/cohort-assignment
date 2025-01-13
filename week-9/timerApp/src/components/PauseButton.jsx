import React,{useState,useContext, useEffect, useRef} from 'react'
import {shownum,ShowProvider} from "./Context"

import  "./Timerstyle.css";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

export function PauseButton() {
    const {setisRunning}=useContext(shownum)
    function pause() {
        setisRunning(c=>c=false)
    }
    return<button style={{margin:"20px 0px",padding:"10px 30px"}} className='actionButton' onClick={pause}>Pause</button>
}
export function Reset(){
    const {setTime}=useContext(shownum)
    function reset(){
        setTime(c=>c=0)
    }
return<button style={{margin:"0px 90px"}} onClick={reset}>Reset</button>
}