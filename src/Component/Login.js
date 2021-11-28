import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQCL81_qBugjVSvRUzH3sjKqFtOoWt-4c",
  authDomain: "e-book-94a8f.firebaseapp.com",
  projectId: "e-book-94a8f",
  storageBucket: "e-book-94a8f.appspot.com",
  messagingSenderId: "982027630566",
  appId: "1:982027630566:web:0dc40771450dbcdf870827",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoggedin, setisLoggedin] = useState(false);
  const signupHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("from signed up ", user);
        setisLoggedin(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
        setemail("");
        setpassword("");
      });
  };
  const loginHandler = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("from signed in ", user.accessToken);
        sessionStorage.setItem("accessToken", user.accessToken);
        setemail("");
        setpassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setemail("");
        setpassword("");
      });
  };
  return (
    <>
    {(sessionStorage.getItem("accessToken")===null || sessionStorage.getItem("accessToken")==="" ) && (
      <div>
        {isLoggedin === false && (
          <div class="form">
          <div class="form-area">
              
              <div class="form-group">
                  <div class="content-1">
                      <label for="email">Email:</label>
                  </div>
                  <div class="content-2">
                      <input type="text" onChange={(e)=>{setemail(e.target.value)}} id="email"   placeholder="Your email" autocomplete="off" />
                  </div>
              </div>
              <div class="form-group">
                  <div class="content-1">
                      <label for="password">Password:</label>
                  </div>
                  <div class="content-2">
                      <input type="password" onChange={(e)=>{setpassword(e.target.value)}} id="password"  placeholder="Your password" autocomplete="off"/>
                  </div>
              </div>
              <div class="centered-btn-wrapper">
                  <button type="submit" onClick={signupHandler}  class="form-btn">Submit</button>
                  <button onClick={() => {
                    setisLoggedin(true);
                  }} class="form-btn">Go to Login</button>
              </div>
          </div>
      </div>
        )}
        {isLoggedin === true && (
          <div class="form">
          <div class="form-area">
              
              <div class="form-group">
                  <div class="content-1">
                      <label for="email">Email:</label>
                  </div>
                  <div class="content-2">
                      <input type="text" onChange={(e)=>{setemail(e.target.value)}} id="email"   placeholder="Your email" autocomplete="off" />
                  </div>
              </div>
              <div class="form-group">
                  <div class="content-1">
                      <label for="password">Password:</label>
                  </div>
                  <div class="content-2">
                      <input type="password" onChange={(e)=>{setpassword(e.target.value)}} id="password"  placeholder="Your password" autocomplete="off"/>
                  </div>
              </div>
              <div class="centered-btn-wrapper">
                  <button type="submit" onClick={loginHandler}  class="form-btn">Submit</button>
                  <button onClick={() => {
                    setisLoggedin(false);
                  }} class="form-btn">Go to signUp</button>
              </div>
          </div>
      </div>
        )}
      </div>
    )}
    {(sessionStorage.getItem("accessToken")!==null && sessionStorage.getItem("accessToken")!=="" ) && (
      <div><App email={email}/></div>
      )}
    </>
  );
}
