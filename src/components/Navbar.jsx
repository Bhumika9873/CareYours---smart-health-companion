import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Bell, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logoIcon">❤</span>
        <h2>CareYours</h2>
      </div>

      <ul className={menu ? "navLinks active" : "navLinks"}>
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/medications">Medications</NavLink></li>
        <li><NavLink to="/wellness">Wellness</NavLink></li>
        <li><NavLink to="/records">Records</NavLink></li>
        <li><NavLink to="/period">Period</NavLink></li>
        <li><NavLink to="/pregnancy">Pregnancy</NavLink></li>
        <li><NavLink to="/caregiver">Caregiver</NavLink></li>
      </ul>

      <div className="rightSide">
        <div className="notification">
          <Bell size={22} />
          <span>3</span>
        </div>

        <button className="loginBtn">Login</button>

        <button className="signupBtn">Sign Up</button>

        <button
          className="menuBtn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;