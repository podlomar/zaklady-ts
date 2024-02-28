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

## Strict null checks

Pokud v předchozí ukázce najedete myší na proměnnou `address`, uvidíte, že TypeScript vám bude hlásit typ `string`, nikoliv `string | undefined`. To vypadá jako by nám `undefined` někam zmizelo. TypeScript totiž v základním nastavení typy `null` a `undefined` zcela ignoruje. Máme-li tedy někde proměnnou typ `string` nebo třeba `User`, můžeme do ní bez problémů přiřadit i `null` nebo `undefined`. Takové chování je však téměř vždy nežádoucí, protože při vývoji aplikací chceme přesně řečeno, kde může být `null` a kde ne. 

TypeScript má nastavení `strictNullChecks`, které nám umožňuje zapnout přísnou kontrolu `null` a `undefined`. Když je toto nastavení zapnuté, TypeScript bude hlásit chybu pokaždé, když se pokusíme přiřadit `null` nebo `undefined` do proměnné, do které tyto hodnoty nepatří.

Nastavení `strictNullChecks` se zapíná v souboru `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

Od této chvíle budeme na všech našich projektech toto nastavení zapinat. Celý `tsconfig.json` bude tedy vypadat takto:

```json
{
  "compilerOptions": {
    "lib": ["es2020", "dom"],
    "module": "es2020",
    "strictNullChecks": true
  },
  "include": ["./*.ts"]
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
const color: "red" | "green" | "blue" = "green";
const direaction: "up" | "down" | "left" | "right" = "left";
const dayOfWeek: 1 | 2 | 3 | 4 | 5 | 6 | 7 = 4;
```

Těmto typům se často říká _výčtové typy_.

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
