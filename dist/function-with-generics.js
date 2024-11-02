"use strict";
{
    //function with generics
    const createArray = (param) => {
        return [param];
    };
    const res1 = createArray('Bangladesh');
    // console.log(res1)
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric('Sabbir');
    const resGenericObj = createArrayWithGeneric({ name: 'sabbir', id: 696969 });
    // console.log(resGenericObj)
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const tupleRes = createArrayWithTuple(2, 3);
    // console.log(tupleRes)
    const tupleRes2 = createArrayWithTuple(2, 'USA');
    const tupleResObj = createArrayWithTuple(123, { name: 'Trump', id: 566 });
    // console.log(tupleResObj)
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: 'Md Sabbir ahmmed',
        email: 'abc@gmail.com'
    });
    const student2 = addCourseToStudent({
        name: 'Arnab Kumar',
        email: 'arnab@gmail.com'
    });
    console.log(student1);
    console.log(student2);
    //
}
