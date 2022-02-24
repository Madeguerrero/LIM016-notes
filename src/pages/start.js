import React from "react";
import { Link } from "react-router-dom";

const logoNotes = new URL("../assets/img/logo.png", import.meta.url);
const Start = () => (
  <section className="conteiner">
    <div className="logo">
      <img src={logoNotes}></img>
    </div>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/login">Login</Link> | <Link to="/signup">SignUp</Link>
    </nav>
  </section>
);

export default Start;
