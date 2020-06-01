import React from 'react';
import './Navbar.css'
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    return (
    
        <nav class="navbar navbar-expand-md fixed-top ">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item">
            <Link to="/Home" className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
             </li>
            <li class="nav-item">
            <Link to="/Project" className={location.pathname === "/Project" ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;