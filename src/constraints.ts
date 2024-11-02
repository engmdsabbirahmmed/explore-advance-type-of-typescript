{
    //
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next Level Web Development';
        return { ...student, course }
    }

    const student1 = addCourseToStudent({ id: 12, name: 'Sabbir', email: 'sabbir@gmail.com', hasLaptop: true });
    const student2 = addCourseToStudent({ name: 'tareq', email: 'tareq@gmail.com', hasPhone: true, id: 13 });

    console.log(student1);
    console.log(student2);





    //
}