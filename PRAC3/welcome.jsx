import React, { useState, useEffect } from 'react';

function WelcomeApp() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div>
      <h1>Welcome to CHARUSAT!</h1>
      <p>
        The current date is: {dateTime.toLocaleDateString(undefined, dateOptions)}
      </p>
      <p>
        The current time is: {dateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default WelcomeApp;
