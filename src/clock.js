import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (unit) => unit.toString().padStart(2, '0');

  const getFormattedTime = () => {
    let hours = time.getHours();
    let minutes = formatTime(time.getMinutes());
    let seconds = formatTime(time.getSeconds());

    if (!is24Hour) {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${formatTime(hours)}:${minutes}:${seconds} ${ampm}`;
    }

    return `${formatTime(hours)}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock-container">
      <div className="clock-glass">
        <div className="clock-neon">{getFormattedTime()}</div>
        <button onClick={() => setIs24Hour(!is24Hour)} className="toggle-btn">
          Switch to {is24Hour ? '12-hour' : '24-hour'}
        </button>
      </div>
    </div>
  );
}

export default Clock;
