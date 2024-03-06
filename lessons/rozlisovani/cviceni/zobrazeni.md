---
title: Zobrazení položek kalendáře
demand: 3
---


Jakmile máme hotový datový model, můžeme se pustit do zobrazení položek kalendáře.

Nejprve se rozhodněte, jakým způsobem budete vytvářet obsah stránky na základě dat. Můžete použít buď _DOM API_ a `document.createElement` nebo _templating_ a čísté `innerHTML`. Třetí možností by bylo použít nějakou knihovnu, například JSX, ale k tomu se dostaneme až později v lekci o Reactu.

### DOM API

Pomocí DOM API se nový element vytvoří a přidá do stránky takto:

```ts
const h1 = document.createElement('h1');
h1.innerHTML = '<span>Hello world!</span>';
h1.classList.add('title');
document.body.appendChild(div);
```

Tímto způsobem funguje funkce `fillGrid`, která vytváří mřížku kalendáře. Pokud tento postup vidíte poprvé v životě, můžete si jej buď lehce nastudovat, nebo se na něj vykašlat a jít cestou `innerHTML`.

### InnerHTML

Pomocí `innerHTML` se nový element přidá takto

```ts
const h1 = `<h1 class="title"><span>Hello world!</span></h1>`;
document.body.innerHTML += h1;
```

Ať už si zvolíte jakýkoliv postup, postupujte dle těchto kroků:

1. Vytvořte funkci `renderCalendar`, která jako parametr obdrží pole položek kalendáře a zobrazí je na stránce. Zatím se soustřeďte pouze na to, aby se položky zobrazily ve správném dnu a čase.
1. Zařiďte, aby se úkoly zobrazovaly bílou barvou a události modrou.
1. Událost by měla mít výšku dle svého trvání, úkol by měl být tak vysoký, aby se do něj vešel text.
1. Úkoly, které ještě nejsou splněny, zobrazte přeškrtnuté pomocí třídy `task-done`.

Tímto byste měli mít aplikaci hotovou. Pokud vám tento projekt přišel jako procházka růžovým sadem a toužíte po větší výzvě, můžete se pustit do bonusových úkolů.
