## Typy pro objekty

Kromě polí a složených typů můžeme v TypeScriptu definovat také typy pro objekty. U každého objektového typu je potřeba uvést, jaké vlastnosti objekt obsahuje a jaké mají tyto vlastnosti typy. Například objekt reprezentující uživatele může mít vlastnosti `name`, `email` a `lastLoggedIn`.

```ts
const user: { name: string; email: string; lastLoggedIn: string } = {
  name: 'Hermiona Grangerová',
  email: 'hermiona.grangerova@hogwarts.gb',
  lastLoggedIn: '2021-10-10T12:00:00',
};
```

Typ `{ name: string; email: string; lastLoggedIn: string }` se ale už těžko zapisuje a necheme jej psát pořád dokola. Můžeme si jej proto pojmenovat pomocí aliasu, jak jsme se naučili v předchozí sekci:

```ts
type User = {
  name: string;
  email: string;
  lastLoggedIn: string
};
```

Můžeme pak psát 

```ts
const user: User = {
  name: 'Hermiona Grangerová',
  email: 'hermiona.grangerova@hogwarts.gb',
  lastLoggedIn: '2021-10-10T12:00:00',
};
```

TypeScript bude vždy kontrolovat, že objekt, který do proměnné `user` vložíme, má všechny vlastnosti, které jsme v typu definovali, že všechny hodnoty vlastností mají správný typ a že objekt neobsahuje žádné jiné vlastnosti, než které jsou v typu uvedené.

```ts
const user: User = {
  name: 'Hermiona Grangerová',
  lastLoggedIn: new Date(), // Chyba: Vlastnost lastLoggedIn musí být typu string
  age: 18, // Chyba: V typu Person není vlastnost age
}; // Chyba: V typu Person chybí vlastnost email
```

### Vlastnosti nepovinné a pouze pro čtení

Vlastnosti objektů můžeme označit jako nepovinné pomocí `?` za názvem vlastnosti. Například vlastnost `lastLoggedIn` v objektu reprezentujícím uživatele může být nepovinná, protože uživatel se možná ještě nikdy nepřihlásil.

```ts
type User = {
  name: string;
  email: string;
  lastLoggedIn?: string
};
```

Vlastnosti objektů můžeme také označit jako pouze pro čtení pomocí klíčového slova `readonly`. Takové vlastnosti nelze měnit po vytvoření objektu.

```ts
type User = {
  readonly name: string;
  readonly email: string;
  readonly lastLoggedIn?: string
};
```

S typem `User` pak můžeme pracovat takto:

```ts
const user: User = {
  name: 'Hermiona Grangerová',
  email: 'hermiona.grangerova@hogwarts.gb',
  // lastLoggedIn nemusíme uvádět, protože je nepovinná
};

user.name = 'Lenka Láskorádová'; // Chyba: Vlastnost name je pouze pro čtení
```
