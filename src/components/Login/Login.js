import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeFirebase } from "../../firebase/firebase.config";
import "./login.css";

initializeFirebase();

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

const handleRegisterUser = () =>{
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
}

  return (
      
    <div>
        <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
<div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
        

        <h1 className="container">LOGIN PAGE</h1>
      <div className="container">
        <form onSubmit={handleRegisterUser}>
        <label className="side" htmlFor="uname"><b>Username</b></label>
        <input  type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} name="uname" required />
        <label className="side" htmlFor="uname"><b>Password</b></label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} name="password" required/>

        <button className="btn" type="submit">Login</button>
        

        </form>
        <button className="btn" onClick={handleGoogleSignIn}>Google Log in</button>
      </div>
      
      
      
    </div>
  );
}
