## Typy pro funkce

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

:::box{type=remember}
U všech funkcí vždy definujte jak typy parametrů, tak typ návratové hodnoty. Váš kód bude mnohem čitelnější a méně náchylný k chybám.
:::

### Typ `void`

Když potřebujeme otypovat funkci, která nic nevrací, použíjeme k tomu speciální typ `void`. Například funkce, která vypíše na obrazovku pozdrav, může vypadat takto:

```ts
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};
```
