"use strict";
{
    // constraint using keyof 
    const getPropertyValue = (object, key) => {
        return object[key];
    };
    const user = {
        name: 'Md. Sabbir Ahmmed',
        age: 23,
        jobTitle: 'Computer Operator'
    };
    const institute = {
        name: 'cumilla polytechnic institute',
        location: 'Kotbari, cumilla',
    };
    const userOnePropertyValue = getPropertyValue(user, 'jobTitle');
    const institutePropertyValue = getPropertyValue(institute, 'location');
    // console.log(userOnePropertyValue)
    // console.log(institutePropertyValue)
}
