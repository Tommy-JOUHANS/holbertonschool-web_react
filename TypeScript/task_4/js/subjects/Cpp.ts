import { Subjects as S } from './Subject';

export namespace Subjects {
  export interface Teacher extends S.Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends S.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher as Teacher;
      if (!teacher || !teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
