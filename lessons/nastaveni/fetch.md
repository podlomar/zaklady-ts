## Typování dat z API

Když stahujeme nějaká data pomocí funkce `fetch`, používáme klasický postup, který známe z JavaScriptu. Takto načteme seznam všech úkolů z API [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos):

```ts
const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = await response.json();
```

Tady objevíme, že proměnná `data` je typu `any`. Není se co divit. Metoda `json` nemá k dispozici křišťálovou kouli aby se dozvěděla, jaké jsou datové typy v JSONu, který nám API vrací. Proto si musíme pomoci sami technikou _type assertion_, kterou jsme už viděli při řešení problémů s `EventTarget`.

```ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = await response.json() as Todo[];
```

## Top-level await

Všimněte si, že naše data fetchujeme přímo na nejvyšší úrovní zdrojového souboru místo toho, abychom měli `await` volání zabalena do nějaké funkce. Tomotu postupu se říká _top-level await_ a je novinkou ve verzi JavaScriptu `es2022`. Do této doby bylo možné všechny `await` volání provádět pouze uvnitř `async` funkcí. Tento nový postup nám umožňuje hezky načítat data z API přímo na začátku našeho programu, což se přesně hodí pro aplikace, která všechna data načtou při refreshi stránky. 

Aby nám TypeScript dovolil použít top-level await, musí mít důvěru v to, že náš zdrojový soubor je modul. To se zajistí tak, že ze souboru něco exportujeme. Pokud zrovna nemáme co užitečného exportovat, stačí udělat export prázdného objektu:

```ts
export {};

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = await response.json() as Todo[];
```
