---
title: Založení projektu
demand: 2
---

Pro založení projektu pro aplikaci _Diagrams_ budeme vycházet z šalobny pro React+TypeScript. Postupujte podle následujících kroků:

1. Založte si nový React+TypeScript projekt pomocí šablony `kodim-app`:
   ```bash
   npm init kodim-app@latest diagrams react-ts
   ```
  Tento příkaz vytvoří nový adresář `diagrams`, který si otevřete ve VS Code editoru.
1.  V [připraveném repozitáři](https://github.com/kodim-vyuka/cviceni-diagram-zadani) máte k dispozici soubory `index.html` a `styles.css`, ve kterých je vytvořená kostra aplikace s ukázkovým obsahem. Tento repozitář si nemusíte klonovat. Vezměte jej jako návrh aplikace designu aplikce, který budete postupně implementovat v Reactu.
1.  Spusťte vývojový server příkazem
    ```bash
    npm run dev
    ```
    a otevřete si aplikaci v prohlížeči. Měli byste vidět kostru aplikace s ukázkovým obsahem.
1.  Budeme pracovat s REST API serverem, který bude poskytovat data pro naše diagramy. Tento server je již připravený v [tomto repozitáři](https://github.com/kodim-vyuka/diagrams-api). Repozitář si naklonujte a otevřete si jej v **novém okně** VS Code editoru. Server se spustí příkazem
    ```bash
    npx jsonhost@latest
    ```
    Server pak bude běžet na adrese `http://localhost:4000`. Více informací o API najdete přímo v README repozitáře.
1.  Všimněte si, že nyní vám na počítači běží dva lokální servery. Jeden vývojový pro frontend a druhý pro backend API.
1.  Prohlédněte si dobře data, která API vrací. Pro tato data bude později potřeba vytvořit datový model v TypeScriptu. Zatím model nevytvářejte, ale zkuste si udělat hrubou představu, jak by mohl vypadat.
