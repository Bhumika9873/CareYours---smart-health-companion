import{Routes,Route}from"react-router-dom";
import Dashboard from"./pages/Dashboard";
import Medications from"./pages/Medications";
import Wellness from"./pages/Wellness";
import HealthRecords from"./pages/HealthRecords";
import PeriodTracker from"./pages/PeriodTracker";
import PregnancyTracker from"./pages/PregnancyTracker";
import CareGiver from"./pages/CareGiver";
import Emergency from"./pages/Emergency";

function App(){
return(
<Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/emergency" element={<Emergency/>}/>
<Route path="/medications" element={<Medications/>}/>
<Route path="/wellness" element={<Wellness/>}/>
<Route path="/records" element={<HealthRecords/>}/>
<Route path="/period" element={<PeriodTracker/>}/>
<Route path="/pregnancy" element={<PregnancyTracker/>}/>
<Route path="/caregiver" element={<CareGiver/>}/>
</Routes>
);
}
export default App;