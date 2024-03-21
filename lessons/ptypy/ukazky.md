## Ukázky generických typů

Parametrické nebo-li generické typy se také hodí při definici různých objektů a typových aliasů.Mohli bychom chtít například typ, který rozšíří nějaký jiný typ o hodnotu `null`. 

```typescript
type Nullable<T> = T | null;
```

Když za parametr `T` dosadíme `number`, dostaneme typ `number | null`, když za `T` dosadíme `string`, dostaneme typ `string | null` atd.

Typ `Nullable<T>` by se mohl hodit pro naši funkci `last`:

```typescript
const last = <T>(arr: T[]): Nullable<T> => {
  return arr.length === 0 ? null : arr[arr.length - 1];
};
```

Typ `Nullable` se však hodí spíš jako ilustrace. Psát `T | null` je kratší a čitelnějěí než `Nullable<T>`. 

Pro praktičtější příklad si představem situaci, kdy chceme z nějaké funkce vrátit dvě hodnoty. Například bychom mohli chtěli funkci, která vezme e-mailovou adresu a vrátí část před zavináčem a část za zavináčem. Bez parametríckých typů bychom to vyřešili třeba takto:
  
```typescript
const splitEmail = (email: string): { before: string, after: string } => {
  const [before, after] = email.split('@');
  return { before, after };
};
```

Takovýchto situací ale může nastat víc a tak si dopředu připravím typ `Pair<T>`:

```typescript
interface Pair<T> {
  first: T,
  second: T,
}
```

Funkci `splitEmail` pak můžeme napsat takto:

```typescript
const splitEmail = (email: string): Pair<string> => {
  const [first, second] = email.split('@');
  return { first, second };
};
```

Ale můžme mít i jinou funkci, například `splitLoot`, která nam rozdělí lup, podle procenta, které dostane každý z lupičů:

```typescript
const splitLoot = (loot: number): Pair<number> => {
  const first = Math.floor(loot * 0.6); // 60%
  const second = Math.floor(loot * 0.4); // 40%
  return { first, second };
};
```

## Typ `Option`

Často také narážíme na situace, kdy nějaká funkce může vrátit buď výsledek nebo selhání. Typickým příkladem je funkce `last`, která může vrátit poslední prvek pole nebo `null`, pokud je pole prázdné. Používání `null` je ale v mnoha situacích nešťastné, protože hodnota `null` se objevuje v různých situacích a při čtení kṕdu může být těžké pochopit, proč se někde zrovna objevilo `null`. Lepší způsobm, jak vyjádřít, že někde může hodnota chybět, je použít tzv. `Option` typ. Ten může mít dvě hodnoty, `Some` nebo `None`. Můžeme si ho definovat takto:

```typescript
interface Some<T> {
  kind: 'some',
  value: T,
}

interface None {
  kind: 'none',
}

type Option<T> = Some<T> | None;
```

`Option` je tedy buď `Some` s nějakou hodnotou, nebo `None` bez hodnoty. Funkci `last` bychom mohli napsat takto:

```typescript
const last = <T>(arr: T[]): Option<T> => {
  if (arr.length === 0) {
    return { kind: 'none' };
  }

  const value = arr[arr.length - 1];
  return { kind: 'some', value };
};
```

Tuto funkci pak můžeme použít takto:

```typescript
const result = last(someArray);
if (result.kind === 'none') {
  console.log('Pole je prázdné');
} else {
  console.log(result.value);
}
```

Tady vidíme v akci generické typy, discriminated unions, literální typy a type narrowing. Už nejsme žádné máčky.
