## Dědičnost

Při práci s objektovými typy se nám často stane, že některé typy mají společné vlastnosti a logicky dává smysl, aby jeden typ byl odvozený od druhého. Například pokud máme typ `User` a typ `Admin`, můžeme očekávat, že `Admin` bude mít všechny vlastnosti, které má `User`, a navíc nějaké další.

```
interface User {
  name: string;
  email: string;
}

interface Student {
  name: string;
  email: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Lecturer {
  name: string;
  email: string;
  courses: string[];
}
```

Všechny tři typy `User`, `Student` a `Lecturer` mají společné vlastnosti `name` a `email`. Logicky také můžeme říct, že každý student je uživatel a každý lektor je také uživatel. Můžeme tedy vytvořit nový typ `User` a od něj odvozené typy `Student` a `Lecturer`. To se v TypeScriptu dělá pomocí klíčového slova `extends`:

```ts
interface User {
  name: string;
  email: string;
}

interface Student extends User {
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface Lecturer extends User {
  courses: string[];
}
```

Díky této konstrukci nemusíme v `Student` a `Lecturer` opakovat vlastnosti `name` a `email`. Ty se automaticky převezmou z `User`.

## Rozhraní a podtypy

Pozor na to, že pokud definujeme objakty pomocí `interface`, nejedná se zde o dědičnost v pravém slova smyslu jak ji možná znáte z objektově orientovaného programování. Typy `Student` a `Lecturer` nejsou podtypy typu `User`. To znamená, že pokud někde typ očekáváme `User`, můžeme tam poslat `Student` nebo `Lecturer` jenom díky tomu, že obsahují všechny povinné parametry typu `User`.

```ts
const bob: Student = {
  name: 'Robert',
  email: 'robert.vlach@seznam.cz',
  level: 'advanced',
};

const user: User = bob; // toto projde, ale jen za určitých okolností a ne díky dědičnosti
```

Přiřazení `bob` do `user` neprojde proto, že `Student` je podtyp `User`, ale proto, že obsahuje všechny povinné vlastnosti typu `User` a je uložený do proměnné. Kdybychom objekt typu `Student` na místě vytvářeli a snažili se ho uložit do proměnné typu user, TypeScript by nás upozornil na to, že má nějaké vlastnosti navíc, které `User` nemá. Ano, je to trochu složité a zamotané. 😇 Pro teď se tím nemusíme trápit a stačí nám vědět, že se nejedná o klasickou dědičnost. 

Jak tuto situaci vyřešit a jak vytvořit skutečný podtyp se dozvíme v dalších lekcích.

