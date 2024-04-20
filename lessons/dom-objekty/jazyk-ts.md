## Jazyk TypeScript

TypeScript je takzvaně _typovaná_ nadstavba JavaScriptu, kterou od roku 2012 vyvíjí společnost Microsoft. Díky TypeScriptu je možné lépe organizovat kód ve větších aplikacích. Právě proto se tento jazyk často používá v profesionálním prostředí, kde na větších projektech běžně pracuje mnoho programátorů.

JavaScriptový kód je zvykem psát do souborů s příponou `.js`. Kód v TypeScriptu se analogicky píše do souborů s příponou `.ts`. Založme si proto rovnou soubor `index.ts` a v něm si vytvořme jednoduchou proměnnou typu `string`.

```ts
let time: string = "18:05";
```

Typ proměnné se v TypeScriptu píše tak, že za název proměnné napíšeme dvojtečku a poté typ, který do proměnné chceme ukládat. V našem případě tedy `string`. Pokud se pak někdy v budoucnu pokusíme do proměnné uložit něco jiného než řetězec, například objekt

```ts
time = {
  hours: 18,
  minutes: 5,
};
```

dostaneme od TypeScriptu vynadáno:

::fig{src=assets/ts-chyba.png size=90}

### Konfigurace

TypeScript je velmi flexibilní jazyk a typovou kontrolu je možné nastavit na různé úrovně přísnosti. Tato nastavení se provádí v souboru `tsconfig.json`, který většinou bývá umístěn v kořenovém adresáři projektu. Abychom měli TypeScript ve VS Code nastavený všichni stejně, vytvoříme v každém projektu tento soubor s nastavením:

```json
{
  "compilerOptions": {
    "lib": ["es2020", "dom"],
    "module": "es2020",
  },
  "include": ["./*.ts"]
}
```

Kdybychom to neudělali, VS Code si nastaví TypeScript podle vlastních pravidel, které se mohou lišit od toho, co probíráme v těchto lekcích. Detailnější popis nastavení si představíme v dalších lekcích.

### Primitivní typy

TypeScript obsahuje typy pro všechny základní druhy hodnot, na které jsme zvyklí v čístém JavaScriptu. Jsou to:

- `string` pro řetězce, tedy všechny textové hodnoty,
- `number` pro čísla, celá i desetinná, včetně hodnot `Infinity` a `NaN`,
- `boolean` pro hodnoty `true` a `false`,
- `null` pro hodnotu `null`,
- `undefined` pro hodnotu `undefined`,
- `bigint` pro velká celá čísla,
- `symbol` pro symboly.


Každé proměnné tak můžeme přiřadit typ, který do ní chceme ukládat.

```ts
const name: string = 'Petr';
const age: number = 25;
const isStudent: boolean = true;
```

Do proměnné typu `null` bychom mohli přiřadit pouze hodnotu `null`, do proměnné typu `undefined` pouze hodnotu `undefined`. Takové proměnné jsou nám vesrkze k ničemu. Typy `null` a `undefined` si tak necháme na později jako součást složených typů nebo jako návratové hodnoty funkcí.

Typy `symbol` a `bigint` se nepoužívají tak často, necháme je tedy zatím stranou.

Všemu výše popsaným typům se dohromady říká _primitivní typy_, neboť jsou to jakésí základní stavební kameny pro složitejší typy, které si ukážeme později.

### Typ `object`

TypeScript nabízí také typ `object`, který by dle svého názvu mohl posloužit jako typ pro objekty. Pozor však na to, že v tomto případě to znamená „všechno, co není primitivní typ“. Do proměnné typu `object` tak můžeme přiřadit objekt, pole, nebo i funkci.

```ts
const product: object = {
  name: 'Káva',
  price: 100,
}; // ✔️ v pořádku
const prices: object = [100, 200, 300]; // ✔️ v pořádku
const name: object = 'Káva'; // ❌ chyba, string je primitivní typ
```

Vzhledem k tomu, že v proměnné typu `object` může být spousta různých hodnot, je tento typ v praxi v podstatě k ničemu. Při práci s poli nebo funkcemi jim budeme chtít přiřadit specifické typy určené přímo pro typování polí a funkcí. Ty si ukážeme v další části lekce.


## TypeScript je JavaScript

Důležitou myšlenkou TypeScriptu je, že se nám snaží ulehčovat přechod z čistého JavaScriptu. Do souborů s příponou `.ts` tak můžeme psát čistý JavaScript a TypeScript se bude snažít sám odvodit, jaké typy proměnných a funkcí používáme.

Například proměnnou `time` z předchozí sekce můžeme napsat takto:

```ts
let time = "18:05";
```

TypeScript pozná, že do proměnné ukládáme řetězec, a tedy musí být typu `string`. Typová kontrola se tedy bude chovat stejně, jako kdybychom typ proměnné napsali explicitně. 

::fig{src="assets/time-string.png" size=30}

Pozor však na to, že TypeScript není všemocný, a často se může stát, že si prostě s naším šílneým kódem nedokáže poradit. V takovém případě může být typ naší proměné odvozen jako `any`. Toto je speciální type, který v podstatě znamená „cokoliv“. 

Jedním z takový příkladů může být například `fetch` dat z nějakého API.

```ts
const response = await fetch('https://api.example.com/data');
const data = await response.json();
```

V tomto případě bude proměnná `response` typu `Response` a proměnná `data` bude typu `any`. TypeScript totiž logicky nemá šanci vědět, data jakého typu API obdržíme. 

Jelikož nám TypeScript dává velkou volnost v tom, kam typy psát a kam ne, je dobré se časem naučit určité doporučné postupy jak TypeScript používat, aby nám všude nalítal typ `any`. O tom si něco povíme v dalších lekcích.
