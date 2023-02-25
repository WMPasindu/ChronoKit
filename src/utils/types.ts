import moment from "moment";

export type DurationUnit = "day" | "week" | "month";
export type Operation = "add" | "subtract";

export declare type DateTimeTypes = {
  dateTime: string;
  fromZone: string;
  toZone: string;
};

export interface DateArithmeticOptions {
  duration: number;
  unit: DurationUnit;
  operation: Operation;
}

export type DateArithmeticFunction = (
  date: moment.Moment,
  options: DateArithmeticOptions
) => moment.Moment;
