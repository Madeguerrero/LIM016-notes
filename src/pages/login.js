import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const loginUser = (e) => {
    e.preventDefault();
    alert("hola");
  };
  return (
    <section className="conteiner">
      <h3> Bienvenido</h3>
      <form className="login">
        <input type="email" placeholder="Enter your username"></input>
        <input type="password" placeholder="Enter your Password"></input>
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
