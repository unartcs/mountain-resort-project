import React from "react";
import "./Navbar.css";
import {GiMountaintop} from 'react-icons/gi'

function Navbar() {
  return (
    <div class="navbar-wrapper">
      <div class="logo"><GiMountaintop/>Mountain Side Resorts</div>
      <div class="menu">
        <ul class="menu-ul">
          <li>Home</li>
          <li>About</li>
          <li>Booking</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar