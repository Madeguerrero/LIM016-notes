import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

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
    signInWithEmailAndPassword(user.email, user.password);
  };
  return (
    <section className="conteiner">
      <div className="logo">
        <img src={signLogo} alt="signlog" className="signlogo"></img>
      </div>
      <form className="register">
        <TextField
          required
          id="outlined-disabled"
          label="Required"
          color="success"
          defaultValue="Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          defaultValue="Password"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          defaultValue="Confirm Password"
        />
        <RedditTextField
          label="Password"
          defaultValue="react-reddit"
          id="reddit-input"
          variant="filled"
          style={{ marginTop: 11 }}
        />
      </form>
      <button>Create Account</button>
      <p>
        Already have account?<Link to="/login">Log in Here</Link>
      </p>
    </section>
  );
};

export default SignUp;
