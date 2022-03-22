import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import {IoMdSync} from "react-icons/io";
import {IoIosTrash} from "react-icons/io";

const Delete = (props) => {
  //const [deleteNotes,setDeleteNotes] = useState(false);
  //const NoteDelete=()=>{

  //}

 //const NoteRemoveForever=()=>{

// }
return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
      <div className="revomeNotes">
        <IoIosTrash  className="noteDeleteForever" size='1.4em'/*  onClick={() => NotesRemove(nota.id)} *//>

        <IoMdSync  className="restoreNote" size='1.4em'/>
      </div>
      </div>
    </section>
  );
};
export default Delete;
