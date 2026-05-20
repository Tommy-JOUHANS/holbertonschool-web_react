# Résumé du projet TypeScript — holbertonschool-web_react

Projet **holbertonschool-web_react**, dossier `TypeScript`. Six tâches
(`task_0` à `task_5`) qui introduisent progressivement le typage TypeScript,
de l'interface de base jusqu'au typage nominal. Chaque tâche est compilée avec
**webpack 4 + ts-loader** et servie par **webpack-dev-server**.

## Vue d'ensemble

| Tâche    | Thème                            | Notions clés                                                        |
|----------|----------------------------------|---------------------------------------------------------------------|
| `task_0` | Interface d'un étudiant          | `interface`, typage du DOM                                          |
| `task_1` | Interface `Teacher`              | `readonly`, propriété optionnelle, index signature, héritage         |
| `task_2` | Advanced types Part 1            | `implements`, types union, type predicate, string literal type      |
| `task_3` | Ambient namespaces               | fichiers `.d.ts`, `declare`, triple-slash `/// <reference />`        |
| `task_4` | Namespace & Declaration merging  | `namespace`, fusion de déclarations                                 |
| `task_5` | Brand convention & Nominal typing| typage structurel vs nominal, propriété `brand`                     |

## task_0 — Créer une interface pour un étudiant

**Objectif :** premiers pas avec les interfaces et le typage du DOM.

- Interface `Student` : `firstName`, `lastName` (string), `age` (number),
  `location` (string).
- Créer deux objets `student1` et `student2`, regroupés dans
  `studentsList: Student[]`.
- Construire un tableau HTML (`<table>`) en JavaScript vanilla et l'insérer
  dans le DOM ; chaque ligne affiche le prénom et la localisation.

**Notions :** déclaration d'`interface`, typage des éléments du DOM
(`HTMLTableElement`, `HTMLTableRowElement`, `HTMLTableCellElement`).

## task_1 — Construire une interface `Teacher`

**Objectif :** explorer les fonctionnalités avancées des interfaces.

- Interface `Teacher` : `firstName` et `lastName` en **`readonly`**,
  `fullTimeEmployee` (boolean), `yearsOfExperience?` **optionnel** (number),
  `location` (string), et une **index signature** `[attribute: string]: any`
  pour autoriser des propriétés supplémentaires.
- Interface `Directors` qui **étend** `Teacher` et ajoute `numberOfReports`.
- Fonction `printTeacher` décrite par une **interface de fonction**
  `printTeacherFunction` : renvoie l'initiale du prénom + le nom (`"J. Doe"`).
- Classe `StudentClass` décrite par une interface de méthodes
  (`workOnHomework`, `displayName`) et une interface de **constructeur**.

**Notions :** `readonly`, propriétés optionnelles, index signatures, extension
d'interface, interfaces de fonction et de classe/constructeur.

## task_2 — Advanced types Part 1

**Objectif :** classes, types union et gardes de type.

- Interfaces `DirectorInterface` et `TeacherInterface` (méthodes `workFromHome`,
  `getCoffeeBreak`, et tâches spécifiques au rôle).
- Classes `Director` et `Teacher` qui **implémentent** ces interfaces.
- Fonction `createEmployee(salary: number | string)` qui renvoie un `Director`
  ou un `Teacher` selon le salaire (un nombre < 500 → `Teacher`).
- **Type predicate** `isDirector(employee): employee is Director` pour affiner
  le type, utilisé par `executeWork`.
- **String literal type** `Subjects = 'Math' | 'History'` et fonction
  `teachClass`.

**Notions :** `implements`, types union, type predicates (`is`), string literal
types.

## task_3 — Ambient namespaces

**Objectif :** consommer une « bibliothèque » externe sans son code source,
uniquement via des déclarations de types.

- `crud.d.ts` : fichier de **déclaration ambiante** (`declare`) décrivant
  l'API CRUD.
- `interface.ts` : types `RowID` et `RowElement`.
- `main.ts` : directive **triple-slash** `/// <reference path="./crud.d.ts" />`,
  import des types et du module `crud`, puis appels `insertRow`, `updateRow`,
  `deleteRow`.

**Notions :** fichiers `.d.ts`, mot-clé `declare`, namespaces ambiants,
directives `/// <reference />`.

## task_4 — Namespace & Declaration merging

**Objectif :** organiser le code dans un namespace et fusionner des
déclarations réparties sur plusieurs fichiers.

- Dossier `js/subjects/` avec cinq fichiers dans le namespace **`Subjects`** :
  - `Teacher.ts` — interface `Teacher` (`firstName`, `lastName`).
  - `Subject.ts` — classe `Subject` avec un attribut `teacher` et un setter
    `setTeacher`.
  - `Cpp.ts`, `Java.ts`, `React.ts` — chacune **redéclare** le namespace pour
    ajouter une propriété optionnelle à `Teacher`
    (`experienceTeachingC` / `experienceTeachingJava` / `experienceTeachingReact`)
    et définit une classe avec `getRequirements()` et `getAvailableTeacher()`.
- `getAvailableTeacher()` renvoie le professeur s'il a de l'expérience dans la
  matière, sinon `No available teacher`.

**Principe clé :** TypeScript fusionne automatiquement toutes les
redéclarations du namespace `Subjects` et de l'interface `Teacher` en une
seule entité — c'est le **declaration merging**.

## task_5 — Brand convention & Nominal typing

**Objectif :** simuler un typage **nominal** là où TypeScript est **structurel**.

- Interfaces `MajorCredits` et `MinorCredits` : un nombre `credits` + une
  propriété **`brand`** distincte (`'brandA'` / `'brandB'`).
- Fonctions `sumMajorCredits` et `sumMinorCredits` : additionnent les `credits`
  des deux sujets et renvoient le type correspondant.
- Sans `brand`, les deux interfaces (mêmes champs) seraient interchangeables.
  Le `brand` leur donne une signature unique : passer un `MinorCredits` à
  `sumMajorCredits` provoque alors une erreur de compilation.

**Notions :** typage structurel vs nominal, brand convention.

## Stack technique commune

- **TypeScript** compilé vers **ES5**.
- **webpack 4** + **ts-loader** pour le bundling, **webpack-dev-server** pour le
  serveur de développement.
- Scripts : `npm run start-dev` (serveur de dev), `npm run build` (build).
- Chaque tâche possède ses propres `package.json`, `tsconfig.json` et
  `webpack.config.js`.

## Points de configuration importants

Leçons tirées des problèmes rencontrés (notamment sur `task_4` et `task_5`) :

- Le `tsconfig.json` ne doit contenir **qu'un seul** bloc `compilerOptions`
  (sinon le JSON est invalide).
- `"types": []` + `"include": ["js/**/*"]` empêchent `tsc` de compiler les
  paquets `@types` de `node_modules` (souvent trop récents pour la version de
  TypeScript du projet) et limitent la compilation au code source de l'exercice.
- Toujours lancer **`npx tsc`** (le compilateur local du projet) et jamais un
  `tsc` installé globalement, pour éviter les conflits de version.
- Garder les versions de `package.json` cohérentes avec la version de
  TypeScript du projet (ex. `@types/node` v12 pour TypeScript 3.x).
