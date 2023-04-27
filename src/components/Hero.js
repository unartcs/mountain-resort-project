import React, { useState } from "react";
import "./Hero.css";
import Navbar from '../components/Navbar'

function Hero() {
  return (
    <div className="hero-wrapper">
      <Navbar/>
      <div className="button-container">
        {/* <img src="/imgs/mountain1.jpg" alt="Hero" draggable="false" /> */}
        <h2>Learn More</h2>
      </div>
    </div>
  );
}

export default Hero;
