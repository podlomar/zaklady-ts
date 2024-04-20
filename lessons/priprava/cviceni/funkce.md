---
title: Funkce
demand: 2
---

Přepište všechny následující funkce do TypeScriptu. Správně přidejte typy ke všem parametrům a návratovým hodnotám. Přidejte také typy pro všechny proměnné, které se v těle funkce vyskytují, i v případech, kdy by TypeScript dokázal jejich typ odvodit sám.

1.  Funkce, která spočítá průměr ze dvou čísel:
    ```js
    const average = (x, y) => (x + y) / 2;
    ```
1.  Funkce, která zjistí, zda je zadaný řetězec prázdný:
    ```js
    const isEmpty = (input) => input === "";
    ```
1.  Funkce, která odstraní z řetězce všechny nečíselné znaky a zkrátí jej na 16 znaků. Tato funkce se nám bude velmi hodit ve cvičení v příští lekci.
    ```js
    const filterNonDigits = (value) => {
      return value.replace(/\D/g, '').slice(0, 16);
    };
    ```
1.  Funkce, která zjistí, zda zadaný řetězec začíná číslem v rozsahu od 100 do 999. Také bude potřeba v příští lekci.
    ```js
    const startsWith = (value, min, max) => {
      const digits = min.toString().length;
      const start = parseInt(value.slice(0, digits));
      return start >= min && start <= max;
    };
    ```


<!-- Následujicí funkce obsluhuje nějaký formulář. Obecný typ pro události je `Event`. Pozor však, že `event.target` nevrací typ, který zde potřebujeme. Přečtěte si, na co si TypeScript stěžuje a proveďte přetypování na správný typ.

```ts
const submitForm = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  console.log(formData);
};
```

U následujícího posluchače události také doplňte typy. Typ `Event` ovšem nedovoluje přístup k souřadnicím myši. Zkuste vygooglit, jaký typ události je potřeba, abyste měli přístup k vlastnostem `clientX` a `clientY`.

```js
const handleClick = (event) => {
  document.body.innerHTML = `Kliknuto na pozici x: ${event.clientX}, y: ${event.clientY}`;
};
```
 -->
