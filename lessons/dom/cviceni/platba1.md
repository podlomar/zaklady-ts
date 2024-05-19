---
title: Platba kartou - inteligentní vstup
lead: Logika doplňování pomlček v čísle platební karty
demand: 3
solutionAccess: protected
---

V první části našeho projektu vytvoříme chytré vstupní pole pro zadání čísla platební karty, které bude umět doplňovat pomlčky mezi skupinami číslic během zadávání.

1.  Z [připravné šablony](https://github.com/kodim-vyuka/cviceni-platba-zadani) si vytvořte vlastní repozitář se zadáním příkladu a ten si naklonujte na svůj počítač.
1.  Prohlédněte si připravené HTML a CSS projektu.
1.  V projektu založte soubor `index.ts` a `tsconfig.json`. Obsah souboru `tsconfig.json` můžete zkopírovat z úvodní lekce kurzu.
1.  Nejprve si rozmyslete logiku toho, jak bude vstupní pole pro zadání čísla platební karty zajišťovat doplňování pomlček.
    - Pole by mělo příjímat pouze číslice a celkový počet číslic by měl být omezen na 16.
    - Rozumná strategie je nejdříve ze zadaného vstupu odstranit všechno, co nejsou číslice a poté podle počtu číslic vložit do řetězce pomlčky.
    - Bude se vám hodit funkce `filterNonDigits` ze [cvičení](https://kodim.cz/kurzy/zaklady-ts/lekce/priprava/ulozky/funkce) v úvodní lekci kurzu.
1.  Implementujte výše zmíněnou logiku pomocí čístého JavaScriptu. Až poté doplňte typy tak, aby každá proměnná měla explicitně uvedený typ, stejně tak parametry funkcí a návratové hodnoty.
