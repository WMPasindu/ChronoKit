const moment = require("moment-timezone");

// function to convert date and time from one timezone to another
const convertDateTime = (
  dateTime: string,
  fromTimeZone: string,
  toTimeZone: string
) => {
  const convertedDateTime = moment.tz(dateTime, fromTimeZone).tz(toTimeZone);
  return convertedDateTime.format("YYYY-MM-DD HH:mm:ss z");
};

// function to determine the offset between two time zone
const getTimeZoneOffSet = (timezone1: string, timezone2: string) => {
  const now = moment();
  const offset1 = moment.tz(now, timezone1).utcOffset();
  const offset2 = moment.tz(now, timezone2).utcOffset();
  const difInMinutes = Math.abs(offset1 - offset2);
  const offset = moment.duration(difInMinutes, "minutes").toISOString();
  return offset;
};

export { convertDateTime, getTimeZoneOffSet };
