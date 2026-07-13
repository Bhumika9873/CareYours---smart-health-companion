import{FaPills,FaTint,FaHeartbeat}from"react-icons/fa";
import{IoWalk}from"react-icons/io5";
import{BsMoonStarsFill}from"react-icons/bs";

function SummarySection(){
const data=[
{icon:<FaPills/>,title:"Today's Medicines",value:"3",desc:"Next • 8:00 PM"},
{icon:<FaTint/>,title:"Water Intake",value:"1.8 L",desc:"Goal • 3 L"},
{icon:<IoWalk/>,title:"Steps",value:"6,280",desc:"Goal • 10,000"},
{icon:<BsMoonStarsFill/>,title:"Sleep",value:"7h 40m",desc:"Good Sleep"},
{icon:<FaHeartbeat/>,title:"Heart Rate",value:"76 bpm",desc:"Normal"}
];
return(
<section className="summary-grid">
{data.map((item,index)=>(
<div className="summary-card" key={index}>
<div className="summary-icon">{item.icon}</div>
<h4>{item.title}</h4>
<h2>{item.value}</h2>
<p>{item.desc}</p>
</div>
))}
</section>
);
}
export default SummarySection;