import React from "react";
import "../styles/Dashboard.css";
import {useNavigate} from "react-router-dom";
import {FaHeartbeat} from "react-icons/fa";

const Dashboard=()=>{
const navigate=useNavigate();

return(
<div className="dashboard">

<header className="navbar">
<div className="logo">
<FaHeartbeat/>
<span>CareYours</span>
</div>

<nav className="nav-links">
<span>Home</span>
<span>Features</span>
<span>About</span>
<span>Contact</span>
</nav>

<div className="nav-btns">
<button className="login-btn">Login</button>
<button className="start-btn">Get Started</button>
</div>
</header>

<section className="hero">

<div className="hero-left">

<span className="hero-tag">
❤️ AI Powered Healthcare
</span>

<h1>
Your Health,
<br/>
<span>Our Priority.</span>
</h1>

<p>
Track medicines,monitor wellness,manage records,
pregnancy care and emergency support—all in one place.
</p>

<div className="hero-buttons">
<button className="primary-btn">Get Started</button>
<button className="secondary-btn">Explore Features</button>
</div>

<div className="hero-users">

<div className="avatars">
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<div className="rating">
<h3>4.9★</h3>
<p>10,000+ Users</p>
</div>

</div>

</div>

<div className="hero-right">

<div className="hero-circle"></div>

<div className="hero-card card1">
<span>❤️</span>
<div>
<h4>Health Score</h4>
<p>82%</p>
</div>
</div>

<div className="hero-phone">

<div className="phone-top"></div>

<div className="phone-screen">

<div className="phone-header">
<h3>CareYours</h3>
<p>Today's Overview</p>
</div>

<div className="mini-progress">
<div className="mini-fill"></div>
</div>

<div className="mini-cards">

<div className="mini-card">
<span>💊</span>
<p>Medicine</p>
</div>

<div className="mini-card">
<span>❤️</span>
<p>Wellness</p>
</div>

<div className="mini-card">
<span>🚨</span>
<p>SOS</p>
</div>

<div className="mini-card">
<span>📄</span>
<p>Records</p>
</div>

</div>

</div>

</div>

<div className="hero-card card2">
<span>💊</span>
<div>
<h4>Reminder</h4>
<p>8:00 AM</p>
</div>
</div>

</div>

<div className="overview-card">
<h4>💊 Medicines</h4>
<h2>3</h2>
<p>Today's Schedule</p>
</div>

<div className="overview-card">
<h4>🔥 Streak</h4>
<h2>14 Days</h2>
<p>Keep Going</p>
</div>

<div className="overview-card">
<h4>💧 Water</h4>
<h2>2.3L</h2>
<p>Today's Intake</p>
</div>

</section>

<section className="features">

<h2 className="section-heading">
Everything You Need
</h2>

<div className="feature-grid">

<div className="feature-card" onClick={()=>navigate("/medications")}>
<div className="icon">💊</div>
<h3>Medication</h3>
<p>Smart reminders and medicine tracking.</p>
<button>Open →</button>
</div>

<div className="feature-card" onClick={()=>navigate("/wellness")}>
<div className="icon">❤️</div>
<h3>Wellness</h3>
<p>Track sleep,steps,water and health.</p>
<button>Open →</button>
</div>

<div className="feature-card" onClick={()=>navigate("/period")}>
<div className="icon">📅</div>
<h3>Period Tracker</h3>
<p>Predict your cycle with reminders.</p>
<button>Open →</button>
</div>

<div className="feature-card" onClick={()=>navigate("/pregnancy")}>
<div className="icon">🤰</div>
<h3>Pregnancy</h3>
<p>Weekly baby growth & appointments.</p>
<button>Open →</button>
</div>

<div className="feature-card" onClick={()=>navigate("/records")}>
<div className="icon">📄</div>
<h3>Health Records</h3>
<p>Securely manage reports and history.</p>
<button>Open →</button>
</div>

<div className="feature-card" onClick={()=>navigate("/emergency")}>
<div className="icon">🚨</div>
<h3>Emergency SOS</h3>
<p>Instant emergency support.</p>
<button>Open →</button>
</div>
</div>
</section>
<section className="health-dashboard">

<div className="left-panel">

<div className="dashboard-card">

<div className="card-header">
<h3>Health Overview</h3>
<span>This Week</span>
</div>

<div className="progress-bars">
<div className="bar"><span style={{height:"65%"}}></span></div>
<div className="bar"><span style={{height:"82%"}}></span></div>
<div className="bar"><span style={{height:"48%"}}></span></div>
<div className="bar"><span style={{height:"90%"}}></span></div>
<div className="bar"><span style={{height:"74%"}}></span></div>
<div className="bar"><span style={{height:"88%"}}></span></div>
<div className="bar"><span style={{height:"95%"}}></span></div>
</div>

<div className="days">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>

</div>

<div className="dashboard-card reminder-card">

<h3>Today's Reminder</h3>

<div className="reminder-item">
<div>
<h4>Vitamin D</h4>
<p>08:00 AM</p>
</div>
<button>Done</button>
</div>

<div className="reminder-item">
<div>
<h4>Walk</h4>
<p>06:00 PM</p>
</div>
<button>Done</button>
</div>

<div className="reminder-item">
<div>
<h4>Drink Water</h4>
<p>Every 2 Hours</p>
</div>
<button>Done</button>
</div>

</div>

</div>

<div className="right-panel">

<div className="dashboard-card">

<h3>Wellness Score</h3>

<PieAnimation/>

</div>

<div className="dashboard-card">

<h3>Today's Goals</h3>

<ul className="goal-list">
<li>✅ 8 Glasses Water</li>
<li>✅ Morning Walk</li>
<li>⬜ Medicine Reminder</li>
<li>⬜ Sleep Before 11 PM</li>
</ul>
</div>
</div>
</section>
<section className="testimonial-section">

<h2 className="section-heading">Loved By Our Users</h2>

<div className="testimonial-grid">

<div className="testimonial-card">
<p>"CareYours keeps all my medicines and reports in one place."</p>
<div className="user">
<div className="avatar">P</div>
<div>
<h4>Priya Sharma</h4>
<span>Delhi</span>
</div>
</div>
</div>

<div className="testimonial-card">
<p>"The Pregnancy Tracker helped me throughout my journey."</p>
<div className="user">
<div className="avatar">A</div>
<div>
<h4>Ananya Gupta</h4>
<span>Noida</span>
</div>
</div>
</div>

<div className="testimonial-card">
<p>"SOS feature gives my family peace of mind."</p>
<div className="user">
<div className="avatar">N</div>
<div>
<h4>Neha Verma</h4>
<span>Gurugram</span>
</div>
</div>
</div>

</div>

</section>

<section className="cta">

<h2>Take Charge Of Your Health Today</h2>

<p>
Track medicines,wellness,pregnancy and emergency support from one smart dashboard.
</p>

<div className="cta-buttons">
<button className="primary-btn">Start Free</button>
<button className="secondary-btn">Learn More</button>
</div>

</section>

<footer className="footer">

<div className="footer-logo">
<h2>❤️ CareYours</h2>
<p>Your Smart Healthcare Companion.</p>
</div>

<div className="footer-links">

<div>
<h4>Features</h4>
<p>Medication</p>
<p>Wellness</p>
<p>Pregnancy</p>
<p>Records</p>
</div>

<div>
<h4>Company</h4>
<p>About</p>
<p>Contact</p>
<p>Support</p>
<p>Privacy</p>
</div>

<div>
<h4>Follow Us</h4>
<p>Instagram</p>
<p>LinkedIn</p>
<p>GitHub</p>
<p>Email</p>
</div>

</div>

</footer>

</div>
);
};

export default Dashboard;