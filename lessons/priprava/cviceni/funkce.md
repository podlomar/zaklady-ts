---
title: Funkce
lead: Přepište několik jednoduchých funkcí z JavaScriptu do TypeScriptu
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

Všechny tyto funkce vložte do souboru `index.ts` v nějaké složce. Doplňte soubor `tsconfig.json` dle vzoru z lekce. Spusťte příkaz `tsc` a nechte si vygenerovat JavaScriptový soubor `index.js`. Prohlédněte si výsledný vygenerovaný kód.
