import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar(){


    return(
        <>
                 <nav>
                    
                      <div className="title" >
                          <Link to={"/"} className='logo-nav' >
                          <h1>Logo</h1>

                          </Link>

                          <div className='menu'>
                            {/* for menu */}
                         {/* setting responsiveness */}
                         <span></span>
                         <span></span>
                         <span></span>

                          </div>
                      </div>

                      <div className="right" > 

                          <ul>
                            <li><Link to={"/projects"} > Projects </Link> </li>
                            <li><Link to={"/resources"}  >  Resources </Link></li>
                          </ul>
                       

                       
                         
                        </div>



                    </nav>        
        </>
    )
}

export default Navbar;