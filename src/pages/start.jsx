import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"

const linkStyle = {
  textDecoration: "none",
  margin: 20,
  color: "white",
  border: " solid rgb(18, 0, 120)",
  background:"rgba(160, 101, 157, 0.575)",
  borderRadius: "10px",
  height: "35px",
  
};
const signStyle = {
  textDecoration: "none",
  margin: 20,
  color: "purple",
  border: "solid rgb(18, 0, 120)",
  background: "rgb(251, 254, 216)",
  borderRadius: "10px",
  height: "35px",
};


const Start = () => (
  <section className="conteiner">
    <div className="conteiner-start">
      <div className="logo">
        <img id="logo-inicio" src={logo} alt="imagenLogo"></img> 
      </div>
      <nav className="user-identify">
        <Link to="/login" className="btn pt-1 pt-sm-2 pt-md-3 pt-lg-1" style={linkStyle}>
          Login
        </Link>
        <Link to="/signup" className="btn pt-1 pt-sm-2 pt-md-3 pt-lg-1" style={signStyle}>
          Sign Up
        </Link>
      </nav>
    </div>
  </section>
);


export default Start;
