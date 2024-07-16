## Strukturální a nominální typování

Než se pustíme do dalších praktických příkladů, je čas na trochu teorie, abychom se nám v hlavách postupně skládal správný obraz toho, jak TypeScript interně funguje.

V předchozí sekci už jsme se dotkli toho, že jeden objektový typ, například `Student`, může být podtypem jiného objektového typu, například `User`. V takovém případě můžeme objekt typu `Student` přiřadit proměnné typu `User`.

Obecně, máme-li v našem programu typ `A` a typ `B`, můžeme se ptát, zda je možné hodnotu typu `B` přiřadit proměnné typu `A`.

```ts
const a: A = // nějaká hodnota typu A;
const b: B = a;
```

Pokud je to možné, typ `B` je podtypem typu `A`. Zde rozhodně numusí jít jen o objektové typy jako `Stuedent` a `User`. Uvažujme například následující kód:

```ts
const b: number = 5;
const a: number | string = b;
```

Hodnota typu `number` jistě může být přiřazena proměnné typu `number | string`. Naopak, pokud bychom chtěli přiřadit hodnotu typu `number | string` proměnné typu `number`, TypeScript by nám to nedovolil. Proto je typ `number` podtypem typu `number | string`.

V typovaných jazycích se setkáme s dvěma základními přístupy k určování kompatibility mezi typy: strukturálním a nominálním. Oba přístupy mají své výhody a nevýhody, a každý jazyk si vybírá takový přístup, který nejlépe vyhovuje jeho filozofii a cílům.

Jazyk TypeScript použítá strukturální typování, což znamená, že dva typy jsou kompatibilní, jestliže mají stejnou strukturu. To znamená, že pokud například objekt `Person` má všechny vlastnosti, které má objekt `User`, můžeme objekt `Person` přiřadit proměnné typu `User`.

```ts
interface User {
  name: string;
  email: string;
}

interface Person {
  name: string;
  email: string;
  age: number;
  address: string;
}

const person: Person = {
  name: "Alice",
  email: "alice.bendova@gmail.com",
  age: 25,
  address: "Koníčkova 27, Nové Hrady",
};

const user: User = person;
```

Tomotu druhu typování se také říká _duck typing_, podle anglického rčení "If it looks like a duck, swims like a duck, and quacks like a duck, then it is a duck.". Tedy v našem případě, když nějaký objekt má jméno typu `string` a e-mail typu `string`, tak je to prostě typue `User`, i když není z typu `User` odvozený.

V jazycích jako například C# nebo Java se naopak používá takzvané _nominální typování_, kde dva typy jsou kompatibilní pouze tehdy, pokud se mezi nimi explicitně definuje vztah například pomocí klíčového slova `extends`. To znamená, že pokud máme typ `Student` a typ `User`, musíme explicitně napsat, že `Student` je odvozený od `User`.

## Hierarchie typů

Na základě toho, jaký typ je podtypem jiného typu, můžeme vytvořit hierarchii typů v TypeScriptu. Když je type `B` podtypem typu `A`
