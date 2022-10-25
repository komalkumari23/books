import React,{useState} from 'react';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword }  from "firebase/auth";
import {auth} from './Firebase-config';
import App from "../App";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const x = React.useRef()
    const y = React.useRef()
    const z = React.useRef()

    const login= () =>{
        x.current.style.left='50px';
        y.current.style.left='450px';
        z.current.style.left='0px';
    }

    const signup=()=>{
        x.current.style.left='-400px';
        y.current.style.left='50px';
        z.current.style.left='110px';
    }

    const loginHandler = () =>{
        console.log("123")
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log((user))
            sessionStorage.setItem("accessToken",user.accessToken)
            setEmail("")
            setPassword("")
        })
        .catch((error) => {
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
    }

    const signUpHandler = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setEmail("")
            setPassword("")
        })
        .catch((error) => {
            const errorMessage = error.message;
            // ..
            alert(errorMessage)
        });
    }
   
    return (
        <div>
            {(sessionStorage.getItem("accessToken")==null || sessionStorage.getItem("accessToken")==="")&&
                (<div className='hero1'>
                <div className='form-box1'>
                    <div className='button-box1'>
                        <div id="btn" ref={z}></div>
                        <button type='button' className='toggle-btn1' onClick={login}>Log In</button>
                        <button type='button' className='toggle-btn1' onClick={signup}>Sign Up</button>
                    </div>
                    <div id='login' className='input-group1' ref={x} onSubmit={(e)=>{e.preventDefault()}}>
                        <input type='text' className='input-field1' placeholder='Email Id' onChange={(e)=>{setEmail(e.target.value)}} required/>
                        <input type='password' className='input-field1' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} required/>
                        <button type='submit' className='submit-btn1' onClick={loginHandler}>Log In</button>
                    </div>
                    <div id='signup' className='input-group1' ref={y} onSubmit={(e)=>{e.preventDefault()}}>
                        <input type='text' className='input-field1' placeholder='Email Id' onChange={(e)=>{setEmail(e.target.value)}} required/>
                        <input type='password' className='input-field1' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} required/>
                        <button type='submit' className='submit-btn1' onClick={signUpHandler}>Sign Up</button>
                    </div>
                </div>
                </div>
                )}
            {sessionStorage.getItem("accessToken") !== null &&
            sessionStorage.getItem("accessToken") !== "" && (
          <div>
            <App />
          </div>
        )}
        </div>
    );
}

export default Login;
