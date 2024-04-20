## Kompilace TypeScriptu

Náš kód z předchozí lekce už je bez chyb. Potíž je však v tom, že jej nemáme jak spustit. Runtime uvnitř prohlížeče umí spouštět pouze JavaScript. Kdybychom do HTML vložili přímo soubor `index.ts`, prohlížeč by nevěděl, jak jej vykonat.

Tato situace se řeší tak, že náš TypeScriptový kód přeložíme pomocí speciálního programu do čistého JavaScriptu. Tomuto procesu se odborně říká :term{cs="kompilace" en="compilation"}. Program, který kompilaci provádí se jmenuje `tsc` (TypeScript Compiler). Musíme jej nejprve nainstalovat pomocí nástroje `npm` (Node Package Manager):

```bash
$ npm install -g typescript
```

Po instalaci můžeme ve složce projektu zavolat příkaz `tsc`. Pokud máme `tsconfig.json` v kořenové složce projektu, můžeme tento příkaz zavolat bez parametrů. 

```bash
$ tsc
```

Výstupem kompilátoru je JavaScriptový soubor `index.js`, který dělá přesně totéž, co TypeScriptový kód v souboru `index.ts`. Všimněte si, že TypeScript má malinko jiný názor na to, jak psát kód v čistém JavaScriptu. Funkce `checkPasswordStrength` v našem zdrojovém souboru definována takto:

```ts
const checkPasswordStrength = (password: string): string => {
```

Kompilátor však tento kód drze přeložil na:

```js
var checkPasswordStrength = function (password) {
```

Prozatím to nebudeme řešit a obsahem souboru `index.js` se nebudeme trápit. Stačí nám důvěra v to, že kompilátor ví, co dělá a že náš program přeložil správně.

Nyní můžeme výsledný soubor `index.js` vložit do HTML a vyzkoušet, že program skutečně funguje.

### Watch mód

Při vývoji je nepohodlné neustále spouštět kompilaci ručně. Proto `tsc` umí pracovat v tzv. _watch módu_, kdy sleduje změny v souborech a překládá je automaticky. Tento mód spustíme takto:

```bash
$ tsc --watch
```
