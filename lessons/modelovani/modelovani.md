## Datové modelování

Když vytváříme nějakou webovou aplikaci, vždy se tato aplikace týká nějaké konkrétní oblasti v realitě našeho světa. Z mnoha tísíců možných oblastí vyberme například

- výuková aplikace s různými kurzy, webináři a workshopy,
- e-shop, kde prodáváme oblečení,
- web pro správu archivu on-line vysílání,
- aplikace pro jizdní řády v vyhledávaání spojení,
- stránka pro organizaci svateb.

Všechny tyto oblasti pracují s nějakými daty. 

- Výuková aplikace pracuje s informacemi o kurzech, lektorech, studentech...
- V e-shop máme informace o zboží, zákaznících, objednávkách...
- Webu pro správu archivu on-line pracuje s informacemi o pořadech, uživatelích, komentářích...
- Aplikace pro jizdní řády spravuje informace o spojích, stanicích, jízdních řádech, dopravních prostředcích...
- Stránka pro organizaci svateb zobrazuje informace o svatebních hostech, termínech, místech konání...

Souhrnu informací, se kterými nějaká aplikace pracuje, se říká _datová doména_. Jedním z prvních kroků při návrhu jakékoliv aplikace je tvorba takzvaného _datového modelu_, který popisuje, s jakými objekty aplikace pracuje a jaké mají tyto objekty vlastnosti a vzájemné vztahy.

V TypeScriptu se datový model vytváří pomocí primitivních a složených typů, které jsem už v předchozích lekcích probrali. V následující sekci si ukážeme praktický příklad datového modelu.
