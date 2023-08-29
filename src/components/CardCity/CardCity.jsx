import "./cardCity.css";
const CardCity = (props) => {
  console.log(props);

  return (
    <div className="card cardOne">
      <div className="card-body d-flex justify-content-center">
        <img
          className="card-img-top rounded col-12 col-lg-6"
          src={props.town.imgUrl}
          alt={props.town.alt}
        />
        <footer>
        <div className="card-img-overlay d-flex justify-content-center">
          <h2 className="position-absolute bottom-0 pb-3   h2Name">{props.town.name}</h2>
        </div>
        </footer>
      </div>
    </div>
  );
};

export default CardCity;
