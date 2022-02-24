import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  margin: 10,
  color: "white",
};

const logoNotes = new URL("../assets/img/logo.png", import.meta.url);
const Start = () => (
  <section className="conteiner">
    <div className="logo">
      <img src={logoNotes} alt="imagenLogo"></img>
    </div>
    <nav>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>{" "}
      |{" "}
      <Link to="/signup" style={linkStyle}>
        SignUp
      </Link>
    </nav>
  </section>
);

export default Start;
