import React from "react";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const handleToggleMenu = () => {
    const floatingMenu = document.getElementById("floating-menu");
    if (floatingMenu.style.display === "none") {
      floatingMenu.style.display = "block";
    } else if (floatingMenu.style.display === "block") {
      floatingMenu.style.display = "none";
    }
  };
  return (
    <div className="navbar-container">
      <div className="logo">
        <h2>The New Media News</h2>
      </div>
      <div className="menu">
        <ul id="floating-menu">
          <li>Home</li>
          <li>News</li>
          <li>About</li>
        </ul>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="toggle"
        onClick={handleToggleMenu}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Header;
