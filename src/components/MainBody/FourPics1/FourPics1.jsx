//import React from 'react'
import cities from "../citiesList.js"
const FourPics1 = () => {
 
  return (
    <div className="container">
        <div className="row">
         <div className="col-12 col-lg-6"> 
         <img src={cities[4].nameImg} alt="" />
          <h4>{cities[4].name}</h4>
         </div>
          <div className="col-12 col-lg-6">
          <img src={cities[5].nameImg} alt="" />
          <h4>{cities[5].name}</h4>
         </div>
        </div> 
        <div className="row">
        <div className="col-12 col-lg-6"> 
        <img src={cities[6].nameImg} alt="" />
          <h4>{cities[6].name}</h4>
         </div>
          <div className="col-12 col-lg-6">
          <img src={cities[7].nameImg} alt="" />
          <h4>{cities[7].name}</h4>
         </div>  
        </div>
    </div>
    
  )
}

export default FourPics1;