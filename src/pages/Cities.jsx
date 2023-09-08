//import React from 'react'
import "./cities.css";
import Carousel00 from "../components/Carousel/Carousel00";
const Cities = () => {
  return (
    <div className="container ">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="popular">
          <h2>Popular MYTINERARIES!</h2>
        </div>
        <div className="mb-3 col-6 ">
          <label htmlFor="nom" className="form-label"></label>
          <input type="text" className="form-control" id="nom" name="nom"     placeholder="Search a city!"/>
        </div>
      </div>
     
      
      <Carousel00 />
     
    </div>
  );
};

export default Cities;
