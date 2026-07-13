import{Link,useLocation}from"react-router-dom";
import{IoNotificationsOutline}from"react-icons/io5";

function Navbar(){
const{pathname}=useLocation();
const active=(path)=>pathname===path?"active":"";
return(
<nav className="navbar">
<Link to="/" className="logo">
<div className="logo-icon">❤</div>
<span>CareYours</span>
</Link>
<div className="nav-links">
<Link to="/" className={active("/")}>Home</Link>
<Link to="/medications" className={active("/medications")}>Medicine</Link>
<Link to="/wellness" className={active("/wellness")}>Wellness</Link>
<Link to="/period" className={active("/period")}>Period</Link>
<Link to="/pregnancy" className={active("/pregnancy")}>Pregnancy</Link>
<Link to="/records" className={active("/records")}>Records</Link>
<Link to="/caregiver" className={active("/caregiver")}>Caregiver</Link>
</div>
<div className="nav-right">
<button className="bell"><IoNotificationsOutline size={22}/></button>
<button className="login-btn">Login</button>
<button className="signup-btn">Sign Up</button>
</div>
</nav>
);
}
export default Navbar;