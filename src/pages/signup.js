import React from "react";

const SignUp = () => {
  return (
    <section className="conteiner">
      <div className="logo"></div>
      <h3>Quick Notes</h3>
      <form className="register">
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Confirm Password"></input>
      </form>
      <button>Create Account</button>
      <p>
        Already have account?<a href="login">Log in Here</a>
      </p>
    </section>
  );
};

export default SignUp;
