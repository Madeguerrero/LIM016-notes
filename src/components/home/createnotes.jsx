import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import { ingresoBaseDatos } from "../../firebaseConfi";
//import Moment from 'react-moment';
import Optionbar from "./optionbar";



const CreateNotes = () => {
  
  const [value, setValue] = useState("");
  console.log(value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    const date = new Date();
    ingresoBaseDatos("notas", {
      title: "title_notas",
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
      <form onSubmit={handleSubmit} className="form CreateNotes">
              <textarea
                    type="text"
                    placeholder=" Type to add a note..."
                    className="notesCreate"
                    rows="8"
                    cols="10"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
               />
             <div className="footerNote">
                   <small>200 Remaining</small>
                  <button  type="submit"  className="btn-submit">save</button> 
                  <Optionbar/> 
             </div>
         </form>
         </div>
     </section>
  );
};

export default CreateNotes;

{/* <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment> */}
 //const date = new Date();
