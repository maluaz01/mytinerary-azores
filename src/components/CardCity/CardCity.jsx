import "./cardCity.css";
const CardCity = (props) => {
  console.log(props);

  return (
 
   <div className="cardOne"> 
      <img className="rounded" src={props.town.imgUrl} alt={props.town.alt} />
      <h2 className="h2Name">{props.town.name}</h2>
    </div>
   
  );
};

export default CardCity;
