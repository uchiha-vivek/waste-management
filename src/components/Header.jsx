 
import './Header.css'


import logo from "../assets/carbon.jpg"

 function Header(){

    return (

        <>
        <div className="header">
         <img  src={logo} alt="/" />
           <ul  className="nav-menu">
                         <li>Home</li>
                         <li>About</li>
                         <li>Projects</li>
           </ul>
           <div className="head-info">More info</div>
        </div>
         
        </>
    )
 }
 export default Header