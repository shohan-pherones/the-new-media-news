import React, { useState } from "react";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [show, setShow] = useState(true);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <h2>The New Media News</h2>
      </div>
      <div className="menu">
        {show ? (
          <ul>
            <li>Home</li>
            <li>News</li>
            <li>About</li>
          </ul>
        ) : null}
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
