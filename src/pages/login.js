import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ingresarCorreoContrasenha } from "../firebaseConfi";
function Login() {
  const navigate = useNavigate()  //para navegar
  const loginUser = (e) => {
    e.preventDefault();
    const inputsEmail=document.getElementById("correo").value;
    const inputsPassword=document.getElementById("contraseña").value;
    console.log (inputsEmail, inputsPassword)
    
 ingresarCorreoContrasenha(inputsEmail,inputsPassword).then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  // ...
   console.log(user.uid)
   navigate("/createnotes")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(error)
});

    alert("hola");
  };
  
  return (
    <section className="conteiner">
      <h3> Bienvenido</h3>
      <form className="login">
        <input type="email" placeholder="Enter your username" id= "correo"></input>
        <input type="password" placeholder="Enter your Password" id="contraseña"></input>
        <p>Forgot Password?</p>
        <button onClick={loginUser}>login</button>
        <p>or create account using social media</p>
        <button>Log in with Facebook</button>
        <button>Log in with Google</button>
      </form>
      <p>
        Don't have account?<a href="signup">Sign Up</a>
      </p>
    </section>
  );
}
export default Login;

//<Link to="/home">Login</Link>{" "}
