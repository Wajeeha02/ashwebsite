import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About.jsx";
import "./App.css";
import Contact from "./Contact/Contact.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Services from "./Services/Services.jsx";
// checking
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
