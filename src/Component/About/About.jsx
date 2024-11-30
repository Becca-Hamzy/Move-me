import "./About.css"

const About = ({h2, p,img}) => {

    return(
        <div className="abt-cont">
        <div className="abt"> 
             <h2>{h2}</h2> <p>{p}</p>
        </div>
    
        <div className="abts">
             <img src= {img} alt="" />
        </div>
        </div>
    )
}

export default About