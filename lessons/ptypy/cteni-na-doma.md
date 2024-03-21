## Pomocné typy

Když do programování v TypeScriptu zabředneme hlouběji, narazíme na situace, kdy se nám hodí provést nějakou operaci nad už existujícím typem. K tomu TypeScript poskytuje několik takzvaných :term{cs="pomocných typů" en="utility types"}. Tyto typu mají vždyky jeden nebo více generických paremtrů podobně jako typ `Promise<Type>`. 

### `Partial<Type>`

Typ `Partial<Type>` nám umožňuje vytvořit nový typ, který bude mít stejné vlastnosti jako původní typ, ale všechny vlastnosti budou volitelné.

```ts
interface User {
  name: string;
  age: number;
  email: string;
};

type PartialUser = Partial<User>;
```

Výsledný typ `PartialUser` bude vypadat takto:

```ts
type PartialUser = {
  name?: string;
  age?: number;
  email?: string;
};
```

Tento postup se může hodit například pro fomuláře nebo různá nastavení a konfigurace, kdy chceme, aby uživatel mohl vyplnit jen některé z vlastností a zbytek doplníme defaultními hodnotami.

Takto bychom mohli vytvořit například nastavení uživatelského profilu:

```ts
interface UserSettings {
  theme: string;
  language: string;
  notifications: boolean;
};
```

Z backendu nám však mohou přijít jen některé z těchto vlastností. Mohli bychom tak vytvořit funkci, která přijme částečný objekt a doplní zbytek defaultními hodnotami:

```ts
const fillUserSettings = (settings: Partial<UserSettings>): UserSettings => {
  return {
    theme: settings.theme ?? 'light',
    language: settings.language ?? 'en',
    notifications: settings.notifications ?? true,
  };
};
```

### Record<Keys, Type>

Typ `Record<Keys, Type>` se hodí pro vytváření objektů, které používáme jako mapy. To josu objekty, u kterých jsou všechny vlasnosti stejného typu a chceme nějak omezit klíče, které lze používat.

Dejme tomu, že máme například typ udávající, jaké barvy máme k dispozici:

```ts
type Color = 'red' | 'green' | 'blue' | 'yellow' | 'black' | 'white';
```

Chtěli bychom ke každé barvě přiřadit nějakou hodnotu, například kód barvy v hexadecimálním formátu:

```ts
type ColorCodes = Record<Color, string>;

const colorCodes: ColorCodes = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  yellow: '#ffff00',
  black: '#000000',
  white: '#ffffff',
};
```

:::box{type=warning}

**Nepoužívejte `Record` pro vytváření objektů, které mají jako klíče řetězec.**

Pokud chcete vytvořit mapu, která má jako klíče řetězce, není dobrý nápad použít `Record`. Místo toho použijte běžný objekt:

```ts
