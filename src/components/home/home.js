/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

const principalLogo = new URL("../../assets/img/logo.png", import.meta.url);
const Home = () => {
  return (
    <section className="container-banner">
      <div className="banner">
        <img src={principalLogo} id="img_banner"></img>

        <input type="search" placeholder="Buscar  " id="search"></input>
        <div id="faMagnifyingGlass">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="container-option">
        <main className="menu">
          <div className="user">
            <FontAwesomeIcon icon={faUser} />
            User: Maria Guadalupe
          </div>
          <br></br>
          <div className="settings">
            <FontAwesomeIcon icon={faGear} />
            Settings
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="create">
            <FontAwesomeIcon icon={faPenToSquare} />
            Create
          </div>
          <br></br>
          <div className="notes">
            <FontAwesomeIcon icon={faFileLines} />
            Notes
          </div>
          <br></br>
          <div className="bin">
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
          </div>
        </main>
      </div>
    </section>
  );
};
export default Home;
