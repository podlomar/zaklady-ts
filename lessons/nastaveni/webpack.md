## Nastavení Webpacku

Konfiguraci webpacku najdete v souboru `webpack.config.js`. Náš kurz je především o TypeScriptu, takže nastavení Webpacku proletíme jen v rychlosti, abyste měli základní představu, co se při sestavení projektu děje.

Úkolem Webpacku je sestavit všechny zdrojové soubory do složky `dist` tak, aby byly připravené ke spuštění v prohlížeči pro vývoji nebo pozdějí k nasazení na server.

1. **Entry Point**: Vstupní bod aplikace je soubor `index.ts` ve složce `src`.
1. **Kompilace TypeScriptu**: Používáme `ts-loader`, který používá TypeScript překladač pro překlad do JavaScriptu. Od této chvíle už tedy nemusíme spouštět `tsc` ručně.
1. **Podpora CSS**: Spojí importované CSS soubory a extrahuje je do samostatného souboru pomocí `mini-css-extract-plugin`. 
1. **Podpora obrázků**: Kopíruje obrázky do výstupní složky `dist/img` a generuje jim názvy s hashem pro cachování. To se hodí především pro obrázky importované v CSS.
1. **Dev Server**: Spouští vývojový server, abychom mohli aplikaci během vývoje zkoušet v prohlížeči.
1. **HTML Plugin**: Generuje HTML soubor na základě zadaného šablony v `src/index.html`. Takto nám webpack automaticky vloží do HTML odkazy na všechny vygenerované soubory jako JavaScript a CSS.
1. **Copy Plugin**: Kopíruje soubory ze složky `public` do složky `dist`. To se hodí pro statické soubory jako `favicon.ico`, statické obrázky, fonty, atd.
