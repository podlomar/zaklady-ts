## Typování komponent

Pro ilustraci typování komponent si neprjve vytvořmě jednoduchou komponentu v čistém JavaScriptu. Použijeme už otřepaný příklad s produktem v e-shopu:

```jsx
export const Product = ({ name, price }) => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{price} Kč</p>
    </div>
  );
};
```

Takovouto komopentu bychom umístili do souboru `index.jsx` do složky `src/components/Product`. Pokud bychom ji chtěli přepsat do TypeScriptu, změníme příponu souboru na `tsx` a přidáme typy:

```tsx
interface Props {
  name: string;
  price: number;
}

export const Product = ({ name, price }: Props): JSX.Element => {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{price} Kč</p>
    </div>
  );
};
```

Jak vidíte, vytvořili jsme typ `Props`, který definuje typy jednotlivých `props` komponenty. Tento typ pak použijeme jako typ argumentu funkce. Funkce komponenty pak vždy vrací typ `JSX.Element`.

