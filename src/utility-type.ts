{
    //utility types
    type Person = {
        name: string;
        age: number;
        email: string;
        contactNo?: string
    }
    //pick
    type name = Pick<Person, 'name'>;
    type age = Pick<Person, 'age'>;

    type nameEmail = Pick<Person, 'name' | 'email'>;

    // omit 
    type contactInfo = Omit<Person, 'name' | 'age'>;
    type nameAgeInfo = Omit<Person, 'email' | 'contactNo'>;

    //required
    type PersonRequired = Required<Person>;

    //partial
    type PersonPartial = Partial<Person>;

    //readonly
    type PersonReadonly = Readonly<Person>

    const person: PersonReadonly = {
        name: 'sabbir',
        age: 23,
        email: 'abc@gmail.com'
    }
    // person.email = 'abcde@yahoo.com'

    //record
    // type RecordObj = Record<string, string>;
    type RecordObj = Record<string, unknown>;
    const userInfo: RecordObj = {
        name: 'sabbir',
        age: 23
    }
}