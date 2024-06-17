## Parametrické funkce

Velký užitek nám parametrické typy přinesou při vytváření typů pro funkce. Nejlépe to uvidíme na náslendujícím příkladu.

V JavaScriptu/TypeScriptu bylo až do verze `es2022` docela nepohodlné získat poslední prvek z pole. Museli jsme napsat

```ts
const primes = [2, 3, 5, 7, 11, 13];
const last = primes[primes.length - 1];
```

Ve verzi `es2022` byla přidána metoda `at`, diky které je získání posledního prvku mnohem příjemnější. My se na chvíli budeme tvářit, že tato metoda neexistuje a budeme chtít vytvořit funkci `last` tak, aby nám rychle vrátila poslední prvek z pole.

```ts
const last = (arr: number[]): number | null => {
  return arr.length === 0 ? null : arr[arr.length - 1];
};
```

Tato funkce funguje dobře, ale je použitelná pouze na pole čísel. Na pole řetězců nebo na pole objektů se použít nedá. Mohli bychom to zkusit obejít pomocí `any`:

```ts
const last = (arr: any[]): any => {
  return arr.length === 0 ? null : arr[arr.length - 1];
};
```

Toto řešení je ale nešťastné, protože úplně ztrácíme typovou kontrolu. Ideálně bychom chtěli, aby funkce brala pole, jehož prvky jsou libovolného typu, a vracela poslední prvek tohoto typu. Tedy když máme pole čísel, vrátila by nám číslo, když máme pole řetězců, vrátila by nám řetězec, atd.

### Parametrický typ

Náš problém s posledním prvkem pole vyřešíme tak, že funkci `last` přidáme typový parametr označený `T`, který bude říkat, jakého typu jsou prvky pole.

```ts
const last = <T>(arr: T[]): T | null => {
  return arr.length === 0 ? null : arr[arr.length - 1];
};
```

Jak už víme z předchozí sekce, parametr `T` ve špičatých závorkách je v postatě _typová proměnná_, ukládáme do ní tedy nikoliv hodnotu, ale typ.

Podle toho, jak funkci voláme, si TypeScript sám doplní, jaký typ do proměnné `T` dosadit. Například:

```ts
const result1 = last([1, 2, 3]); // T = number
const result2 = last(['a', 'b', 'c']); // T = string
const result3 = last([{ name: 'Robert' }, { name: 'Zuzana' }]); // T = { name: string }
```

Ve všech těchto případech TypeScript správně určí, že proměnná `result1` je typu `number`, `result2` je typu `string` a `result3` je typu `{ name: string }`. Tímto způsobem můžeme vytvářet obecné funkce, které pracují s libovolnými typy a zároveň zachovávají typovou kontrolu. 
