import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import { crearUsuario } from "../firebaseConfi";

const signLogo = new URL("../assets/img/logo.png", import.meta.url);

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SignUp = () => {
  // const classes = useStyles();
  const userRegister = (user) => {
    const inputsName = document.getElementById("outlined-disabled").value;
    const inputsEmail = document.getElementById("outlined-email").value;
    const inputsPassword = document.getElementById(
      "outlined-password-uno"
    ).value;
    const inputRePassword = document.getElementById(
      "outlined-password-dos"
    ).value;
    if (inputsPassword === inputRePassword) {
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
      <div className="logo">
        <img src={signLogo} alt="signlog" className="signlogo"></img>
      </div>
      <form className="register">
        <TextField
          required
          style={{ background: "white" }}
          variant="filled"
          id="outlined-disabled"
          label="Required"
          color="success"
          //defaultValue="Name"
          placeholder="Name"
        />
        <TextField
          required
          id="outlined-email"
          label="Required"
          defaultValue="Email"
        />
        <TextField
          required
          id="outlined-password-uno"
          label="Password"
          type="password"
          defaultValue="Password"
        />
        <TextField
          required
          id="outlined-password-dos"
          label="Password"
          type="password"
          defaultValue="Confirm Password"
        />
        <RedditTextField
          label="Password"
          defaultValue="Password"
          id="reddit-input"
          variant="filled"
          style={{ marginTop: 11 }}
        />

        <button className="button-sign" onClick={userRegister}>
          Create Account
        </button>
        <p>
          Already have account?<Link to="/login">Log in Here</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
