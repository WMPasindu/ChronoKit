"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimeZone = void 0;
const moment = require("moment-timezone");
const convertTimeZone = (dateTime, fromZone, toZone) => {
    const dateTimeMomentObj = moment.tz(dateTime, fromZone);
    const convertedTimeZone = dateTimeMomentObj.clone().tz(toZone);
    return convertedTimeZone.format("YYYY-MM-DD HH:mm:ss");
};
exports.convertTimeZone = convertTimeZone;
