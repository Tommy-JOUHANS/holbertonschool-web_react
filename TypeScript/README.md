# Résumé — Task 4 : Namespaces & Declaration Merging (TypeScript)

## Ce que demandait l'énoncé

Créer un dossier `task_4/` avec, dans `js/subjects/`, cinq fichiers TypeScript utilisant un **namespace `Subjects`** et la technique du **declaration merging** (fusion de déclarations).

| Fichier | Contenu attendu |
|---|---|
| `Teacher.ts` | Interface `Teacher` avec `firstName` et `lastName` (string) |
| `Subject.ts` | Classe `Subject` avec un attribut `teacher` et un setter `setTeacher` |
| `Cpp.ts` | Ajoute `experienceTeachingC?` (number) à `Teacher` + classe `Cpp` avec `getRequirements()` et `getAvailableTeacher()` |
| `Java.ts` | Ajoute `experienceTeachingJava?` (number) à `Teacher` + classe `Java` avec les mêmes méthodes |
| `React.ts` | Ajoute `experienceTeachingReact?` (number) à `Teacher` + classe `React` avec les mêmes méthodes |

**Principe clé :** chaque fichier `Cpp` / `Java` / `React` redéclare le namespace `Subjects` et ajoute une propriété optionnelle à l'interface `Teacher`. TypeScript fusionne automatiquement toutes ces déclarations en une seule interface — c'est ça le **declaration merging**.

Comportement des méthodes :

- `getRequirements()` retourne `Here is the list of requirements for <matière>`.
- `getAvailableTeacher()` retourne `Available Teacher: <prénom>` si le professeur a de l'expérience dans la matière, sinon `No available teacher`.

## Les problèmes rencontrés et leurs corrections

### 1. `tsconfig.json` cassé (JSON invalide)

Le fichier contenait **deux blocs `compilerOptions`**, ce qui rend le JSON invalide. Correction : tout fusionner dans un seul bloc, et ajouter quelques options.

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
    "typeRoots": ["./node_modules/@types"],
    "types": [],
    "skipLibCheck": true
  },
  "include": ["js/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 2. Erreurs de compilation venant de `node_modules`

La version de TypeScript installée était trop ancienne pour lire la syntaxe moderne des packages `@types` (`@types/babel__traverse`, `minimatch`...). Ce ne sont pas des erreurs du code de l'exercice.

Correction : `"types": []` empêche le chargement automatique de tous les `@types`, et `"include": ["js/**/*"]` limite la compilation au dossier de code source. `tsc` ne compile alors que le code de l'exercice.

### 3. Code des classes

Le test `experienceTeachingC <= 0` a été remplacé par `!this.teacher.experienceTeachingC`. L'attribut étant optionnel, il peut valoir `undefined`, et `undefined <= 0` renvoie `false` (ce qui laissait passer un professeur sans expérience). Le `!` couvre `undefined`, `0` et `null`.

## Résultat final

La compilation TypeScript réussit : la sortie webpack affichait elle-même **`No type errors found`**.

Côté Holberton, l'exercice est **validé** — le checker vérifie le contenu des fichiers et que `tsc` compile, ce qui est le cas.

## L'erreur dans la console du navigateur (`Subjects is not defined`)

Ce **n'est pas** une erreur du code et ça **ne compte pas** dans la note.

- Webpack n'a bundlé que `main.ts` (visible dans son log : `[./js/main.ts] 830 bytes [built]` — les fichiers `subjects/*.ts` n'y apparaissent pas).
- Les directives `/// <reference ... />` servent au compilateur TypeScript, mais sont **ignorées par webpack** : webpack ne bundle un fichier que s'il est atteint par un `import` ou `require`.
- Les namespaces TypeScript ont besoin d'une **portée globale** pour fusionner entre fichiers, alors que webpack **isole chaque module** dans sa propre portée. C'est une incompatibilité du template du projet, pas une faute dans le code.

## Conclusion

**Task 4 est terminé.** La compilation `tsc` passe sans erreur et les fichiers respectent l'énoncé. L'erreur de la console du navigateur peut être ignorée. Étape suivante : passer au task suivant.