{
    //type assertion
    let anything: any;
    anything = 'md. sabbir ahmmed';

    anything = 232323;
    (anything as number)


    const minuteToSecond = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 60;
            return `Your converted data (minute to second) is ${convertedValue}`
        }
        else if (typeof value === 'number') {
            const convertedValue = value * 60;
            return convertedValue;
        }
    }
    const result1 = minuteToSecond('5') as string;
    const result2 = minuteToSecond(5) as number;
    console.log(result1)
    console.log(result2)

    type customError = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as customError).message);
    }
}