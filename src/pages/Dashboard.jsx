import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import StatsSection from "../components/StatsSection/StatsSection";
import QuickActions from "../components/QuickActions/QuickActions";
import DashboardBottom from "../components/DashboardBottom/DashboardBottom";
import WellnessBanner from "../components/WellnessBanner/WellnessBanner";
import Footer from "../components/Footer/Footer";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <main className="dashboard-container">
        <Hero />

        <StatsSection />

        <QuickActions />

        <DashboardBottom />

        <WellnessBanner />
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;