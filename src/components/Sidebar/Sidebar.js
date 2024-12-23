import '../Sidebar/Sidebar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode,faHouse, faCloud, faBook, faGear, faPhone, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-dropdown">
        <select>
          <option value="user1">UtkarshDhairyaPanwar</option>
          <option value="user2">Other User</option>
        </select>
      </div>
      {/* Top section of the sidebar */}
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

      {/* Bottom section of the sidebar */}
      <ul className="bottom-list">
        <li>
          <FontAwesomeIcon icon={faPhone} /> Support
        </li>
        <li>
          <FontAwesomeIcon icon={faRightFromBracket} /> Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
