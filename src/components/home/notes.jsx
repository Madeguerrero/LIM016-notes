import React from "react";
import Banner from "./banner";
import Option from "./option";
import { getAllNotes } from "../../firebaseConfi";
import { useEffect } from "react";
import { useState } from "react";
import Optionbar from "./optionbar";
import { updateStateNote } from '../../firebaseConfi';
import { addDoc, collection } from "firebase/firestore/lite";
import { updateNewNote } from "../../firebaseConfi";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NotaAlmacenada from "./notaAlmacenada";


const Notes = () => {
  const [notas, setNotas] = useState([]);

  const functionFetch = async () => {
    const idUser = localStorage.getItem('myid')
    console.log(idUser);
    let notes = await getAllNotes('notas', idUser)
    notes = notes.filter((note) => note.status)
    console.log("quetal", notes);
    setNotas(notes);
  }

  useEffect(() => {
    functionFetch();
  }, [])


  const notesRemove = (idNote) => {
    console.log("que", idNote);
    updateStateNote(idNote).then(() => {
      const newArrayNotes = [...notas].filter((objectNote) => objectNote.id !== idNote);
      console.log(newArrayNotes);
      setNotas(newArrayNotes);
    }).catch((error) => {
      console.log(error);
    })
  }

  const state = {
    title: "",
    description: "",
  }

  const [listTitle, setListName] = useState(state);

  const handleChange = (e) => {
    const { title, value } = e.target;
    setListName({ ...listTitle, [title]: value })
  }

  /* const handleSubmit=(idNote)=>{
    e.preventDefault();
    updateNewNote(idNote,listTitle);
  
  useEffect(() =>{
    setListName(notas);
  }, [notas]);
  } */
  return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
        <Option />
        <form className="orderlyNotes" >
          {notas.map(nota => 
          <NotaAlmacenada note={nota}  deleteNote={notesRemove}/>)}
        </form>
      </div>
    </section>
  );
};

export default Notes;
