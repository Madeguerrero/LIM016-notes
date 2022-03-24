import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import {IoMdSync} from "react-icons/io";
import {IoIosTrash} from "react-icons/io";
import { getAllNotes } from "../../firebaseConfi";
import { useEffect } from "react";
import {deleteNote} from "../../firebaseConfi";

const Delete = (props) => {
  const [notas,setNotas] = useState([]);
  const functionFetch= async()=>{
    const idUser = localStorage.getItem('myid')
    console.log(idUser);
     let notes = await getAllNotes('notas',idUser)
      notes = notes.filter((note)=> !note.status)
     console.log("quetal",notes);
     setNotas(notes);
} 

useEffect(() =>{
  functionFetch();
},[])

const NoteRemoveForever=(idNote)=>{
  deleteNote(idNote).then(()=>{
    const arrayNoteDelete = [... notas].filter((objectNote)=> objectNote.id !== idNote);
    console.log("funciona",arrayNoteDelete);
    setNotas(arrayNoteDelete);
  })


}
  
return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
      <div className="revomeNotes">
      {notas.map(nota => <section>
             <textarea
            key={nota.id} rows="20" cols="20" className="notesObtained">{`${nota.description}`}</textarea>
        <div className="FooterDelete">
        <IoIosTrash  className="noteDeleteForever" size='1.4em' onClick={() => NoteRemoveForever(nota.id)} />

        <IoMdSync  className="restoreNote" size='1.4em'/>
        </div>
        </section>)}
      </div>
      </div>
    </section>
  );
};
export default Delete;

/* const [deleteNotes,setDeleteNotes] = useState(false);
  const NoteDelete=()=>{

  }

 const NoteRemoveForever=()=>{

 }
 */