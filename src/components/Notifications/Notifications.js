import React from 'react';
import './Notifications.css';

const Notifications = () => {
    // Sample notifications, replace with real data
    const notifications = [
        { id: 1, message: "New code uploaded!" },
        { id: 2, message: "Code review requested." }
    ];

    return (
        <div className="notifications">
            <h3>Notifications</h3>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
