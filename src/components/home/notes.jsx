import Banner from "./banner";
import Option from "./option";
import { getAllNotes } from "../../firebaseConfi";

let notas =[];
const Notes = () => {
  const functionFetch= async()=>{
    const idUser = localStorage.getItem('myid')
     notas = await getAllNotes('notas',idUser)
   } 
  functionFetch(); 
  return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
      <Option />
        <div className="orderlyNotes">
           {notas.map(nota => <textarea  rows="10" cols="10" className="notesObtained">{`${nota.description}`}</textarea>)}
        </div>
      </div>
    </section>
  );
};

export default Notes;
