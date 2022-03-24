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
const [modal,setModal] =useState(false);
const handleChange=(event)=>{
  setModal(!modal)
}
const handleSubmit=(note)=>{
  updateStateNote(note)
}

return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
        <form className="orderlyNotes" >
           {notas.map(nota => <section className="sectNotes">
             <div key={nota.id} rows="20" cols="20" className="notesObtained">
                <p>{nota.title}</p>
                <hr></hr>
                {`${nota.description}`}
            </div>
           <div className="FooterNotes2">
              <p className="dateNote">{`${nota.date}`}</p>
               <button onClick={() => NotesRemove(nota.id)}>delete</button>
               <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Edit</button>
               <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div className="modal-dialog">
              <div className="modal-content">
                 <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                       <label for="recipient-name" className="col-form-label" >Title:</label>
                       <input type="text" className="form-control" id="recipient-name" value={nota.title}  onChange ={handleChange}/>
                   </div>
                   <div className="mb-3">
                       <label for="message-text" className="col-form-label">Description:</label>
                       <textarea className="form-control" id="message-text" value={`${nota.description}`} onChange={handleChange}></textarea>
                  </div>
               </form>
            </div>
            <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save change</button>
            </div>
          </div>
        </div>
       </div>
              <Optionbar className="noteOption2"/>
          </div>
          </section>)}
        </form>
      </div>
 </section>
  );
};

export default Notes;
