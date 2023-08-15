//import React from 'react'
import cities from "../MainBody/citiesList"
const Cardinit = () => {
  return (
    <>
    <img src={cities[1].nameImg}  width="300" height="300" alt="Ensalada reloj" className="d-block w-100" />
    <div className="carousel-caption">
      <h3>{cities[1].name}</h3>
    </div>
    </>
  )
}

export default Cardinit;