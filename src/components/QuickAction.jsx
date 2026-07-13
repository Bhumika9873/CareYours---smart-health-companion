import "./QuickActions.css";
import { Link } from "react-router-dom";
import {
  Pill,
  HeartPulse,
  Baby,
  Activity,
  FileText,
  Bot,
  Users,
  ShieldAlert
} from "lucide-react";

const actions = [
  {
    title: "Medicine Reminder",
    desc: "Manage medicines & reminders",
    icon: <Pill size={32} />,
    color: "purple",
    path: "/medications"
  },
  {
    title: "Period Tracker",
    desc: "Track your monthly cycle",
    icon: <HeartPulse size={32} />,
    color: "pink",
    path: "/period"
  },
  {
    title: "Pregnancy Tracker",
    desc: "Weekly pregnancy progress",
    icon: <Baby size={32} />,
    color: "orange",
    path: "/pregnancy"
  },
  {
    title: "Wellness Monitor",
    desc: "Sleep, water & activity",
    icon: <Activity size={32} />,
    color: "green",
    path: "/wellness"
  },
  {
    title: "Health Records",
    desc: "Medical reports & history",
    icon: <FileText size={32} />,
    color: "blue",
    path: "/records"
  },
  {
    title: "AI Assistant",
    desc: "Smart healthcare guidance",
    icon: <Bot size={32} />,
    color: "violet",
    path: "/assistant"
  },
  {
    title: "Caregiver",
    desc: "Family health connection",
    icon: <Users size={32} />,
    color: "cyan",
    path: "/caregiver"
  },
  {
    title: "Emergency SOS",
    desc: "Instant emergency help",
    icon: <ShieldAlert size={32} />,
    color: "red",
    path: "/emergency"
  }
];

function QuickActions() {
  return (
    <section className="quickSection">

      <div className="sectionHeading">
        <h2>Quick Actions</h2>
        <p>Access your most used healthcare features.</p>
      </div>

      <div className="quickGrid">

        {actions.map((item, index) => (
          <Link
            to={item.path}
            className={`quickCard ${item.color}`}
            key={index}
          >
            <div className="quickIcon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span>
              Open →
            </span>

          </Link>
        ))}

      </div>

    </section>
  );
}

export default QuickActions;