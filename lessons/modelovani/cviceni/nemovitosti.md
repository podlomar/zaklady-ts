---
title: Nemovitosti
demand: 2
solutionAccess: protected
---

Vytvořte v TypeScriptu datový model pro webovou aplikaci, která nabízí nemovitosti k prodeji nebo pronájmu.

Doména obsahuje různé typy nemovitostí: dům, byt, garáž a pozemek. Všechny nemovitosti obsahují informace jako název, lokace, cena a plocha, a také informaci, zda je nabízena k prodeji nebo k pronájmu.

- **Dům** je jedním z typů nemovitostí obsahující informace o dispozici domu, počtu podlaží, zda má dům k dispozici garáž, bazén nebo zahradu.
- **Byt** obsahuje informace o dispozici, patro, zda je dostupný výtahem a jestli má balkón.
- **Pozemek** obsahuje informace o účelu pozemku (komerční nebo obytný) a dostupnosti vody, elektřiny a plynu.
- **Garáž** obsahuje informace o kapacitě, dostupnosti vody, elektřiny a plynu.

:::solution
```ts
interface Estate {
  name: string;
  price: number;
  area: number;
  location: string;
  offer: 'sale' | 'rent';
}

interface House extends Estate {
  disposition: string;
  floors: number;
  garden: boolean;
  garage: boolean;
  pool: boolean;
}

interface Flat extends Estate {
  disposition: string;
  floor: number;
  elevator: boolean;
  balcony: boolean;
}

interface Land extends Estate {
  purpose: 'commercial' | 'residential';
  water: boolean;
  electricity: boolean;
  gas: boolean;
}

interface Garage extends Estate {
  capacity: number;
  electricity: boolean;
  water: boolean;
  gas: boolean;
}
```
:::


