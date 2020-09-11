import uuid from "uuid";
const prepareTimerObject = (object) => {
  return {
    ...object,
    id: uuid.v4(),
    elapsed: 0,
    runningSince: null,
  };
};
const TimerHuman = ({ runningSince, elapsed }) => {
  let now = new Date().getTime();
  if (!runningSince) {
    now = 0;
  }
  let date = now - runningSince + elapsed,
    hours = Math.floor(date / 3600000),
    mins = Math.floor((date % 3600000) / 60000),
    secs = Math.floor((date % 60000) / 1000),
    milli = Math.floor((date % 1000) / 10);

  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  return `${hours}:${mins}:${secs}:${milli}`;
};

const helpers = { prepareTimerObject, TimerHuman };
export default helpers;
