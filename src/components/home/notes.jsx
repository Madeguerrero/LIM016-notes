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
     let notes = await getAllNotes('notas',idUser)
      notes = notes.filter((note)=> note.status)
     console.log("quetal",notes);
     setNotas(notes);
} 

useEffect(() =>{
  functionFetch();
},[])
    
const NotesRemove =(idNote)=>{
  console.log("que",idNote);
  updateStateNote(idNote).then(() => {
    const newArrayNotes =[...notas].filter((objectNote)=>objectNote.id !== idNote);
    console.log(newArrayNotes);
    setNotas(newArrayNotes);
  }).catch((error) =>{
    console.log(error);
  })
}

return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
        <div className="orderlyNotes" >
           {notas.map(nota => <section>
             <section
            key={nota.id} rows="20" cols="20" className="notesObtained">
                {`${nota.description}`}</section>
           <div className="FooterNotes2">
               {`${nota.date}`}
               <button onClick={() => NotesRemove(nota.id)}>delete</button>
               <button> edit note</button>
                <Optionbar className="noteOption2"/>
          </div>
          </section>)}
        </div>
      </div>
 </section>
  );
};

export default Notes;
