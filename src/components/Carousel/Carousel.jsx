import { useState } from "react";
import pictures from "../MainFront/PreCarousel";
import "./carousel.css";
const Carousel = () => {
  const [contador, setContador] = useState(0);
  const prev = () => {
    if (contador == 0) {
      setContador(pictures.length - 1);
    } else {
      setContador(contador - 1);
    }
  };

  const next = () => {
    console.log("next", contador);
    if (contador == pictures.length - 1) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  };
  /*  
 function tictac(){
    if (contador ==pictures.length-1){
        setContador(0);
        pictures[contador] 
    }
    else{
        setContador(contador+1);
        pictures[contador] 
    }        
}
*/
  //useEffect()
  return (
   
   <div className="carousel">
      <div>
       <button onClick={prev}>{"<"}</button> 
        </div>
        <div className="pics">   
            {pictures.length > 0 ? pictures[contador] : <h2>Loading...</h2>}           
        </div>
        <div className=" but1">
       <button onClick={next}>{">"}</button> 
     </div>
      
    </div> 
  );
};

export default Carousel;
