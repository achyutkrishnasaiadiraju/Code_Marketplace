import React, { useState } from 'react';
import './Subscription.css';

const Subscription = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        // Implement subscription functionality here
        setSubscribed(true);
    };

    return (
        <div className="subscription">
            {subscribed ? (
                <p>You are subscribed!</p>
            ) : (
                <button onClick={handleSubscribe}>Subscribe</button>
            )}
        </div>
    );
};

export default Subscription;
