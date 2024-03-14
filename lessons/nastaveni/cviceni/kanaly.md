---
title: Seznam kanálů
demand: 3
---

V aplikaci ChitChat budeme pracovat s kanály, které budou zobrazné v levém sloupci. V tomto cvičení si stáhneme data o kanálech z API serveru a zobrazíme je na stránce.

Jelikož nemáme React nebo jiný frontend framework, který umí pracovat se stavem, celý obsah aplikace vždy znova vykreslíme při každém načtené stránky. Všechna data je tedy potřeba stáhnout na začátku a poté z nich vytvořit HTML obsah stránky.

Podobně jako ve cvičení s kalendářem si na začátku vyberte, zda budete obsah stránky tvořit čistě pomocí `innerHTML` nebo pomocí DOM API a `createElement`. Je zcela na vás, který postup je vám bližší.

1. Nejdříve je potřeba vytvořit část datového modelu pro kanály. Založte soubor `data-model.ts` a vytvořte příslušné datové typy.
1. Nyní už můžete po načtení stránky fetchnout data z API a dle dat vytvořit obsah levého sloupce s kanály.

Pokud se vám toto povedlo, máte v podstatě vyhráno, zbytek aplikace je velmi analogický.
