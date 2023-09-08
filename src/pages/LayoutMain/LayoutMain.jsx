import HeaderFront from "../../components/HeaderFront/HeaderFront"
import FooterFront from "../../components/FooterFront/FooterFront"
import { Outlet } from "react-router-dom"
import "./layoutMain.css"

const LayoutMain = () => {
  
  return (
    <div>
      <HeaderFront />
      <Outlet />    
      <FooterFront />
    </div>
  )
}

export default LayoutMain