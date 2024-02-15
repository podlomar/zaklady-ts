---
title: Funkce
demand: 2
---

Přepište všechny následující funkce do TypeScriptu. Správně přidejte typy ke všem parametrům a návratovým hodnotám. Přidejte také typy pro všechny proměnné, které se v těle funkce vyskytují, i když by TypeScript dokázal jejich typ odvodit sám.

```js
const average = (x, y) => (x + y) / 2;

const isEmpty = (input) => input === "";

// Odstraní z řetězce všechny nečíselné znaky a zkrátí jej na 16 znaků
// Tato funkce se nám bude hodit v dalším cvičení
const filterNonDigits = (value) => {
  return value.replace(/\D/g, '').slice(0, 16);
};

// Zjistí, zda zadaný řetěcec začíná číslem v daném rozsahu
const startsWith = (value, min, max) => {
  const digits = min.toString().length;
  const start = parseInt(value.slice(0, digits));
  return start >= min && start <= max;
}

const setPageTitle = (title) => {
  const titleElement = document.querySelector('#title');
  titleElement.textContent = title;
};
```

Následujicí funkce obsluhuje nějaký formulář. Obecný typ pro události je `Event`. Pozor však, že `event.target` nevrací typ, který zde potřebujeme. Přečtěte si, na co si TypeScript stěžuje a proveďte přetypování na správný typ.

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

