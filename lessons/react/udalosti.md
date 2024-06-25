## Události v Reactu

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
