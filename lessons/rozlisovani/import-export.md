## Import a export

Ať už pracujeme v čistém JavaScriptu nebo v TypeScriptu, málokdy se nám program vejde do jednoho souboru. Stejně jako v čistém JavaScriptu můžeme v TypeScriptu používat klíčová slova `import` a `export` pro práci s více soubory. Můžeme tak například vytvořit soubor `model.ts` s datovým modelem pro studenty a učitele a všechny typy a rozhraní z tohoto souboru exportovat, abychom je mohli použít v jiných souborech.

```ts
interface BaseUser {
  name: string;
  email: string;
}

export interface Student extends BaseUser {
  role: 'student';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Teacher extends BaseUser {
  role: 'teacher';
  courses: string[];
}

export type Person = Student | Teacher;
```

Všimněte si, že typ `BaseUser` jsme neexportovali. Počítáme s tím, že jej nikdo zvenku nebude potřebovat a slouží pouze nám jako pomocný typ se společnými vlastnostmi pro studenty a učitele.

V hlavním souboru `index.ts` pak můžeme typy a rozhraní importovat a použít:

```ts
import { Person } from './model.js';

const participants: User[] = [
  {
    name: 'Robert',
    email: 'robert.sipek@gmail.com',
    level: 'advanced',
  },
  {
    name: 'Zuzana',
    email: 'zuzana.ovesna@seznam.cz',
    courses: ['Programování v TypeScriptu', 'Programování v JavaScriptu'],
  },
];
```

Všimněte si, že i když naše TypeScritový soubory mají příponu `.ts`, při importu používáme příponu `.js`. Toto je velmi důležité, protože TypeScript sám o sobě neumí soubory importovat, takže všechny importy prostě zkopíruje do výsledného JavaScriptového souboru tak, jak jsou. Pokud bychom použili příponu `.ts`, ve výsledném JavaScriptu bychom měli import TypeScriptového souboru, který by pro běh v prohlížeči nebyl použitelný.

## Nastavení modulů

Pouze pro připomenutí je dobré zmínit, že pro správné fungování importů a exportů v prohlížeči musíme mít soubor `index.js` vložený do HTML souboru s atributem `type="module"`. Zároveň je třeba mít v souboru `tsconfig.json` nastavenou vlastnost `module` na alespoň `es2020`. My v tomtku kurzu budeme dokonce použvíat hodnotu ještě vyšší, `es2022`. Důvody rozebereme v dalších lekcích.

```json
{
  "compilerOptions": {
    "lib": ["es2020", "dom"],
    "module": "es2022",
    "strictNullChecks": true
  },
  "include": ["./*.ts"]
}
```

## Soubory d.ts

Všimněte si, že nás soubor `model.ts` obsahuje **pouze** TypeScriptové typy. Není v něm žádný kód, který by něco prováděl. Když takový soubor zkompilujeme do JavaScriptu pomocí `tsc`, dostaneme soubor `model.js`, který ale bude úplně prázdný. Jak už víme, při kompilaci se všechen kód týkající se TypeScriptových typů zahodí. V souboru `model.js` tak nezbyde nic.

Je zbytečné a matoucí, aby náš projekt obsahoval spoustu prázdných JavaScriptových souborů. Proto se pro soubory, které obsahují pouze TypeScriptové typy, používá přípona `.d.ts`. Když tedy vytvoříme soubor `model.d.ts` s naším datovým modelem, můžeme typy z něj importovat do našeho hlavního souboru `index.ts`, ale TypeScript kompilátor jej zcela ignoruje a nevytváří z něj žádný JavaScriptový soubor.
