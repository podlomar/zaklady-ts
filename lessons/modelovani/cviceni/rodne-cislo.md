---
title: Rodné číslo
demand: 3
lead: Vytvořte parser pro rodná čísla.
---

V následujícím seznamu vidíte seznam rodných čísel pacientů, kteří navštívili v jeden konkrétní den lékařskou ordinaci.

```ts
const patientIds: string[] = [
  '845128/6219',
  '806002/5021',
  '900116/8291',
  '790501/7894',
  '850706/9259',
  '896222/1824',
  '870327/9582',
  '810602/6883',
  '855512/5070',
  '790531/7081',
];
```

Vaším úkolem je vytvořit funkci `parsePatientId`, která jako parametr obdrží rodné číslo  a vrátí objekt, představující informace o pacientovi.

### Jak fungují rodná čísla

Rodné číslo je identifikační číslo, které slouží k jednoznačné identifikaci osoby. V České republice se rodné číslo (většinou) skládá z 10 číslic a jednoho lomítka, které ho rozděluje na dvě části:

- Prvních 6 číslic udává datum narození v pořadí rok (2 číslice), měsíc (2 číslice) a den (2 číslice). Například pro muže narozeného 2. března 1990 by prvních 6 číslic mělo být 900302.
- Zbytek rodného čísla (tj. část za lomítkem) slouží k identifikaci konkrétní osoby.
Ženy mají k číslu měsíce přičteno 50, např. 845128/6219 je číslo patřící ženě narozené 28. listopadu 1984.

### Úkol

Budeme chtít, aby objekt obsahoval následující informace:

- rok, měsíc a den narození,
- pohlaví pacienta jako výčtový typ,
- kontrolní číslici.

Navrhněte TypeScriptový typ `Patient` obsahující výše uvedené vlastnosti a vytvořte funkci `parsePatientId`, která bude mít parametr typu `string` a vrátí objekt typu `Patient`.

### Odevzdání

Jako výsledek úkolu odevzdejte:

- soubor s definicí typu `Patient` a funkcí správně otypovanou funkcí `parsePatientId`,
- soubor, který obsahuje pole objektů s informacemi o pacientech z pole `patientIds`.
