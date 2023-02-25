"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performDateArithmetic = void 0;
const performDateArithmetic = (date, options) => {
    const { duration, unit, operation } = options;
    let result;
    switch (unit) {
        case 'day':
            result = operation === 'add' ? date.add(duration, 'days') : date.subtract(duration, 'days');
            break;
        case 'week':
            result = operation === 'add' ? date.add(duration, 'weeks') : date.subtract(duration, 'weeks');
            break;
        case 'month':
            result = operation === 'add' ? date.add(duration, 'months') : date.subtract(duration, 'months');
            break;
        default:
            throw new Error(`Invalid duration unit: ${unit}`);
    }
    return result;
};
exports.performDateArithmetic = performDateArithmetic;
