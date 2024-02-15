---
title: Funkce
demand: 2
---

Přepište všechny následující funkce do TypeScriptu. Správně přidejte typy ke všem parametrům a návratovým hodnotám.

```js
const average = (x, y) => (x + y) / 2;

const isEmpty = (input) => input === "";

// Odstraní z řetězce všechny nečíselné znaky a zkrátí jej na 16 znaků
// Tato funcke se nám bude hodit v dalším cvičení
const filterNonDigits = (value) => {
  return value.replace(/\D/g, '').slice(0, 16);
};

// Zkuste vygooglit, jaký typ události je potřeba, abyste měli přístup k souřadnicím myši
const handleClick = (event) => {
  document.body.innerHTML = `Kliknuto na pozici x: ${event.clientX}, y: ${event.clientY}`;
};
```
