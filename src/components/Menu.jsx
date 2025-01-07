import React from "react";
import "./Menu.css";

const Menu = ({ isOpen }) => {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      {/* Add your menu items here */}
      <ul>
        <li>
          <a href="/matilda-sutherland-musician-biography">Biography</a>
        </li>
        <li>
          <a>Listen</a>
        </li>
        <li>
          <a>Gallery</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
