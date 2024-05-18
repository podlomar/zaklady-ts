## Pole a objekty

V minulé lekci jsme si ukázali takzvané _primitivní typy_: `string`, `number`, `boolean`, `null`, `undefined`, `bigint` a `symbol`. Tyto typy slouží k ukládání jednoduchých hodnot, jako jsou čísla, řetězce nebo logické hodnoty. Slouží také jako základní stavební kameny pro takzvané _složené typy_, které umožňují ukládat složitější datové struktury.

Pokud chceme například vytvořit typ pro pole hodnot, použijeme následující syntaxi:

```ts
const ages: number[] = [18, 20, 25, 30];
const names: string[] = ["Alice", "Bob", "Charlie"];
```

Stačí tedy vždy napsat typ, který pole obsahuje, a za něj přidat hranaté závorky. V tomto jsou pole velice jednoduchá.

## Typy pro objekty

Typ pro objekt se v TypeScriptu zapisuje pomocí klíčového slova `interface`. Ve složených závorkách pak definujeme strukturu objektu, tedy jaké vlastnosti má objekt obsahovat.

```ts
interface User {
  name: string;
  age: number;
  email: string;
  loggedIn: boolean;
}
```

Proměnnou tohoto typu pak vytvoříme klasickým způsobem:

```ts
const user: User = {
  name: "Alice",
  age: 25,
  email: "alice.palice@gmail.com",
  loggedIn: true,
};
```

TypeScript pak bude kontrolovat, že

- objekt, který do proměnné `user` vložíme, má všechny vlastnosti, které jsme v `interface` definovali,
- všechny hodnoty vlastností mají správný typ.
- objekt neobsahuje žádné jiné vlastnosti, než které jsou v `interface` uvedené,
- nebude možné přistupovat k vlastnostem, které `interface` neobsahuje.

U každé vlastnosti máme možnost deklarovat, že je volitelná. To uděláme tak, že za název vlastnosti přidáme otazník:

```ts
interface User {
  name: string;
  age?: number;
  email: string;
  loggedIn: boolean;
}
```

V tomto případě může mít objekt typu `User` vlastnost `age` vynechanou a její hodnota bude `undefined`.
