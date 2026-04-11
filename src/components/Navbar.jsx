import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CareYours</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/medications">Medications</Link>
        <Link to="/wellness">Wellness</Link>
        <Link to="/records">Records</Link>
        <Link to="/period">Period</Link>
        <Link to="/pregnancy">Pregnancy</Link>
      </div>
    </nav>
  );
}

export default Navbar;