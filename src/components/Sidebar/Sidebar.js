import {
  faBars,
  faBook,
  faCloud,
  faCode,
  faGear,
  faHouse,
  faPhone,
  faRightFromBracket,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Sidebar/Sidebar.css";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Hamburger or Cross Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
      
      {/* Sidebar Menu */}
      <div className={`sidebar `}>
        <div className="profile-dropdown">
          <select>
            <option value="user1">UtkarshDhairyaPanwar</option>
            <option value="user2">Other User</option>
          </select>
        </div>
        <ul className="top-list">
          <li>
            <FontAwesomeIcon icon={faHouse} /> Repositories
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} /> AI Code Review
          </li>
          <li>
            <FontAwesomeIcon icon={faCloud} /> Cloud Security
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} /> How to Use
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} /> Settings
          </li>
        </ul>
        <ul className="bottom-list">
          <li>
            <FontAwesomeIcon icon={faPhone} /> Support
          </li>
          <li>
            <FontAwesomeIcon icon={faRightFromBracket} /> Logout
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="profile-dropdown">
            <select>
              <option value="user1">UtkarshDhairyaPanwar</option>
              <option value="user2">Other User</option>
            </select>
          </div>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} /> Repositories
            </li>
            <li>
              <FontAwesomeIcon icon={faCode} /> AI Code Review
            </li>
            <li>
              <FontAwesomeIcon icon={faCloud} /> Cloud Security
            </li>
            <li>
              <FontAwesomeIcon icon={faBook} /> How to Use
            </li>
            <li>
              <FontAwesomeIcon icon={faGear} /> Settings
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> Support
            </li>
            <li>
              <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
