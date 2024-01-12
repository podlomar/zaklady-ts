## Využití TypeScriptu

Pojďme si na konkrétním případu ukázat, k čemu se nám TypeScript v praxi hodí a kde nám usnadní život.

Mějme jednoduchou stránku, která umožní uživateli vytvořit si heslo pro svůj účet. Po zadání hesla budeme chtít zkontrolovat, že je dostatečně silné.

V souboru `index.html` bude uvnitř body pouze políčko pro vstup a tlačítko.

```html
<body>
  <input id="password-input" type="text" />
  <button id="savepass-btn">Uložit heslo</button>
</body>
```

JavaScriptový kód v souboru `index.js` bude vypadat takto:

```js
const checkPasswordStrength = (password) => {
  if (password === "") {
    return "weak";
  }

  if (password.length < 12) {
    return "weak";
  }

  return "strong";
};

document.querySelector("#savepass-btn").addEventListener("click", (e) => {
  const inputElement = document.querySelector("#password-input");
  const userPassword = inputElement.valua;
  if (checkPasswordStrength() === "weak") {
    document.innerHTML = "<p>Příliš slabé heslo</p>";
  } else {
    document.innerHTML = "<p>Heslo uloženo</p>";
  }
});
```

Jako zkušení programátoři jistě zahlédnete v programu nějaké chyby. Editor VS Code však žádný problém nesignalizuje. Ukonejšeni sladkou ignorancí stránku spustíme a až pod zadání libovolného vstupu do textového políčka obdržíme chybu:

```
index.js:6 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
    at checkPasswordStrength (index.js:6:16)
    at HTMLButtonElement.<anonymous> (index.js:17:9)
```

Po krátké detektivní prácí brzy odhalíme například to, že máme překlep v názvu vlastnosti `value`.

```js
const value = inputElement.valua;
```

Všimněte si, jak daleko od původního zdroje chyby však došlo k selhání našeho progrmu. Chyba byla v úplně jiné funkci, než ve které runtime zahlásil problém. Pro zkušenější oko samozřejmě není problém v našem maličkém projektu zdroj chyby rychle odhalit. Ve velké aplikaci s tisícemi funkcí a stovkami souborů však může být runtime chyba schovaná tak daleko od původního zdroje, že zabere klidně i několik dní práce nalézt její příčinu.

Když opravíme překlep ve vlastnosti `value`, zjístíme, že náš program stejně nefunguje. Pojďme tedy vyzkoušet, co se stane, když jej přepíšeme do TypeScriptu.

### JavaScript je TypeScript

Velmi důležítou vlastností TypeScriptu je, že každý JavaScriptový program je validní TypeScriptový program. To znamená, že TypeScriptu můžeme předhodit čistý JavaScript bez jakýchkoliv typových informací. Pokud nikam nenapíšeme typy, TypeScript se pokusí je odvodit sám.

Pokud naši původní proměnnou :var[time] napíšeme v TypeScriptu takto:

```ts
let time = "18:05";
```

TypeScript pozná, že do proměnné ukládáme řetězec, a tedy musí být typu `string`.

::fig{src="assets/time-string.png" size=30}

U souboru `index.js` tedy jednoduše změníme přípomu z `.js` na `.ts` a máme TypeScriptový program. V tu chvíli získáme typovou kontrolu a VS Code začne mít mnohem přísnější názory na strukturu našeho kódu. Na několika místehc se začne viditelně zlobit.

Pojďme si program postupně projít a zjistit, co si o něm TypeScript myslí. Vidíme, že například odvodil, že naše proměnná `inputElement` je typu `Element`.

::fig{src="assets/input-element.png" size=80}

`Element` je typ, který zahrnuje všechny možné elementy, které mohou být uvnitř DOMu. Nám se tento typ ale nehodí. My potřebujeme typ `HTMLImputElement`, protože vybíráme z DOMu vstupní element, který má vlastnost `value`. Proměnné `inputElement` tedy nastavíme správný typ.

```ts
const inputElement: HTMLInputElement =
  document.querySelector("#password-input");
```

V tuto chvíli už nám TypeScript na dalším řádku správně nahlásí chybu:

```
Property 'valua' does not exist on type 'HTMLInputElement'. Did you mean 'value'?
```

Jakmile opravíme překlep, všimneme si, že TypeScript správně určil typ promměné `userPassword` jako `string`. To nám vyhovuje, takže zde už typ psát nemusíme.

V tuto chvíli náš program stále obsahuje chyby. Odladíme je v další sekci.
