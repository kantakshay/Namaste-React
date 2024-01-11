import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="./Image-na.png" alt="logo" />
        </div>
        <div className="navbar">
          <ul>
            <li><Link  to="/" >Home</Link></li>
            <li><Link  to="/about" >About</Link></li>
            <li><Link  to="/contact" >Contact Us</Link></li>
            <li><Link  to="/cart" >Cart</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

