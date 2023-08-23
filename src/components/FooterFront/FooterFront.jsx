//import React from 'react'
import "/facebook.png"
import "/instagram.png"
import "/whatsapp.png"
import "./footerFront.css"

const FooterFront = () => {
  return (
    <div className="container footerMain">
      <div className="row">
        <div className="copy col-lg-6 col-xl-6">
          &copy; Copyright 2015 Mytinerary. All rights reserved.
        </div>
        <div className="col-lg-6 col-xl-6 webs">
          <img className="img-fluid" src="facebook.png" />
          <img className="img-fluid" src="instagram.png" />
          <img className="img-fluid" src="whatsapp.png" />
        </div>
      </div>
    </div>
  )
}

export default FooterFront