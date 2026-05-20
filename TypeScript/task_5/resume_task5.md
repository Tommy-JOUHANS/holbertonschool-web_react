# Tâche 10 — Brand convention & Nominal typing (`task_5`)

## Objectif

Mettre en pratique le **nominal typing** (typage nominal) en TypeScript grâce à
la **brand convention** : empêcher que deux types ayant la même structure soient
confondus l'un avec l'autre.

## Ce que demande l'énoncé

### 1. Dossier et configuration

- Créer le dossier `task_5/`
- Y copier, à la racine, les fichiers de configuration fournis :
  `package.json`, `tsconfig.json`, `webpack.config.js`

### 2. Deux interfaces dans `task_5/js/main.ts`

| Interface      | Contenu attendu                                      |
|----------------|------------------------------------------------------|
| `MajorCredits` | un nombre `credits` + une propriété `brand`          |
| `MinorCredits` | un nombre `credits` + une propriété `brand`          |

La propriété `brand` sert uniquement à **identifier de façon unique** chaque
interface.

### 3. Deux fonctions dans `task_5/js/main.ts`

- `sumMajorCredits(subject1, subject2)` → renvoie une valeur de type `MajorCredits`
- `sumMinorCredits(subject1, subject2)` → renvoie une valeur de type `MinorCredits`
- Chaque fonction **additionne les `credits`** des deux sujets reçus

## Le concept : pourquoi une propriété `brand` ?

TypeScript utilise un typage **structurel** : deux types sont compatibles dès
qu'ils ont la même forme. Sans `brand`, `MajorCredits` et `MinorCredits` (tous
deux `{ credits: number }`) seraient parfaitement interchangeables.

La propriété `brand` (`'brandA'` vs `'brandB'`) donne à chaque interface une
« signature » distincte. Résultat : passer un `MinorCredits` à
`sumMajorCredits` déclenche une **erreur de compilation** — c'est le typage
nominal simulé.

## Solution (`task_5/js/main.ts`)

```ts
interface MajorCredits {
	credits: number;
	brand: 'brandA';
}

interface MinorCredits {
	credits: number;
	brand: 'brandB';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return { credits: subject1.credits + subject2.credits, brand: 'brandA' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return { credits: subject1.credits + subject2.credits, brand: 'brandB' };
}
```

## Checklist de conformité

- [x] Dossier `task_5/` avec `package.json`, `tsconfig.json`, `webpack.config.js`
- [x] Interface `MajorCredits` : `credits: number` + `brand`
- [x] Interface `MinorCredits` : `credits: number` + `brand`
- [x] Fonction `sumMajorCredits` qui renvoie un `MajorCredits`
- [x] Fonction `sumMinorCredits` qui renvoie un `MinorCredits`
- [x] Chaque fonction additionne les `credits` des deux sujets
- [x] `npm run build` compile sans erreur

## Infos dépôt

- **GitHub repository** : `holbertonschool-web_react`
- **Directory** : `TypeScript`
- **Fichiers** : `task_5/js/main.ts`, `task_5/package.json`,
  `task_5/webpack.config.js`, `task_5/tsconfig.json`
