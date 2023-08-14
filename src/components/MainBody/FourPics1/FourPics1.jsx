//import React from 'react'
import cities from "../citiesList.js"
const FourPics1 = () => {
 
  return (
    <div className="container">
        <div className="row">
         <div className="col-12 col-lg-6"> 
         <img src={cities[4].nameImg} width="380" height="380"/>  
         </div>
          <div className="col-12 col-lg-6">
         <img src={cities[5].nameImg}  width="380" height="380"/> 
         </div>
        </div> 
        <div className="row">
        <div className="col-12 col-lg-6"> 
         <img src={cities[6].nameImg} width="380" height="380"/>  
         </div>
          <div className="col-12 col-lg-6">
         <img src={cities[7].nameImg}  width="380" height="380"/> 
         </div>  
        </div>
    </div>
    
  )
}

export default FourPics1;