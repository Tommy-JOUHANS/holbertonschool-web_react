import { Subjects as S } from './Subject';

export namespace Subjects {
  export interface Teacher extends S.Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends S.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher as Teacher;
      if (!teacher || !teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
