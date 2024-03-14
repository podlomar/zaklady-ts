## Vytváření nadtypů a podtypů

V minulé lekci jsme si na ukázkovém příkladu se studeny a lektory ukazovali základní techniky datového modelování. Náš základní model by mohl vypadat nějak takto:

```ts
interface Person {
  name: string;
  email: string;
}

interface Student extends Person {
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Teacher extends Person {
  courses: string[];
}
```

Už jsme viděli, že `extends` nevytváří vztah :term{cs=podtypnadtyp en=subtypesupertype}. Nemůžeme tedy do proměnné typu `Person` přímo uložit objekt typu `Student` nebo `Teacher`. Pro účely evidence osob bychom však takovou možnost mít chtěli. Například bychom mohli chtít mít pole všech osob, které se účastní nějaké akce, ať už jsou to studenti nebo lektoři.

Abychom toto zařídili, musíme náš model trochu přepracovat.

```ts
interface BasePerson {
  name: string;
  email: string;
}

interface Student extends BasePerson {
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Teacher extends BasePerson {
  courses: string[];
}

type Person = Student | Teacher;
```

Vytvořili jsem typ `Person` tak, aby byl přímo sjednocením typů `Student` a `Teacher`. Díku tomu už můžeme do proměnné typu `Person` uložit jak studenta, tak lektora. Typ `Person` je tedy **nadtyp**  typů `Student` a `Teacher`, kterou jsou **podtypy** typu `Person`.

Nyní již můžeme mít pole všech osob, které se účastní nějaké akce:

```ts
const participants: Person[] = [
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
