//import React from 'react'
import cities from "../../citiesList";
import { useParams } from "react-router-dom";

const UniqueCard = () => {
  let { _id } = useParams();
  console.log(_id, typeof _id);
  _id = _id.substring(1);
  console.log("_id largo: ", _id.length);
  console.log("el _id: ", _id);
  console.log(_id, typeof _id);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card cardOne">
          <div className="card-body d-flex justify-content-center">
            <img
              className="card-img-top rounded col-12 col-lg-6"
              src={cities[_id].imgUrl}
              alt={cities[_id].alt}
            />
            <footer>
              <div className="card-img-overlay d-flex justify-content-center">
                <h2 className="position-absolute bottom-0 pb-3   h2Name">
                  {cities[_id].name}
                </h2>
              </div>
            </footer>
          </div>
        </div>
        <div className="row data col-12 col-md-6">
<div >
  <span className="fw-bold">City:</span> {cities[_id].name}
</div>
<div >
<span className="fw-bold">Country:</span> {cities[_id].country}
</div>
<div >
<span className="fw-bold">Language:</span> {cities[_id].language}
</div>
<div >
<span className="fw-bold">Currency:</span> {cities[_id].currency}
</div>
<div >
<span className="fw-bold">Population:</span> {cities[_id].population}
</div>
<div >
<span className="fw-bold">Info:</span> {cities[_id].info}
</div>
        </div>
      </div>
    </div>
  );
};

export default UniqueCard;
