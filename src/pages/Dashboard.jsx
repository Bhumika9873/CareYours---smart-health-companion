import React from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.png";

import { BsPersonHeart } from "react-icons/bs";
import { TbBellRinging } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { PiCalendarHeartBold } from "react-icons/pi";
import { LuBaby } from "react-icons/lu";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { FaFirstAid, FaHeartbeat } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";

import PieAnimation from "../components/PieAnimation";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* Navbar */}
      <header className="navbar">

        <div className="logo">
          <FaHeartbeat className="logo-icon" />
          <span>CareYours</span>
        </div>

        <nav className="nav-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span>Features</span>
          <span>Contact</span>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">
            Sign In
          </button>

          <button className="logout-btn">
            Dashboard
          </button>
        </div>

      </header>

      {/* Hero */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-badge">
            ❤️ AI Powered Healthcare
          </span>

          <h1>
            Your Personal
            <br />
            <span>Health Companion</span>
          </h1>

          <p>
            Manage medicines, monitor wellness,
            health records, pregnancy tracking
            and emergency support — all in one place.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Explore
            </button>

          </div>
          <div className="hero-features">
<div className="feature-chip">💊 Medicine Reminder</div>
<div className="feature-chip">❤️ AI Wellness</div>
<div className="feature-chip">🚨 Emergency SOS</div>
<div className="feature-chip">📄 Health Records</div>
</div>

        </div>

        <div className="hero-right">

          <img
            src={heroImage}
            alt="Healthcare"
          />

          <div className="floating-card medicine-card">
            💊 Medicine Reminder
          </div>

          <div className="floating-card wellness-small">
            ❤️ Wellness 82%
          </div>

        </div>

      </section>
            {/* Quick Stats */}

      <section className="stats">

        <div className="stat-card">

          <div className="stat-icon">❤️</div>

          <div>

            <h2>82%</h2>

            <p>Wellness Score</p>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">💊</div>

          <div>

            <h2>03</h2>

            <p>Medicines Today</p>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">🔥</div>

          <div>

            <h2>14</h2>

            <p>Day Streak</p>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-icon">📋</div>

          <div>

            <h2>25</h2>

            <p>Health Records</p>

          </div>

        </div>

      </section>
      <section className="health-banner">
        <section className="tips-section">

<div className="section-title">
<h2>Health Tips</h2>
<p>Simple habits for a healthier lifestyle.</p>
</div>

<div className="tips-grid">

<div className="tip-card">
<div className="tip-icon">💧</div>
<h3>Stay Hydrated</h3>
<p>Drink 2–3 litres of water every day.</p>
</div>

<div className="tip-card">
<div className="tip-icon">🥗</div>
<h3>Healthy Diet</h3>
<p>Eat fruits, vegetables and protein daily.</p>
</div>

<div className="tip-card">
<div className="tip-icon">🏃</div>
<h3>Exercise</h3>
<p>Walk at least 30 minutes every day.</p>
</div>

<div className="tip-card">
<div className="tip-icon">😴</div>
<h3>Sleep</h3>
<p>Sleep 7–8 hours for better recovery.</p>
</div>
<section className="doctor-section">

<div className="section-title">
<h2>Meet Our Specialists</h2>
<p>Experienced healthcare professionals dedicated to your wellbeing.</p>
</div>

<div className="doctor-grid">

<div className="doctor-card">
<img src="https://randomuser.me/api/portraits/women/65.jpg" alt="doctor"/>
<h3>Dr. Sarah Wilson</h3>
<span>Cardiologist</span>
<button>Book Appointment</button>
</div>

<div className="doctor-card">
<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="doctor"/>
<h3>Dr. James Lee</h3>
<span>Gynecologist</span>
<button>Book Appointment</button>
</div>

<div className="doctor-card">
<img src="https://randomuser.me/api/portraits/women/32.jpg" alt="doctor"/>
<h3>Dr. Emma Brown</h3>
<span>Nutritionist</span>
<button>Book Appointment</button>
</div>

</div>

</section>

</div>

</section>

<div>
<h2>Your Health Journey Starts Here</h2>
<p>Track medicines, monitor wellness, manage records and stay healthy every day.</p>
</div>

<button>Explore Dashboard</button>

</section>

<div className="hero-rating">

<div className="rating-card">
<h3>4.9★</h3>
<p>User Rating</p>
</div>

<div className="rating-card">
<h3>10K+</h3>
<p>Active Users</p>
</div>

<div className="rating-card">
<h3>24×7</h3>
<p>Emergency Help</p>
</div>

</div>

      {/* Feature Cards */}

      <section className="cards">

        <div className="card" onClick={() => navigate("/medications")}>

          <GiMedicines className="card-icon"/>

          <h3>Medication</h3>

          <p>
            Track medicines with smart reminders
            and daily notifications.
          </p>

          <button>Open →</button>

        </div>

        <div className="card" onClick={() => navigate("/period")}>

          <PiCalendarHeartBold className="card-icon"/>

          <h3>Period Tracker</h3>

          <p>
            Predict next cycle and
            monitor your health.
          </p>

          <button>Open →</button>

        </div>

        <div className="card" onClick={() => navigate("/pregnancy")}>

          <LuBaby className="card-icon"/>

          <h3>Pregnancy</h3>

          <p>
            Weekly baby growth
            and appointment tracking.
          </p>

          <button>Open →</button>

        </div>

        <div className="card" onClick={() => navigate("/records")}>

          <VscFileSymlinkDirectory className="card-icon"/>

          <h3>Health Records</h3>

          <p>
            Store reports,
            prescriptions and history.
          </p>

          <button>Open →</button>

        </div>

        <div className="card" onClick={() => navigate("/emergency")}>

          <FaFirstAid className="card-icon"/>

          <h3>SOS</h3>

          <p>
            One tap emergency
            support and contacts.
          </p>

          <button>Open →</button>

        </div>

        <div className="card" onClick={() => navigate("/caregiver")}>

          <BsPersonHeart className="card-icon"/>

          <h3>Caregiver</h3>

          <p>
            Manage family members
            and caregivers.
          </p>

          <button>Open →</button>

        </div>

      </section>
            {/* Bottom Section */}

      <section className="bottom">

        <div className="card reminder-card">

          <div className="card-head">

            <TbBellRinging className="card-icon"/>

            <h3>Today's Reminder</h3>

          </div>

          <div className="reminder-box">

            <h4>💊 Vitamin D Tablet</h4>

            <p>08:00 AM</p>

          </div>

          <button className="primary-btn">
            Mark as Done
          </button>

        </div>

        <div
          className="card wellness-card"
          onClick={() => navigate("/wellness")}
        >

          <h3>Wellness Summary</h3>

          <PieAnimation />

          <p>Your overall wellness score</p>

        </div>

        <div className="card weekly-card">

          <div className="card-head">

            <SlGraph className="card-icon"/>

            <h3>Weekly Progress</h3>

          </div>

          <div className="bars">

            <div style={{height:"35%"}}></div>
            <div style={{height:"55%"}}></div>
            <div style={{height:"70%"}}></div>
            <div style={{height:"90%"}}></div>
            <div style={{height:"65%"}}></div>
            <div style={{height:"80%"}}></div>
            <div style={{height:"95%"}}></div>

          </div>

        </div>

      </section>
            {/* Footer */}

      <footer className="footer">

        <div className="footer-left">

          <h2>CareYours</h2>

          <p>
            Your AI powered healthcare companion.
            Manage medicines, wellness,
            pregnancy, emergency support
            and health records from one dashboard.
          </p>

        </div>

        <div className="footer-links">

          <div>

            <h4>Features</h4>

            <p>Medication</p>

            <p>Wellness</p>

            <p>Pregnancy</p>

            <p>Health Records</p>

          </div>

          <div>

            <h4>Support</h4>

            <p>Help Center</p>

            <p>Privacy</p>

            <p>Terms</p>

            <p>Contact</p>

          </div>

        </div>

      </footer>

    </div>
    

  );

};

export default Dashboard;