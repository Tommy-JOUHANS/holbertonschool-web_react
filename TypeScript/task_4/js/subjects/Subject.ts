import { Subjects as T } from './Teacher';

export namespace Subjects {
  export interface Teacher extends T.Teacher {}

  export class Subject {
    teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
