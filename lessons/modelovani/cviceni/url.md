---
title: URL adresa
demand: 3
---

Vytvořte typ pro reprezentaci URL adresy. Postupujte podle následujících kroků:

1. Podle [tohoto článku](https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713) si nastudujte, z jakých částí se skládá URL adresa. 
1. Vytvořte typ `Url` s vlastnostmi pro jednotlivé části URL adresy. Dobře si rozmyslete typy jesnotlivých vlastností a také, které z nich jsou nepovinné.
1. Vytvořte proměnnou typu `Url` a vložte do ní nějakou URL adresu. Vypište tento objekct pomocí `console.log`.
1. Vytvořte funkci `formatUrl`, která bude mít parametr typu `Url` a vrátí řetězec se správě zformátovanou URL adresou. Vyzkoušejte funkci na několika různých URL adresách a výsledky vypište pomocí `console.log`.

### Bonus

Pokud si věříte, vytvořte funkci `parseUrl`, která bude mít parametr typu `string` a vrátí objekt typu `Url | null`. Funkce vytáhne jednotlivé části URL adresy z řetězce a uloží je do objektu. Pokud v řetězci není smysluplná URL adresa, funkce vrátí `null`. Vyzkoušejte funkci na několika různých řetězcích a výsledky vypište pomocí `console.log`.

Při parsování URL adresy nejspíš narazíte na tyto problémy:

- Doména v adrese `https://www.google.co.uk` je `google.co.uk`, takže bohužel nejde jako doménu vzít poslední dvě části oddělené tečkou, jako je to například v adrese `https://www.seznam.cz`. Takovou situaci už bez použití nějaké knihovny těžko vyřešíme v rámaci tohoto cvičení. Dovolte si tedy předpokládat, že doména bude vždy tvořena pouze TLD a doménovým jménem odděleným tečkou.
- Fragment se v URL adrese může vyskytovat na různých místech. Například adresa `https://www.google.com/search?q=typescript#about` ale také `https://www.google.com/search#about?q=typescript`. Sami si zvolte, jak moc chcete být přísní v tom, kde fragment v URL adrese očekáváte.
