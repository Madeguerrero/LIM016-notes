import React from "react";
import { useNavigate } from "react-router-dom";
import { ingresarCorreoContrasenha } from "../firebaseConfi";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import faFacebook from "@fortawesome/free-solid-svg-icons";
function Login() {
  const navigate = useNavigate(); //para navegar
  const loginUser = (e) => {
    e.preventDefault();
    const inputsEmail = document.getElementById("correo").value;
    const inputsPassword = document.getElementById("contraseña").value;
    console.log(inputsEmail, inputsPassword);

    ingresarCorreoContrasenha(inputsEmail, inputsPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user.uid);
        localStorage.setItem("myid", user.uid);
        navigate("/createnotes");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });

    alert("hola");
  };
  const logoLogin = new URL("../assets/img/logo.png", import.meta.url);
  return (
    <section className="conteiner">
      <div className="conteiner-login">
        <div className="logo">
          <img id="logo-login" src={logoLogin} alt="imagenLogo"></img>
        </div>
        <h3>Let's get to write</h3>
        <form className="login">
          <input type="email" placeholder="Email" id="correo"></input>
          <br></br>
          <input type="password" placeholder="Password" id="contraseña"></input>
          <p className="paragraph1">Forgot Password?</p>
          <button onClick={loginUser} className="login-button">
            login
          </button>
          <p className="paragraph2">or create account using social media</p>
          <button className="facebook-button">Log in with Facebook</button>
          <button className="google-button">Log in with Google</button>
        </form>
        <p className="paragraph2">
          Don't have account?
          <a href="signup" className="navSignup">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
export default Login


//<Link to="/home">Login</Link>{" "}
