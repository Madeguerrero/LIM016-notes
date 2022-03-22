import React from "react";
import logo from "../../assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


//const principalLogo = new URL("../../assets/img/logo.png", import.meta.url);
const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} alt="imagenDeLogo" id="img_banner"></img>
      <div className="search-icon">
        <input type="search" placeholder="Buscar  " id="search"></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </div>
    </div>
  );
};
export default Banner;

/*<div className="search-icon">
        <input type="search" placeholder="Buscar  " id="search"></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      </div>*/