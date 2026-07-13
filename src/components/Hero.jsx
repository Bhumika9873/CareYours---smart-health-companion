import "./Hero.css";
import { Sparkles, ShieldAlert, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="hero">

      <div className="heroLeft">

        <span className="welcomeBadge">
          👋 Welcome Back
        </span>

        <h1>
          Good Morning,
          <span> Bhumika</span>
        </h1>

        <p>
          Stay on top of your health with smart reminders,
          AI-powered insights, wellness tracking and complete
          healthcare management in one place.
        </p>

        <div className="heroButtons">
          <button className="primaryBtn">
            Explore Dashboard
            <ArrowRight size={18}/>
          </button>

          <button className="secondaryBtn">
            View Reports
          </button>
        </div>

      </div>

      <div className="heroRight">

        <div className="aiCard">

          <div className="cardTop">
            <Sparkles size={24}/>
            <h3>AI Health Tip</h3>
          </div>

          <p>
            Drink one more glass of water today.
            Based on your activity, you're slightly
            below your hydration goal.
          </p>

          <button>
            View Suggestion
          </button>

        </div>

        <div className="sosCard">

          <div className="cardTop">
            <ShieldAlert size={24}/>
            <h3>Emergency SOS</h3>
          </div>

          <p>
            Instantly alert your caregivers and
            emergency contacts with one tap.
          </p>

          <button>
            Activate SOS
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;