import Banner from "./banner";
import Option from "./option";
import { getAllNotes } from "../../firebaseConfi";
import { useEffect } from "react";
import { useState } from "react";


const Notes = () => {
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
  
return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
        <div className="orderlyNotes" >
           {notas.map(nota => <section key={nota.id} rows="10" cols="10" className="notesObtained">{`${nota.description}`}</section>)}
        </div>
      </div>
    </section>
  );
};

export default Notes;
