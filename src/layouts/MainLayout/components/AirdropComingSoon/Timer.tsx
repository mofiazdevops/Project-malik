import React, { useEffect, useState } from "react";

interface TimerProps {
  targetDate: any;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      // Timer expired
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      expired: false,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds, expired } = timeRemaining;

  if (expired) {
    return <div>Timer expired!</div>;
  }

  return (
    <div>
      <p className="d-flex align-items-center h-100 mb-0">
        <span className="day me-1">
          <p className="mb-0">{days}</p>
          <span className="span_class">Days</span>
        </span>
        <span className="hour me-1">
          <p className="mb-0">{hours}</p>
          <span className="span_class"> Hours</span>
        </span>
        <span className="minute me-1">
          <p className="mb-0">{minutes}</p>
          <span className="span_class"> Minutes</span>
        </span>
        <span className="second">
          <p className="mb-0">{seconds}</p>
          <span className="span_class">Seconds</span>
        </span>
      </p>
    </div>
  );
};

export default Timer;
