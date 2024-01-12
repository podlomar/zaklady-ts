## Jazyk TypeScript

TypeScript je takzvaně _typovaná_ nadstavba JavaScriptu, kterou od roku 2012 vyvíjí společnost Microsoft. Díky TypeScriptu je možné lépe organizovat kód ve větších aplikacích. Právě proto se tento jazyk často používá v profesionálním prostředí, kde na větších projektech běžně pracuje mnoho programátorů.

Pokud začínáte tento kurz, pravděpodobně jste již napsali alespoň nějaký malý projektík, webovou stránku nebo třeba nějaký užitečný konzolový prográmek v jazyce JavaScript. Pro takové situace je takzvaně „čistý“ JavaScript ideálním programovacím jazykem. Ve srovnání s ostatními „velkými“ jazyky jako Java nebo C# se v JavaScriptu menší projekty píší relativně stručně a úsporně. Tato stručnost je možná díky tomu, že JavaScript je takzvaně _netypovaný_ jazyk. To znamená, že proměnná v JavaScritpu nijak neomezuje, jaké typy hodnot do ní lze uložit.

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

Všimněte si, jak do proměnné :var[time] postupně ukládáme hodnotu `null`, poté číslo, pak řetězec a nakonec dokonce objekt. V JavaScriptu je toto zcela v pořádku.

V menších projektech nám takovéto situace tolik nevadí. Většinou jsme schopni udržet v hlavě jaké hodnoty patří do jaké promměné. Ve větších projektech, na kterých pracuje více lidí, ale začneme přehled rychle ztrácet. Začne být velmi užitečné jasně deklarovat, že do nějaké proměnné lze uložit jen určitý typ hodnoty. Například pouze řetězec (`string`). V TypeScriptu bychom takovou proměnnou napsali takto.

```ts
let time: string = "18:05";
```

Při vytváření proměnné za jejím názvem uděláme dvojtečku a za ni napíšeme, jakého je proměnná typu. Pokud se pozdějí pokusíme provést například toto:

```ts
time = {
  hours: 18,
  minutes: 5,
};
```

dostaneme od Typsecriptu vynadáno:

::fig{src=assets/ts-chyba.png size=90}

Jak si takovou věc sami vyzkoušet a k čemu nám je doopravdy dobrá si ukážeme v následující sekci.
