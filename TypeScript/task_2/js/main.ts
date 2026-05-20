export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(
  salary: number | string
): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

export function isDirector(
  employee: Director | Teacher
): employee is Director {
  return employee instanceof Director;
}

export function executeWork(
  employee: Director | Teacher
): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }

  return employee.workTeacherTasks();
}

export type Subjects = ('Math' | 'History');

export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

console.log(createEmployee(200));
//Teacher
console.log(createEmployee(1000));
//Director
console.log(createEmployee('$500'));
//Director

// Tests
console.log(executeWork(createEmployee(200)));
// Getting to work

console.log(executeWork(createEmployee(1000)));
// Getting to director tasks

// Tests
console.log(teachClass('Math'));
// Teaching Math


console.log(teachClass('History'));
// Teaching History