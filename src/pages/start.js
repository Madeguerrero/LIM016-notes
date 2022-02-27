import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  margin: 10,
  color: "purple",
  border: " solid rgb(251, 254, 216)",
  borderRadius: "10px",
};
const signStyle = {
  textDecoration: "none",
  margin: 10,
  color: "purple",
  border: "solid rgb(251, 254, 216)",
  background: "rgb(251, 254, 216)",
  borderRadius: "10px",
  weight: "20px",
};

const logoNotes = new URL("../assets/img/logo.png", import.meta.url);

const Start = () => (
  <section className="conteiner">
    <div className="conteiner-start">
      <div className="logo">
        <img id="logo-inicio" src={logoNotes} alt="imagenLogo"></img>
      </div>
      <nav className="user-identify">
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Link to="/signup" style={signStyle}>
          Sign Up
        </Link>
      </nav>
    </div>
  </section>
);

export default Start;
