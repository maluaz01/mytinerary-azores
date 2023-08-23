//import React from 'react'
import FourPics from "./FourPics/FourPics";
import FourPics1 from "./FourPics1/FourPics1";
import FourPics2 from "./FourPics2/FourPics2";

const MainBody = () => {
  return (
    <div className="container">
      <div className="row">
        <h2>Find the perfect destination</h2>
      </div>
      <div className="row">
        Our app will help you find the perfect path for your next trip. With an
        easy-to-use interface and a host of itinerary options, planning your
        next trip has never been easier.
      </div>

      <div id="carousel01" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carousel01"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
          <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
          <li data-bs-target="#carousel1" data-bs-slide-to="3"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <FourPics />
            <div className="carousel-caption"></div>
          </div>
          </div>
          <div className="carousel-item">
            <FourPics1 />
            <div className="carousel-caption" />
          </div>
       </div>
        <div className="carousel-item">
          <FourPics2 />
          <div className="carousel-caption"></div>
        </div>
      </div>
        </div>
</div>
      <a
        className="carousel-control-prev"
        href="#carousel1"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel1"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <div id="myCarousel" className="carousel slide"></div>
    </div>
          </div>
  );
};

export default MainBody;
