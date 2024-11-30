import "./Service2.css"

const Service2 = ({h2, p, img}) => {
    return(

       <div className="con">

           <div className="text">
           <h2>{h2}</h2>
           <p>{p}</p>
           </div>
           <div className="pict">
              <img src={img} alt="" />
           </div>
             
       </div>
       


    )
}

export default Service2