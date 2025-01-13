import React,{useState,useContext, useEffect, useRef} from 'react'

import  "./Timerstyle.css";
import { createContext } from 'react';
export const shownum = createContext()
export function ShowProvider({children}) {
  const [time, setTime] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [editState, seteditState] = useState(true);
  
  return<shownum.Provider value={{time,setTime,isRunning,setisRunning,editState,seteditState}}>
{children}
    </shownum.Provider>
}