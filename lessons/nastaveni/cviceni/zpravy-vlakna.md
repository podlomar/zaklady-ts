---
title: Zprávy a vlákna
demand: 2
---

Dokončíme aplikaci ChitChat tím, že zobrazíme zprávy a vlákna ve prostředním a pravém sloupci.

Zásadní věc, kterou si musíme rozmyslet je, odkud zjistíme, kterou zprávu zobrazit a jaké vlákno máme zobrazit. Kdybychom pracovali v Reactu, měli bychom tuto informaci uloženou někde ve stavu. Ve vanilla projektu si vypomůžeme search parametry v URL adrese.

Pokud chceme například zobrazit obsah kanálu s `id` 1, URL adresa bude vypadat takto:

```
http://localhost:8080/?channel=1
```

Když chceme navíc zobrazit obsah vlákna u zprávy s `id` 2, URL adresa bude vypadat takto:

```
http://localhost:8080/?channel=1&thread=2
```

Pokud si nejste jistí jak získat search parametry z URL adresy, můžete se podívat na příklady použití třídy [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#examples).

### Zobrazení zpráv a vláken

Jakmile míte k dispozici všechny informace o tom, který kanál, případně které vlákno je třeba zobrazit, stačí opět

1. vytvořit příslušný datový model pro data z API,
1. stáhnout data z API podle toho, co je v URL adrese,
1. zobrazit data na stránce vámi zvoleným způsobem.

Pokračujte v tomto duchu, dokud nebude aplikace funkční, úžasná, krásná, a dokud nepocítíte hřejivý pocit z dobře odvedené práce. Samozřejmě se můžete rozvášnit a přidat nějaké bonusové featury nebo si dokonce pohrát s API serverem a přidat nějaká vlastní data. Představivosti se meze nekladou.
