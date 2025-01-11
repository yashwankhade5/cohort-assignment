import React,{useState,useContext} from 'react'

import  "./Timerstyle.css";
import { createContext } from 'react';
const shownum = createContext()

const Timer = () => {
  const [value, setValue] = useState("Default Value");
  return (
    <div className='timerApp'>
      <shownum.Provider value={{value,setValue}}>
     
      <InputValue/><span className='colon'>:</span>
      <InputValue/><span className='colon'>:</span>
      <InputValue/></shownum.Provider>
    </div>
  )
}

function InputValue(){
 let {value,setValue}=useContext(shownum)
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
return(
  <input   onChange={handleChange} value={value}  className={'timeInput timeUnit'} />
)

}


export default Timer