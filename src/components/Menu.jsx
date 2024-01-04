import React from "react";
import "../App.css";

function Menu({ showMenu }) {
  return (
    <div>
      {showMenu && (
        <div
          className="menu-container"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <div className="menu-section">
            <p>Inicio</p>
            <p>Creadores</p>
            <p>Sobre el blog</p>
            <p>Contacto</p>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Menu;
