---
title: Vytváření diagramu
demand: 2
---

Vytváření diagramů uživateleme je složitější než zobrazení, neboť uživatel může interagovat s diagramem a měnit jeho obsah. Vytvoření diagramu funguje takto

- Uživatel může přidat nový box do digramu tak, že provede `Ctrl+Click` na prázdné místo a nový box se objeví s nějakým výchozím textem, například "Nová položka".
- Každý box lze vybrat kliknutím myší a editovat jeho text.
- Boxy lze propojit spojnicemi, které se zobrazí mezi středy boxů. Když uživatel vybere box, může pomocí `Ctrl+Click` na jiný box vytvořit mezi těmito boxy spojnici.

Ukázku vytváření diagramu můžete vidět [tomto videu](assets/tvorba-diagramu.mp4).

Pokud vám tento popis stačí, můžete se rovnou pustit do práce. Pokud potřebujete detailnější instrukce, pokračujte níže.

### Vytváření boxu

Nejdříve budeme chtít, aby uživatel mohl umístit box na obrazovku pomocí `Ctrl+Click`. K tomu bude potřeba předevím zjistit souřadnice kliknutí.

1. Zjistěte si, jak získat souřadnice kliknutí myši pomocí vlastností `clientX` a `clientY` události `MouseEvent`. Tyto vlastnosti obsahují souřadnice kliknutí v rámci celého okna. bude tedy potřeba je přepočítat na souřadnice v rámci elementu, na který se kliklo. To lze udělat pomocí metody `getBoundingClientRect` elementu.
1. Při zobrazování diagramu jste jistě vytvořili stav se zobraznými daty. Tento bude na začátku obsahovat prázdná pole pro boxy a spojnice. Když uživatel provede `Ctrl+Click`, přidejte nový box **na konec** pole boxů. Velikost nového boxu může být například 160x40 pixelů. 
1. Můžete si trošku pohrát s matematikou a nový box vždy zarovnat na mřížku, která má rozteč 20 pixelů, aby byl diagram hezčí.

### Editace boxu

Dále budeme potřebovat možnost editovat nápis na boxu. K tomu bude potřeba umožnit vybrat box kliknutím myši a dát focus na textové pole, do kterého uživatel může psát.

1. Pro výběr boxu si vytvořte stav `selectedIndex`, který bude udávat index právě vybraného boxu nebo `null`.
1. Pro přesunutí focusu na textové pole v boxu si vytvořte referenci na toto pole pomocí `useRef`.
1. Při editaci textu v políčku by se měl rovnou měnit text ve vybraném boxu.
1. Když uživatel klikne mimo jakýkoliv box přímo na plochu diagramu, nastavte vybraný box na `null` a textové pole udělejte disabled.


### Propojení boxů

Na posledy chceme umožnit propojovat boxy pomocí spojnic. Musíme tedy umět ošetřít situaci, kdy uživatel má vybraný nějaký box a provede `Ctrl+Click` na jiný box. V tomto případě chceme vytvořit spojnici mezi těmito dvěma boxy. Po vytvoření spojnice nechte box vybraný, aby uživatel mohl pokračovat v propojování.

1. Zkuste zajistit, aby se nedala vytvořit spojnice mezi boxy, které již spojeny jsou.
1. Ještě lepší by bylo, kdyby se při pokusu o propojení již spojených boxů spojnice smazala, abyh měl uživatel možnost spojnice nejen tytvářet, ale i rušit.
