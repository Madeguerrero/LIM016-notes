import React, { useState } from "react";
import {AiOutlineMore} from "react-icons/ai";
 
 const Optionbar = () =>{
     const [sidebar,setSidebar] = useState(false)
     const showSiderBar = () => setSidebar(!sidebar)
     return (
         <div className="bar-option">
             <AiOutlineMore onClick={showSiderBar}/>
             <select class="form-select form-select-sm" aria-label=".form-select-sm example" >
                <option selected>Select option</option>
                <option value="1" type="submit">Save</option>
                <option value="2">Add label</option>
                <option value="3">Add picture</option>
                <option value="4">Create copy</option>
                <option value="6">Delete note</option>
            </select>
         </div>
     )
 }

 export default Optionbar;