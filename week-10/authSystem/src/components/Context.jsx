import {useState} from "react"

export function Contextbar() {
    
    return(<div><label htmlFor="contextapi">
        <input style={{margin:"10px 10px",position:"relative",right:0}} type="checkbox" name="context" id="contextapi" />Context API</label>
    </div>)
}