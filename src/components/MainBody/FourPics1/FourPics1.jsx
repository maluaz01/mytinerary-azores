//import React from 'react'

const FourPics1 = () => {
  const cities=[
    
      {_Id:0, 
        name:"Barcelona",
        nameImg:"../../../public/barcelona.jpg",
       },
       {_Id:1, 
        name:"Belfast",
        nameImg:"../../public/belfast.jpg",
       },
       {_Id:2, 
        name:"Budapest",
        nameImg:"../../../public/budapest.jpg",
       },
       {_Id:3, 
        name:"Edimburg",
        nameImg:"../../public/edimburg.jpg",
       },
       {_Id:4, 
        name:"Helsinski",
        nameImg:"../../../public/helsinski.jpg",
       },
       {_Id:5, 
        name:"Jakarta",
        nameImg:"../../../public/jakarta.jpg",
       },
       {_Id:6, 
        name:"La Plata",
        nameImg:"../../../public/laplata.jpg",
       },
       {_Id:7, 
        name:"Lima",
        nameImg:"../../../public/lima.jpg",
       },
       {_Id:8, 
        name:"Ljubljana",
        nameImg:"../../../public/ljubljana.jpg",
       },
       {_Id:9, 
        name:"Nassau",
        nameImg:"../../../public/nassau.jpg",
       },
       {_Id:10, 
        name:"Tokio",
        nameImg:"../../../public/tokio.jpg",
       },
       {_Id:11, 
        name:"Viena",
        nameImg:"../../../public/viena.jpg",
       }      
                                     
]

  return (
    <div className="container">
        <div className="row">
         <div className="col-12 col-lg-6"> 
         <img src={cities[4].nameImg} width="400"/>  
         </div>
          <div className="col-12 col-lg-6">
         <img src={cities[5].nameImg}  width="400"/> 
         </div>
        </div> 
        <div className="row">
        <div className="col-12 col-lg-6"> 
         <img src={cities[6].nameImg} width="400"/>  
         </div>
          <div className="col-12 col-lg-6">
         <img src={cities[7].nameImg}  width="400"/> 
         </div>  
        </div>
    </div>
    
  )
}

export default FourPics1;