import React from "react";
import {ImPriceTag} from "react-icons/im";
import { useState } from "react";

const StyleButtonLabel={
    borderStyle:"none",
}

const AddLabel=({setLabel})=>{
   
    let colors =[
    {
        value:0,
        label:"purple",
    },
    {
        value:1,
        label:"red",
    },
    {
        value:2,
        label:"orange"
    },
    {
        value:3,
        label:"blue"
    },
    {
        value:4,
        label:"green"
    }
]

const handleChange= (e) =>{
    const labelValue = e// cuando dan click aqui cambia el background de la nota deacuerdo al array de arriba.
    setLabel(colors[e].label);

    
}
    return(
        <div>
           <div className="dropdown">
               <button className="btn btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={StyleButtonLabel}>
               <ImPriceTag   className="addLabels" size='1em'/>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                  <li  onClick={()=> handleChange(0)} value="personal"><a className="dropdown-item  labelPersonal" >Personal</a></li>
                  <li  onClick={()=> handleChange(1)} value="work"><a className="dropdown-item  labelWork" >Work</a></li>
                  <li  onClick={()=> handleChange(2)} value="home"><a className="dropdown-item  labelHome">Home</a></li>
                  <li  onClick={()=> handleChange(3)}><a className="dropdown-item  labelSocial"   value="social">Social</a></li>
                  <li  onClick={()=> handleChange(4)}><a className="dropdown-item  labelOthers"   value="others">Others</a></li>
             </ul>
         </div>
        </div>

    )
}

export default AddLabel;