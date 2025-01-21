import {useContext, useState} from "react"
import { provid } from "./AuthSystem"

export function Contextbar({v,setcon}) {
   const {context,setcontext}=useContext(provid)
    function handlecheck() {
        console.log("trws")
        setcon(c=>c=!c)
    }
    function handle() {
        console.log("true")
        setcontext(c=>c=!c)
    }


    return(<div>{!context ?<div style={{background:"#f0f0f0",height:"50px",display:"flex",flexDirection:"column"}}><label style={{display:"flex",height:"50px",justifyContent:"flex-end",margin:"0px 20px",alignItems:"center"}}htmlFor="contextapi">
         <input style={{margin:"0px 10px"}} onClick={handlecheck} type="checkbox" value={v} name="context" id="contextapi"  placeholder="Enter username" />Context API</label>
        
    </div>:<div style={{background:"#f0f0f0",height:"50px",display:"flex",flexDirection:"column"}}><label style={{display:"flex",height:"50px",justifyContent:"flex-end",margin:"0px 20px",alignItems:"center"}}htmlFor="contextapi">
         <input style={{margin:"0px 10px"}} onClick={handle} type="checkbox" value={context} name="context" id="contextapi"  placeholder="Enter username" />Context API</label>
        
    </div>}</div>)
}