---
title: Seznámení s projektem
demand: 2
---

Nejprve založíme a rozchodíme výchozí projekt pro aplikaci kalendář. Postupujte podle následujících kroků:

1. Vytvořte si rezpozitář z [připravené šablony](https://github.com/kodim-vyuka/cviceni-kalendar-zadani). Naklonujte si jej k sobě na disk a otevřete v editoru VS Code.
1. V terminálu spusťte příkaz `tsc -w` pro spuštění překladu TypeScriptu v režimu _watch_. Jak už jistě víte, tento příkaz sleduje změny ve vašem kódu a automaticky je překládá do JavaScriptu.
1. Spusťte základ aplikace pomocí příkazu `npx serve`.
1. Prohlédněte si strukturu HTML, CSS i TypeScriptu. Abychom dokázali zobrazovat jednotlivé položky kalendáře nad mřížkou, používáme trošku CSS magie. Třída `day-column` je zařízená tak, že všechny elementy v ní se zobrazují přes sebe. Tímto způsobem můžeme posouvat jednotlivé položky uvnitř dne tak, že jim nastavíme styl `margin-top`. Zároveň máme v TypeScriptu funkci `renderGrid`, která vykreslí mřížku kalendáře.
1. Výška jedné hodiny v mřížce je chytře nastavena na 60 pixelů, takže každý pixel odpovídá jedné minutě. Takto můžeme jednoduše spočítat, kde se má každá položka zobrazit. Zkuste přímo v souboru `index.html` vytvořit nějakou položku v kalendaří například na čase 8:15.

