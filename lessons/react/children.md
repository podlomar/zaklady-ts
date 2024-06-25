## Prop children

Možná si pamatujete, že v Reactu můžeme do komponenty předat nějaký JSX obsah pomocí tzv. _children prop_. Například bychom mohli chtít vytvořit obecnou komponentu `Sidebar`, která bude svůj obsah zobrazovat v bočním panelu.

```jsx
export const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      {children}
    </aside>
  );
};
```

Typ pro _children prop_ se v TypeScriptu píše takto:

```tsx
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
```

Komponentu `Sidebar` pak můžeme použít třeba:

```tsx
<Sidebar>
  <h2>Menu</h2>
  <ul>
    <li>Domů</li>
    <li>O nás</li>
    <li>Kontakt</li>
  </ul>
</Sidebar>
```

Typ `ReactNode` zahrnuje všechny možné hodnoty, které dokáže React vyrenderovat. To zahrnuje nejen JSX elementy, ale i textové řetězce, čísla, pravdivostní hodnoty a další.

Můžeme tak `Sidebar` použít i takto:

```tsx
<Sidebar>
  { false }
</Sidebar>
```

V tomto případě se do bočního panelu nevykreslí nic, protože `false` je jednou z hodnot, které React nevykresluje.
