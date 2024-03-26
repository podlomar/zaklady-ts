## Promisy

Jedna z nejčastějších situací, kdy potkáme parametrický typ, je práce s typem `Promise`. Na frontendu promisy používáme nejčastěji pro asynchronní stažení dat z API. Pro příklad opět použijeme web [{JSON} Placeholder](https://jsonplaceholder.typicode.com), který nám poskytuje testovací data v JSON formátu.

Když z webu chceme stáhnout seznam všech TODO úkolů, nejdříve potřebujeme vytvořit datový typ pro jeden úkol:

```ts
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

Poté vytvoříme funkci, která stáhne všechny úkoly:

```ts
const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json() as Todo[];
  return data;
};
```

Všimněte si, že funkci musíme definovat jako `async`, protože v ní používáme `await`. Zároveň, pokud `async` funkce vrací hodnotu, JavaScript automaticky obalí tuto hodnotu do promisu. Naše funkce tedy nemůže vracet přímo pole `Todo[]`, ale musí vracet `Promise<Todo[]>`. Pokud bychom z `async` funkce nevraceli `Promise`, TypeScript nám hned vynadá, abychom rychle zjistili, že jsme udělali chybu. 

Typ `Promise` má jeden generický parametr, který určuje, jaký typ dat bude výsledkem promisu. V našem případě je to pole `Todo[]`. Naši funkce můžeme zavolat a zkontrolovat, že výsledek je pole `Todo[]`:

```ts
const todos = await fetchTodos();
console.log(todos[0].title);
```

Pokud jsme funkci `fetchTodos` zavolali správně s `await`, TypeScript automaticky rozbalí typ `Promise<Todo[]>` a proměnné `todos` bude typu `Todo[]`. Pokud bychom udělali chybu a funkci zavolali bez `await`, typ proměnné by byl `Promise<Todo[]>`.

Výhoda je, že pokud v takovém případě zkusíme přistoupit k prvku `todos[0].title`, dostaneme od TypeScriptu patřičně vynadáno, protože `todos` není pole. Díky typové kontrole se nám tak nestane, že bychom někde zapomněli `await` a přišli na to až někde na produkci.

<!-- ## Typy pro fetchování dat

Co se týče generických typů, můžeme zajít ještě o kousek dál. Při fetchování dat ze serveru můžeme dostat odpověď 200, tedy všechno je v pořádku, 4xx, tedy nějaká chyba na straně klienta, nebo 5xx, což je chyba na straně serveru. Víme, že tyto možnosti mohou nastat při jakémkoliv dotazu nehledě na to, jaká přesně data očekáváme. Můžeme si tak dopředu připravit typ, který bude obsahovat buď nějaká předem neznámá data, nebo dvě možnosti chyby:

```typescript
type Data<T> = T | 'bad-request' | 'server-error';
```

Když pak fetchujeme data z API, může naše funkce vracet tento typ.

```typescript
const fetchTodos = async (): Promise<Data<Todo[]>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (response.status === 200) {
    const data = await response.json() as Todo[];
    return data;
  } else if (response.status = 400 && response.status < 500) {
    return 'bad-request';
  }
  
  return 'server-error';
};
```

Jelikož `fetchTodos` je `async` funkce, musí vracet `Promise`. Máme tak dokonce dva generické typy v sobě. To není žádná velká výjimka.

Funkci `fetchTodos` pak můžeme použít takto:

```typescript
const todos = await fetchTodos();
if (todos === 'bad-request') {
  console.log('Chyba na straně klienta');
} else if (todos === 'server-error') {
  console.log('Chyba na straně serveru');
} else {
  console.log(todos[0].title);
}
```

Všimněte si, že nám opět zafunguje type narrowing. Pokud bychom se pokusili přistoupit k `todos[0].title` předtím, než jsme zkontrolovali, že `todos` není chyba, TypeScript by nám to nedovolil. V poslední větvi `else` už ale víme, že `todos` je typu `Todo[]`, protože jsme před tím vyčerpali všechny ostatní možnosti.

Některé servery však nevrací přímo data, ale zabalují je do objektu, který obsahuje ještě nějaké další informace, například `status` nebo 0chybovou hlášku. Můžeme si proto připravit generický typ, který bude obsahovat buď data, nebo chybovou hlášku:

```typescript
interface OkPayload<T> = {
  status: 'ok';
  data: T; 
}

interface ErrorPayload {
  status: 'error';
  error: string;
}

type Payload<T> = OkPayload<T> | ErrorPayload;
```

Pro fetchvání dat z takového serveru si pak můžeme připravit obecnou funkci:

```typescript
const fetchData = async <T>(url: string): Promise<Payload<T>> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const payload = await response.json() as Payload<T>;
  return payload;
};
```

Funkci pak použijeme takto:

```typescript
const todos = await fetchData<Todo[]>('https://jsonplaceholder.typicode.com/todos');
if (todos.status === 'ok') {
  console.log(todos.data[0].title);
} else {
  console.log(todos.error);
}
```

Jen pozor, že zrovna server [{JSON} Placeholder](https://jsonplaceholder.typicode.com) tímto způsobem nekomunikuje. Výše uvedený příklad je tedy pouze ukázkou, jak bychom mohli pomocí generických typů vytvořit obecnou funkci pro fetchování dat z API s podporou chybových stavů. Všimnetě si, že jde o velmi podobný princip jako u typu `Option`. -->
