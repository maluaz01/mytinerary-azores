//import React from 'react'

const NavHeader = () => {
  const error404 =()=>{
    window.location="../../../pages/error404.html"
  }
  return (
    <div className="container">
      
      <div className="row">
       <div className="col-md-12 col-lg-9">My Tinerary</div>
       <div className="col-md-12 col-lg-1"><button className="data-bs-toggle">Home</button></div>
       <div className="col-md-12 col-lg-1"><button className="data-bs-toggle" >Cities</button></div>
       <div className="col-md-12 col-lg-1"><button className="data-bs-toggle" onClick={error404}>Login</button></div>
        
       </div>
    </div>
  )
}

export default NavHeader;
