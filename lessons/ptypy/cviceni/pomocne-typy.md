---
title: Tvorba pomocných typů
lead: Vytvořte jednoduché generické pomocné typy 
demand: 3
---

V jednoduchém projektu s TypeScriptem bez bundleru vytvořte typy pro dle následujících pokynů.

1. Vytvořte typ `MaybeError` s generickým parametrem `T`. Typ `MaybeError` bude sloužit k reprezentaci výsledku, který může skončit chybou. Bude mít dvě možnosti, buď hodnotu typu `T` nebo literál `'error'`.
1. Implementujte funkci `last` pro získání posledního prvku pole pomocí `MaybeError<T>`. Funkce bude mít jeden parametr, pole libovolného typu, a bude vracet typ `MaybeError<T>`, kde `T` je typ prvků pole. Pokud je pole prázdné, funkce vrátí `'error'`.
1. Vytvořte typ `Tripplet` s generickým parametrem `T` pro reprezentaci trojice hodnot typu `T`. Tento typ bude mít tři vlastnosti, `first`, `second` a `third`, které budou mít typ `T`.
1. Implementuje funkci `interpolate`, která obdrží pole a vrátí jeho první prvek, prostřední prvek a poslední prvek. K implementaci použijte typ `Tripplet<T>`, kde `T` je typ prvků pole. Pokud má pole méně než tři prvky, funkce vrátí `null`.

:::solution
```ts
type MaybeError<T> = T | 'error';

const last = <T>(array: T[]): MaybeError<T> => {
  if (array.length === 0) {
    return 'error';
  }
  return array[array.length - 1];
};

interface Tripplet<T> {
  first: T;
  second: T;
  third: T;
}

const interpolate = <T>(array: T[]): Tripplet<T> | null => {
  if (array.length < 3) {
    return null;
  }
  return {
    first: array[0],
    second: array[Math.floor(array.length / 2)],
    third: array[array.length - 1],
  };
};
```
::: 
