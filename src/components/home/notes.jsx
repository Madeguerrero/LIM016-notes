import React from "react";
import Banner from "./banner";
import Option from "./option";
import { getAllNotes } from "../../firebaseConfi";
import { useEffect } from "react";
import { useState } from "react";
import Optionbar from "./optionbar";
import {updateStateNote } from '../../firebaseConfi';


const Notes = (props) => {
const [notas,setNotas] = useState([]);
  const functionFetch= async()=>{
    const idUser = localStorage.getItem('myid')
    console.log(idUser);
     const notes = await getAllNotes('notas',idUser)
     console.log(notes);
     setNotas(notes);
} 

useEffect(() =>{
  functionFetch();
},[])
    
const LastNotesRemove =(idNote)=>{
      updateStateNote(idNote).then(() => {
          const newArrayNotes = [...props.arrayNotes].filter((objNote)=>objNote.id!==idNote);
          props.setArrayNotes(newArrayNotes);
      }).catch(() => { 
          alert('Error al intentar eliminar la nota '+ idNote)
      });
       
 }
return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
        <div className="orderlyNotes" >
           {notas.map(nota => <section key={nota.id} rows="10" cols="10" className="notesObtained">{`${nota.description}`} {`${nota.date}`}<Optionbar className="noteOption2"/></section>)}
        </div>
      </div>
    </section>
  );
};

export default Notes;
