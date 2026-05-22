"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
class Director {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}
exports.Director = Director;
class Teacher {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
}
exports.teachClass = teachClass;
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
