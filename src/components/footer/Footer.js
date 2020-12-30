import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div>
    
    <div className="ta-footer">

      <div className="ta-footer-content">  

        <div className= "ta-footer-section ta-about">
          <h1 className="ta-logo-text"><span>Cipher </span>Pol</h1>
          <p>
              Cipher Pol is a series of secret agencies who do investigations,
              assassinations and espionage for the World Government. A member who 
              is also a geek got bored, assembled a team of developers and made 
              this website but the fun part is the team of developers doesn't know 
              who among them is the agent of Cipher-Pol aigis zero.
          </p>
        </div>
        <div className= "ta-footer-section ta-links">
          <h2>Quick Links</h2>                
            <ul>
                <a href="/Anime"><li>Anime</li></a>
                <a href="/Movie"><li>Movies</li></a>
                <a href="/Manga"><li>Manga</li></a>
                <a href="/Tv-Show"><li>Tv Show</li></a>
            </ul>
        </div>
        <div className="ta-footer-section ta-contact-form">
          
        <h2>Contact us</h2>
          <ul>
            <li>
              Shubham Jain
            </li>
            <li>
              <a href ="/"><i className="fab fa-instagram"></i></a>
              <a href = "/"><i className="fab fa-github"></i></a>
              <a href = "/"><i className="far fa-envelope"></i></a>
            </li>
            <li>
              Satvik Shrivas
            </li>
            <li>
              <a href ="/"><i className="fab fa-instagram"></i></a>
              <a href = "/"><i className="fab fa-github"></i></a>
              <a href = "/"><i className="far fa-envelope"></i></a>
            </li>
            <li>
              Amrit Matharu
            </li>
            <li>
              <a href ="/"><i className="fab fa-instagram"></i></a>
              <a href = "/"><i className="fab fa-github"></i></a>
              <a href = "/"><i className="far fa-envelope"></i></a>
            </li>
            <li>
              Shrishti Chourasiya
            </li>
            <li>
              <a href ="/"><i className="fab fa-instagram"></i></a>
              <a href = "/"><i className="fab fa-github"></i></a>
              <a href = "/"><i className="far fa-envelope"></i></a>
            </li>
            <li>
              Chahat Tekwani
              </li>
            <li>
              <a href ="/"><i className="fab fa-instagram"></i></a>
              <a href = "/"><i className="fab fa-github"></i></a>
              <a href = "/"><i className="far fa-envelope"></i></a>
            </li>
            <li>
              Tanmay Mitra
              </li>
            <li>
              <a href ="/"><i className="fab fa-instagram"></i></a>
              <a href = "/"><i className="fab fa-github"></i></a>
              <a href = "/"><i className="far fa-envelope"></i></a>
            </li>
          </ul>
            
        </div>
      </div>
      <div className="ta-footer-bottom">
          &copy;{new Date().getFullYear()} Cipher-Pol | All rights reserved |
          Terms Of Service | Privacy
      </div>        
        
     </div>
  </div>
  );
}

export default Footer;
