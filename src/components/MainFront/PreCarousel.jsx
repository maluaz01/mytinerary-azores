import CardCity from "../CardCity/CardCity";

const cities = [
  {
    _Id: 0,
    name: "Barcelona",
    imgUrl: "/barcelona.jpg",
    alt: "Barcelona City",
  },
  { _Id: 1, name: "Belfast", imgUrl: "/belfast.jpg", alt: "Belfast City" },
  { _Id: 2, name: "Budapest", imgUrl: "/budapest.jpg", alt: "Budapest City" },
  { _Id: 3, name: "Edimburg", imgUrl: "/edimburg.jpg", alt: "Edimburg City" },
  {
    _Id: 4,
    name: "Helsinski",
    imgUrl: "/helsinski.jpg",
    alt: "Helsinski City",
  },
  { _Id: 5, name: "Jakarta", imgUrl: "/jakarta.jpg", alt: "Jakarta City" },
  { _Id: 6, name: "La Plata", imgUrl: "/laplata.jpg", alt: "La Plata City" },
  { _Id: 7, name: "Lima", imgUrl: "/lima.jpg", alt: "Lima City" },
  {
    _Id: 8,
    name: "Ljubljana",
    imgUrl: "/ljubljana.jpg",
    alt: "Ljubljana City",
  },
  { _Id: 9, name: "Nassau", imgUrl: "/nassau.jpg", alt: "Nassau City" },
  { _Id: 10, name: "Tokio", imgUrl: "/tokio.jpg", alt: "Tokio City" },
  { _Id: 11, name: "Vienna", imgUrl: "/vienna.jpg", alt: "Vienna City" },
  { _Id: 12, name: "Tunisia", imgUrl: "/tunisia.jpg", alt: "Tunisia City" },
  { _Id: 13, name: "Moscow", imgUrl: "/moscow(1).jpg", alt: "Moscow City" },
  {
    _Id: 14,
    name: "Cape Town",
    imgUrl: "/capetown.jpg",
    alt: "Cape Town City",
  },
];
const cities1 = cities.slice(0, 4);
const cities2 = cities.slice(4, 8);
const cities3 = cities.slice(8, 12);
const cities4 = cities.slice(12);

const picture1 = (
  <div className="one">
    {cities1.map((city) => (
      <CardCity town={city} />
    ))}
  </div>
);

const picture2 = (
  <div className="one">
    {cities2.map((city) => (
      <CardCity town={city} />
    ))}
  </div>
);
const picture3 = (
  <div className="one">
    {cities3.map((city) => (
      <CardCity town={city} />
    ))}
  </div>
);
const picture4 = (
  <div className="one">
    {cities4.map((city) => (
      <CardCity town={city} />
    ))}
  </div>
);
const pictures = [picture1, picture2, picture3, picture4];

export default pictures;