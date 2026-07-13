import "./Footer.css";
import {
Facebook,
Instagram,
Twitter,
Linkedin
} from "lucide-react";

function Footer(){
return(

<footer className="footer">

<div className="footerTop">

<div className="footerLogo">

<h2>❤ CareYours</h2>

<p>
Your personal healthcare companion for
a happier and healthier life.
</p>

</div>

<div className="footerLinks">

<div>

<h3>Quick Links</h3>

<a href="/">Dashboard</a>
<a href="/">Wellness</a>
<a href="/">Records</a>
<a href="/">Emergency</a>

</div>

<div>

<h3>Support</h3>

<a href="/">Privacy</a>
<a href="/">Terms</a>
<a href="/">Contact</a>
<a href="/">Help Center</a>

</div>

</div>

</div>

<div className="footerBottom">

<p>
© 2026 CareYours. All Rights Reserved.
</p>

<div className="social">

<Facebook size={20}/>
<Instagram size={20}/>
<Twitter size={20}/>
<Linkedin size={20}/>

</div>

</div>

</footer>

);
}

export default Footer;