import React from "react";
function Login() {
  return (
    <section className="conteiner">
      <h3> Bienvenido</h3>
      <form className="login">
        <input type="email" placeholder="Enter your username"></input>
        <input type="password" placeholder="Enter your Password"></input>
        <p>Forgot Password?</p>
        <button>Log in</button>
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

//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

/*const auth = getAuth();
// eslint-disable-next-line no-undef
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });*/
