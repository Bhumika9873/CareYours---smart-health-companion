import "./DashboardBottom.css";
import {
  CalendarDays,
  Bell,
  Clock3,
  HeartPulse,
  Pill,
  ChevronRight
} from "lucide-react";

const notifications = [
  {
    title: "Medicine Reminder",
    time: "09:00 AM"
  },
  {
    title: "Drink Water",
    time: "10:30 AM"
  },
  {
    title: "Walk 1000 Steps",
    time: "01:00 PM"
  },
  {
    title: "Sleep Before 11 PM",
    time: "10:00 PM"
  }
];

const schedule = [
  {
    icon: <Pill size={20} />,
    title: "Vitamin D Tablet",
    time: "9:00 AM"
  },
  {
    icon: <HeartPulse size={20} />,
    title: "Blood Pressure Check",
    time: "11:30 AM"
  },
  {
    icon: <CalendarDays size={20} />,
    title: "Doctor Appointment",
    time: "5:00 PM"
  }
];

function DashboardBottom() {
  return (
    <section className="dashboardBottom">

      <div className="appointmentCard">

        <div className="cardHeading">
          <h2>Upcoming Appointment</h2>
          <CalendarDays size={22}/>
        </div>

        <h3>Dr. Priya Sharma</h3>

        <p>General Physician</p>

        <div className="appointmentInfo">
          <span>📅 16 July 2026</span>
          <span>🕒 05:00 PM</span>
        </div>

        <button>
          View Details
          <ChevronRight size={18}/>
        </button>

      </div>

      <div className="scheduleCard">

        <div className="cardHeading">
          <h2>Today's Schedule</h2>
          <Clock3 size={22}/>
        </div>

        <div className="timeline">

          {schedule.map((item,index)=>(
            <div className="timelineItem" key={index}>

              <div className="timelineIcon">
                {item.icon}
              </div>

              <div className="timelineText">
                <h4>{item.title}</h4>
                <p>{item.time}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

      <div className="notificationCard">

        <div className="cardHeading">
          <h2>Notifications</h2>
          <Bell size={22}/>
        </div>

        {notifications.map((item,index)=>(
          <div className="notifyItem" key={index}>

            <div>
              <h4>{item.title}</h4>
              <p>{item.time}</p>
            </div>

            <span className="notifyDot"></span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default DashboardBottom;