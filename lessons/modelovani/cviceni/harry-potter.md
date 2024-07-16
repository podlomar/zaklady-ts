---
title: Kouzelný svět Harryho Pottera
demand: 2
lead: Vytvořte datový model pro svět v příbězích Harryho Pottera.
solutionAccess: protected
---

Vaším úkolem je vytvořit datový model v TypeScriptu pro různé části kouzelného světa Harryho Pottera na základě následujícího popisu.

### Popis domény

Kouzelný svět Harryho Pottera se skládá z různých entit, jako jsou kouzelníci, kouzla, lektvary, magická stvoření a koleje v Bradavicích. Níže je uveden popis každé entity,

1. **Kouzelníci/Kouzelnice**
    - Každý kouzelník nebo kouzelnice má jedinečné ID a jméno.
    - Patří do jedné ze čtyř kolejí v Bradavicích
    - Každý má hůlku, která je charakterizována typem dřeva, jádrem a délkou.
    - Kouzelníci a kouzelnice mohou sesílat různá kouzla a vařit různé lektvary.
    - Mohou vlastnit mazlíčky, tedy různá magická stvoření.

2. **Koleje v Bradavicích**
    - Každá kolej má název (Nebelvír, Mrzimor, Havraspár, Zmijozel).
    - Koleje byly založeny slavnými kouzelníky nebo kouzelnicemi, každá má tedy svého zakladatele.
    - Mají maskota (např. Lev pro Nebelvír).
    - Každá kolej má svého vedoucího profesora.
    - Koleje jsou známé pro své určité vlastnosti (např. odvaha, věrnost).

3. **Hůlky**
    - Každá hůlka je vyrobena z konkrétního typu dřeva (např. Cesmína, Dub).
    - Má jádro z určitého materiálu (např. Fénixovo pero, Dračí srdce).
    - Hůlky mají konkrétní délku měřenou v palcích.

4. **Kouzla**
    - Každé kouzlo má jedinečné jméno.
    - Kouzla patří do různých typů (kletba, prokletí, žert, přeměňování, obrana, atd.).
    - Mají popis, který detailně vysvětluje jejich účinek.
    - Kouzla se liší podle úrovně obtížnosti (jednoduché, středně těžké, těžké).

5. **Lektvary**
    - Každý lektvar má jedinečné jméno.
    - Lektvary jsou vyrobeny z různých ingrediencí, každá specifikovaná jménem a množstvím.
    - Mají specifický účinek při použití.
    - Lektvary mají také úroveň obtížnosti (jednoduché, středně těžké, těžké).

6. **Magická stvoření**
    - Každé magické stvoření má jedinečné jméno.
    - Patří do různých druhů (např. Drak, Hipogryf, Fénix).
    - Magická stvoření mají různé schopnosti.
    - Každé stvoření také vyžaduje určitou speciální péči.
    - Stvoření mohou být potvrzená nebo pouze legendární.

Pomocí výše uvedeného popisu domény vytvořte datový model v TypeScriptu. Váš model by měl zahrnovat:

- Rozhraní pro každou entitu (kouzelníci/kouzelnice, hůlky, kouzla, lektvary, magická stvoření a koleje v Bradavicích).
- Výčtové typy, kde je to vhodné (např. názvy kolejí, typy kouzel, úrovně obtížnosti, druhy stvoření).
- Vnořené struktury pro reprezentaci vztahů mezi entitami (např. hůlka kouzelníka, kouzla, lektvary a mazlíčci).

### Výstup

Soubor TypeScriptu (`harryPotterModel.d.ts`), který obsahuje všechny typy jak byly popsány výše.
