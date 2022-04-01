import React from "react";
import {ImPriceTag} from "react-icons/im";


const StyleButtonLabel={
    borderStyle:"none",
}

const AddLabel=({setLabel})=>{
   
    let colors =[
    {
        value:0,
        label:"rgb(190, 174, 226)",
    },
    {
        value:1,
        label:"rgb(205, 240, 234)",
    },
    {
        value:2,
        label:"rgb(249, 249, 249)"
    },
    {
        value:3,
        label:"rgb(247, 219, 240)"
    },
    {
        value:4,
        label:"rgb(201, 203, 255)"
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
                  <li  onClick={()=> handleChange(3)} value="social"><a className="dropdown-item  labelSocial" >Social</a></li>
                  <li  onClick={()=> handleChange(4)} value="others"><a className="dropdown-item  labelOthers">Others</a></li>
             </ul>
         </div>
        </div>

    )
}

export default AddLabel;