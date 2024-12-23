// Navbar.js
import './Navbar.css';
import img from "../../assets/codeantlogo.png"; // Correct way to import the image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={img} alt="CodeAnt AI Logo" className="logo-img" />
        <div className="logo-text">CodeAnt AI</div>
      </div>
    </nav>
  );
}

export default Navbar;
