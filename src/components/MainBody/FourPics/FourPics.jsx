//import React from 'react'
import cities from "../citiesList.js"
import "./fourpics.css"
const FourPics = () => {
 
  return (
    <div className="container">
        <div className="row">
         <div className="col-12 col-lg-6"> 
         <img src={cities[0].nameImg} width="380" height="380"/>   
         </div>
        
          <div className="col-12 col-lg-6">
         <img src={cities[1].nameImg}  width="380" height="380"/> 
          </div> 
        </div>
        <div className="row">
        <div className="col-12 col-lg-6"> 
         <img src={cities[2].nameImg} width="380" height="380"/>  
         </div>
        
          <div className="col-12 col-lg-6">
         <img src={cities[3].nameImg}  width="380" height="380"/> 
         </div>  
        
        </div>
    </div>
    
  )
}

export default FourPics;