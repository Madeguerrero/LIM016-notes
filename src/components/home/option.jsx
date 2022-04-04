import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Signout from "./signout";


const linkStyle = {
  textDecoration: "none",
  margin: 10,
  color: "#310e68",
};

const Option = () => {
  
  return (
    <div className="container-option">
      <div className="menu-option">
        <br></br>
        <div className="user">
          <FontAwesomeIcon icon={faUser}  style={linkStyle}/><p className="welcome">Welcome</p>
        </div>
        <br></br>
        <div className="settings">
        <Signout />
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="create">
          <FontAwesomeIcon icon={faPenToSquare}/>
          <Link to="/createnotes" style={linkStyle}>
            Create
          </Link>
        </div>
        <br></br>
        <div className="notes">
          <FontAwesomeIcon icon={faFileLines}/>
          <Link to="/notes" style={linkStyle}>
            Notes
          </Link>
        </div>
        <br></br>
        <div className="bin">
          <FontAwesomeIcon icon={faTrashCan} />
          <Link to="/delete" style={linkStyle}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Option;
