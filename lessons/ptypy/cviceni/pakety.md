---
title: Sestavení paketů
lead: Program pro sestavování síťových paketů
demand: 3
---

### Úvod do problému

Veškerá data běhající po internetu se po různých optických kabelech a bezdrátových spojích přenášejí v podobě malých balíčků, které se nazývají **síťové pakety**. Tyto pakety obsahují informace o odesílateli, příjemci, velikosti dat a samotný kus přenášených dat. Do jednoho paketu se vejde jen omezené množství dat, a proto se data rozdělují na menší části a posílají se po síti jednotlivě.

Pro naše účely si paket malinko zjednoduším a budeme se tvářit, že posíláme e-maily na různé adresy. Každý paket tak bude obsahovat následující informace:

- `from` - adresa odesílatele
- `to` - adresa příjemce
- `payload` - obsah e-mailu
- `stamp` - pořadové číslo paketu

Na síti se však snadno stane, že se pakety cestou do cíle různě pomíchají a dorazí v jiném pořadí, než byly odeslány. Proto má každý paket vlastnost `stamp`, která obsahuje číslo určující pořadí paketu v celém e-mailu. Na základě tohoto čísla můžeme pakety správně seřadit a složit původní e-mail.

Do jednoho paketu se nám vejde jen kousek dat. Vlastnost `payload` tedy bude obsahovat vždy jen jeden řádek e-mailu.

### Úkol

Vaším úkolem bude vytvořit program, který bude umět sestavovat e-maily z jednotlivých paketů. Postupujte podle následujících kroků:

1.  Budeme pracovat s REST API serverem, který bude poskytovat seznan všech paketů. Tento server je již připravený v [tomto repozitáři](https://github.com/kodim-vyuka/packets-api). Repozitář si naklonujte a otevřete si jej v **novém okně** VS Code editoru. Server se spustí příkazem
    ```bash
    npx apidroid@latest
    ```
    Server pak bude běžet na adrese `http://localhost:4000`. Více informací o API najdete přímo v README repozitáře.
1.  Prohlédněte si dobře data, která API vrací.
1.  V druhém okně VS Code založte webovou aplikaci s dobře nastaveným TypeScripte. Nemusíte používat žádný bundler, bude vám stačit jeden soubor `index.html` a `index.ts`. V souboru `index.html` si připravte kostru aplikace, ve které budete zobrazovat e-maily.
1.  Připravte si datový model pro data z API.
1.  K seřazování paketů využijte prioritní frontu, kterou jste si naprogramovali v minulém cvičení. Pakety nejdříve načtěte z API a všechny je postupně vložte do fronty. Pak z fronty postupně odebírejte pakety a skládejte řádek po řádku jednotlivé e-maily.
1.  Na stránce zobrazte všechny e-maily, které se vám podařilo složit.

### Odevzdání

Odevzdejte všechny zdrojové soubory nutné ke zdárnému spuštění vaší aplikace.


