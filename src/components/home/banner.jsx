import React, { useState } from "react";
import logo from "../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";




const Banner = ({show,notas}) => {
  const [searchText,setSearchText]=useState([]);

  const handleSearchNote =(e)=>{
    const searchValue = e.target.value;
    if(searchValue !== ""){
      const arrayNotesSearch = searchText.filter((search) =>{
        return search.title.tolowerCase().includes(searchValue.tolowerCase());
      })
      setSearchText(arrayNotesSearch);
    }else{
      setSearchText(searchText);
    }



  }
  return (
    <div className="banner">
      <img src={logo} alt="imagenDeLogo" id="img_banner"></img>
      <div className="search-icon">
        <input type="search" placeholder="Search by title " id="search" style={{display:show}} onChange={handleSearchNote}></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </div>
    </div>
  );
};
export default Banner;
