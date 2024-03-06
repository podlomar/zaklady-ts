---
title: Datový model
demand: 3
---

Vytvoříme TypeScritový datový model pro položky kalendáře.

**Zadání domény:**

Kalendář obsahuje dva druhy položek - události a úkoly. Každá položka má svůj název a časový údaj, kdy má nastat. Události mají navíc údaj o délce trvání. Naopak úkoly mají údaj o tom, zda jsou již splněny.

1.  Založte soubor `model.ts`, ve kterém budeme vytvářet datový model.
1.  Jelikož budeme pracovat s časem, rozmyslete si, jak budete reprezentovat časový údaj o tom, kdy nějaká položka nastane. Nejlepší bude vytvořit si vlastní datový typ pro časový údaj. Zatím nám jako reprezentace času postačí číslo dne v týdnu, hodiny a minuty.
1.  Vytvořte datový model pro položky kalendáře. Vezměte do úvahy, že budeme později potřebovat pole všech položek kalendáře, a budeme chtít poznat, zda je položka událost nebo úkol.
1.  Jakmile budete mít datový model hotový, vytvořte pole několika úkolů a událostí v souboru `data.ts`. V další části toto pole zobrazíme na stránce.
