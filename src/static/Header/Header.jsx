import logo from "../../assets/svg/movebg.png"
import "./Header.css"
import icon from "../../assets/svg/icon-menu.svg"

const Header = () => {

    return(
         <div className="container">
              <div className="logo">
                  <img src= {logo} alt="" />
              </div>
              <div className="icons">
                  <a>Home</a>
                  <a>GET FREE QUOTES</a>
                  <a>SERVICES</a>
                  <a>HOW WE MOVE</a>
                  <a>BLOG</a>
              </div>
              <div className="icon">
                <img src= {icon} alt="" />
              </div>
         
         
         </div>
        
    )
}

export default Header