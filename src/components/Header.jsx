 
import './Header.css'


import menuClose from "../assets/menu.png"
import menu from "../assets/menu.svg"
import logo from "../assets/sample.jpg"
import { Link } from 'react-router-dom'
import { useRef } from 'react'

 function Header(){
     const menuRef = useRef();

     const openMenu =() =>{
      menuRef.current.style.right="0"
     }

     const closeMenu = () => {
      menuRef.current.style.right="-350px"
     }
    return (

        <>
        <div className="header">
         <Link to={"/"} ><img  src={logo} alt="/" /></Link>
          <img src={menu} onClick={openMenu} className='head-open' alt='menu' />
           <ul ref={menuRef} className="nav-menu">
            <img src={menuClose} onClick={closeMenu} className='head-close'  alt='/'/>
                         {/* <li>Home</li>
                         <li>About</li>
                         <li>Projects</li> */}

                         <li><Link to={"/projects"} >Projects</Link></li>
                         <li><Link to={"/resources"} >Resources</Link></li>
           </ul>
           <div className="head-info">More info</div>
        </div>
         
        </>
    )
 }
 export default Header