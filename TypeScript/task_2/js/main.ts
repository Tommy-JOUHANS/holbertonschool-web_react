interface DirectorInterface {
  workFromHome() : string;
  getCoffeeBreak() : string;
  workDirectoryTasks() : string;
}

interface TeacherInterface {
  workFromHome() : string;
  getCoffeeBreak() : string;
  workTeacherTasks() : string; 
}

// Classe Professeur
class Teacher implements TeacherInterface {
  salary: number | string;

  constructor(salary: number | string) {
    this.salary = salary;
  }

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Working from home';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Classe Directeur
class Director implements DirectorInterface {
  salary: number | string;

  constructor(salary: number | string) {
    this.salary = salary;
  }
   workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectoryTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Crée un employé en fonction de son salaire.
 * - Si le salaire est un nombre et inférieur à 500, retourne un Professeur.
 * - Sinon, retourne un Directeur.
 *
 * @param salaire - Le salaire de l'employé (nombre ou chaîne de caractères).
 * @returns Une instance de Professeur ou de Directeur.
 */
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher(salary);
  }
  return new Director(salary);
}

// Exemples d'utilisation
const employe1 = createEmployee(200);    // Professeur (nombre < 500)
const employe2 = createEmployee(1000);   // Directeur (nombre >= 500)
const employe3 = createEmployee("$500"); // Directeur (chaîne de caractères)

console.log(employe1 instanceof Teacher); // true
console.log(employe2 instanceof Director);  // true
console.log(employe3 instanceof Director);  // true

export { Teacher, Director, createEmployee };