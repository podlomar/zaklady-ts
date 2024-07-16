## Dědičnost

Při práci s objektovými typy se nám často stane, že některé typy mají společné vlastnosti a logicky dává smysl, aby jeden typ byl odvozený od druhého. Chceme tak mezi nimi vytvořit podobné ztahy, jako jste už viděli u typů pro DOM elementy. Například typ `HTMLInputElement` je podtypem typu `HTMLElement`, ten je zase podtypem typu `Element` a tak dále.

V minulé lekci jsme pracovali s type `User`. Nyní bychom chtěli vytvořit typy odvozené od `User`, například typ `Student` a typ `Teacher`. K tomu budeme ale potřebovat malinko jiný způsob vytváření objektoých typů.

## Interface

Typ `User` jsme v minulé lekci vytvořili pomocí type aliasu. 

```ts
type User = {
  name: string;
  email: string;
  lastLoggedIn?: string;
}
```

Objekty však můžeme v TypeScriptu definovat také pomocí syntaxe zvané `interface`. Následující definice vytvoří stejný typ `User` jako výše:

```ts
interface User {
  name: string;
  email: string;
  lastLoggedIn?: string;
}
```

Tento způsob zápisu nám umožňuje vytvářte podtypy objektových typů. 

## Etends

Pokud bychom chtěli vytvořit typ `Student`, mohl by vypadat třeba takto:

```ts
interface Student {
  name: string;
  email: string;
  lastLoggedIn?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}
```

Všimněte si, že typ `Student` má vlastnosti `name`, `email`, `lastLoggedIn` stejné jako typ `User`. Můžeme proto říct, že `Student` je podtypem `User` a bude mít všechny jeho vlastnosti. K tomu se použije klíčové slovo `extends`:

```ts
interface Student extends User {
  level: 'beginner' | 'intermediate' | 'advanced';
}
```

Podobně můžeme vytvořit typ `Teacher`:

```ts
interface Teacher extends User {
  courses: string[];
}
```

Díky této konstrukci nemusíme v typech `Student` a `Lecturer` opakovat vlastnosti `name`, `email` a `lastLoggedIn`. Ty se automaticky převezmou z typu `User`. Logicky pak můžeme říct, že každý student je zároveň uživatel a také každý učitel je uživatel. 

## Rozhraní a podtypy

Objekty definované pomocí `extends` mají mezi sebou vztah podtyp/nadtyp podobně, jako jsme to viděli v případě typů pro DOM elementy. Typy `Student` a `Teacher` jsou podtypy typu `User`. To znamená, že pokud někde očekáváme typ `User`, můžeme tam bez okolků poslat `Student` nebo `Teacher`. Můžeme mít například funkci, která pro každého uživatele vrátí jeho čas posledního příhlášený převedaný na datum:

```ts
const getLastLoginDate = (user: User): Date | null => {
  if (user.lastLoggedIn !== undefined) {
    return new Date(user.lastLoggedIn);
  }
  return null;
};
```

Funkci pak můžeme zavolat s libovolným uživatelem, tedy i s `Student` nebo `Teacher`:

```ts
const student: Student = {
  name: 'Robert',
  email: 'robert.pavlasek@seznam.cz',
  lastLoggedIn: '2021-10-10T12:00:00',
  level: 'advanced',
};

const lastLoginDate = getLastLoginDate(student);
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
