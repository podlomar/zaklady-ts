## Nastavení TypeScriptu

Když si prohlédnete soubor `tsconfig.json`, uvidíte, že je v něm o kus víc nastavení, než jsme si doposud ukazovali. Zde je dobré umět se v tomto nastavení vyznat, protože vám to jednak umožní přizpůsobit TypeScript na míru vašim potřebám a jednak díky tomu lépe porozumíte tomu, co všechno vlastně TypeScript umí a musí dělat, aby vaše projekty správně fungovaly v různých prostředích a situacích.

Obsah souboru `tsconfig.json` v našem projektu vypadá takto:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["es2020", "dom"],
    "module": "es2022",
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts"]
}
```

## Verze JavaScriptu

Nastavení `target` určuje, do jaké verze JavaScriptu chcete váš TypeScriptový kód přeložit. Jak možná víte, JavaScript se neustále vyvíjí a přibývají nové funkce a vylepšení. V podstatě každý rok vychází nová verze JavaScriptu po označím jako `es2019 (es10)`, `es2020 (es11)`, `se2021 (es12)` atd. Pokud se chcete podívat, co například přibylo ve verzi `ES2020`, můžete využít stránku [Can I use](https://caniuse.com/?search=es2019).

Prohlížeče bohužel nefungují tak, že by přímo podporovaly všechny funkce z nějaké verze JavaScriptu. Místo toho si různé prohlížeče jako Chroma, Safari apod. vybírají různé funkce z různých verzí. Pokud pracujete na komerčním projektu a chcete si být zcela jistí, že bude opravdu fungovat na všech prohlížečích, jediné opravdu bezpečné nastavení je `target: "es2015"` nebo-li `target: "es6"`. To je nejstarší verze JavaScriptu, kterou všechny prohlížeče opravdu reálně podporují.

My pro naše výukové účely použijeme `target: "es2020"`, protože všechny prohlížeče většinu funkcí z této verze už podporují a máme pak výhodu v tom, že můžeme mít `target` a `lib` na stejné hodnotě.

Tím se dostáváme k nastavení `lib`. Jestliže `target` určuje, co bude ve výsledném JavaScriptu, `lib` určuje, jaké TypeScriptové typy máme k dispozici při psaní kódu. V našem případě je to `es2020` a `dom`. To znamená, že TypeScript bude při překladu předpokládat, že máme k dispozici všechny funkce z JavaScriptu `es2020` a také všechny funkce a typy z DOM API, tedy například `console.log`, `document`, `window`, `HTMLElement` atd. Kdybychom například psali kód pro Node.js, mohli bychom použít `lib: ["es2020", "node"]`.

Verze `es2020` je významná, protože v ní přibyly velmi užitečné operátory [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `?.` a [nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) `??`, které nám umožňují psát mnohem bezpečnější kód. Kdybychom použili nižší verzi, neměli bychom tyto operátory k dispozici.

Velká výhoda pro TypeScript je, když můžeme mít verzi JavaScriptu v `target` a `lib` na stejné hodnotě. TypeScriptový kompilátor pak prostě jen vezme náš kód, smaže z něj všechny anotace typů a nemusí složitě vymýšlet, jak vygenerovat kód pro featury, která nejsou v `target` verzi dostupné.

## Moduly

Nastavení `module` určuje, jaký modulový systém chceme použít. V našem případě je to `es2022`, což v podstatě znamená, že chceme používat `import` a `export`. Používáme schválně nastavení `es2022` místo `es2020`, protože chceme mít k dispozici takzvaný [top-level await](https://v8.dev/features/top-level-await), který je novinkou ve verzi `es2022`. Ta umožňuje používat `await` přímo na úrovni modulu, což se nám hodí pro načítaní dat z API. Detaily probereme v následující sekci.

Pomocí `moduleResolution` určujeme, jakým způsobem chceme, aby TypeScript vyhledávaval moduly, které importujeme. Pokud používáme bundler jako je Webpack a jiné, je důležité tuto vlasnost nastavit na `bundler`. Vlastnost `isolatedModules` je také důležitá pro bundlery, které překládají každý soubor izolovaně. Musíme tedy nastavit `isolatedModules: true`.

## Kvalita kódu

Nastavení `strict` je zkratka pro několik dalších vlastností, které zpřisňují kontrolu kódu. Pokud je `strict` nastaveno na `true`, znamená to, že jsou zapnuty vlastnosti:

- `strictBindCallApply`
- `strictFunctionTypes`
- `strictNullChecks`
- `strictPropertyInitialization`
- `useUnknownInCatchVariables`

Vlastnost `strictNullChecks` už známe. Pokud je zapnutá, TypeScript nám bude hlásit chyby, když se pokusíme přiřadit `null` nebo `undefined` do proměnné, která to nepodporuje. Ostatní nastavení `strict` nastavení jsou z pohledu tohoto kurzu spíš okrajová, ale jsou užitečná pro všechny projekty.

Velmi důležité jsou však následující nastavní:

- `noImplicitAny` - TypeScript nám bude hlásit chyby, když se pokusíme použít proměnnou, o které TypeScript neví, jakého je typu a označí ji tedy jako `any`. To znamneá, že s takovou proměnnou si můžeme dělat co se nám zlíbí, což je vždycky nežádoucí a takovou proměnnou chceme co nejdříve odhalit.
- `noUnusedLocals` - Nahlaš chybu, když máme v kódu lokální proměnnou, kterou nikde nepoužíváme.
- `noUnusedParameters` - Nahlaš chybu, když má funkce parametr, který nikde nepoužíváme.
- `noFallthroughCasesInSwitch` - Nahlaš chybu, když máme ve `switch` větev, která nekončí `break` nebo `return`.
