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

Mezi typy `User`, `Student` panujte takzvaný _IS-A_ vztah. To znamená, že každý student je uživatel. Zkratka pochází z anglického "student IS A user". Stejně tak každý lektor je uživatel. Také se někdy říká, že `Student` a `Lecturer` jsou _podtypy_ typu `User`.

Z výše uvedeného logicky plyne, že všude tam, kde očekáváme typ `User`, můžeme použít i typ `Student` nebo `Lecturer`. Když například máme proměnnou typu `User`, můžeme do ní vložit i objekt typu `Student` nebo `Lecturer`:

```ts
const bob: Student = {
  name: 'Bob',
  email: 'bob.navratil@gmail.com',
  level: 'intermediate'
};
const user: User = bob;
```

Stejně tak můžeme vytvořit pole typu `User` a do něj vložit objekty typu `Student` nebo `Lecturer`.

```ts
const users: User[] = [
  { name: 'Alice', email: 'alice.bendova@gmail.com' },
  { name: 'Bob', email: 'bob.navratil@gmail.com', level: 'intermediate' },
  { name: 'Charlie', email: 'charlie.parker@gmail.com', courses: ['JavaScript', 'TypeScript'] },
];
```

Když pak držíme objekt typu `Student` nebo `Lecturer` v proměnné typu `User`, můžeme s ním pracovat pouze jako s objektem typu `User`. To znamená, že můžeme přistupovat pouze k vlastnostem `name` a `email`, ale ne k vlastnostem `level` nebo `courses`.

```ts
const user: User = users[1];
console.log(user.name); // OK
console.log(user.email); // OK
console.log(user.level); // Chyba
```

V tuto chvíli vlastně nemám jak zjistit, zda je objekt v poli typu `User` ve skutečnosti objekt typu `Student` nebo `Lecturer`. Jak takovou věc zařídit, se dozvíte v dalších lekcích.
