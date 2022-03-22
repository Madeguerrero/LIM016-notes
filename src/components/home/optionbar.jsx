import React, { useState } from "react";
import {AiOutlineMore} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

 const styleButton={
     borderStyle:"none",
 }
 const Optionbar = ({LastNotesRemove}) =>{
     const [sidebar,setSidebar] = useState(false)
     const showSiderBar = () => setSidebar(!sidebar)
     
     //const saveNote= props.handleSubmit("notas");

     return (
         <div className="bar-option">
             <div className="input-group">
            <button type="button"  onClick={()=>{showSiderBar()}} className="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false" style={styleButton}>
            <AiOutlineMore className="iconDot"/></button>
            <ul className="dropdown-menu dropdown-menu-end">
               <li><a className="dropdown-save" type="submit" >Save</a></li>
               <li><a className="dropdown-addLabel" >Add label</a></li>
               <li><a className="dropdown-addPicture" >Add picture</a></li>
               <li><a className="dropdown-createCopy" >Create copy</a></li>
               <li><a className="dropdown-deleteNote" >Delete note</a></li>
               <li><a className="dropdown-cleanNote" >Clean note</a></li>
          </ul> 
          </div>
        </div>
     )
 }

 export default Optionbar;



 {/* <select class="form-select form-select-sm" aria-label=".form-select-sm example"  >
 <option selected>Select option</option>
 <option value="1" type="submit">Save</option>
 <option value="2">Add label</option>
 <option value="3">Add picture</option>
 <option value="4">Create copy</option>
 <option value="6">Delete note</option>
</select>
<div class="dropdown">
</div> */}