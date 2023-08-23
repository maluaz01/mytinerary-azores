
import HeaderFront from "../../components/HeaderFront/HeaderFront"
import FooterFront from "../../components/FooterFront/FooterFront"
//import MainFront from "../../components/MainFront/MainFront"
//import cities from "../../citiesList"
//import pictures from "../../components/MainFront/PreCarousel"
import Carousel from "../../components/Carousel/Carousel"
//import Error404 from "../error404/Error404"
//import Cities from "../../pages/Cities"
import "./layoutMain.css"
const LayoutMain = () => {
  
  return (
    <div className="lay">
      <HeaderFront />
      <Carousel />
      <FooterFront />
    </div>
  )
}

export default LayoutMain