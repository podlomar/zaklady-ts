## Type pro funkce a DOM

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

### Typy pro práci s DOMem

TypeScript také nabízí typy pro práci s DOMem. Když například vybereme ze stránky element pomocí funkce `document.querySelector`, dostaneme zpět typ `Element`.

```ts
const title: Element = document.querySelector('h1.title');
```

Typ `Element` je ovšem hodně obecný a častěji budeme potřebovat typy pro konkrétnější elementy. Například pokud vybíráme z DOMu element `input`, chceme, abychom měli přístup k vlastnosti `value`. Použijeme proto typ `HTMLInputElement`.

```ts
const emailInput: HTMLInputElement = document.querySelector('input.email');
```
