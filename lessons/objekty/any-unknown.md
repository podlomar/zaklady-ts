## Typy `any` a `unknown`

V TypeScriptu občas narazíme na dva velmi speciální typy `any` a `unknown`. Tyto typy často působí problémy i zkušeným programátorům. Proto si je tady podrobně rozebereme, abyste rychle přerostli i ty největší profíky v oboru.

Typ `any` má tři důležité vlastnosti:

1. do proměnné typu `any` můžeme přiřadit libovolnou hodnotu,
1. s hodnotou typu `any` můžeme provádět libovolné operace,
1. hodnotu typu `any` můžeme přiřadit proměnné libovolného typu.

Ukázka první vlastnosti:

```ts
let x: any = 5;
x = 'Hello, world!';
x = true;
x = [1, 2, 3];
x = { name: 'Alice', age: 25 };
```

Vidíte, že proměnná typu `any` s v podstatě chová jako „JavaScriptová proměnná“ - můžeme do ní vložit cokoliv a TypeScript nebude provádět žádnou kontrolu typů.

Druhá vlastnost říká, že s proměnnou typu `any` můžeme provádět co chceme:

```ts
console.log(x + 5);
console.log(x.toUpperCase());
console.log(x.length);
console.log(x());
console.log(x[2]);
```

K proměnné typu `any` se můžeme chovat jako k libovolné hodnotě. Opět to velmi připomíná JavaScript, kde si také můžeme s proměnnými dělat, co chceme.

Třetí vlastnost je možná nejzajímavější. Můžeme totiž přiřadit hodnotu typu `any` do proměnné libovolného typu:

```ts
let y: number = x;
let z: string = x;
let w: boolean = x;
let v: number[] = x;
let u: { name: string; age: number } = x;
```

Všechny tyto přiřazení projdou bez chyby. TypeScript nám prostě uvěří, že víme co děláme a že proměnná `x` obsahuje správný typ hodnoty.

Použití `any` tedy v podstatě znamená, že se chceme úplně vyvázat z typové kontroly a chovat se v podstatě jako v JavaScriptu. Taková věc je ale vždycky hodně špatný nápad. K čemu nám pak vlastně TypeScript je, když ho takto obcházíme? 

## Použití `any`

V některých situacích se použití `any` hodí, ale musíme zatraceně dobře vědět, co děláme a proč to děláme.

### Při použití knihoven

Některé knihovny nejsou napsané v TypeScriptu. Například knihovna `collect.js`, která obsahuje mnoho užitečných funkcí pro práci s poli a kolekcemi, je napsaná v čistém JavaScriptu. Pokud chceme tuto knihovnu používat, musíme se smířit s tím, že funkce z tého knihovny budou vracet `any`, protože TypeScript nemá žádné informace o typech, které tyto funkce vrací.

```ts
import collect from 'collect.js';

const prumer = collect([1, 2, 3, 4, 5]).average();
// proměnná prumer je typu any, i když bychom logicky čekali number
```

### Při fetchování dat

Když fetchujeme data z nějakého API, TypeScript také netuší, jaká data dostaneme.`any`.

```ts
const response = await fetch('https://api.example.com/data');
const data = await response.json();
// proměnná data je typu any
```

### Když zapomeneme uvést typ

Například když zapomeneme uvést typ parametru funkce, TypeScript mu automaticky přiřadí typ `any`.

```ts
const add = (a, b) => {
  return a + b;
}
// parametry a, b jsou oba typu any
```

## Typ `unknown`

Typ `unknown` je novinka v TypeScriptu verze 3.0 a jde v podstatě o bezpečnější verzi typu `any`. Podobně jako u typu `any` můžeme do proměnné typu `unknown` přiřadit libovolnou hodnotu. Na rozdíl od typu `any` ale s hodnotou typu `unknown` nemůžeme provádět žádné operace a také nemůžeme takovou přiřadit do žádné proměnné.

```ts
let x: unknown = 5; // v pořádku
x = 'Hello, world!'; // v pořádku
x = true; // v pořádku
x = [1, 2, 3]; // v pořádku
x = { name: 'Alice', age: 25 }; // v pořádku

console.log(x + 5); // chyba
console.log(x.toUpperCase()); // chyba
console.log(x.length); // chyba
console.log(x()); // chyba

let y: number = x; // chyba
let z: string = x; // chyba
let w: boolean = x; // chyba
```

Typ `unknown` je tedy o velký kus bezpečnější než typ `any`. Pokud chceme nějak použít hodnotu typu `unknown`, musíme ji nejprve explicitně přetypovat na správný typ:

```ts
const y: number = (x as number) + 5;
const z: string = (x as string).toUpperCase();
```

Typ `any` tedy znamená, že se chceme úplně vyhnout typové kontrole. Typ `unknown` znamená, že nevíme jakého je hodnota typu. Dokud TypeScriptu neřekneme, jakého typu doopravdy je, nemmůžeme s takovou hodnotou nic dělat.

## Použití `unknown`

Typ `unknown` je užitečný například při fetchování dat z API. Pokud nevíme, jaká data dostaneme, můžeme je nejprve načíst jako `unknown` a pak je přetypovat na správný typ.

Všimněte si, že klasická funkce `fetch` vrací `any`, pokud ji použijeme bez explicitního typování:

```ts
const response = await fetch('https://api.example.com/data');
const data = await response.json();
// proměnná data je typu any
```

Nic nás tedy nenutí specifikovat, jakého je proměnná `data` skutečně typu a můžeme si s ní dělat, co chceme. Kdyby metoda `json` vracela `unknown`, museli bychom si nejprve proměnnou `data` přetypovat na správný typ:

```ts
const response = await fetch('https://api.example.com/data');
const data = await response.json() as User;
// proměnná data je typu User
```

Pokud bychom přetypování zapomněli, nemohli bychom s proměnnou `data` provádět žádné operace. Takto nás typ `unknown` nutí k tomu, abychom si byli jisti, jaký skutečný typ máme v proměnné uložený.

Bohužel, funkce `response.json` vrací `any`, protože byla otypována ještě za dob, kdy typ `unknown` neexistoval. V nových verzích TypeScriptu se ale snažíme používat typ `unknown` všude tam, kde nevíme, jakého typu je hodnota, kterou dostaneme.
