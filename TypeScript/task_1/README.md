# TypeScript - Task 1

Ce projet regroupe plusieurs exercices autour des **interfaces**, des **classes**, des **fonctions typées** et de l'**héritage d'interfaces** en TypeScript. Tout le code se trouve dans `js/main.ts` et est compilé avec **Webpack** + **ts-loader**.

## Sommaire des tâches

- **Tâche 1** — Construire une interface `Teacher`
- **Tâche 2** — Étendre `Teacher` via l'interface `Directors`
- **Tâche 3** — Écrire la fonction `printTeacher` et son interface `printTeacherFunction`
- **Tâche 4** — Écrire une classe `StudentClass` décrite par une interface

## Structure du projet

```
task_1/
├── dist/                   # Build généré par Webpack
│   ├── main.js
│   └── main.js.map
├── js/
│   ├── main.ts             # Code TypeScript principal
│   └── README.md
├── node_modules/
├── .eslintrc.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Tâche 1 — Interface `Teacher`

Une interface `Teacher` est créée avec :

- `firstName: string` — **readonly** (modifiable uniquement à l'initialisation)
- `lastName: string` — **readonly**
- `fullTimeEmployee: boolean`
- `yearsOfExperience?: number` — propriété **optionnelle**
- `location: string`
- une **signature d'index** `[attribute: string]: any;` permettant d'ajouter n'importe quelle propriété (ex. `contract: false`).

```typescript
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
}
```

## Tâche 2 — Interface `Directors`

`Directors` **étend** `Teacher` et ajoute la propriété obligatoire `numberOfReports: number`.

```typescript
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
```

## Tâche 3 — Fonction `printTeacher`

Une interface décrit la signature de la fonction :

```typescript
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
```

La fonction retourne la **première lettre du prénom** suivie du **nom complet** :

```typescript
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// printTeacher("John", "Doe")  -> "J. Doe"
```

## Tâche 4 — Classe `StudentClass`

Une classe `StudentClass` est créée :

- Son constructeur prend `firstName: string` et `lastName: string`.
- Méthode `workOnHomework()` qui retourne `"Currently working"`.
- Méthode `displayName()` qui retourne le prénom de l'étudiant.

```typescript
class StudentClass {
  fstStudent: string;
  lastStudent: string;

  constructor(firstName: string, lastName: string) {
    this.fstStudent = firstName;
    this.lastStudent = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.fstStudent;
  }
}

const student1 = new StudentClass('Tommy', 'JOUHANS');
console.log(student1.displayName());     // "Tommy"
console.log(student1.workOnHomework());  // "Currently working"
```

## Configuration

### `package.json`

Dépendances clés :

- `typescript`, `ts-loader`
- `webpack`, `webpack-cli`, `webpack-dev-server`
- `html-webpack-plugin`, `clean-webpack-plugin`, `fork-ts-checker-webpack-plugin`
- `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`

Scripts npm :

- `npm start` — lance le serveur de développement (`webpack serve`)
- `npm run build` — compile le projet

### `tsconfig.json`

Options principales :

- `target: ES2017`, `module: ESNext`, `moduleResolution: Node`
- `strict: true`, `noImplicitAny: true`
- `noUnusedLocals: true`, `noUnusedParameters: true`
- `lib: ["DOM", "ES2017"]`
- Source : `js/**/*` → Sortie : `./dist/`

### `webpack.config.js`

- Point d'entrée : `./js/main.ts`
- `ts-loader` avec `transpileOnly: true`
- Plugins : `CleanWebpackPlugin`, `HtmlWebpackPlugin`, `ForkTsCheckerWebpackPlugin`
- Sortie : `bundle.js` dans `dist/`

### `.eslintrc.js`

- Parser : `@typescript-eslint/parser`
- Extends : `plugin:@typescript-eslint/recommended`
- Lié au `tsconfig.json`

## Lancer le projet

```bash
npm install
npm run build   # compile sans erreur -> "No type errors found"
npm start       # ouvre le serveur de dev
```

## Résultat console attendu

```
Object
  firstName: "John"
  lastName: "Doe"
  fullTimeEmployee: true
  location: "London"
  numberOfReports: 17

J. Doe
Tommy
Currently working
```

## Notions abordées

- Interfaces TypeScript avec propriétés **readonly**, **optionnelles** et **signatures d'index**.
- **Héritage d'interfaces** avec `extends`.
- Typage des **fonctions** via une interface dédiée.
- Création de **classes** typées avec constructeur et méthodes.
- Configuration complète **TypeScript + Webpack + ESLint**.

## Dépôt

- **Repo GitHub** : `holbertonschool-web_react`
- **Dossier** : `TypeScript`
- **Fichier principal** : `task_1/js/main.ts`