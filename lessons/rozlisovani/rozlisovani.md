## Rozlišování a zužování typů

Pokračujme v modelu z přechozí sekce. Nyní máme pole osob přihlášených na nějakou akci:

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
  {
    name: 'Marek',
    email: 'marek.dovtipil@email.cz',
    courses: ['Programování v TypeScriptu', 'Základy algoritmů'],
  },
  {
    name: 'Jitka',
    email: 'jitus1988@gmail.com',
    level: 'beginner',
  },
];
```

Nyní bychom chtěli vytvořit seznam účastníků, kteří jsou studenti. Narazíme však na problém. Všechny účastníci jsou typu `Person` a my nemáme jak poznat, kdo je student a kdo lektor. TypeScript nám nedovolí přistoupit k žádným vlastnostem, které jsou specifické pro studenty nebo lektory.

```ts
participants.forEach((person) => {
  if (person.level) {
    // ❌ Property 'level' does not exist on type 'Person'.
  }
});
```

V TypeScriptu existuje speciální technika, která se jmenuje __discriminated unions__. Do každého podtypu `Person` přidáme speciální vlastnost, která se v našem přípdě bude jmenovat `role`.

```ts
interface Student extends BasePerson {
  role: 'student';
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Teacher extends BasePerson {
  role: 'teacher';
  courses: string[];
}
```

Vlastnost `role` má v každém podtypu jinou hodnotu, která je přímo literál udávající název role. Když pak tyto typy sjednotíme pod `Person`, můžeme vyzkoušet, jakého typu bude vlastnost `role`:

```ts
person.role; // "student" | "teacher"
```

TypeScript je dokonce tak chytrý, že když v podmínce `if` použijeme vlastnost `role`, v jednotlivých větvích podmínky bude mít proměnná `person` automaticky správný typ:

```ts
participants.forEach((person) => {
  if (person.role === 'student') {
    // Tady něco provedeme s typem Student
    console.log(person.level); // ✅ funguje, person je zde typu Student
  } else {
    // Tady něco provedeme s typem Teacher
    console.log(person.courses); // ✅ funguje, person je zde typu Teacher
  }
});
```

Když takto TypeScript uvnitř nějaké větve kódu zjistí, že si může dovolit použít nějaký podtyp místo nadřazeného typu, říkáme, že provádí _zúžení_ typu. Anglicky se tomuto postupu říká _type narrowing_.
