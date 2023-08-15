//import React from 'react'
import cities from "../citiesList.js"
const FourPics2 = () => {
      
    return (
      <div className="container">
          <div className="row">
           <div className="col-12 col-lg-6"> 
           <img src={cities[8].nameImg} alt="" />
          <h4>{cities[8].name}</h4>
           </div>
            <div className="col-12 col-lg-6">
            <img src={cities[9].nameImg} alt="" />
          <h4>{cities[9].name}</h4>
           </div>
          </div> 
          <div className="row">
          <div className="col-12 col-lg-6"> 
          <img src={cities[10].nameImg} alt="" />
          <h4>{cities[10].name}</h4>
           </div>
            <div className="col-12 col-lg-6">
            <img src={cities[11].nameImg} alt="" />
          <h4>{cities[11].name}</h4>
           </div>  
          </div>
      </div>
      
    )
  }
  
  export default FourPics2;