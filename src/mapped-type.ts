{
    //mapped type
    //map in javascript
    const arrayOfNumber = [21, 45, 78, 32, 90];
    const arrayOfString: string[] = arrayOfNumber.map(number => number.toString());
    // console.log(arrayOfString)

    //map in typescript
    type areaNumber = {
        height: number;
        width: number;
    }
    // type areaString = {
    //     [key in keyof areaNumber]: string;
    // }
    // type Height = areaNumber['height']

    type areaString<T> = {
        [key in keyof T]: T[key];
    }
    const area1: areaString<{ height: string, width: number }> = {
        height: '43',
        width: 43
    }

    const area2: areaString<{ height: number, width: string }> = {
        height: 53,
        width: '3434'
    }


    //
}