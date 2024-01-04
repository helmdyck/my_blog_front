import React, { useState } from "react";
import mybloglogo from "../assets/mybloglogo.png";
import "../App.css";
import Menu from "./Menu";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={mybloglogo} alt="My Blog Logo" className="main-logo" />
        </div>

        <label className="plus-menu">
          <input type="checkbox" onChange={() => setShowMenu(!showMenu)} />
          <div className="bar">
            <span className="vertical"></span>
            <span className="horizontal"></span>
          </div>
        </label>
      </div>
      <Menu showMenu={showMenu} />
    </>
  );
}

export default Navigation;
