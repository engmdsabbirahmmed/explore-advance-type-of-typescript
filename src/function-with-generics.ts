{
    //function with generics
    const createArray = (param: string): string[] => {
        return [param]
    }
    const res1 = createArray('Bangladesh')
    // console.log(res1)
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const resGeneric = createArrayWithGeneric<string>('Sabbir');
    // console.log(resGeneric)
    interface UserObj {
        name: string;
        id: number
    }
    const resGenericObj = createArrayWithGeneric<UserObj>({ name: 'sabbir', id: 696969 })
    // console.log(resGenericObj)

    const createArrayWithTuple = <T, U>(param1: T, param2: U): [T, U] => {
        return [param1, param2]
    }
    const tupleRes = createArrayWithTuple<number, number>(2, 3);
    // console.log(tupleRes)
    const tupleRes2 = createArrayWithTuple<number, string>(2, 'USA');
    // console.log(tupleRes2)

    type TupleObj = {
        name: string;
        id: number
    }
    const tupleResObj = createArrayWithTuple<number, TupleObj>(123, { name: 'Trump', id: 566 })
    // console.log(tupleResObj)


    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development';

        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({
        name: 'Md Sabbir ahmmed',
        email: 'abc@gmail.com'
    });

    const student2 = addCourseToStudent({
        name: 'Arnab Kumar',
        email: 'arnab@gmail.com'
    })
    console.log(student1)
    console.log(student2)


    //
}