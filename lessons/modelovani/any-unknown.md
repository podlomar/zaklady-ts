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

V některých situacích se použití `any` hodí, ale musímte zatraceně dobře vědět, co děláme a proč to děláme.
