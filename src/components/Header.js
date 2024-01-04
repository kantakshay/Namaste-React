import React from "react";

function Header() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="./Image-na.png" alt="logo" />
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
