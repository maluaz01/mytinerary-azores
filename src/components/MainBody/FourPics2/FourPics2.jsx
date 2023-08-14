//import React from 'react'
import cities from "../citiesList.js"
const FourPics2 = () => {
      
    return (
      <div className="container">
          <div className="row">
           <div className="col-12 col-lg-6"> 
           <img src={cities[8].nameImg} width="380" height="380"/>  
           </div>
            <div className="col-12 col-lg-6">
           <img src={cities[9].nameImg}  width="380" height="380"/> 
           </div>
          </div> 
          <div className="row">
          <div className="col-12 col-lg-6"> 
           <img src={cities[10].nameImg} width="380" height="380"/>  
           </div>
            <div className="col-12 col-lg-6">
           <img src={cities[11].nameImg}  width="380" height="380"/> 
           </div>  
          </div>
      </div>
      
    )
  }
  
  export default FourPics2;