## Stavy a fetch

Při práci se stavem v Reactu potkáme parametrické typování, které jsme probírali v předchozí lekci.

Mějme jednoduchou komponentu, která zobrazí seznam todo úkolů z [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos):

```tsx
import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await response.json() as Todo[];
      setTodos(data);
    };
    
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

Při použití funkce `useState` je nutné specifikovat typ, který bude stav uchovávat. V tomto případě je to pole objektů typu `Todo[]`.

Všimněte si také, že v `useEffect` jsme specifikovali typ návratové hodnoty funkce `fetchTodos` jako `Promise<void>`. Tato funkce totiž nic nevrací, pouze nastavuje stav. Protože ale musí čekat na asynchronní operaci, nemůže být její návratový typ pouze `void`.

## Indikátor načítání

V našem příkladu ještě chybí nějaký způsob, jak uživateli sdělit, že se data načítají. K tomuto účelu většinou slouží nějaká speciální hodnota uložená ve stavu před tím, než obdržíme data. Různí programátoři často používají hodnotu `null`, `undefined` apod. Mnohem názornější je ale použít speciální hodnotu jako je řetězec `'loading'`. Pro tento účel musíme rozěřit typ dat ve stavu o literální typ `'loading'`:

```tsx
const [todos, setTodos] = useState<Todo[] | 'loading'>('loading');
```

Nyní můžeme v komponentě zobrazit načítací indikátor:

```tsx
if (todos === 'loading') {
  return <p>Načítám data...</p>;
}
```
