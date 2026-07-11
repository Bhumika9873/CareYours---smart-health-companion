// PART 12 : PieAnimation.jsx (Replace Complete File)

import {useEffect,useState} from "react";
import "./PieAnimation.css";

export default function PieAnimation(){
const[target]=useState(82);
const[progress,setProgress]=useState(0);

useEffect(()=>{
let start=0;
const timer=setInterval(()=>{
start++;
setProgress(start);
if(start>=target)clearInterval(timer);
},18);
return()=>clearInterval(timer);
},[target]);

return(
<div className="pie-wrapper">

<div
className="pie-ring"
style={{
background:`conic-gradient(#7CB342 ${progress*3.6}deg,#E8F7DA 0deg)`
}}
>

<div className="pie-inner">

<h2>{progress}%</h2>

<span>Excellent</span>

</div>

</div>

<div className="pie-info">

<div>

<h4>Sleep</h4>

<p>7.8 hrs</p>

</div>

<div>

<h4>Water</h4>

<p>2.4 L</p>

</div>

<div>

<h4>Steps</h4>

<p>8,524</p>

</div>

</div>

</div>
);
}