## Stavy a události

Při práci se stavem a událostmi v Reactu potkáme parametrické typování, které jsme probírali v předchozí lekci.

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
      const data = await response.json() as Todo[];
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

### Události v Reactu

Typové parametry potkáme také při práci s událostmi. Například při práci s textovým vstupem:

```tsx
import { useState, ChangeEvent } from 'react';

export const Form = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};
```

Tady je důležité zmínit důležitou věc, o které možná ještě nevíte. Události v Reactu jsou tzv. :term{cs="syntetické události" en="synthetic events"}. To znamená, že React vytváří vlastní objekt události, který se obaluje nativní objektu události v prohlížeči. Tento objekt má trochu jinou strukturu a chování, než byste občas čekali. 

Zároveň React pro syntetické události poskytuje parametrické typování. V tomto případě je to `ChangeEvent<HTMLInputElement>`. Tento typ obsahuje informace jak o události, která se stala, tak o elementu, na kterém se stala.
