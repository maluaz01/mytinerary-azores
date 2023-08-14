//import React from 'react'
import "./nav-header.css"
const NavHeader = () => {
  const error404 =()=>{
    window.location="/error404.html"
  } 
  return (
    <div className="container container-nav">
      
      <div className="row">
       <div className="col-md-12 col-lg-8 myti"><h1>My Tinerary</h1></div>
       <div className="col-4 col-lg-1 classbutton"><button className="data-bs-toggle btn-outline-primary rounded">Home</button></div>
       <div className="col-4 col-lg-1 classbutton"><button className="data-bs-toggle btn-outline-primary rounded" onClick={error404}>Cities</button></div>
       <div className="col-4 col-lg-1 classbutton"><button className="data-bs-toggle btn-outline-primary rounded " >Login</button></div>
        
       </div>
    </div>
  )
}

export default NavHeader;
