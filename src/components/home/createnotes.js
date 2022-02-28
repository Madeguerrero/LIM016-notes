import React from "react";
import Banner from "./banner";
import Option from "./option";
import { useState } from "react";

const CreateNotes = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  return (
    <section className="container-banner">
      <Banner />
      <Option />
      <div>
        <textarea
          type="text"
          placeholder="Insert Tittle..."
          className="notesCreate"
          rows="20"
          cols="40"
          value={value}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default CreateNotes;
