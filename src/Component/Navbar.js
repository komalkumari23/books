import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container-fluid row">
                    <div className="col-6"> 
                    <a className="navbar-brand col-6" href="/">Book Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse col-6" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-12 ">
                        <li className="nav-item col-4">
                        <a className="nav-link active  " href="/">Currently Reading</a>
                        </li>
                        <li className="nav-item col-4">
                        <a className="nav-link active  " href="/">Want to Read</a>
                        </li>
                        <li className="nav-item col-4">
                        <a className="nav-link active " href="/">Read</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
