import React from "react";
import {ImPriceTag} from "react-icons/im";
import { useState } from "react";

const StyleButtonLabel={
    borderStyle:"none",
}

const AddLabel=()=>{
   
    let colors =[
    {
        value:1,
        label:"purple",
    },
    {
        value:2,
        label:"verde",
    },
    {
        value:3,
        label:"orange"
    },
    {
        value:4,
        label:"blue"
    },
    {
        value:5,
        label:"green"
    }
]
const [label,setLabel] = useState('')
const handleChange= (e) =>{
    const labelValue = e.label
    setLabel({ background: colors.value });

    
}
    return(
        <div>
           <div className="dropdown">
               <button className="btn btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={StyleButtonLabel}>
               <ImPriceTag   className="addLabels" size='1em'/>
               </button>
               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                  <li><a className="dropdown-item  labelPersonal" value="personal" onChange={handleChange}>Personal</a></li>
                  <li><a className="dropdown-item  labelWork"     value="work">Work</a></li>
                  <li><a className="dropdown-item  labelHome"     value="home">Home</a></li>
                  <li><a className="dropdown-item  labelSocial"   value="social">Social</a></li>
                  <li><a className="dropdown-item  labelOthers"   value="others">Others</a></li>
             </ul>
         </div>
        </div>

    )
}

export default AddLabel;