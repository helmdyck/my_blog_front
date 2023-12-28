import React from "react";
import mybloglogo from "../assets/mybloglogo.png";
import menuPlus from "../assets/menuPlus.png";
import "../App.css";

function Navigation() {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={mybloglogo} alt="My Blog Logo" className="main-logo" />
        </div>
        <label className="plus-menu">
          <input type="checkbox" />
          <div className="bar">
            <span className="vertical"></span>
            <span className="horizontal"></span>
          </div>
        </label>
      </div>
    </>
  );
}

export default Navigation;
