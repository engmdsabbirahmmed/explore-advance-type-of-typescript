"use strict";
{
    //
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 12, name: 'Sabbir', email: 'sabbir@gmail.com', hasLaptop: true });
    const student2 = addCourseToStudent({ name: 'tareq', email: 'tareq@gmail.com', hasPhone: true, id: 13 });
    console.log(student1);
    console.log(student2);
    //
}
