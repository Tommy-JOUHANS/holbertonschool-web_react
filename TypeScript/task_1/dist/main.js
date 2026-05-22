"use strict";
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
class StudentClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}
// --- Tests ---
// Exemple Task 1 : propriété supplémentaire "contract"
const teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
// Exemple Task 2 : Directors
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
// Exemple Task 3 : printTeacher
console.log(printTeacher('John', 'Doe')); // "J. Doe"
// Exemple Task 4 : StudentClass
const student1 = new StudentClass('Tommy', 'JOUHANS');
console.log(student1.displayName()); // "Tommy"
console.log(student1.workOnHomework()); // "Currently working"
//# sourceMappingURL=main.js.map