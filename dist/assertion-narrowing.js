"use strict";
{
    //type assertion
    let anything;
    anything = 'md. sabbir ahmmed';
    anything = 232323;
    anything;
    const minuteToSecond = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 60;
            return `Your converted data (minute to second) is ${convertedValue}`;
        }
        else if (typeof value === 'number') {
            const convertedValue = value * 60;
            return convertedValue;
        }
    };
    const result1 = minuteToSecond('5');
    const result2 = minuteToSecond(5);
    console.log(result1);
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
