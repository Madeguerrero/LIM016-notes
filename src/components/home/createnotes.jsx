import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import { ingresoBaseDatos } from "../../firebaseConfi";
//import Optionbar from "./optionbar";
import AddLabel from "./addlabel";

const buttonSave ={
  background: "#36096d",
  borderRadius: "5px",
  weight:"30px",
  color:"white",
  border: " solid #36096d",
}


const CreateNotes = () => {
  
  const [value, setValue] = useState("");
  const [label,setLabel] = useState('rgb(251, 254, 216)'); //declaramos en label el color de la nota,con color inicial 


  console.log(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    const date = new Date();
    ingresoBaseDatos("notas", {
      title: event.target.title.value,
      label: label, 
      status: true,
      description: value,
      date: date.toLocaleDateString(),
      creator: localStorage.getItem("myid")
    }).then((doc) => {
      console.log(doc.id);
    })
  };

  
 
  return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
        <Option />
      <form onSubmit={handleSubmit} className="form CreateNotes" style={{background:label}}>
        <input className="titleNote"  id="title" type="text" placeholder="Enter title" style={{background:label}}></input>
              <textarea
                    type="text"
                    placeholder=" Type to add a note..."
                    className="notesCreate"
                    rows="8"
                    cols="10"
                    value={value}
                    style={{background:label}}
                   onChange={(e) => setValue(e.target.value)}
               />
             <div className="footerNote">
                   <small>200 Remaining</small>
                  <button  type="submit"  className="btn-submit" style={buttonSave}>save</button> 
                 {/*  <Optionbar />  */}
                 <AddLabel  setLabel={setLabel}/>
                
             </div>
         </form>
         </div>
     </section>
  );
};

export default CreateNotes;


