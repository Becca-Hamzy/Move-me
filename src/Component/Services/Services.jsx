import "./Services.css"

const Services = ({img, h2, p}) =>{
 return(
   
    <div className="service">
         <div className="image">
             <img src={img} alt="" />
         </div>
         <div className="content">
              <h2>{h2}</h2>
              <p>{p}</p>
         </div>

    </div>

 )
    
 }

export default Services