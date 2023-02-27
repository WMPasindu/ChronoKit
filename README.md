# ChronoKit
ChronoKit is a powerful and flexible date/time manipulation library for Node.js. With an intuitive API, ChronoKit makes it easy to perform common tasks such as converting between time zones, calculating time differences, and parsing date/time strings. Whether you're building a web app, working with time-based data, or just need to handle dates and times in your code, ChronoKit has you covered.

# Date/Time Manipulation Library
A library that provides utility function with dates and time, including coverting between time zone, calculating time diference, and parsing date/time strings.
This library is build for Node.js and can be used in any Node.js project.

# Installation
To install the library, use the following command:
* ```npm i chronokit```

# Usage

To use the library in your project, simply require it and start using the function:

``` sh
import {convertTimeZone, convertDateTime, getTimeZoneOffSet} from 'chronokit';

const convertedTimeZone = convertTimeZone('2023-02-23T14:55:00Z', 'GMT', 'Australia/Darwin');
const convertedDateTime = convertDateTime('2023-02-23T23:35:00', 'Asia/Colombo', 'Europe/London');
const timeZoneOffSet = getTimeZoneOffSet('Asia/Colombo', 'Europe/London'); 
const month = performDateArithmetic(currentDate, { duration: 5, unit: 'month', operation: 'subtract' });
```


# API Reference
## convertTimeZone(dateTime, fromZone, toZone)
<p>The convertTimeZone function takes in three parameters: dateTime, fromZone, and toZone. dateTime is a string representing a date and time in the fromZone time zone. 
fromZone is a string representing the name of the source time zone, and toZone is a string representing the name of the destination time zone.</p>

## convertDateTime(dateTime, fromTimeZone, toTimeZone)
<p>The convertDateTime function takes three parameters: dateTime, fromTimeZone, and toTimeZone. dateTime is a string representing a date and time in the fromTimeZone time zone. 
fromTimeZone and toTimeZone are strings representing the source and destination time zones, respectively.</p>

## getTimeZoneOffset(timezone1, timezone2)
<p>The getTimeZoneOffset function takes two parameters: timezone1 and timezone2. These parameters are strings representing the time zones for which the offset needs to be calculated.</p>

## performDateArithmetic(currentDate, { duration: number, unit: string, operation: string })
<p>The performDateArithmetic function and call it with a date object and an options object specifying the arithmetic operation to perform. Here's an example.
`unit = 'day' | 'week' | 'month'`
`operation = 'add' | 'subtract'`
</p>

``` sh 
performDateArithmetic(currentDate, { duration: 2, unit: 'week', operation: 'add' });
console.log(`Current date: ${currentDate.format('YYYY-MM-DD')}`);
console.log(`Two weeks later: ${twoWeeksLater.format('YYYY-MM-DD')}`);
```
> output:
`Current date: 2023-02-25`
`Two weeks later: 2023-03-11`

## Contributing
<p> Contributions are welcome! To contribute to the project, simply fork the repository, make your changes, and submit a pull request. Please include tests for any new functionality.</p>
