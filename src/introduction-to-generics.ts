{
    //
    type GenericType<T> = Array<T> //declare generic types

    // const numbers: number[] = [21, 54, 75, 57, 32, 98];
    // const numbers: Array<number> = [21, 54, 75, 57, 32, 98];
    const numbers: GenericType<number> = [21, 54, 75, 57, 32, 98];

    // const friends: string[] = ['John', 'Doe', 'Mark', 'steve'];
    // const friends: Array<string> = ['John', 'Doe', 'Mark', 'steve'];
    const friends: GenericType<string> = ['John', 'Doe', 'Mark', 'steve'];


    // const boolArray: boolean []= [true, true, false];
    // const boolArray: Array<boolean> = [true, true, false];
    const boolArray: GenericType<boolean> = [true, true, false];

    // define object using generic
    const users: GenericType<{ name: string, age: number }> = [
        {
            name: 'Johnson',
            age: 21
        },
        {
            name: 'Bill',
            age: 32
        }
    ]
    // define tuple using generic
    type GenericTuple<A, B> = [A, B]
    const pair: GenericTuple<string, string> = ['Husband', 'wife']
    // console.log(pair)

    const userWithId: GenericTuple<{ name: string, gmail: string }, number> = [{ name: 'Sabbir', gmail: 'abcd@gmail.com' }, 123]



    //
}