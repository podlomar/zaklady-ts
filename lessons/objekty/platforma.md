## Case study: Vzdělávací platforma

Vžijme se na chvíli do role vývojáře, který pracuje na aplikaci pro nějakou vzdělácí platformu. Můžete si představit třeba Czechitas, Udemy nebo přímo web Kódím.cz.

**Od zákazníka máme takového zadání naší domény:**

Cílem vzdělávací platformy je poskytnout uživatelům rozmanité možnosti vzdělávání. Nabízí tři typy vzdělávacích modulů: workshopy, kurzy a akademie. Tyto moduly vedou odborní lektoři.

- Každý vzdělávací modul má svůj název, popis, cenu a kapacitu.
- Workshopy mají jeden pevně daný termín, konají se vždy v určitý den a mají pevně daný počet hodin.
- Kurzy mají vždy několik lekcí, které se konají v pravidelných intervalech.
- Akademie představují dlouhodobé vzdělávání, které se většinou skládá z několika kurzů a workshopů.

Každá lekce nebo workshop se vždy může konat bud takzvaně _on-site_ na nějakém fyzickém místě, _on-line_ na nějaké URL adrese, nebo _hybridně_, kdy se koná současně on-site i on-line.

## Datový model

Na základě tohoto zadání se můžeme pustit do tvorby datového modelu. Je dobré se nejprve zamyslet nad tím, jaké základní objekty budeme v naší aplikaci potřebovat. 

Vypadá to, že se nám bude hodit nějaký společný typ pro všechny druhy vzdělávacích modulů, tedy workshopy, kurzy a akademie. Nazvěme ho třeba `EducationModule` dejme mu vlastnosti dle zadání:

```ts
interface EducationModule {
  name: string;
  description: string;
  price: number;
  capacity: number;
}
```

Kury se skládají z lekcí, takže určitě budeme potřebovat typ pro lekce. Zároveň každá lekce se někde koná, takže si nejdříve vytvořme typ pro místa konání jménem `LessonLocation`:

```ts
interface LessonLocation {
  type: 'on-line' | 'hybrid' | 'on-site';
  name: string;
  address: string;
  note?: string;
}
```

Pokud je lekce on-line, budeme na místě adresy uvádat URL pro videocall. Pokud je on-site, budeme uvádat adresu místa konání. Pokud je hybridní, budeme uvádat obojí. Například:

```ts
const location: LessonLocation = {
  type: 'hybrid',
  name: 'Místnost M7 a Zoom',
  address: 'Koníčkova 123, Praha 4, https://zoom.us/j/1234567890',
};
```

V typu máme také volitelnou vlastnost `note`, kam můžeme napsat nějakou poznámku, například pokyny pro příchod na místo konání.

Nyní můžeme vytvořit typ pro lekce:

```ts
interface Lesson {
  title: string;
  description: string;
  date: string;
  hours: number;
  location: LessonLocation;
  lecturer: string;
}
```

Nyní už můžeme vytvořit typ pro kurzy, který bude odvozený od typu `EducationModule` a bude mít navíc vlastnost `lessons` pro pole lekcí a `startDate` pro datum začátku kurzu:

```ts
interface Course extends EducationModule {
  startDate: string;
  lessons: Lesson[];
}
```

Podobně můžeme vytvořit typ pro akademie:

```ts
interface Academy extends EducationModule {
  startDate: string;
  courses: Course[];
  workshops: Workshop[];
}
```

Zajimavý je typ pro pro workshopy. Tady si můžeme uvědomit, že workshop je vlastně vzdělávací modul, který je v podstatě jedna dlouhá lekce. Můžeme tedy tedy vytvořit typ tak, že bude obsahot vlastnost `lesson`, ve které bdue jedna lekce:

```ts
interface Workshop extends EducationModule {
  lesson: Lesson;
}
```

Můžeme ale také zvolit jiný přístup a vytvořit typ pro workshop tak, že bude odvozený od typu `EducationModule` a zároveň od typu `Lesson`.

```ts
interface Workshop extends EducationModule, Lesson {}
```

Všimněte si prázdných složených závorek, které značí, že typ `Workshop` nebude mít žádné vlastnosti navíc proti typům `EducationModule` a `Lesson`. 

## Příklad dat

Nyní můžeme vytvořit nějaká data, která budou odpovídat našemu datovému modelu. Zkusme například vytvořit kurz _Háčkování pro začátečníky_:

```ts
const course: Course = {
  name: 'Háčkování pro začátečníky',
  description: 'Kurz pro všechny odvážlivce, kteří chtějí začít háčkovat.',
  price: 5000,
  capacity: 10,
  startDate: '2022-09-01',
  lessons: [
    {
      title: 'Základy háčkování',
      description: 'První krůčky mezi nitěmi',
      date: '2022-09-01',
      hours: 2,
      location: {
        type: 'on-site',
        name: 'Klub háčkářů',
        address: 'Háčkova 123, Praha 1',
      },
      lecturer: 'Alice Háčkovaná',
    },
    {
      title: 'Techniky a postupy',
      description: 'Základní techniky, tipy a triky pro začátečníky"',
      date: '2022-09-08',
      hours: 2,
      location: {
        type: 'hybrid',
        name: 'Klub háčkářů a Zoom',
        address: 'Háčkova 123, Praha 1, https://zoom.us/j/1234567890',
      },
      lecturer: 'Miroslav Háček',
    },
    {
      title: 'Vlastní projekt',
      description: 'Od jednoduchých smyček k vlastním projektům',
      date: '2022-09-15',
      hours: 2,
      location: {
        type: 'on-line',
        name: 'Zoom',
        address: 'https://zoom.us/j/1234567890',
      },
      lecturer: 'Luboš Nitka',
    },
  ],
};
```

## Postup při datovém modelování

Při datovém modelování se rozhodujeme, do jakých typů dát jaké vlastnosti a jaké typy od kterých odvozovat. Tato rozhodnutí nelze udělat všechna na začátku. Často během modelování nebo klidně až během vývoje aplikace zjistíme, že nějaký typ bychom měli rozdělit na dva, nebo naopak nějaké dva typy sloučit do jednoho, zavést nový společný typ pro nějaké vlastnosti atd. Do rozhodování, co je dobrý model vstupuje mnoho faktorů. Chceme aby

- model co nejlépe reprezentoval realitu, tedy doménu,
- se nad modelem dobře přemýšlelo a dával logický smysl,
- se s vytvořenými typy dobře pracovalo v kódu.
