## Motivace

Pokud začínáte tento kurz TypeScirptu, pravděpodobně jste již napsali alespoň nějaký malý projektík, webovou stránku nebo třeba nějaký užitečný konzolový prográmek v jazyce JavaScript. Pro takové situace je takzvaně „čistý“ JavaScript ideálním programovacím jazykem. Ve srovnání s ostatními „velkými“ jazyky jako Java nebo C# se v JavaScriptu menší projekty píší relativně stručně a úsporně. Tato stručnost je možná díky tomu, že JavaScript je takzvaně _netypovaný_ jazyk. To znamená, že proměnná v JavaScritpu nijak neomezuje, jaké typy hodnot do ní lze uložit.

Není tedy žádný problém mít třeba takovouto proměnnou.

```js
let time = null;
time = 1805;
time = "18:05";
time = {
  hours: 18,
  minutes: 5,
};
```

Všimněte si, jak do proměnné `time` postupně ukládáme hodnotu `null`, poté číslo, pak řetězec a nakonec dokonce objekt. Z hlediska JavaScriptu je takový postup zcela v pořádku.

V menších programech nebo stránkách nám možnost ukládat do proměnných v podstatě cokoliv nemusí nijak vadit. Většinou jsme schopni udržet v hlavě jaké hodnoty patří do jaké promměné. Situace se však rychle změní ve větších projektech a vývojářských týmech, kdy začneme přehled nad tokem dat v aplikace velmi rychle ztrácet.

Představte si zatím jednoduchou funkci, která má za úkol k zadanému času v hodinách a minutách přidat 15 minut. V JavaScriptu bychom takovou funkci mohli napsat takto.

```js
const add15Minutes = (hours, minutes) => {
  const totalMinutes = minutes + 15;
  const extraHours = Math.floor(totalMinutes / 60);
  return {
    hours: (hours + extraHours) % 24,
    minutes: totalMinutes % 60,
  };
};
```

Když tuto funkci zavoláme s hodnotami `18` a `55`, dostaneme zpět objekt

```js
{
  hours: 19,
  minutes: 10,
}
```

Tato funkce funguje spolehlivě a můžeme je bez obav použít pro jakýkoliv čas. Ve větším projektu je však velmi pravděpodobné, že ji někdo zavolá například s hodnotami `'18'` a `'55'` a dostane zpět objekt

```js
{
  hours: '1891',
  minutes: 55,
}
```

tedy úplně nesmyslný výsledek. Nebo si nějaký kolega programátor bude myslet, že když funkce vrací objekt, má se také s objektem volat, například

```js
add15Minutes({ hours: 18, minutes: 55 });
```

a jako výsledek obdrží

```js
{
  hours: NaN,
  minutes: NaN,
}
```

Takovéto přehmaty snadno zanesou do programu těžko odhalitelné chyby. Zkušenost ukzaujze, že tyto situace se v praxi tak běžné, že je potřeba zavést možnost jasně specifikovat, jaké hodnoty lze ukládat do proměnných nebo posílat do funkcí. Z této palčivé potřeby vzniklo rozšíření jazyka JavaScript zvané TypeScript.
