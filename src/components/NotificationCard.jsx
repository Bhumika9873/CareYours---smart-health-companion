function NotificationCard(){
return(
<div className="notification-card">
<h2>Notifications</h2>
<div className="notification-item">
<h4>💊 Medicine Reminder</h4>
<p>Take Vitamin D at 8:00 PM</p>
</div>
<div className="notification-item">
<h4>💧 Water Goal</h4>
<p>Only 1.2L left to complete today's target.</p>
</div>
<div className="notification-item">
<h4>📄 Health Report</h4>
<p>Your blood test report was uploaded successfully.</p>
</div>
</div>
);
}
export default NotificationCard;