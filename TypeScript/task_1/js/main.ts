// Task 1 - Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
}

// Task 2 - Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3 - printTeacher function and its interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 4 - StudentClass described by an interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// --- Tests ---

// Exemple Task 1 : propriété supplémentaire "contract"
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// Exemple Task 2 : Directors
const director1: Directors = {
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
const student1: StudentClassInterface = new StudentClass('Tommy', 'JOUHANS');
console.log(student1.displayName());    // "Tommy"
console.log(student1.workOnHomework()); // "Currently working"