import React from 'react';
import { Link } from "react-router-dom";
const MyNavbar = () => {
    return ( 
    <div  id="navbarid">  
        <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <Link className="navbar-brand" to="/">
                        <img src="imgs/homeimg.png" width="30" height="30" alt=""/>GC
                      </Link>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                            <i className="bi bi-house-door"></i> 
                            Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">
                            <i className="bi bi-list-task"></i> About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Products">
                            <i className="bi bi-list-ul"></i>  Products</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">
                            <i className="bi bi-person"></i> Contact Us</Link>
                    </li> 
                </ul>           
                <span className="navbar-text">
                    <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#myModal" to="#">
                        <i className="bi bi-arrow-bar-right"></i> Login</Link>
                </span>
            </div>
           </div> 
        </nav> 
    </div>
     );
}
 
export default MyNavbar;