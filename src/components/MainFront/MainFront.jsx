//import Carousel from "../Carousel/Carousel";
//import PreCarousel from "./PreCarousel"
import "/viajero.jpg"
import "./mainFront.css";

const MainFront = () => {
  return (
    <div>
      <div className="container text-center p-2">
        <div className="row rowHero">
          <div className="col-md-6 col-lg-6">
          <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
          <h4 className="hero">
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your next trip has never been easier.
          </h4>
          <div className="but">
          <button className="btn">View More</button>
          </div>
          </div>
          <div className="col-md-6 col-lg-6  ">
          <img className="img-fluid voyager" src="/viajero.jpg" alt="Tourist seeing the horizon" />
          </div>
          </div>
        </div>     
    </div>
  );
};

export default MainFront;
