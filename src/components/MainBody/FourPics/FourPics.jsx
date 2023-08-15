import cities from "../citiesList.js";
import "./fourpics.css";

const FourPics = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={cities[0].nameImg} width="300" height="200" />
          <h4>{cities[0].name}</h4>
        </div>

        <div className="col-12 col-lg-6">
          <img src={cities[1].nameImg} alt="Belfast" />
          <h4>{cities[1].name}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={cities[2].nameImg} alt="" />
          <h4>{cities[2].name}</h4>
        </div>

        <div className="col-12 col-lg-6">
          <img src={cities[3].nameImg} width="300" height="200" />
          <h4>{cities[3].name}</h4>
        </div>
      </div>
    </div>
  );
};

export default FourPics;
