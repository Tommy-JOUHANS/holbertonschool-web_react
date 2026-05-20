# Tâche 8 — Ambient Namespaces
 
## Résumé
 
Cette tâche consiste à intégrer une bibliothèque JavaScript externe (`crud.js`) dans un projet TypeScript en utilisant des **fichiers de déclaration ambiants** (`.d.ts`), ce qui permet à TypeScript de connaître les types d'un module écrit en JS pur.
 
## Structure du projet
 
```
task_3/
├── package.json
├── webpack.config.js
├── tsconfig.json
├── interface.ts
├── main.ts
└── js/
    ├── crud.js
    └── crud.d.ts
```
 
## Étapes réalisées
 
### 1. `interface.ts` — Définition des types
 
Définit un type `RowID` (alias de `number`) et une interface `RowElement` avec les champs `firstName`, `lastName` et `age` (optionnel).
 
```typescript
export type RowID = number;
 
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
```
 
### 2. `js/crud.js` — Bibliothèque externe
 
Contient les trois fonctions fournies (`insertRow`, `updateRow`, `deleteRow`) qui simulent des opérations de base de données via `console.log`.
 
### 3. `js/crud.d.ts` — Fichier de déclaration ambiant
 
Le cœur de l'exercice. Ce fichier importe `RowID` et `RowElement` depuis `interface.ts` puis déclare les signatures typées des trois fonctions CRUD. Ainsi, TypeScript peut vérifier les types lors de l'appel des fonctions JS, et l'IntelliSense de l'IDE fonctionne correctement.
 
```typescript
import { RowID, RowElement } from '../interface';
 
export function insertRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): number;
```
 
### 4. `main.ts` — Point d'entrée
 
Commence par une **directive triple-slash** (`/// <reference path="./js/crud.d.ts" />`) qui charge les déclarations ambiantes. Le fichier importe ensuite les types depuis `interface.ts` et tout le module `crud.js` sous l'alias `CRUD`.
 
```typescript
/// <reference path="./js/crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud';
 
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
 
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
```
 
## Résultat attendu dans la console
 
```
Insert row {firstName: "Guillaume", lastName: "Salva"}
Update row 759 {firstName: "Guillaume", lastName: "Salva", age: 23}
Delete row id 759
```
 
## Concepts clés appris
 
- Les **fichiers de déclaration** `.d.ts`
- La **déclaration ambiante** de modules JavaScript
- La **directive triple-slash** `/// <reference path="..." />`
- Le **partage de types** entre plusieurs fichiers via `import` / `export`
## Vérification
 
La compilation avec `npm run build` s'effectue **sans erreur TypeScript**, et toutes les variables sont correctement typées.
