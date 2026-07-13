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
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/profile" element={<Profile />} />
<Route path="/appointments" element={<Appointments />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/assistant" element={<AIAssistant />} />
<Route path="/water" element={<WaterTracker />} />
<Route path="/sleep" element={<SleepTracker />} />
<Route path="/steps" element={<StepsTracker />} />
<Route path="*" element={<NotFound />} />
</Routes>
);
}
export default App;