## Sjednocení typů

V reálných projektech často chceme, aby nějaká proměnná mohla být více než jednoho typu. Můžeme například říct, že PSČ zadané do formuláře může být buď číslo, nebo řetězec. K tomu v TypeScriptu slouží operátor `|`. 

```ts
const zipCode: number | string = "180 00";
```

Sjednocení se nám velmi hodí v případě, kdy nějaká proměnná nebo vlastnost objektu může mít hodnotu `null` nebo `undefined`. V takovém případě můžeme napsat:

```ts
const address: string | undefined = undefined;
```

nebo:

```ts
interface User {
  name: string;
  email: string;
  address: string | null;
}
```

## Literální typy

V TypeScriptu je možné definovat i takzvané literální typy, což je vlastnost, kterou většina jiných typovaných jazyků nemá. Literální typ je takový, který může mít pouze jednu konkrétní hodnotu. Například:

```ts
const name: "Alice" = "Alice";
const age: 25 = 25;
const married: true = true;
```

Proměnná `name` tedy není typu `string`, ale typu `"Alice"`. To znamená, že do ní lze přiřadit pouze řetězec `"Alice"` a žádný jiný. Podobně v `age` může být pouze číslo `25` a v `married` pouze logická hodnota `true`.

Na první pohled takovýto typ působí zbytečně. K čemu je proměnná, která může mít pouze jednu hodnotu? Literální typy se však hodí na místech, kde chceme vytvořit nějaký výčet možností. Například:

```ts
const color: "red" | "green" | "blue";
const direaction: "up" | "down" | "left" | "right";
const dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

Těmto typům často říká _výčtové typy_.

## Alias

Když potřebujeme nějaký typ použít na více místech, můžeme si pro něj vytvořit takzvaný alias. To znamená, že typu dáme konkrétní jméno. Alias se vytváří pomocí klíčového slova `type`:

```ts
type ZipCode = number | string;
type Color = "red" | "green" | "blue";
type Direction = "up" | "down" | "left" | "right";
type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;
```

Takovýto alias pak můžeme použít k typování proměnných, parametrů funkcí atd. stejně jako jakýkoliv jiný typ:

```ts
const zipCode: ZipCode = "180 00";
const color: Color = "red";
const direction: Direction = "up";
const dayOfWeek: DayOfWeek = 1;
```
