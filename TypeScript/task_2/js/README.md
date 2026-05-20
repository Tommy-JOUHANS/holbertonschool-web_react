# Task5. Advanced types Par1

Ce projet montre comment utiliser :

- les **interfaces**
- les **classes**
- le **polymorphisme**
- les **types unions (`number | string`)**
- la vérification avec `instanceof`

en TypeScript.

---

# Structure du projet

Le projet contient :

- une interface pour les directeurs
- une interface pour les professeurs
- une classe `Director`
- une classe `Teacher`
- une fonction `createEmployee`

---

# Interfaces

## Interface `DirectorInterface`

```ts
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectoryTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

a classe Teacher implémente l’interface TeacherInterface.

Propriétés
salary: number | string;

Le salaire peut être :

un nombre
une chaîne de caractères
Méthodes
workFromHome(): string {
  return 'Cannot work from home';
}

Le professeur ne peut pas travailler depuis la maison.

getCoffeeBreak(): string {
  return 'Working from home';
}

Retourne un message lié à la pause.

workTeacherTasks(): string {
  return 'Getting to work';
}

Retourne les tâches du professeur.

Classe Director
class Director implements DirectorInterface

La classe Director implémente l’interface DirectorInterface.

Méthodes
workFromHome(): string {
  return 'Working from home';
}

Le directeur peut travailler depuis la maison.

getCoffeeBreak(): string {
  return 'Getting a coffee break';
}

Retourne un message pour la pause café.

workDirectoryTasks(): string {
  return 'Getting to director tasks';
}

Retourne les tâches du directeur.

Fonction createEmployee
function createEmployee(salary: number | string): Teacher | Director

Cette fonction crée automatiquement :

un Teacher
ou un Director

selon le salaire fourni.

Règles
Condition	Résultat
salaire numérique < 500	Teacher
salaire numérique >= 500	Director
salaire sous forme de texte	Director
Exemples
const employe1 = createEmployee(200);
const employe2 = createEmployee(1000);
const employe3 = createEmployee("$500");
Résultats
console.log(employe1 instanceof Teacher); // true
console.log(employe2 instanceof Director); // true
console.log(employe3 instanceof Director); // true
Résultat dans la console

Le programme affiche :

true
true
true

Cela confirme que :

le premier employé est un Teacher
les deux autres sont des Director
Ajout de :

workTeacherTasks(): string {
  return 'Getting to work';
}

et suppression de :

workDirectoryTasks()

dans la classe Teacher.

Technologies utilisées
TypeScript
Webpack
Node.js
Auteur

Projet réalisé pour pratiquer :

les interfaces TypeScript
les classes
l’héritage de contrats (implements)
les unions de types
le polymorphisme
