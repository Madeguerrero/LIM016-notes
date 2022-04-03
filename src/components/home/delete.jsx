import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import {IoMdSync} from "react-icons/io";
import {IoIosTrash} from "react-icons/io";
import { getAllNotes } from "../../firebaseConfi";
import { useEffect } from "react";
import {deleteNote} from "../../firebaseConfi";
import {updateNewNote} from "../../firebaseConfi";

const Delete = () => {
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
    const arrayNoteDelete = [...notas].filter((objectNote)=> objectNote.id !== idNote);
    console.log("funciona",arrayNoteDelete);
    setNotas(arrayNoteDelete);
  })
}

const resetNota=(e)=>{
console.log(e);
updateNewNote(e,{status: true}); //aqui cambiamos el estado de la nota de false a true
const arrayNoteReset = [...notas].filter((objectNote)=> objectNote.id !== e); // filtramos las notas por status diferente al evento
setNotas(arrayNoteReset);

}

return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
      <div className="revomeNotes">
      {notas.map(nota => <section key={nota.id} className="sectNoteDelete" style={{background:nota.label}}  >
             <div  rows="20" cols="20" className="notesObtained">
               <p>{nota.title}</p>
               <hr></hr>
                {`${nota.description}`}
            </div>
        <div className="FooterDelete">
        <p className="dateNote">{`${nota.date}`}</p>
        <IoIosTrash  className="noteDeleteForever" size='1.4em' onClick={() => NoteRemoveForever(nota.id)} /> {/* icono de eliminar nota */}
        <IoMdSync  className="restoreNote" size='1.4em' onClick={() => resetNota(nota.id)}/>{/* icono de resetear el status de la nota  */}
        </div>
        </section>)}
      </div>
      </div>
    </section>
  );
};
export default Delete;

