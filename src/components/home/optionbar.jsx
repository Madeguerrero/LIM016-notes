import React, { useState } from "react";
import {AiOutlineMore} from "react-icons/ai";
 
 const Optionbar = () =>{
     const [sidebar,setSidebar] = useState(false)
     const showSiderBar = () => setSidebar(!sidebar)
     return (
         <div className="bar-option">
             <AiOutlineMore onClick={showSiderBar}/>
             <nav className={sidebar ? 'nav menu active' : 'nav menu'}>
             <ul className="list-bar">
                 <li className="namelist">
                 </li>
             </ul>
             </nav>
         </div>
     )
 }

 export default Optionbar