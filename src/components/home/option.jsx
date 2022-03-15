import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Signout from "./signout";
import SignUp from "../../pages/signup";

const linkStyle = {
  textDecoration: "none",
  margin: 10,
};

const Option = (props) => {
  
  
  const welcomeName= ()=>{
  const idName = document.getElementById("outlined-Name").value;
  console.log(idName);
  }
  return (
    <div className="container-option">
      <main className="menu-option">
        <br></br>
        <div className="user">
          <h3>
          <FontAwesomeIcon icon={faUser} />
          Welcome{welcomeName}</h3>
        </div>
        <br></br>
        <div className="settings">
        <Signout />
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="create">
          <FontAwesomeIcon
            icon={faPenToSquare}
          />
          <Link to="/createnotes" style={linkStyle}>
            Create
          </Link>
        </div>
        <br></br>
        <div className="notes">
          <FontAwesomeIcon icon={faFileLines} />
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
      </main>
    </div>
  );
};
export default Option;
