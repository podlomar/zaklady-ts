## Typy ve funkcích

Pokračuje v lovení chyb v kódu z předchozí lekce. TypeScript si stěžuje na řádku, kde voláme funkci `checkPasswordStrength`:

```
Expected 1 arguments, but got 0.
index.ts(1, 32): An argument for 'password' was not provided.
```

TypeScript správně poznal, že jsme funkci zapomněli předat parametr. Správně má být:

```ts
if (checkPasswordStrength(usePassword) === "weak") {
```

Pokud se podíváme na definici této funkce, uvidíme, že TypeScript odvodil typ parametru `password` jako `any`. Toto je speciální typ, který znamená „cokoliv“. TypeScript jej používá ve chvíli, kdy nedokáže určit, co do proměnné ukládáme.

My však chceme, aby funkce `checkPasswordStrength` pracovala pouze s řetězcem, takže uvedeme typ parametru takto:

```ts
const checkPasswordStrength = (password: string) => {
```

Slušně vychovaný programátor také u funkcí uvádí její návratový typ. Naše funkce vrací `string`, což v TypeScriptu zapíšeme takto:

```ts
const checkPasswordStrength = (password: string): string => {
```

Tímto máme funkce `checkPassword` perfektně otypovanou. TypeScript nás upozorní vždy, když se ji budeme snažít použít špastně, se špatným parametrem nebo s její návratovou hodnotu budeme dělat něco, co se nedá dělat s řetězcem.

Na závěr ještě spravíme poslední chybku. TypeScript nás upozoruňuje, že na typu `Document` není žádná vlastnot `innerHTLM`. Má pravdu. V podmínce je třeba napsat:

```ts
document.body.innerHTML = "<p>Příliš slabé heslo</p>";
```

Nyní máme program bez chyby. V další sekci si ukážeme, jak jej spustit.
