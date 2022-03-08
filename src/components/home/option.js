import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { getAllNotes } from "../../firebaseConfi";

const linkStyle = {
  textDecoration: "none",
  margin: 10,
};

const Option = (props) => {
  const functionFetch= async()=>{
    const idUser = localStorage.getItem('myid')
    const notas=await getAllNotes('notas',idUser)
    console.log(notas);
  } 
  functionFetch(); 
  return (
    <div className="container-option">
      <main className="menu">
        <br></br>
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
          <h3> Welcome Maria</h3>
        </div>
        <br></br>
        <div className="settings">
          <FontAwesomeIcon icon={faGear} />
          <h3>Settings</h3>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="create">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="hover:text-blue-500"
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
