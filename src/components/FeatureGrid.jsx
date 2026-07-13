import{Link}from"react-router-dom";
import{FaPills,FaHeartbeat,FaFileMedical,FaUserFriends,FaFemale,FaBaby}from"react-icons/fa";

function FeatureGrid(){
const features=[
{icon:<FaPills/>,title:"Medicine Reminder",desc:"Manage medicines & reminders",path:"/medications"},
{icon:<FaFemale/>,title:"Period Tracker",desc:"Track your menstrual cycle",path:"/period"},
{icon:<FaBaby/>,title:"Pregnancy Tracker",desc:"Monitor pregnancy journey",path:"/pregnancy"},
{icon:<FaHeartbeat/>,title:"Wellness Monitor",desc:"Track sleep,water & steps",path:"/wellness"},
{icon:<FaFileMedical/>,title:"Health Records",desc:"View & upload reports",path:"/records"},
{icon:<FaUserFriends/>,title:"Caregiver",desc:"Stay connected with caregiver",path:"/caregiver"}
];
return(
<section className="feature-section">
<div className="section-heading">
<h2>Explore Features</h2>
<p>Select any feature to manage your health efficiently.</p>
</div>
<div className="feature-grid">
{features.map((item,index)=>(
<Link to={item.path} className="feature-card" key={index}>
<div className="feature-icon">{item.icon}</div>
<h3>{item.title}</h3>
<p>{item.desc}</p>
<span>View Details →</span>
</Link>
))}
</div>
</section>
);
}
export default FeatureGrid;