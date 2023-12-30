import React, { useState } from "react";
import mybloglogo from "../assets/mybloglogo.png";
import "../App.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <>
      <div className="nav-container">
        <div className="nav-inner">
          <div className="logo">
            <img src={mybloglogo} alt="My Blog Logo" className="main-logo" />
          </div>

          <label className="plus-menu" onClick={() => setShowMenu(!showMenu)}>
            <input type="checkbox" />
            <div className="bar">
              <span className="vertical"></span>
              <span className="horizontal"></span>
            </div>
          </label>
          {showMenu && (
            <div className="menu-container">
              <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Creators</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
