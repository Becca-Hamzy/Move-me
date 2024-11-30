import Hero from "../../Component/Hero/Hero.jsx";
import Process from "../../Component/Process/Process.jsx";
import  "./Home.css";
import "../../Component/Process/Process.css"
import Picture from "../../Component/Picture/Picture.jsx";
import move from "../../assets/svg/move.jpg"
import pay from "../../assets/svg/pay.jpg"
import quotation from "../../assets/svg/quotation.jpg"
import quote from "../../assets/svg/quote.jpg"
import inspection from "../../assets/svg/inspection.jpg"
import "../../Component/Picture/Picture.css"
import About from "../../Component/About/About.jsx";
import truck from "../../assets/svg/truck-rbg.png"
import "../../Component/About/About.css"
import Award from "../../Component/Award/Award.jsx";
import boxes from "../../assets/svg/boxes.jpg"
import moved from "../../assets/svg/moved.jpg"
import goods from "../../assets/svg/goods.jpg"
import clients from "../../assets/svg/clients.jpg"
import Video from "../../Component/Video/Video.jsx";
import Move from "../../Component/Move/Move.jsx";
import lamata from "../../assets/svg/LAMATA.jpg";
import hyde from "../../assets/svg/HYDE.jpg";
import NB from "../../assets/svg/NB.jpg"
import SA from "../../assets/svg/SA.jpg"
import paystack from "../../assets/svg/paystack.jpg"
import elizade from "../../assets/svg/elizade.jpg"
import blue from "../../assets/svg/blue.jpg"
import bayer from "../../assets/svg/bayer.jpg"
import Services from "../../Component/Services/Services.jsx";
import movingvan from "../../assets/svg/movingvan.jpg"
import clean from "../../assets/svg/cleaning.jpg"
import chair from "../../assets/svg/chair.jpg"
import livingroom from"../../assets/svg/livingroom.jpg"
import office from "../../assets/svg/officespace.jpg"
import Service2 from "../../Component/Service2/Service2.jsx";


function Home () {
    return(
        <>

           <Hero/>
           <Process className="pro1" Text="OUR PROCESS"/>
           <div className="pic">
           <Picture className="pic" img ={quote} alt = "" p="Get a free quote on our Website"/>
           <Picture className="pic" img ={inspection} alt = "" p="Book an Inspection"/>
           <Picture className="pic" img  ={quotation} alt = "" p="Get your Quotation"/>
           <Picture className= "pic" img ={pay} alt = "" p="pay"/>
           <Picture className= "pic" img ={move} alt = "" p="Move"/>
           </div>
           <div className="company">
           <About className ="coy-left" h2= "#1 MOVING COMPANY IN NIGERIA" p= "#1 rated best moving/relocation company in Nigeria Whether you're moving across the street or across a cer- tain region, Moveme.com.ng has got you. Our experienced team of movers take pride in arranging a seamless move for your household and business, making it fast and effi- cient. Our mission is to make your move stress free for you."  img ={truck} alt=""/>
             
           </div>
           <Award/>

           <div className="deals">
           <Picture className="pic" img ={clients} alt = "" p="Clients trust in us"/>
           <Picture className="pic" img ={moved} alt = "" p="KM moved"/>
           <Picture className="pic" img  ={boxes} alt = "" p="Boxes"/>
           <Picture className= "pic" img ={goods} alt = "" p="Tons of goods"/>
           </div>
           
           <Video/>

           <Move className ="move" h2 = "OUR ENTERPRISE CLIENT"/>

           <div className="patners">
           <Picture className="pic" img ={elizade} alt =""/>
           <Picture className="pic" img ={paystack} alt = "" />
           <Picture className="pic" img  ={NB} alt = "" />
           <Picture className= "pic" img ={hyde} alt = "" />
           <Picture className= "pic" img ={lamata} alt = "" />
           <Picture className= "pic" img ={bayer} alt = "" />
           <Picture className= "pic" img ={SA} alt = "" />
           <Picture className= "pic" img ={blue} alt = "" />

           </div>

           <Move className ="move" h2 = "OUR SERVICES"/>

           <div>
           
        <div>
           <Service2 className ="con" h2= "RESIDENTIAL/LOCAL MOVE" p= "Any relocation within a state is a local move. Whether we have to climb the stairs or not, requires care and professionalism. Moveme offers a full range of local moving services within Lagos including full packing and set up services. We also offer professional packing for fragile items like fine art, antiques, marble and glassware. No matter what your needs are, Moveme.com.ng can provide a level of customer service and expertise unmatched by other apartment movers in Lagos. Whether you're moving from the 6th to 12th floor or from Alimosho to Lekki in Lagos, Moveme.com.ng is the best way to get there. Our fast moving service has earned Moveme hundreds of satisfied customers and the reputation as the local moving company to trust in Lagos."  img ={livingroom} alt=""/>
             
           </div>
           <Services className= "render" img= {movingvan} alt = "" h2 = "INTERSTATE/LONG DISTANCE MOVE" p = "Whether you are moving/relocating from Lagos to Abuja, or from any state within Nigeria, Moveme got you. Interstate moving or a long distance move requires proper planning to make it a smooth and stress-free experience. Starting with the moving quote process, we partner with you to gather all the information you need to make the decision we need to complete your long distance move on budget and on time. You can start the process by requesting a free long dis- tance moving quote from Moveme.com.ng."/>
           </div>

           <Service2 className ="con" h2= "COMMERCIAL/OFFICE MOVE" p= "You have so many responsibilities at work from managing employees to servicing clients. That's why we take over when it's time for your office move so you can focus on your current business without missing a beat. Whether you're moving your business along with your home or you're expanding your business to another location, Moveme.com.ng is the pre- mier commercial moving company for companies of all sizes. Years of experience has made us the expert commercial movers when it comes to office relocation. During your commercial move, transporting your office's inventory and excess stock isn't a problem. We follow a care- fully crafted system of packing, transporting, loading and offloading of your business items ensuring safety, efficiency and speed of transfer. We understand every aspect of commercial moving which allows us avoid unnecessary costs that most inexperienced commercial movers incur on their clients. Our commercial movers make moving a great experience."  img ={office} alt=""/>

           <div>
            <Services className= "render" img= {clean} alt = "" h2 = "CLEANING SERVICES" p = "It’s not always possible to find enough time to do a deep house clean. We lead busy lives, often balancing family and one or two jobs. That’s where MoveMe Comes in. We’ve worked with several cus- tomers to give their homes a professional level of service. Whether it’s one room or an entire house, we’re happy to take on any cleaning job. We deliver the highest standard."/>
           </div>
           
           <Move className ="move" h2 = "GET STARTED TODAY!" p= "Let us know more about your move"/>


    

        </>
    )
}
export default Home