---
title: Prioritní fronta
demand: 3
---

Vaší úkolem bude naprogramovat obecnou datovou strukturu s názvem _prioritní fronta_. Tato struktura funguje tak, že do ní lze vkládat prvky, které mají přiřazenou nějakou prioritu. Pokaždé, když z této fronty chceme odebrat prvek, vrátíme ten s nejvyšší prioritou v celé frontě. Pokud je ve frontě více prvků s nejvyšší prioritou, vrátíme ten, který byl vložen jako první.

Příklad vyžití prioritní fronty může být například plánování úkolů, kdy postupně do fronty vkládáme úkoly, které chceme vykonat, a z fronty je odebíráme podle toho, jak jsou důležité. My však budeme prioritní frontu mít generickou, abychom v ní mohli skladovat libovolná data.

Nejprve zavedeme typ pro prvek ve frontě `QueueItem`:

```typescript
interface QueueItem<T> {
  value: T,
  priority: number,
}
```

Pak vytvoříme typ `PriorityQueue`, který bude alias pro pole prvků `QueueItem`:

```typescript
type PriorityQueue<T> = QueueItem<T>[];
```

Implementujte funkce pro práci s prioritní frontou:

1. Funkce `enqueue` obdrží jako svůj parametr frontu, prvek typu `T` a jeho prioritu. Vloží tento prvek na konec pole a vrátí novou frontu.
1. Funkce `dequeue` obdrží jako svůj parametr frontu a vrátí prvek s nejvyšší prioritou. Funkce tady musí projít colé pole a najít prvek s nejvyšší prioritou. Když je fronta prázdná, vraťte `null`.
1. Zkuste upravit funkci `dequeue` tak, aby nevracela `null`, ale typ `Option`, o kterém jsme mluvili v lekci.

### Použití

1. Vyzkoušejte si vytvořit frontu, která bude obsahovat řetězce, tedy například názvy úkolů. Přidejte jich několik do fronty s různými prioritami a zjistěte, zda se vám podaří je vyjmout v pořadí podle priorit.
1.  Zkuste složitější příklad, kdy úkoly nejsou pouze řetězce, ale objekty s nějakými vlastnostmi. K úkolu může patřit například
    - `label`: bug, feature, refactoring...
    - `assignee`: jméno osoby, která má úkol vykonat
    - `projekt`: jméno projektu, ve kterém se úkol nachází
