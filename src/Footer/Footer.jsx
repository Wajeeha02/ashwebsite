import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from '../assets/ash logo.png'
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={logo}></img>
       <p>
       ASH has a proud history of utilizing experience to provide our clients with the best services possible.
       </p>
       <div className="icons">
       <a href="">
            <i class="fas fa-envelope"><p>info@allstudyhub.com</p> </i>  
           
          </a>
       </div>
       
        <div className="icons">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
         
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
         
          <li>
            <Link to="/Contact">Contact Me</Link>
          </li>
        </ul>
        <div className="copyright">
        <p>&copy; 2024 Copyright. All rights reserved</p>
       </div>
        </div>
       
    </div>
  );
}
export default Footer;
