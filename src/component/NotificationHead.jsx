import { useState } from "react";

const NotificationHead = ({notifications, markAllRead, notificationCount}) => {

    return (
        <>
            <div className="notification-count">
                notifications <span>{notificationCount()}</span>
            </div>
            <div className="mark-read" onClick={()=>markAllRead()}>
                Mark all as read
            </div>
        </>
    );
}
 
export default NotificationHead;