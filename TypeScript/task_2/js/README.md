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

## Task 6 - Creating functions specific to employees

In this task, we create two functions that work with the `Director` and `Teacher` classes.

### 1. The `isDirector` function

The `isDirector` function checks if an employee is an instance of the `Director` class.

```ts
export function isDirector(
  employee: Director | Teacher
): employee is Director {
  return employee instanceof Director;
}

The function accepts an employee argument.
The type Director | Teacher means the employee can be either a Director or a Teacher.
instanceof Director checks if the object was created from the Director class.
employee is Director is a TypeScript type predicate.
This helps TypeScript understand that inside the condition, the employee is a Director.

The function accepts an employee argument.
The type Director | Teacher means the employee can be either a Director or a Teacher.
instanceof Director checks if the object was created from the Director class.
employee is Director is a TypeScript type predicate.
This helps TypeScript understand that inside the condition, the employee is a Director.

# Task 7. String literal types
# Explication du code TypeScript — Interfaces, Type Predicates et String Literal Types
 
Ce fichier TypeScript illustre plusieurs concepts fondamentaux : les **interfaces**, les **classes**, les **type guards (prédicats de type)**, et les **types littéraux**. Voici une explication détaillée de chaque partie en lien avec l'énoncé.
 
## 1. Les interfaces
 
```typescript
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
```
 
Une **interface** définit un contrat : elle dit *quelles méthodes une classe doit avoir*, sans dire comment elles fonctionnent. Ici, `DirectorInterface` impose trois méthodes qui retournent toutes une chaîne de caractères. Pareil pour `TeacherInterface`, sauf que la dernière méthode s'appelle `workTeacherTasks` au lieu de `workDirectorTasks`.
 
## 2. Les classes qui implémentent les interfaces
 
```typescript
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
```
 
Le mot-clé `implements` force la classe à respecter le contrat de l'interface. Si tu oubliais une méthode, TypeScript te le signalerait à la compilation. Chaque classe fournit sa propre implémentation : un Director peut télétravailler, un Teacher non, par exemple.
 
## 3. La factory `createEmployee`
 
```typescript
export function createEmployee(
  salary: number | string
): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
 
  return new Director();
}
```
 
Deux choses intéressantes ici :
 
- **Union de types en paramètre** (`number | string`) : la fonction accepte un nombre OU une chaîne.
- **Union de types en retour** (`Director | Teacher`) : on ne sait pas à l'avance laquelle des deux classes sera retournée.
Règle métier : si le salaire est un nombre inférieur à 500, c'est un Teacher ; sinon (nombre supérieur ou égal à 500, ou bien une string), c'est un Director.
 
## 4. Le type predicate `isDirector` — le cœur de l'exercice
 
```typescript
export function isDirector(
  employee: Director | Teacher
): employee is Director {
  return employee instanceof Director;
}
```
 
C'est ici que ça devient subtil. La signature de retour `employee is Director` n'est **pas** un simple `boolean` — c'est ce qu'on appelle un **type predicate** (prédicat de type).
 
Quand tu écris `employee is Director`, tu dis au compilateur TypeScript :
 
> "Si cette fonction retourne `true`, alors tu peux considérer que `employee` est un `Director` dans tout le bloc qui suit."
 
C'est ce qu'on appelle un **type narrowing** (raffinement de type). Sans ce prédicat, TypeScript ne saurait pas restreindre le type après l'appel.
 
## 5. `executeWork` — l'utilisation du prédicat
 
```typescript
export function executeWork(
  employee: Director | Teacher
): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
 
  return employee.workTeacherTasks();
}
```
 
Grâce au prédicat `employee is Director` :
 
- À l'intérieur du `if`, TypeScript sait que `employee` est forcément un `Director`, donc `.workDirectorTasks()` est accessible **sans cast**.
- Après le `if`, par élimination, TypeScript sait que c'est forcément un `Teacher`, donc `.workTeacherTasks()` est accessible.
C'est pour ça que la version originale avait besoin de `(employee as Director)` — sans le prédicat de type, TypeScript ne pouvait pas déduire automatiquement le bon type, donc il fallait le forcer avec un cast.
 
## 6. Les types littéraux (String literal types)
 
```typescript
export type Subjects = ('Math' | 'History');
```
 
Au lieu d'accepter n'importe quelle string, on **restreint** les valeurs possibles à exactement deux chaînes : `'Math'` ou `'History'`. Toute autre valeur sera refusée par le compilateur.
 
```typescript
export function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}
```
 
Si quelqu'un essaie d'appeler `teachClass('Science')`, TypeScript refusera de compiler. C'est très utile pour éviter les fautes de frappe et documenter les valeurs acceptées.
 
## Résumé des résultats attendus
 
| Appel | Résultat |
|---|---|
| `executeWork(createEmployee(200))` | `'Getting to work'` (200 < 500 donc Teacher) |
| `executeWork(createEmployee(1000))` | `'Getting to director tasks'` (1000 >= 500 donc Director) |
| `executeWork(createEmployee('$500'))` | `'Getting to director tasks'` (string donc Director) |
| `teachClass('Math')` | `'Teaching Math'` |
| `teachClass('History')` | `'Teaching History'` |
 
## Le point clé à retenir
 
L'exercice te demande de comprendre la différence entre :
 
- Une fonction qui retourne `boolean` : TypeScript ne sait pas affiner le type après l'appel.
- Une fonction avec un **type predicate** `employee is Director` : TypeScript affine automatiquement le type, ce qui évite les casts manuels (`as Director`).
C'est un mécanisme propre à TypeScript pour combiner vérification à l'exécution (`instanceof`) et information de type à la compilation.