import React, { createContext, useEffect, useState } from 'react'
import "./form.css"
import AdopterData from "../components/AdopterData";


export const petadopt =createContext()
const PetAdoptionForm = () => {
  const [showtable, setShowtable]=useState(true)
  const [s,sets]= useState([])
 
function UpperProvider({ children }) {
  return<>
  <petadopt.Provider value={{s,sets}}>
  {children}
  </petadopt.Provider>
  </>

}

function search(formData) {
  
  formData.preventDefault(); 
 
  let dta = new FormData(formData.target);
  let tempData={}
  for (let [name, value] of dta.entries()) {
    console.log(`${name}: ${value}`);
tempData[name]=value

  }
sets(s=>[...s,tempData])
console.log(s)

setShowtable(currentValue => !currentValue)
}
   function GoBack() {
    setShowtable(currentValue=> !currentValue)
   } 
  return (
    <>
    <UpperProvider>
    {showtable && <div className='container'>
    <div className='box'>
     <form onSubmit={search}  className='main'>
     <Input input={"Pet-Name"}/>
     <Input input={"Pet-Type"}/>
     <Input input={"Breed"}/>
     <Input input={"AdopterName"}/>

     <Input input={"Email"}/>
      <Input input={"Phone"}/>
      <button type='submit'>Submit</button>
    </form>
    <div></div>
    </div></div>}

    {!showtable && <div><AdopterData state={{s,sets}}/><button style={{width:"300px"}} onClick={GoBack}>Go Back</button></div>}
    
    </UpperProvider>
    </>
  )
}

function Input({input}){
return <>
<div style={{position:"relative"}}>
<label htmlFor={input}  style={{ textAlign:"left",fontWeight:"700", color:"green"}}>{input}</label>
<input type="text" name={input}  id={input}  required/></div>
</>
}

export default PetAdoptionForm