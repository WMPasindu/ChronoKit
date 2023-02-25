import moment from "moment";
import { DateArithmeticFunction, DateArithmeticOptions } from "../utils/types";

export const performDateArithmetic: DateArithmeticFunction = (
  date: moment.Moment,
  options: DateArithmeticOptions
) => {
  const { duration, unit, operation } = options;

  let result: moment.Moment;

  switch (unit) {
    case "day":
      result =
        operation === "add"
          ? date.add(duration, "days")
          : date.subtract(duration, "days");
      break;
    case "week":
      result =
        operation === "add"
          ? date.add(duration, "weeks")
          : date.subtract(duration, "weeks");
      break;
    case "month":
      result =
        operation === "add"
          ? date.add(duration, "months")
          : date.subtract(duration, "months");
      break;
    default:
      throw new Error(`Invalid duration unit: ${unit}`);
  }

  return result;
};
