import React, { Component, useContext } from 'react'
import {petadopt} from "./PetAdoptionForm" ;
import PetAdoptionForm from './PetAdoptionForm';
 function AdopterData() {
  let {s}=useContext(petadopt)
console.log(s)

const elementof=s.map((e,index)=>{
return <Databody key={index} PetName={e["Pet-Name"]} PetType={e["Pet-Type"]} Breed={e["Breed"]}AdopterName={e["AdopterName"]} Email={e["Breed"]} Phone={e["Phone"]}/> 


})
console.log(elementof)



    return (
      <>
      <table>
        <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Adopter Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr></thead>
        <tbody>
          {elementof}
          </tbody>
      </table>
      
      </>
    )
  
}

function Databody({PetName,PetType,Breed,AdopterName,Email,Phone}) {
  return<>
     
        <tr>
          <td>{PetName}</td>
          <td>{PetType}</td>
          <td>{Breed}</td>
          <td>{AdopterName}</td>
          <td>{Email}</td>
          <td>{Phone}</td>
          
        </tr>
  </>
  
}
export default AdopterData