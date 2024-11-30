
import "./Footer.css"
import footlogo from "../../assets/svg/footlogo.jpg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";



const Footer = () => {
    return(

        <div className="foot">
            <div className="foot-text">
               <p>
               MoveMe.com.ng is Nigeria’s preferred moving/relocation companies in Nigeria for residential, local move, interstate move and commercial move. Our mission is to make your move stress free and that’s why we have a professional team of movers who arrange a seamless move for you. We are not only swift, we are also careful at handling your moving items. You can trust that whatever we are moving for you is safe and secure. <br /><br />

At MoveMe, we have a vast experience from working with clients who have moved from one location to another. We understand that you may have so many responsibilities and duties to take care of. We help take the stress off relocating from one place to another. <br /><br />

Any relocation within a particular state or town or area is known as a residential or local move. You would need professionals to move your sensitive home items up and down the stairs, across floors or across the street. <br /> <br />

Are you planning to move your current business or expand? We can help handle the intricacies of pack- aging and packing until your office furniture and other necessary things are delivered right where they should be. <br /> <br />

Are you relocating or moving from Lagos to Abuja, Port Harcourt to Lagos, Ibadan to Ilorin, anywhere within the state in Nigeria? MoveMe.com.ng is here to handle all of your long distance moves. We give you a moving quote, help you gather and organize all of the information that you need to make your long distance relocation and moves successful. We are that detailed.
               </p>
            </div>
            <div className="foot img">
                <div className="touch">
                <h2>GET IN TOUCH WITH US </h2>
                <img src= {footlogo} alt="" />
                <p>No 36A, Toyin Street Ikeja, Lagos <br />   Email us: info@moveme.ng   </p>
                <FaFacebook  color="#3b5998" size={60}/>
                <AiFillTwitterCircle color="#26a6d1" size={60} />
                <CiInstagram color="#8833bd" size={60}/>
                <p>Realtors in Nigeria <br /> Property Index  <br /> Lamudi Ghana</p>
            </div>
            </div>

        </div>
    )
}
export default Footer