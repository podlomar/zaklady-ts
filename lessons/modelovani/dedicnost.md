## Dědičnost

Při práci s objektovými typy se nám často stane, že některé typy mají společné vlastnosti a logicky dává smysl, aby jeden typ byl odvozený od druhého. Například pokud máme typ `User` a typ `Student`, můžeme očekávat, že `Student` bude mít všechny vlastnosti, které má `User`, a navíc nějaké další.

```ts
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

Objekty definované pomocí `extends` mají mezi sebou vztah podtyp/nadtyp podobně, jako jsme to viděli v případě typů pro DOM elementy. Typy `Student` a `Lecturer` jsou podtypy typu `User`. To znamená, že pokud někde očekáváme typ `User`, můžeme tam poslat `Student` nebo `Lecturer`. Můžeme mít například funkci, která pro každého uživatele vrátí jeho login:

```ts
const getUserLogin = (user: User): string => {
  const [login, domain] = user.email.split('@');
  return login;
};
```

Funkci pak můžeme zavolat s libovolným uživatelem, tedy i s `Student` nebo `Lecturer`:

```ts
const student: Student = {
  name: 'Robert',
  email: 'robert.pavlasek@seznam.cz',
  level: 'advanced',
};

const login = getUserLogin(student);
```

## Excessive property checks

Přiřazování objektů `Student` a `Lecturer` do proměnných typu `User` má dva možná trochu nečekané zádrhely. Jak už jsme viděli, snadno můžeme udělat takového přiřazení:

```ts
const student: Student = {
  name: 'Robert',
  email: 'robert.pavlasek@seznam.cz',
  level: 'advanced',
};

const user: User = student;
```

Za následující přiřazené nám však TypeScript vynadá:

```ts
const user: User = {
  name: 'Robert',
  email: 'robert.pavlasek@seznam.cz',
  level: 'advanced',
};
```

Tohle vypadá trochu nečekaně. Před chvíli jsme řekli, že `Student` je podtyp `User`, takže bychom měli moci přiřadit `Student` do proměnné typu `User`. Pokud však do proměnné typu `User` přiřadíme přímo objektový literál. TypeScript totiž v tomto případě kontroluje, zda objektový literál nemá nějaké vlastnosti navíc, které by nebyly v typu `User`. V našem případě je to vlastnost `level`, která je v `Student`, ale není v `User`.

Tomuto typu kontroly se říká _excessive property check_. 

Přiřazení `student` do typu `User` neprojde, protože má nějaké vlastnosti navíc, které `User` nemá. Naštěstí TypeScript nás na to upozorní.

:::box{type=note}
Vztahům mezi objektovými typy v TypeScriptu se budeme ještě hlouběji věnovat v dalších lekcích a ukážeme si, jak mezi objektovýmni typy vytvářet skutečné vztahy podtypy/nadtyp.
:::
