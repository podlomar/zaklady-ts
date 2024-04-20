---
title: Platba kartou, první část
demand: 4
---

Základní práci s TypeScriptem si vyzkoušíme na menším projektu. Zadáním je v čistém HTML, CSS a TypeScriptu vytvořit formulářové pole pro zadání čísla platební karty. Toto pole bude umět 

  - doplňovat pomlčky mezi skupinami číslic během zadávání čísla,
  - zobrazovat typ karty podle zadávaného čísla.

Ukázku fungování si prohlédněte [na videu](assets/payment.webm). V této části se zaměříme na samotnou logiku doplňování pomlček. Postupujte podle následujících kroků:

1. Z [připravné šablony](https://github.com/kodim-vyuka/cviceni-platba-zadani) si vytvořte vlastní repozitář se zadáním příkladu a ten si naklonujte na svůj počítač.
1. Prohlédněte si připravené HTML a CSS projektu.
1. V projektu založte soubor `index.ts` a `tsconfig.json`. 
1. Nejprve si rozmyslete logiku toho, jak bude vstupní pole pro zadání čísla platební karty zajišťovat doplňování pomlček.
   - Pole by mělo příjímat pouze číslice a počet číslic by měl být omezen na 16.
   - Rozumná strategie je nejdříve ze zadaného vstupu odstranit všechno, co nejsou číslice a poté podle počtu číslic vložit do řetězce pomlčky.
   - Bude se vám hodit funkce `filterNonDigits` z minulého cvičení
1. Implementujte výše zmíněnou logiku pomocí čístého JavaScriptu. Až poté doplňte typy tak, aby každá proměnná měla explicitně uvedený typ, stejně tak parametry funkcí a návratové hodnoty.
