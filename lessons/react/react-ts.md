## TypeScript v Reactu

Po všech předchozích lekcích, kde jsme se věnovali základům TypeScriptu, už umíme všechno, co je potřeba, abychom mohli v TypeScriptu napsat plnohodnotnou React aplikaci.

Abychom se nemuseli trápit s nastavováním, máme opět k dispozici šablonu projektu, ze které můžeme kdykoliv založit nový nový projekt příkazem:

```bash
npm init kodim-app@latest muj-projekt react-ts
```

Nastavení v tomto projektu se příliš neliší od vanilla TypeScriptové aplikace. Abychom do projektu přidali React, musíme udělat následující kroky, které šablona provede automaticky:

1.  nainstalovat balíčky `react` a `react-dom`:
    ```bash
    npm install react react-dom
    ```
1.  nainstalovat balíčky `@types/react` a `@types/react-dom`, abychom měli k dispozici typové definice pro React:
    ```bash
    npm install --save-dev @types/react @types/react-dom
    ```
1.  přidat do `tsconfig.json` nastavení pro kompilování JSX a upravit cesty k souborům `.tsx`:
    ```json
    {
      "compilerOptions": {
        "jsx": "react-jsx",
      },
      "include": ["src/**/*.ts", "src/**/*.tsx"],
    }
    ```
1.  Upravit nastavení Webpacku tak, aby pracoval i s `.tsx` soubory:
    ```js
    module.exports = {
      // ...
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    };
    ```

Velká výhoda TypeScriptu je v tom, že se dá snadno nastavit, aby překládal JSX syntaxi. Díky tomu se můžeme vyhnout balíčkům jako `babel`, které by jinak byly potřeba pro překlad JSX syntaxe do JavaScriptu.
