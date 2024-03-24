## Typování funkcí

V tomto kurzu jsme zatím vynechali jedno důležití téma, které jsme doteď příliš napotřebovali, a to je typování funkcí. 

Jak jiste víte, pojmenovaná funkce je v podstatě proměnná, která obsahuje definici funkce jako svoji hodnotu. Vězměme třeba funkci `isEmpty`, která zjistí, zda je řetězec prázdný:

```ts
const isEmpty = (str: string): boolean => {
  return str.length === 0;
};
```

Protože `isEmpty` je proměnná, můžeme se ptát jakého je vlastně typu. V tomto případě by typ vypadal takto:

```ts
const isEmpty: (str: string) => boolean;
```

Typ `(str: string) => boolean` znamená: "funkce, která bere jeden argument typu `string` a vrací `boolean`". Funkce tedy mají svoje typy stejně jako všechny ostatní hodnoty jako čísla, řetězce, pole nebo objekty.

Typy funkcí se nám mimo jiné hodí ve chvíli, kdy předáváme funkci jako argument jiné funkci. To se nejčastějí děje, když někam posíláme callback nebo posluchač události. Například funkce setTimeout bere jako první argument funkci, kterou má zavolat po uplynutí času:

```ts
const sayHello = () => {
  console.log('Hello!');
};

setTimeout(sayHello, 1000);
```

Funkce `setTimeout` by se pak v TypeScriptu dala definovat takto:

```ts
const setTimeout = (callback: () => void, ms: number): void => {
  // ...
};
```

První parametr funkce `callback` je typu `() => void`, což znamená "funkce, která nebere žádné argumenty a nevrací žádnou hodnotu".

### Callbacky a props

V Reactu předáváme callbacky pomocí props. Například když chceme vytvořit komponentu, která zobrazí tlačítko s ikonkou a po kliknutí zavolá nějakou funkci:

```tsx
interface Props {
  iconUrl: string;
  label: string;
  onAction: () => void;
}

export const IconButton = ({ iconUrl, label, onAction }: Props): JSX.Element => {
  return (
    <button className="icon-btn" onClick={onAction}>
      <img src={iconUrl} alt={label} />
      <span>{label}</span>
    </button>
  );
};
```

Zde máme prop `onAction` typu `() => void`. Tím tedy jeasně říkáme, že v této props očekáváme funkci bez parametrů, která nevrací žádnou hodnotu. Komponentu pak můžeme použít takto:

```tsx
const handleClick = (): void => {
  console.log('Button clicked!');
};

<IconButton iconUrl="/icon.png" label="Click me" onAction={handleClick} />
```
