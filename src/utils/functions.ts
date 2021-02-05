import { Period } from "../types";

export const formatTime = (time: Date, show: boolean = true): string => {
  let t = new Date(time);
  let hr = t.getHours();
  let ampm = "";
  if (show) {
    ampm = hr > 11 ? " PM" : " AM";
    hr = hr > 12 ? hr - 12 : hr;
  }
  return ("0" + hr).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2) + ampm;
};

export const filterToday = (schedule) => {
  let current: string = formatTime(new Date(), false);
  let currentPeriod: Period = null;
  let upcommingPeriod: Array<Period> = [];

  schedule.map((period: Period) => {
    if (period.start <= current && period.end > current) {
      currentPeriod = period;
    } else if (current <= period.start) {
      upcommingPeriod.push(period);
    }
  });
  return { currentPeriod, upcommingPeriod };
};
