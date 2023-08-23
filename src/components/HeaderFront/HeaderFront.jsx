//import React from 'react'
import "./headerFront.css";
const headerFront = () => {
  return (
    <div className="divCont">
      <nav className="navbar navbar-expand-sm">
        <div className="container">
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
                <a href="#s1" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item ">               
                <a href="#s1" className="nav-link ">
                  Cities
                </a>
              </li>
              <li className="nav-item navImg">
              <img className="bi" src="./profile.png" />
                <a href="#s1" className="nav-link ">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default headerFront;
