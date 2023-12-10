import React from "react";
import image from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div id="header">
      <img src={image} alt="" />
      <h1>Investment Calculator</h1>
    </div>
  );
}

export default Header;
