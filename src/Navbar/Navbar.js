import React from "react";
import "./navbar.css";
import Logo from "../assests/logo.svg";
import LogoUs from "../assests/logo-us.png";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <img src={Logo} alt="logo" />

        <ul>
          <li>Home</li>
          <li>FAQs</li>
          <li>IMPORTANT QUESTIONS</li>
          <li>IMPORTANT INFORMATION</li>
          <li>COMMON SIDEEFFECTS</li>
        </ul>
        <img src={LogoUs} alt="logo-us" className="img" />
      </div>
    </>
  );
};

export default Navbar;
