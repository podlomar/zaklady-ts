## Typy pro funkce a DOM

Pokud píšeme v TypeScriptu funkci, chceme pro ni vždy definovat typy parametrů, které přijímá, a také typ návratové hodnoty. Například funkce, která přijímá jméno a příjmení a postaví z nich e-mailovou adresu, může vypadat takto:

```ts
const buildEmail = (firstName: string, lastName: string): string => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
};
```

Všimněte si, že podobně jako u proměnných nás TypeScript nijak nenutí psát typy parametrů a návratové hodnoty. Můžeme tak funkci napsat i takto:

```ts
const buildEmail = (firstName: string, lastName) => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
};
```

Na takovémto zápisu je zajímavé, že TypeScript dokáže správně odvodit, že typ návratové hodnoty bude `string`. Nedokáže však odvodit typ parametru `lastName`, který tak bude typu `any`. Do takovýchto situací se dostávat nechceme, proto si rovnou zavedeme pravidlo, že budem u všech funkcí vždy uvádět typy parametrů i návratové hodnoty.

### Typ `void`

Když potřebujeme otypovat funkci, která nic nevrací, použíjeme k tomu speciální typ `void`. Například funkce, která vypíše na obrazovku pozdrav, může vypadat takto:

```ts
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};
```

### Typy pro práci s DOMem

TypeScript také nabízí typy pro práci s DOMem. Když například vybereme ze stránky element pomocí funkce `document.querySelector`, dostaneme zpět typ `Element`.

```ts
const title: Element = document.querySelector('h1.title');
```

Typ `Element` je ovšem hodně obecný a častěji budeme potřebovat typy pro konkrétnější elementy. Například pokud vybíráme z DOMu element `input`, chceme, abychom měli přístup k vlastnosti `value`. Použijeme proto typ `HTMLInputElement`.

```ts
const emailInput: HTMLInputElement = document.querySelector('input.email');
```

Při práci s událostmi se nám hodí základní typ `Event`. 

```ts
const handleClick = (event: Event): void => {
  console.log('Kliknuto');
};
```

S potížemi se však setkáme, když budeme chtít správný typ pro hodnotu v `event.target`. Například při získávání hodnoty z formulářového pole:

```ts
const handleSubmit = (event: Event): void => {
  event.preventDefault();
  const form = event.target;
};
```

Vlastnost `event.target` je typu `EventTarget`, což ještě obecnější typ než `Element`. Chceme však, aby TypeScript věděl, že `form` je typu `HTMLFormElement`. K tomu použijeme tzv. _type assertion_ nebo-li přetypování:

```ts
const handleSubmit = (event: Event): void => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
};
```

Přetypování je obecně velmi nebezpečná technika, která může do kódu vnést nečekané chyby. V tomto jednom případě nám však jiná možnost nezbývá.
