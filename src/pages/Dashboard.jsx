// import { useNavigate } from "react-router-dom";
// import "../styles/styles.css";

// // function Dashboard() {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="dashboard">
      
// //       <h1 className="title">Welcome, Bhumi 👋</h1>

// //       <div className="grid">

// //         <div className="box" onClick={() => navigate("/medications")}>
// //           <h2>Medication Management</h2>
// //           <p>Next Dose: 8:00 PM</p>
// //         </div>

// //         <div className="box" onClick={() => navigate("/period")}>
// //           <h2>Cycle & Fertility Tracker</h2>
// //           <p>Next Period: 5 Days</p>
// //         </div>

// //         <div className="box" onClick={() => navigate("/pregnancy")}>
// //           <h2>Pregnancy Care</h2>
// //           <p>26 Weeks</p>
// //         </div>

// //         <div className="box" onClick={() => navigate("/records")}>
// //           <h2>Health Records</h2>
// //           <p>View Reports</p>
// //         </div>

// //         <div className="box" onClick={() => navigate("/wellness")}>
// //           <h2>Wellness Monitor</h2>
// //           <p>Steps, Sleep, Water</p>
// //         </div>

// //         <div className="box" onClick={() => alert("SOS Triggered 🚨")}>
// //           <h2>Emergency</h2>
// //           <p>SOS</p>
// //         </div>

// //         <div className="box" onClick={() => navigate("/caregiver")}>
// //           <h2>Caregiver Portal</h2>
// //           <p>Manage caregivers</p>
// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Dashboard;

// function Dashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="dash-container">

//       <h2 className="center-title">Welcome, Bhumi 👋</h2>

//       <div className="dash-grid">

//         {/* Medication */}
//         <div 
//           className="dash-card"
//           onClick={() => navigate("/medications")}
//         >
//           <h3>💊 Medication Management</h3>
//           <p>Next Dose: 8:00 PM</p>

//           <button onClick={(e) => e.stopPropagation()}>
//             View Schedule
//           </button>
//           <button onClick={(e) => e.stopPropagation()}>
//             Add Reminder
//           </button>
//           <button onClick={(e) => e.stopPropagation()}>
//             Manage Medicines
//           </button>
//         </div>

//         {/* Cycle */}
//         <div 
//           className="dash-card"
//           onClick={() => navigate("/period")}
//         >
//           <h3>🗓 Cycle & Fertility Tracker</h3>
//           <p>Next Period: 5 Days</p>

//           <button onClick={(e) => e.stopPropagation()}>
//             Track Cycle
//           </button>
//           <button onClick={(e) => e.stopPropagation()}>
//             View Calendar
//           </button>
//         </div>

//         {/* Pregnancy */}
//         <div 
//           className="dash-card"
//           onClick={() => navigate("/pregnancy")}
//         >
//           <h3>🤰 Pregnancy Care Hub</h3>
//           <p>26 Weeks</p>

//           <button onClick={(e) => e.stopPropagation()}>
//             Track Pregnancy
//           </button>
//           <button onClick={(e) => e.stopPropagation()}>
//             View Timeline
//           </button>
//         </div>

//         {/* Records */}
//         <div 
//           className="dash-card"
//           onClick={() => navigate("/records")}
//         >
//           <h3>📁 Health Records Vault</h3>
//           <p>Medical Reports</p>

//           <button onClick={(e) => e.stopPropagation()}>
//             View Records
//           </button>
//           <button onClick={(e) => e.stopPropagation()}>
//             Upload Record
//           </button>
//         </div>

//         {/* Wellness */}
//         <div 
//           className="dash-card wide"
//           onClick={() => navigate("/wellness")}
//         >
//           <h3>❤️ Wellness Monitor</h3>
//           <p>Steps: 7200</p>
//           <p>Water: 6 Glasses</p>
//           <p>Sleep: 7 hrs</p>

//           <div className="row">
//             <button onClick={(e) => e.stopPropagation()}>
//               View Insights
//             </button>
//             <button onClick={(e) => e.stopPropagation()}>
//               Log Activity
//             </button>
//           </div>
//         </div>

//         {/* Emergency */}
//         <div className="dash-card wide center">
//           <h3>🚨 Emergency Support</h3>

//           {/* SOS */}
//           <div 
//             className="sos"
//             onClick={() => alert("SOS Activated 🚨")}
//           >
//             SOS
//           </div>

//           <button 
//             onClick={() => navigate("/emergency")}
//           >
//             Manage Emergency Contacts
//           </button>
//         </div>

//         {/* Caregiver */}
//         <div 
//           className="dash-card wide"
//           onClick={() => navigate("/caregiver")}
//         >
//           <h3>👨‍⚕️ Caregiver Portal</h3>
//           <p>Support & Manage Caregivers</p>

//           <div className="row">
//             <button 
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate("/caregiver");
//               }}
//             >
//               Caregiver Login
//             </button>

//             <button 
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate("/caregiver");
//               }}
//             >
//               Register
//             </button>

//             <button 
//               onClick={(e) => {
//                 e.stopPropagation();
//                 navigate("/caregiver");
//               }}
//             >
//               Manage
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      {/* NAVBAR */}
      <div className="nav">
        <h2>💚 CareYours</h2>

        <div className="nav-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/progress")}>Progress</span>
          <span onClick={() => navigate("/contact")}>Contact</span>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">

        <div className="hero-left">
          <h1>Care that feels personal</h1>
          <p>Your smart health companion for daily tracking.</p>

          <div className="hero-btns">
            <button onClick={() => navigate("/medication")} className="btn-green">
              Medication
            </button>

            <button onClick={() => navigate("/cycle")} className="btn-pink">
              Period Tracker
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="circle">
            <span>62%</span>
          </div>
          <p>Today's Wellness</p>
        </div>

      </div>

      {/* CARDS */}
      <div className="cards">

        <Card title="Medication" onClick={() => navigate("/medication")} />
        <Card title="Period Tracker" pink onClick={() => navigate("/cycle")} />
        <Card title="Pregnancy" pink onClick={() => navigate("/pregnancy")} />
        <Card title="Health Records" onClick={() => navigate("/records")} />
        <Card title="SOS" pink onClick={() => navigate("/sos")} />
        <Card title="Caregiver" onClick={() => navigate("/caregiver")} />

      </div>

      {/* INSIGHTS */}
      <div className="insights">

        <div className="insight-card">
          <h3>Medication Reminder</h3>
          <p>8:00 AM • 1 pill</p>
          <button onClick={() => navigate("/medication")}>Mark Done</button>
        </div>

        <div className="insight-card">
          <h3>Weekly Progress</h3>

          <div className="bars">
            <div style={{height:"40%"}}></div>
            <div style={{height:"60%"}}></div>
            <div style={{height:"50%"}}></div>
            <div style={{height:"80%"}}></div>
            <div style={{height:"70%"}}></div>
          </div>

        </div>

      </div>

    </div>
  );
}

function Card({ title, pink, onClick }) {
  return (
    <div className={`card ${pink ? "pink" : ""}`} onClick={onClick}>
      <h3>{title}</h3>
      <button onClick={(e) => { e.stopPropagation(); onClick(); }}>
        Open
      </button>
    </div>
  );
}

export default Dashboard;