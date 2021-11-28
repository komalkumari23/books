import React,{useState} from 'react';
import {Link} from "react-router-dom";

export default function Navbar(props) {

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container-fluid row">
                    <div className="col-6"> 
                    <Link className="navbar-brand col-6" to="/">Book Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse col-6" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12 ">
                        <li className="nav-item col-3">
                        <a className="nav-link active  " href="#currentlyReading" name="Currently Reading">Currently Reading</a>
                        </li>
                        <li className="nav-item col-3">
                        <a className="nav-link active  " href="#wantToRead" name="Want to Read">Want to Read</a>
                        </li>
                        <li className="nav-item col-3">
                        <a className="nav-link active " href="#read" name="Read">Read</a>
                        </li>
                        <li className="nav-item col-3" onClick={()=>{sessionStorage.removeItem("accessToken")}} style={{cursor:'pointer'}}>
                        <a className="nav-link active float-end" >Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

