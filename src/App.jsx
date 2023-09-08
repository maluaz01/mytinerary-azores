import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from "react-router-dom";
import MainFront from "./components/MainFront/MainFront";
import Carousel00 from "./components/Carousel/Carousel00";
import Error404 from "./pages/error404/Error404";
import LayoutMain from "./pages/LayoutMain/LayoutMain";
import Cities from "./pages/Cities";
import UniqueCard from "./components/UniqueCard/UniqueCard";
//import CardCity from "./components/CardCity/CardCity";
//import {cities} from "./citiesList" 
const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<LayoutMain />} >
      <Route index element={<MainFront />} />
      <Route path="Carousel00" element={<Carousel00 />} />
      <Route path="*" element={<Error404 />} />
      <Route path="Cities" element={<Cities />} />   
      <Route path='UniqueCard/:_id' element={<UniqueCard/>} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
