import{Link}from"react-router-dom";

function SOSCard(){
return(
<div className="sos-card">
<h2>🚨 Emergency SOS</h2>
<p>Need immediate medical help?</p>
<Link to="/emergency">
<button>Open SOS</button>
</Link>
</div>
);
}
export default SOSCard;