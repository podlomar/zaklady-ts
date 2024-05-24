---
title: Rodné číslo
demand: 3
lead: 
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

Vaším úkolem je vytvořit funkci `parsePatientId`, která bude mít parametr typu `string` a vrátí objekt, představující informace o pacientovi.

Budeme chtít, aby objekt obsahoval následující informace:

- rok, měsíc a den narození,
- pohlaví pacienta jako výčtový typ,
- kontrolní číslici.

Navrhněte typescriptový typ `Patient` obsahující výše uvedené vlastnosti a vytvořte funkci `parsePatientId`, která bude mít parametr typu `string` a vrátí objekt typu `Patient`.

**Jako výsledek úkolu odevzdejte:**

- soubor s definicí typu `Patient` a funkcí `parsePatientId`,
- soubor, který obsahuje pole objektů s informacemi o pacientech z pole `patientIds`.
