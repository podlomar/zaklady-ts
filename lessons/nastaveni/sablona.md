## Šablona pro vanilla TypeScript projekt

S rostoucí velikosté TypeScriptových projektů a přibývajícím počtem zdrojových souborů rozhodně bude potřeba zavést bundlování. TypeScript totiž sám bundlování neumí a bez něj by musel prohlížeč stahovat všechny vygenerované JavaScriptové soubory zvlášť. To zbytečně zpomaluje aplikaci a zatěžuje síťové spojení.

Pro naše účely budeme používat bundler Webpack. Daly by se použít i jiné bundlery, například modernější Vite, ten však má pro TypeScrptové projekty příliš silné názory a je pro začátečníky těžší na pochopení. Webpack je naopak starší a zavedený bundler, který je pro TypeScriptové projekty pořád velmi užitečný.

Nastavovat Webpack sami od základu není nic radostného. Budeme proto používat připravenou šablonu projektu se všemi vhodnými nastaveními už vyladěnými. Její konfiguraci si postupně probereme a vysvětlíme.

### Založení projektu

Pro založení projektu použijeme příkaz

```bash
npm init kodim-app@latest nazev-projektu vanilla-ts
```

Obdržíme projekt s následující strukturou:

```
.
├── node_modules
├── public
│   └── favicon.ico
├── src
│   ├── index.html
│   ├── index.ts
│   └── styles.css
├── package.json
├── tsconfig.json
└── webpack.config.js
```

Všimněte si, že všechny zdrojové soubory jsou ve složce `src`. Ve složce `public` máme statické soubory jako `favicon.ico` a případně další jako obrázky, fonty, atd.

Když se podíváte do `package.json`, uvidíte prázdný seznam `dependencies`, což souhlasí s tím, že máme vanilla projekt bez frameworků jako React, JSX apod. V `devDependencies` uvidíte závislosti na Webpacku a dalších nástrojích.

Pod klíčem `scripts` uvidíte připravené příkazy pro spuštění vývojového serveru a pro produkční sestavení.

```json
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
}
```

Projekt tedy v development módu spustíme příkazem `npm run dev` a produkční sestavení provedeme příkazem `npm run build`.
