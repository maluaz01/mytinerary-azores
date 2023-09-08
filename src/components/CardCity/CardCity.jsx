import "./cardCity.css";
import { Link } from "react-router-dom";

const CardCity = (town) => {
 console.log("town: ", town.town._Id)
  return (
    <div className="card cardOne">    
 <Link to={`/UniqueCard/:${town.town._Id}`}> 
       
        <a href="#">
          <div className="card-body d-flex justify-content-center">
            <img
              className="card-img-top rounded col-12 col-lg-6"
              src={town.town.imgUrl}
              alt={town.town.alt}
            />
            <footer>
              <div className="card-img-overlay d-flex justify-content-center">
                <h2 className="position-absolute bottom-0 pb-3   h2Name">
                  {town.town.name}
                </h2>
              </div>
            </footer>
          </div>
        </a>
  </Link> 
    </div>
  );
};

export default CardCity;

