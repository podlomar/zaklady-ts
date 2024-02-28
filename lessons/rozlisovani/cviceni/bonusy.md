---
title: Bonusy
demand: 4
---

Aplikace s kalendářem se dá rozšířit mnoha různými způsoby. Zde je několik nápadů, jak můžete aplikaci vylepšit:

1.  **Více typů položek** - můžete vymyslet více typů událostí a označovat je různými barvami, například pracovní, osobní a rodinné události.
1.  **Skutečný čas** - místo vlastního objektu pro časový údaj použijte JavaScriptový `Date`. Pak můžete položky v kalendáři ukotvit na skutečné reálné datum a zobrazit skutečný aktuální týden. Zde by se hodilo v aplikaci zobrazit například aktuální den, o kolikátý týden v roce jde apod.
1.  **Označení hotového úkolu** - pokud uživatel klikne na úkol, jeho stav se změní na hotový. Jelikož nejsme v Reactu, po změně dat bude potřeba znova zavolat funkci `renderCalendar` pro překreslení celého kalendáře.
1.  **Listování v kalendáři** - pokud umíte celý kalendář překreslit, můžete implementovat přesun na předchozí nebo následující týden. Nebo můžete nechat uživatele pomocí formuláře zadat konkrétní datum, na které se má kalendář přesunout.
1.  **Přidání nové položky** - od označování hotových úkolů už je jen krok k přidávání nových položek. Můžete vytvořit formulář, který se zobrazí po kliknutí na den v kalendáři. Uživatel tam vyplní název, čas položky a její typ, a položka se přidá do pole s daty a kalendář se překreslí.
