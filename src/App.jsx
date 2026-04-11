import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import Dashboard from "./pages/Dashboard.jsx";
import Medications from "./pages/Medications.jsx";
import Wellness from "./pages/Wellness.jsx";
import HealthRecords from "./pages/HealthRecords.jsx";
import PeriodTracker from "./pages/PeriodTracker.jsx";
import PregnancyTracker from "./pages/PregnancyTracker.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/records" element={<HealthRecords />} />
        <Route path="/period" element={<PeriodTracker />} />
        <Route path="/pregnancy" element={<PregnancyTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;