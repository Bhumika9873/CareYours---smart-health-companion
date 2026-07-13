import "./StatsSection.css";
import {
  Pill,
  Droplets,
  Footprints,
  Moon,
  HeartPulse
} from "lucide-react";

const stats = [
  {
    icon: <Pill size={28} />,
    title: "Today's Medicines",
    value: "3 / 5",
    desc: "2 medicines remaining",
    progress: "60%"
  },
  {
    icon: <Droplets size={28} />,
    title: "Water Intake",
    value: "1.8 L",
    desc: "Goal: 3 Litres",
    progress: "60%"
  },
  {
    icon: <Footprints size={28} />,
    title: "Steps",
    value: "6,482",
    desc: "Goal: 10,000",
    progress: "64%"
  },
  {
    icon: <Moon size={28} />,
    title: "Sleep",
    value: "7h 20m",
    desc: "Goal: 8 Hours",
    progress: "91%"
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Health Score",
    value: "92%",
    desc: "Excellent Condition",
    progress: "92%"
  }
];

function StatsSection() {
  return (
    <section className="statsSection">
      {stats.map((item, index) => (
        <div className="statCard" key={index}>

          <div className="statIcon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <h2>{item.value}</h2>

          <p>{item.desc}</p>

          <div className="progress">
            <span style={{ width: item.progress }}></span>
          </div>

          <button>
            View Details
          </button>

        </div>
      ))}
    </section>
  );
}

export default StatsSection;