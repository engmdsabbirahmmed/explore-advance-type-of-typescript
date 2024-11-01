{
    //------------------type and interface in object(non primitive data type)---------------
    //interface
    // using type alias 
    type User1 = {
        name: string;
        age: number
    }

    // using interface 
    interface User2 {
        name: string;
        age: number;
    }

    const user1: User1 = {
        name: 'neymar',
        age: 23,
    }
    const user2: User2 = {
        name: 'neymar',
        age: 23,
    }

    // console.log(user1)


    // extend type using type and interface 
    type UserWithRole1 = User1 & { role: string };//type alias
    interface UserWithRole2 extends User2 {
        role: string
    } //interface
    const userWithRole1: UserWithRole1 = {
        name: 'sabbir',
        age: 23,
        role: 'Frontend Developer'
    }
    // console.log(userWithRole1)



    const userWithRole2: UserWithRole2 = {
        name: 'Salma',
        age: 26,
        role: 'House wife'
    }
    //--------------------type and interface in array(non primitive data type)------------
    //type:
    type Roll1 = number[];

    //interface:
    interface Roll2 {
        [index: number]: number;
    }

    const roll1: Roll1 = [23, 43, 53, 4];

    const roll2: Roll2 = [32, 43, 63]


    //------------------------------type and interface in function------------------------
    type AddTwoNumber1 = (num1: number, num2: number) => number;

    interface AddTwoNumber2 {
        (num1: number, num2: number): number
    }

    const addTwoNumber1: AddTwoNumber1 = (num1, num2) => num1 + num2;
    const addTwoNumber2: AddTwoNumber2 = (num1, num2) => num1 + num2;
    //
}