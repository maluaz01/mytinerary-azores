import pictures from "../MainFront/PreCarousel";
import "./carousel.css"

const Carousel00 = () => {
  return (
    <div className="highest">
         <div className="container-fluid " >
		
        <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carousel1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel1" data-bs-slide-to="2"></li>
            <li data-bs-target="#carousel1" data-bs-slide-to="3"></li>
          </ol>
         
          <div className="carousel-inner ">
            <div className="carousel-item active">
             {pictures[0]}
            </div>

            <div className="carousel-item">
            {pictures[1]}
            </div>

            <div className="carousel-item">
            {pictures[2]}
          </div>
          

          <div className="carousel-item">
          {pictures[3]}
           </div>
          </div>

          <a className="carousel-control-prev text-danger" href="#carousel1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only fw-bold fs-2">Previous</span>
          </a>
          <a className="carousel-control-next text-danger" href="#carousel1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only fw-bold fs-2">Next</span>
          </a>
        </div>
        
    </div>
    </div>
  )
}

export default Carousel00