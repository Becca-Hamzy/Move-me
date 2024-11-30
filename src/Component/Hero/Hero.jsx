import van from "../../assets/svg/movemevanrb.png"
import "./Hero.css"

const Hero = () =>{

    return(
        <div className="hero">
            <div className="hero-left">
                <h2>STARTING AT N49,999 PER MOVE  </h2>
                <form action="">
                    <select className="select"  id="items"> 
                    <option selected disabled value="">WHAT ARE YOU MOVING?</option>
                    <option value="">HOUSEHOLD ITEMS</option>
                    <option value="">PACKAGED ITEMS</option>
                    <option value="">OFFICE ITEMS</option>
                    </select>

                     <input type="text" className="inp1" placeholder ="MOVING FROM"/> 
                     <input type="text" className="inp2" placeholder ="MOVING TO"/> <br />
                     <button className="but">GET FREE QUOTES NOW</button>
                     <p>Or Call</p>
                     <button id="btn-no">0805-559****</button>
                     <button id="btn">View Number</button>

                </form>
                  
            </div>
            <div className="hero-right">
            <img src= {van} alt="" />

            </div>
        </div>
    )
}

export default Hero