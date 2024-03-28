---
title: Zobrazení diagramu
demand: 2
---

Než se pustíme do možnosti diagramy vytvářet, musíme nejdříve umět diagram umět zobrazit.

1. Na základě dat z API serveru vytvořte datový model v TypeScriptu. 
1. Vytvořte komponentu, která bude zobrazovat jeden box, nazvěte ji například `BoxView`. Stáhněte data z API a zobrazte všechny boxy diagramu.
1. Vytvořte komponentu, která bude zobrazovat spojnice mezi boxy, nazvěte ji například `ConnectionView`. Stáhněte data z API a zobrazte všechny spojnice diagramu. Spojnice vždy spojují středy boxů, bude tedy vždy potřeba spočítat správný střed boxu. Pozor, že všechny spojnice musí být vykresleny dříve, než boxy, aby byly vidět pod nimi a nepřekrývaly je.
1. Nezapomeňte také v hlavičce stránky zobrazit název diagramu.

Nyní byste měli mít hotovou aplikaci, která umí zobrazit libovolný diagram z API serveru.
