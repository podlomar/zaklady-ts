## Podtypy a nadtypy

V TypeScriptu velmi často řešíme, zda hodnota nějakého typu může být přiřazena do proměnné jiného typu. Například můžeme do proměnné typu `Element` uložit hodnotu typu `HTMLButtonElement`

```js
const button: HTMLButtonElement = document.querySelector('button');
const element: Element = button;
```

Zároveň však do proměnné typu `string` rozhodně nemůžeme uložit hodnotu typu `number`. Jaké pravidlo tedy určuje, co můžeme kam přiřadit? 

Pokud můžeme hodnotu typu `A` přiřadit do proměnné typu `B`, říkáme, že `A` je _podtypem_ `B`. V našem příkladu je tak `HTMLButtonElement` podtypem typu `Element` a naopak, `Element` je _nadtypem_ `HTMLButtonElement`.

Pokud máme nějaké dva různé typy `A` a `B`, můžou nastat tři situace:

1. `A` je podtypem `B` – v tomto případě můžeme hodnotu typu `A` přiřadit do proměnné typu `B`.
2. `A` je nadtypem `B` – v tomto případě můžeme hodnotu typu `B` přiřadit do proměnné typu `A`.
3. `A` a `B` jsou _nekompatibilní_ – v tomto případě nemůžeme hodnotu typu `A` přiřadit do proměnné typu `B` a naopak.

Například:

- `HTMLButtonElement` je podtypem `Element`.
- Typ `Element` má ještě obecnější nadtyp zvaný `Node`.
- Typy `string` a `number` jsou nazvájem nekompatibilní.

Pokud vezmeme několik nejvýznamnějších typů pro práci s DOMem, můžeme je uspořádat do následující hierarchie:

::fig{src="assets/elements.svg"}

Zde je vidět, že například `HTMLInputElement` je přimým podtypem typu `HTMLElement`, který je zase přimým podtypem typu `Element`. Nejvýše v hierarchii je pak typ `EventTarget`, který ještě potkáme dále v této lekci.
