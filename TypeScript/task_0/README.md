# TypeScript - Task 0 : Creating an interface for a student

## Description

Ce projet est une introduction à **TypeScript** dans un environnement web configuré avec **Webpack**. L'objectif est de créer une interface `Student`, d'instancier deux étudiants, puis de les afficher dans un tableau HTML généré dynamiquement avec du Vanilla JavaScript.

## Objectifs de la tâche

- Définir une interface TypeScript `Student` avec les propriétés `firstName`, `lastName`, `age` et `location`.
- Créer deux variables `student1` et `student2` respectant l'interface.
- Les stocker dans un tableau typé `studentsList: Student[]`.
- Construire dynamiquement un tableau HTML avec `document.createElement` et y ajouter une ligne par étudiant.
- Compiler le tout sans erreur TypeScript (`No type errors found`).

## Structure du projet

```
task_0/
├── js/
│   └── main.ts             # Code TypeScript principal
├── dist/                   # Dossier généré par Webpack (build)
├── .eslintrc.js            # Configuration ESLint
├── package.json            # Dépendances et scripts npm
├── tsconfig.json           # Configuration TypeScript
├── webpack.config.js       # Configuration Webpack
└── README.md
```

## Implémentation

### 1. Interface `Student`

```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
```

### 2. Création des étudiants

Deux objets typés `Student` (`John Doe` et `Jane Smith`) sont créés puis regroupés dans un tableau `studentsList: Student[]`.

### 3. Génération du tableau HTML

Le DOM est manipulé avec `document.createElement` pour construire :

- une ligne d'en-tête (`<tr>`) contenant les colonnes **First Name**, **Last Name**, **Age**, **Location** ;
- une ligne par étudiant (parcouru avec `forEach`) contenant ses informations dans des `<td>` ;
- le tableau est ensuite ajouté à `document.body`.

Tous les éléments du DOM sont **typés explicitement** (`HTMLTableElement`, `HTMLTableRowElement`, `HTMLTableCellElement`), conformément à l'exigence d'utiliser TypeScript autant que possible.

## Configuration

### `package.json`

Dépendances principales :

- **TypeScript** : `typescript`, `ts-loader`, `@types/jest`
- **Webpack** : `webpack`, `webpack-cli`, `webpack-dev-server`
- **Plugins Webpack** : `html-webpack-plugin`, `clean-webpack-plugin`, `fork-ts-checker-webpack-plugin`
- **Tests** : `jest`, `ts-jest`
- **Linter** : `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`

Scripts npm :

- `npm start` — lance le serveur de développement (`webpack serve --open`)
- `npm run build` — compile le projet pour la production
- `npm test` — exécute les tests avec Jest

### `tsconfig.json`

Options principales :

- `target: ES5`, `module: commonjs`, `moduleResolution: node`
- `strict: true` — active toutes les vérifications strictes
- `lib: ["DOM", "ES2015"]` — accès aux types du DOM
- Source : `./js` → Sortie : `./dist`

### `webpack.config.js`

- Point d'entrée : `./js/main.ts`
- Loader : `ts-loader` avec `transpileOnly: true` (vitesse optimisée)
- `ForkTsCheckerWebpackPlugin` pour la vérification des types en parallèle
- `CleanWebpackPlugin` et `HtmlWebpackPlugin`
- Serveur de dev sur le port **8080** avec ouverture automatique
- Sortie : `bundle.js` dans `dist/`

### `.eslintrc.js`

- Parser : `@typescript-eslint/parser`
- Extends : `plugin:@typescript-eslint/recommended`
- `ecmaVersion: 2020`, `sourceType: module`
- Lié au `tsconfig.json` du projet

## Lancer le projet

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

L'application est accessible sur [http://localhost:8080/](http://localhost:8080/).

## Résultat

Webpack compile le projet sans erreurs (`No typescript errors found`) et un tableau HTML s'affiche dans le navigateur :

| First Name | Last Name | Age | Location  |
|------------|-----------|-----|-----------|
| John       | Doe       | 20  | New York  |
| Jane       | Smith     | 22  | Paris     |

## Notions abordées

- Définition et utilisation d'une **interface TypeScript**.
- Typage explicite des variables et des éléments du DOM (`HTMLTableElement`, `HTMLTableRowElement`, `HTMLTableCellElement`).
- Manipulation du DOM en **Vanilla JavaScript** via TypeScript.
- Mise en place d'un environnement complet **TypeScript + Webpack + ESLint**.

## Dépôt

- **Repo GitHub** : `holbertonschool-web_react`
- **Dossier** : `TypeScript`
- **Fichiers** : `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`