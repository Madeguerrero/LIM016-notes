import React, { useState } from "react";
import logo from "../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";




const Banner = ({show,searchText, setNotas}) => {
 
  

  const handleSearchNote =(e)=>{
    const searchValue = e.target.value;
    
    if(searchValue !== ""){
       const arrayNotesSearch = searchText.filter((search) => { 
        
        return search.description.toLowerCase().includes(searchValue.toLowerCase())|| search.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setNotas(arrayNotesSearch);
      console.log("aaray", arrayNotesSearch);
    }else{
      setNotas(searchText);
    }
  };
  return (
    <div className="banner">
      <img src={logo} alt="imagenDeLogo" id="img_banner"></img>
      <div className="search-icon">
        <input type="search" placeholder="Search... " id="search" style={{display:show}} onChange={handleSearchNote}></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </div>
    </div>
  );
};
export default Banner;
