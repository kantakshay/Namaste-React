import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <>
      <div className="container">
        <div className="logo"></div>
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

function CardComponent() {
 return( <div>
  <div>
    <img src="https://rukminim2.flixcart.com/image/612/612/khz693k0-0/pendrive/pendrive/i/r/x/v236w-hp-original-imafxvf93gh7axat.jpeg?q=70" alt="" />
  </div>
  <div>
    <h2>Namaste</h2>
  </div>
</div>)
}

function App() {
  return (
    <div>
      <Header />
      <CardComponent/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
