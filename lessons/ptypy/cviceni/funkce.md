---
title: Parametrické typy ve funkcích
demand: 3
---

Naprogramuje všechny následující funkce tak, aby pracovaly s polem libovolného typu. Stačí založit obyčejný projekt s TypeScriptovým souborem, není potřeba žádný startovací projekt a bundlerem.

1.  Funkce `head` vrátí první prvek pole nebo `null`, pokud je pole prázdné.
1.  Funkce `tail` vrátí všechny prvky pole kromě prvního nebo prázdné pole, pokud je vstupní pole prázdné.
1.  Funkce `butLast` vrátí všechny prvky pole kromě posledního nebo prázdné pole, pokud je vstupní pole prázdné.
1.  Funkce `last` vrátí poslední prvek pole nebo `null`, pokud je pole prázdné.
1.  Funkce `isEmpty` vrátí `true`, pokud je pole prázdné, jinak `false`.
1.  Funkce `concat` spojí dvě pole do jednoho pole.
1.  Funkce `contains` vrátí `true`, pokud pole obsahuje hledaný prvek, jinak `false`.
1.  Funkce `strip` bude brát pole, které jako své prvky může obsahovat hodnoty `null` a vrátí pole, které bude obsahovat jen ty prvky, které nejsou `null`.
1.  Funkce `insert` vloží na zadanou pozici do pole nový prvek a vrátí nové pole.
    ```typescript
    insert([1, 2, 3], 1, 4); // [1, 4, 2, 3]
    ```
1.  Funkce `remove` odebere prvek na zadané pozici a vrátí nové pole.
    ```typescript
    remove([1, 2, 3], 1); // [1, 3]
    ```
