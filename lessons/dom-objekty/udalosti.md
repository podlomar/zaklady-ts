## Typy pro události

Pří práci s DOMem také často procujeme s uálostmi. Když chceme například reagovat na kliknutí na tlačítko, napíšeme takovouto funkci:

```ts
const handleClick = (event: MouseEvent): void => {
  console.log('Kliknuto');
};
```

Událost `event` je v tomto případě typu `MouseEvent`, což je typ pro všechny události týkající se myši. Typ `MouseEvent` obsahuje například vlastnosti `clientX` a `clientY`, které udávají souřadnice myši v okně prohlížeče.

Tento posluchač události pak můžeme přidat například k tlačítku:

```ts
const button: HTMLButtonElement = document.querySelector('button');
button.addEventListener('click', handleClick);
```

Zde je nutné vědět, jakým událostem odpovídají které TypeScriptové typy. Například pokud chceme reagovat na stisk klávesy, použijeme typ `KeyboardEvent`:

```ts
document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log('Stisknuta klávesa', event.key);
});
```

Zde je opět zrada v tom, že TypeScript nám nezabrání použít nesmyslný typ události. Například pokud chceme reagovat na kliknutí myší, ale omylem použijeme typ `KeyboardEvent`, TypeScript nám to dovolí:

```ts
document.addEventListener('click', (event: KeyboardEvent) => {
  console.log('Kliknuto', event.key); // Zde nastane chyba až při běhu programu
});
```

Opět tedy musíme být ve střehu, abychom se sami nedostali do pasti.

### Přetypování

S potížemi se také setkáme, když budeme chtít správný typ pro hodnotu v `event.target`. Například při získávání hodnoty z formulářového pole:

```ts
const handleSubmit = (event: SubmitEvent): void => {
  event.preventDefault();
  const form = event.target;
};
```

Vlastnost `event.target` je u všech událostí typu `EventTarget`. To je ještě obecnější typ než `Element`, takže jako takový je nám skoro k ničemu. My chceme, aby proměnná `form` byla typu `HTMLFormElement`. Zde však žádné generické funkce k dispozici nemáme, takže nelze napsat:

```ts
const form: HTMLFormElement = event.target;
```

V tomto případě už nám TypeScript regulérně vynadá, že se snažíme přiřadit hodnotu typu `EventTarget` do proměnné typu `HTMLFormElement`.

Musíme tak použít ostřejší nástroj, takzvané _type assertion_ nebo-li přetypování:

```ts
const handleSubmit = (event: SubmitEvent): void => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
};
```

Tímto TypeScriptu říkáme, že si jsme jisti, že `event.target` je opravdu type `HTMLFormElement` a že se na to TypeScript může spolehnout. 

Říkat TypeScriptu, že něco víme líp než on, je hodně drzé a nebezpečné. Většinou si totiž myslíme, jak nejsme chytří a víme všechno líp, ale ve skutečnosti se mýlíme. Přetypování by se tedy mělo používat jen velmi velmi zřídka a jen v situacích, kdy jsme si opravdu jistí, co děláme. 

Zrovna v případě `event.target` nám ovšem jiná možnost nezbývá. Později v tomto kurzu ještě narazíme na jeden další případ, kdy se přetypování nejde vyhnout, ale jinak se mu budeme striktně vyhýbat.
