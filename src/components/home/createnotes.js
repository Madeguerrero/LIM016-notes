import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";
//import MdDeleteForever from "react-icons/md";

const CreateNotes = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

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
//<MdDeleteForever className="icon-delete" size="1.3em" />
