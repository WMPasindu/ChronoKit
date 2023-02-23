import { DateTimeTypes } from "../utils/types";
const moment = require("moment-timezone");

const convertTimeZone = (
  dateTime: string,
  fromZone: string,
  toZone: string
): string => {
  // parse the date/time string into the moment object in the source time zone
  const dateTimeMomentObj = moment.tz(dateTime, fromZone);
  // convert the moment object to the destination time zone
  const convertedTimeZone = dateTimeMomentObj.clone().tz(toZone);
  // return the new date/time string in the destination time zone
  return convertedTimeZone.format("YYYY-MM-DD HH:mm:ss");
};

export { convertTimeZone };
