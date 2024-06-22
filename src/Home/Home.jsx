import React from "react";
import "./Home.css";
import home from "../assets/home.jpg";
import home2 from "../assets/home2.jpg"
import home3 from "../assets/home3.png"
export default function Home() {
  return (
    <div className="home">
      <div className="home-1">
        <div className="home-left">
          <h1>Optimize IT Systems!</h1>
          <h1>
            Creating a better <span>IT Solutions!</span>
          </h1>
          <p>Let’s help you navigate your next</p>
          <button type="submit">Start Now</button>
        </div>
        <div className="home-right">
          <img src={home}></img>
        </div>
      </div>
      <div className="home-2">
        <div className="home2-left">
        <img src={home2}></img>
        </div>
        <div className="home2-right">
          <h1>ASH Your one stop shop for high end IT consultation and services.</h1>
          <p>ASH provides hands on IT services to help businesses grow further. We provide customized, good quality and fully functional IT services under one roof. We have the skills, expertise, and in-depth domain knowledge to provide you the IT services that will helpful in the Competitive business environment. Partner up with ASH and change your business game with our hands on IT services.</p>
        </div>
      </div>
      <div className="home-3">
        <div className="home3-left">
          <h1>
          WHY CHOOSE US? <br></br>Custom IT Solutions for Your Business
          </h1>
          <p>It is our passion, expertise, and deep domain knowledge that enables us to build solutions with more reliability, quality, and personalization. If you want to work with a professional, cooperative, and expert IT company, then we are here to help you achieve your business goals.</p>
         
        </div>
        <div className="home3-right">
          <img src={home3}></img>
        </div>
      </div>
      <div className="process">
        <div className="process-heading">
        <h1>Process</h1>
        <h2>How we work?</h2>
        </div>
        <div className="process-cards">
          <div className="choose">
          <i class="fas fa-laptop-code"></i>
            <h1>Choose a Service</h1>
            <p>Select Which Digital Service You Want</p>
          </div>
          <div className="meeting">
          <i class="fas fa-calendar-alt"></i>
            <h1>Request a Meeting</h1>
            <p>Fill Contact Us Form & Wait For Response</p>
          </div>
          <div className="custom">
          <i class="fas fa-handshake"></i>
            <h1>Receive Custom Plan</h1>
            <p>We Will Provide Different Plan</p>
          </div>
          <div className="final">
          <i class="fas fa-check-circle"></i>
            <h1>Let's Make it Happen</h1>
            <p>Finalize ! now enjoy our best services</p>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="services-heading">
        <h1>Services</h1>
        <h2>What we do?</h2>
        </div>
        <div className="services-cards">
          <div className="web">
          <i class="fas fa-laptop-code"></i>
            <h1>Web Development</h1>
            <p>Developing a website both static and dynamic as a requirement of customer.</p>
          </div>
          <div className="app">
          <i class="fas fa-mobile-alt"></i>
            <h1>App Development</h1>
            <p>ASH develops mobile application for android operating system and IOS.</p>
          </div>
          <div className="graphics">
          <i class="fas fa-paint-brush"></i>
            <h1>Graphics Designing</h1>
            <p>ASH provides to one of best logo and graphic designer in industry.</p>
          </div>
        </div>
      </div>
      <div className="heading-bottom">
        <h1>We run all kinds of Software services that vow your success</h1>
        <button className="contact">Contact Us</button>
      </div>
    </div>
  );
}
