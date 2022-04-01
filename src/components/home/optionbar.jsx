import React, { useState } from "react";
import {AiOutlineMore} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

 const styleButton={
     borderStyle:"none",
 }
 const Optionbar = () =>{
     const [sidebar,setSidebar] = useState(false)
     const showSiderBar = () => setSidebar(!sidebar)
     

     return (
         <div className="bar-option">
             <div className="input-group">
            <button type="button"  onClick={()=>{showSiderBar()}} className="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false" style={styleButton}>
            <AiOutlineMore className="iconDot"/></button>
            <ul className="dropdown-menu dropdown-menu-end">
               <li><a className="dropdown-save" type="submit" >Save</a></li>
               <li><a className="dropdown-addPicture" >Add picture</a></li>
               <li><a className="dropdown-createCopy" >Create copy Google Docs</a></li>
          </ul> 
          </div>
        </div>
     )
 }

 export default Optionbar;

