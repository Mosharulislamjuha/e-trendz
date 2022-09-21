import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { initializeFirebase } from "../../firebase/firebase.config";
import "./../Login/login.css";

initializeFirebase();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [currentStateValue, SetUpdatedValue] = useState('')
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleRegisterUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="main">
      <Link to="/">
      <h1 align="center">e-Trendz</h1>
      </Link>
      <p className="sign" align="center">
        Sign Up
      </p>
      <form onSubmit={handleRegisterUser}>
        <input
          class="un "
          type="text"
          align="center"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
        />
        <input
          class="pass"
          type="password"
          align="center"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="submit" align="center" type="submit" value="Login" />
      </form>
      <button className="submit1 mt-3" onClick={handleGoogleSignIn}>
        Google Sign Up
      </button>
    </div>
  );
}
