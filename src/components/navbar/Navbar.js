import React, {useState} from 'react'
import './Navbar.css';


export default function NavBar()
{
    var [clicked, setClick] = useState(false);
    function handleClick() {
        setClick(!clicked);
    }
    return(
        
    

        <nav className= "ha-navBar">
            {console.log(clicked)}
        <div className="ha-logo">
            <a href = "/"><h4>Cipher Pol</h4></a>
        </div>
        <ul className= {clicked ? "ha-nav-links ha-nav-active" : "ha-nav-links  "}>
            <li>
                <a href="/Anime">Anime</a>
            </li>
            <li>
                <a href="/Movie">Movies</a>
            </li>
            <li>
                <a href="/Manga">Manga</a>
            </li>
            <li>
                <a href="/Tv-Show">Tv Show</a>
            </li>
            <li>
              <a href="/Support">Support</a>
          </li>
          {/* <li>
            <a href="/Report">Report</a>
        </li> */}
        </ul>
        <div className= "ha-burger" onClick = {handleClick} >
            <div className="ha-line1"></div>
            <div className="ha-line2"></div>
            <div className="ha-line3"></div>
        </div>
    </nav>
    
    
    )
}