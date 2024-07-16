## Excessive property checks

Přiřazování objektů `Student` a `Teacher` do proměnných typu `User` má dva možná trochu nečekané zádrhely. Jak už jsme viděli, snadno můžeme udělat takového přiřazení:

```ts
const student: Student = {
  name: 'Robert',
  email: 'robert.pavlasek@seznam.cz',
  level: 'advanced',
};

const user: User = student;
```

Za následující přiřazené nám však TypeScript vynadá:

```ts
const user: User = {
  name: 'Robert',
  email: 'robert.pavlasek@seznam.cz',
  level: 'advanced',
};
```

Tohle vypadá trochu nečekaně. Před chvíli jsme řekli, že `Student` je podtyp `User`, takže bychom měli být schopní přiřadit hodnotu typu `Student` do proměnné typu `User`. Pokud však do proměnné typu `User` přiřadíme přímo na místě vytvořený objekt, TypeScript v takovém případě kontroluje, zda takový objektový nemá nějaké vlastnosti navíc, které by nebyly v typu `User`. V našem případě je to vlastnost `level`, která je v `Student`, ale není v `User`.

Tomuto typu kontroly se říká _excessive property check_ a probíhá
