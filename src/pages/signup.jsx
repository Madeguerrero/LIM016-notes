//import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { crearUsuario } from "../firebaseConfi";

const signLogo = new URL("../assets/img/logo.png", import.meta.url);

/* ---------------- estilos para el textField -------------------- */
const styleButton = {
  textDecoration: "none",
  color: "rgb(255, 193, 7)",
};
const styleTextField = {
  background: "rgb(251, 254, 216)",
  borderRadius: "10px",
  width: "250px",
  margin: "0.5rem",
  padding: "none",
};

const SignUp = () => {
  // const classes = useStyles();
  const userRegister = (e) => {
    e.preventDefault(); //para que no se recargue la página
    console.log(e);
    const inputsName = document.getElementById("outlined-Name").value;
    const inputsEmail = document.getElementById("outlined-email").value;
    const inputsPassword = document.getElementById(
      "outlined-password-uno"
    ).value;
    const inputRePassword = document.getElementById(
      "outlined-password-dos"
    ).value;
    if (inputsPassword === inputRePassword) {
      console.log("coinciden contraseñas")
      crearUsuario(inputsEmail, inputsPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user.uid);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          // ..
        });
    } else {
      console.log("Error en el password");
    }
    console.log(inputsName);

    //signInWithEmailAndPassword(user.email, user.password); no va
  };

  return (
    <section className="conteiner">
      <div className="conteiner-signup">
        <form className="register">
          <img src={signLogo} alt="signlog" className="signlogo"></img>
          <TextField
            required
            style={styleTextField}
            id="outlined-Name"
            label="Name"
            size="small"
          />

          <TextField
            required
            style={styleTextField}
            id="outlined-email"
            label="Email"
            size="small"
          />
          <TextField
            required
            style={styleTextField}
            id="outlined-password-uno"
            label="Password"
            type="password"
            size="small"
          />
          <TextField
            required
            style={styleTextField}
            id="outlined-password-dos"
            label="Confirm Password"
            type="Password"
            size="small"
          />

          <button className="button-sign" onClick={userRegister}>
            Create Account
          </button>
          <p className="p-count">
            Already have account? &nbsp;
            <Link to="/login" style={styleButton}>
              Log in Here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

//<RedditTextField
//label="Password"
//defaultValue="Password"
//id="reddit-input"
//variant="filled"
//style={{ marginTop: 11 }}
//>
