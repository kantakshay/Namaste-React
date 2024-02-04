import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../../image/khao_na-removebg-preview'

function Header() {
  return (
    <>
      <div className="flex justify-between  py-8 bg-slate-300 shadow-md">
        <div className="mx-4">
        <img src="../../image/khao_na.png" alt="logo" />
        </div>
        <div className="navbar">
          <ul className="flex mx-6 ">
            <li className="mx-2 font-bold"><Link  to="/" >Home</Link></li>
            <li className="mx-2 font-bold"><Link  to="/about" >About</Link></li>
            <li className="mx-2 font-bold"><Link  to="/contact" >Contact Us</Link></li>
            <li className="mx-2 font-bold"><Link  to="/cart" >Cart</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

