"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeZoneOffSet = exports.convertDateTime = void 0;
const moment = require("moment-timezone");
const convertDateTime = (dateTime, fromTimeZone, toTimeZone) => {
    const convertedDateTime = moment.tz(dateTime, fromTimeZone).tz(toTimeZone);
    return convertedDateTime.format();
};
exports.convertDateTime = convertDateTime;
const getTimeZoneOffSet = (timezone1, timezone2) => {
    const now = moment();
    const offset1 = moment.tz(now, timezone1).utcOffset();
    const offset2 = moment.tz(now, timezone2).utcOffset();
    const difInMinutes = Math.abs(offset1 - offset2);
    const offset = moment.duration(difInMinutes, "minutes").toISOString();
    return offset;
};
exports.getTimeZoneOffSet = getTimeZoneOffSet;
