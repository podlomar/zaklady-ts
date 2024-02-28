## Import a export

Ať už pracujeme v čistém JavaScriptu nebo v TypeScriptu, málokdy se nám program vejde do jednoho souboru. Stejně jako v čistém JavaScriptu můžeme v TypeScriptu používat klíčová slova `import` a `export` pro práci s více soubory. Můžeme tak například vytvořit soubor `model.ts` s datovým modelem pro studenty a učitele a všechny typy a rozhraní z tohoto souboru exportovat, abychom je mohli použít v jiných souborech.

```ts
interface BasePerson {
  name: string;
  email: string;
}

export interface Student extends BasePerson {
  role: 'student';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Teacher extends BasePerson {
  role: 'teacher';
  courses: string[];
}

export type Person = Student | Teacher;
```

Všimněte si, že typ `BasePerson` jsme neexportovali. Počítáme s tím, že jej nikdo zvenku nebude potřebovat a slouží pouze nám jako pomocný typ se společnými vlastnostmi pro studenty a učitele.

V hlavním souboru `index.ts` pak můžeme typy a rozhraní importovat a použít:

```ts
import { Person, Student, Teacher } from './model';

const student: Student = {
  name: 'Robert',
  email: '
