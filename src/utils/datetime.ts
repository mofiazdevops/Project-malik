interface ITimeUnits {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export const getTimeUnits = (difference: number) => {
  let timeLeft: ITimeUnits = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (60 * 60 * 24)),
      hours: Math.floor((difference / (60 * 60)) % 24),
      minutes: Math.floor((difference / 60) % 60),
      seconds: Math.floor(difference % 60),
    };
  }
  return timeLeft;
};

const emptyTimeUnits: ITimeUnits = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export const calculateTimeLeft = (endTime: number | undefined) => {
  if (!endTime) return emptyTimeUnits;

  const difference = +endTime - +new Date() / 1000;
  return getTimeUnits(difference);
};

export const calculateTimeElapsed = (startTime: number | undefined) => {
  if (!startTime) return emptyTimeUnits;

  const difference = +new Date() / 1000 - +startTime;
  return getTimeUnits(difference);
};
