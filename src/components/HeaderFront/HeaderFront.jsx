//import React from 'react'
import {Link} from "react-router-dom";
import "./headerFront.css";
const headerFront = () => {
  return (
    <div className="divCont">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <span className=" myti">MyTinerary</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/"><a href="#s1" className="nav-link active">
                  Home
                </a></Link>
              </li>
              <li className="nav-item ">               
                <Link to="/Cities"><a href="#s1" className="nav-link ">
                  Cities
                </a></Link>
              </li>
              <li className="nav-item navImg">
              <img className="bi" src="./profile.png" />
               <Link to="/Login"><a href="#s1" className="nav-link ">
                  Login
                </a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default headerFront;
