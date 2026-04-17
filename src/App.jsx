import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Dashboard from "./pages/Dashboard.jsx";
import Medications from "./pages/Medications.jsx";
import Wellness from "./pages/Wellness.jsx";
import HealthRecords from "./pages/HealthRecords.jsx";
import PeriodTracker from "./pages/PeriodTracker.jsx";
import PregnancyTracker from "./pages/PregnancyTracker.jsx";
import Navbar from "./components/Navbar.jsx";
import CareGiver from "./pages/CareGiver.jsx";
import Emergency from "./pages/Emergency.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/records" element={<HealthRecords />} />
        <Route path="/period" element={<PeriodTracker />} />
        <Route path="/pregnancy" element={<PregnancyTracker />} />
        <Route path="/caregiver" element={<CareGiver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;