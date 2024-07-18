## Vytváření nadtypů a podtypů

V minulé lekci jsme si na ukázkovém příkladu se studeny a lektory ukazovali základní techniky datového modelování. Náš základní model by mohl vypadat nějak takto:

```ts
interface User {
  name: string;
  email: string;
  lastLoggedIn?: string;
}

interface Student extends User {
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Teacher extends User {
  courses: string[];
}
```

Už jsme viděli, že `extends` vytváří vztah :term{cs=podtypnadtyp en=subtypesupertype}. Kvůli excess propery checks ale memůžeme tedy do proměnné typu `Person` přímo uložit objektový literál typu `Student` nebo `Teacher`. Pro účely evidence osob bychom však takovou možnost mít chtěli. Například bychom mohli chtít mít pole všech osob, které se účastní nějaké akce, ať už jsou to studenti nebo lektoři. Měli bychom tak pole typu `User[]`, ale zatím bychom do něj nemohli uložit objekty typu `Student` nebo `Teacher`. Takovýto kód selže právě kvůli excess property checks:

```ts
const participants: User[] = [
  {
    name: 'Robert',
    email: 'robert.sipek@gmail.com',
    level: 'advanced', // ❌ Property 'level' does not exist on type 'User'.
  },
  {
    name: 'Zuzana',
    email: 'zuzana.ovesna@seznam.cz',
    courses: [
      'Programování v TypeScriptu',
      'Programování v JavaScriptu'
    ], // ❌ Property 'courses' does not exist on type 'User'.
  },
];
```

Abychom tuto situaci vyřešili zařídili, musíme náš model trochu přepracovat.

```ts
interface BaseUser {
  name: string;
  email: string;
  lastLoggedIn?: string;
}

interface Student extends BaseUser {
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Teacher extends BaseUser {
  courses: string[];
}

type User = Student | Teacher;
```

Vytvořili jsem typ `User` tak, aby byl přímo sjednocením typů `Student` a `Teacher`. Díky tomu už můžeme do proměnné typu `User` uložit jak studenta, tak lektora. Typ `User` je **nadtyp**  typů `Student` a `Teacher`, kterou jsou **podtypy** typu `User`.

Nyní již můžeme mít pole všech osob, které se účastní nějaké akce:

```ts
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

Při datovém modelování je tedy důležité myslet nejen na to, jaké vlastnosti mají které typy společné, ale také na to, jaké vztahy podtyp/nadtyp mezi nimi potřebujeme.
