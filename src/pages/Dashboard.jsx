import React from "react";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

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

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <FaHeartbeat className="logo-icon" />
          CareYours
        </div>

        <div className="nav-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/contact")}>Contact</span>
        </div>

        <div className="nav-actions">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Sign In / Sign Up
          </button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1>Care that feels personal</h1>
          <p>Your smart health companion for daily tracking.</p>
        </div>

        <div
          className="card wellness-card"
          onClick={() => navigate("/wellness")}
        >
          <h3>Wellness Summary</h3>
          <PieAnimation />
        </div>
      </div>

      {/* CARDS */}
      <div className="cards">

        <div className="card" onClick={() => navigate("/medication")}>
          <div className="icon-bar green">
            <GiMedicines />
          </div>
          <h3>Medication</h3>
          <p>Track daily medicines</p>
          <button>Open</button>
        </div>

        <div className="card" onClick={() => navigate("/period")}>
          <div className="icon-bar pink">
            <PiCalendarHeartBold />
          </div>
          <h3>Period Tracker</h3>
          <p>Monitor your cycle</p>
          <button>Open</button>
        </div>

        <div className="card" onClick={() => navigate("/pregnancy")}>
          <div className="icon-bar pink">
            <LuBaby />
          </div>
          <h3>Pregnancy</h3>
          <p>Track baby growth</p>
          <button>Open</button>
        </div>

        <div className="card" onClick={() => navigate("/records")}>
          <div className="icon-bar green">
            <VscFileSymlinkDirectory />
          </div>
          <h3>Records</h3>
          <p>View medical history</p>
          <button>Open</button>
        </div>

        <div className="card" onClick={() => alert("SOS Activated 🚨")}>
          <div className="icon-bar pink">
            <FaFirstAid />
          </div>
          <h3>SOS</h3>
          <p>Emergency support</p>
          <button>Open</button>
        </div>

        <div className="card" onClick={() => navigate("/caregiver")}>
          <div className="icon-bar green">
            <BsPersonHeart />
          </div>
          <h3>Caregiver</h3>
          <p>Manage caregivers</p>
          <button>Open</button>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="bottom">

        <div className="card reminder">
          <div className="icon-bar green">
            <TbBellRinging />
          </div>
          <h3>Medication Reminder</h3>
          <p>8:00 AM · 1 pill</p>
          <button>Mark Done</button>
        </div>

        <div className="card weekly">
          <div className="icon-bar pink">
            <SlGraph />
          </div>
          <h3>Weekly Progress</h3>

          <div className="bars">
            <div style={{ height: "40%" }}></div>
            <div style={{ height: "60%" }}></div>
            <div style={{ height: "80%" }}></div>
            <div style={{ height: "70%" }}></div>
            <div style={{ height: "90%" }}></div>
            <div style={{ height: "75%" }}></div>
            <div style={{ height: "85%" }}></div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="footer">
        <h2>CareYours</h2>

        <p>
          Making healthcare simpler. Track, manage, and improve your health
          with your smart companion.
        </p>

        <hr />

        <p className="copyright">
          © 2026 CareYours. Your Health, Your Control.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;
