import React from "react";
import Banner from "./banner";
import Option from "./option";
import { getAllNotes } from "../../firebaseConfi";
import { useEffect } from "react";
import { useState } from "react";
import { updateStateNote } from '../../firebaseConfi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NotaAlmacenada from "./notaAlmacenada";


const Notes = () => {
  const [notas, setNotas] = useState([]);
  const [searchText,setSearchText]=useState([]);

  const functionFetch = async () => {
    const idUser = sessionStorage.getItem('myid')
    console.log(idUser);
    let notes = await getAllNotes('notas', idUser)
    notes = notes.filter((note) => note.status)
    //console.log("quetal", notes);
    setNotas(notes);
    
    setSearchText(notes);
    
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

  return (
    <section className="container-banner" >
      <Banner  searchText={searchText}  setNotas={setNotas}/>  {/* tiene el valor de las notas copiadas */}
      <div className="optionForm">
        <Option />
        <div className="orderlyNotes" >
          {notas.map(nota => 
          <NotaAlmacenada note={nota}  deleteNote={notesRemove} key= {nota.id}/>)}
        </div>
      </div>
    </section>
  );
};

export default Notes;
