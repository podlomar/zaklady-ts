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

Pozor na to, že pokud definujeme objakty pomocí `interface`, nejedná se zde o dědičnost v pravém slova smyslu jak ji možná znáte z objektově orientovaného programování. Typy `Student` a `Lecturer` nejsou podtypy typu `User`. To znamená, že pokud někde typ očekáváme `User`, nemůžeme tam poslat `Student` nebo `Lecturer`.

```ts
// toto neprojde!
const student: User = {
  name: 'Robert',
  email: 'robert.vlach@seznam.cz',
  level: 'advanced',
}; 
```

Přiřazení `student` do typu `User` neprojde, protože má nějaké vlastnosti navíc, které `User` nemá. Naštěstí TypeScript nám na to upozorní.

Vztahům :term{cs=podtyp/nadtyp en=subtype/supertype} mezi typy v TypeScriptu se budeme ještě hlouběji věnovat v dalších lekcích a ukážeme si, jak mezi objektovýmni typy vytvářet skutečné vztahy podtypy/nadtyp.

Jak tuto situaci vyřešit a jak vytvořit skutečný podtyp se dozvíme v dalších lekcích.

