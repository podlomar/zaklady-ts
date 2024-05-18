## Typy pro práci s DOMem

V předchozí sekci jsme viděli ukázku jako se TypeScript použijě pro vývoj frontendu nějakého webu. V takové situaci budeme často narážet na práci s DOMem. Jak jistě víte, DOM (Document Object Model) je struktura HTML uložená v paměti prohlížeče po načtení stránky, díky které můžeme pomocí JavaScriptu obsah stránky měnit, přidávat nové prvky nebo reagovat na události.

Součástí TypeScriptu jsou všechny typy, které pro práci s DOMem potřebujeme. Když například vybereme ze stránky element pomocí funkce `document.querySelector`, dostaneme zpět typ `Element`.

```ts
const title: Element = document.querySelector('h1.title');
```

Typ `Element` je ovšem hodně obecný a častěji budeme potřebovat typy pro konkrétnější DOM elementy. Například pokud vybíráme z DOMu element `input`, chceme, abychom měli přístup k vlastnosti `value`. Použijeme proto typ `HTMLInputElement`.

```ts
const emailInput: HTMLInputElement = document.querySelector('input.email');
console.log(emailInput.value);
```

Zde se však děje něco podezřelého. Před chvílí jsme řekli, že funkce `document.querySelector` vrací typ `Element`, ale my teď vesele návratovou hodnotu ukládáme do promměnné typu `HTMLInputElement`. Jak to, že si tady TypeScript nestěžuje?

Trik spočívá v tom, jak je v TypeScriptu definován typ pro metodu `document.querySelector`. V hlubinách TypeScriptových knihoven je tato metoda definována takto:

```ts
querySelector<E extends Element = Element>(selectors: string): E | null;
```

Špičaté závorky `<...>` zde říkají, že `querySelector` je takzvaně _generická_ funkce. Co to přesně znamená, se dozvíme až v dalších lekcich tohoto kurzu. Pro nás to teď prakticky znamená, že pokud výsledek volání `querySelector` uložíme do proměnné, která má typ odvozený od `Element`, TypeScript nám to dovolí.

Vzhledem k tomu, že si návratový typ funkce `querySelector` můžeme dost volně zvolit tím, do jaké proměnné výsledek uložíme, je dobré si být jistý, že výsledek opravdu odpovídá očekávanému typu. Pokud například chceme vybrat element `input`, ale omylem vybereme `div`, TypeScript nás na chybu sám neupozorní:

```ts
const emailInput: HTMLInputElement = document.querySelector('div.email');
console.log(emailInput.value); // Zde nastane chyba až při běhu programu
```

Zde tedy pozor na to, že TypeScript nás neochrání úplně před všemi typovými chybami, které můžeme provést.
