import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const principalLogo = new URL("../../assets/img/logo.png", import.meta.url);
const Banner = () => {
  return (
    <div className="banner">
      <img src={principalLogo} alt="imagenDeLogo" id="img_banner"></img>
    </div>
  );
};
export default Banner;

/*<div className="search-icon">
        <input type="search" placeholder="Buscar  " id="search"></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </div>*/