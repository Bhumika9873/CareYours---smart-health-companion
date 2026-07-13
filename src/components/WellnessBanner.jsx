import "./WellnessBanner.css";
import { ArrowRight, HeartHandshake } from "lucide-react";

function WellnessBanner() {
  return (
    <section className="wellnessBanner">

      <div className="wellnessLeft">

        <div className="wellnessBadge">
          <HeartHandshake size={18}/>
          Daily Wellness
        </div>

        <h2>
          Take Care of Your Mind
          <br />
          & Body Every Day
        </h2>

        <p>
          Small healthy habits every day create a happier,
          stronger and healthier future. Stay active,
          stay hydrated and never skip your medicines.
        </p>

        <button>
          Explore Wellness
          <ArrowRight size={18}/>
        </button>

      </div>

      <div className="wellnessRight">

        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>

        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"
          alt="Wellness"
        />

      </div>

    </section>
  );
}

export default WellnessBanner;