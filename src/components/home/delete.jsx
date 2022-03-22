import React from "react";
import Banner from "./banner";
import Option from "./option";

const Delete = (props) => {
 //setNotes(notas.filter((nota) => nota.id !== idDelete))
return (
    <section className="container-banner">
      <Banner />
      <Option />
      <div className="revomeNotes">
       <section></section>
      </div>
    </section>
  );
};
export default Delete;
