import Banner from "./banner";
import Option from "./option";
import { getAllNotes } from "../../firebaseConfi";

const Notes = () => {
  const functionFetch= async()=>{
    const idUser = localStorage.getItem('myid')
    
    const notas=await getAllNotes('notas',idUser)
    notas.forEach(nota =>{
      const notasPintadas = `<p>${nota.description}</p>`
      console.log(notasPintadas)

    });
  } 
  functionFetch(); 
  return (
    <section className="container-banner">
      <Banner />
      <Option />
      

    </section>
  );
};

export default Notes;
