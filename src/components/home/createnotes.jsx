import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
import { ingresoBaseDatos } from "../../firebaseConfi";
import Moment from 'react-moment';
import Optionbar from "./optionbar";


const CreateNotes = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    ingresoBaseDatos("notas", {
      title: "title_notas",
      description: value,
      creator: localStorage.getItem("myid")
    }).then((doc) => {
      console.log(doc.id);
    });
  };
  const date = new Date();
  return (
    <section className="container-banner">
      <Banner />
      <div className="optionForm">
        <Option />
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              type="text"
              placeholder=" Insert Tittle..."
              className="notesCreate"
              rows="20"
              cols="40"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
             <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
             <Optionbar/>
            <button value="Submit" className="btn-submit" alt="submit-checkout">
              guardar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateNotes;

