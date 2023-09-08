import CardCity from "../CardCity/CardCity";
import cities from "../../citiesList"

const cities1 = cities.slice(0, 4);
const cities2 = cities.slice(4, 8);
const cities3 = cities.slice(8, 12);
const cities4 = cities.slice(12);

const picture1 = (
  <div className="one d-flex flex-wrap justify-content-center">
     {cities1.map((city) => (   
      <CardCity key={city._Id} town={city}/>         
    ))}
  </div> 
  );

const picture2 = (
  <div className="one d-flex flex-wrap justify-content-center">
    {cities2.map((city) => (
      <CardCity key={city._Id} town={city} />
    ))}
  </div>
);
const picture3 = (
  <div className="one d-flex flex-wrap justify-content-center">
    {cities3.map((city) => (
      <CardCity key={city._Id} town={city} />
    ))}
  </div>
);
const picture4 = (
  <div className="one d-flex flex-wrap justify-content-center">
    {cities4.map((city) => (
      <CardCity key={city._Id} town={city} />
    ))}
  </div>
);
const pictures = [picture1, picture2, picture3, picture4];

export default pictures;
