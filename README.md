# Ekonomika – redovisningsbyrå

En statisk webbplats där filerna är samlade efter vilken sida eller funktion de hör till.

## Så är mapparna organiserade

- `index.html` ligger kvar i projektets rot eftersom GitHub Pages letar efter den som webbplatsens startfil. Den skickar besökaren vidare till startsidan i `Hem/`.
- `Hem/` innehåller startsidans `index.html`, välkomstheadern, fördelsdelen och deras CSS.
- `Tjanster/` innehåller tjänstesidans `index.html`, innehållsdelar och sidans CSS.
- `Om/` innehåller sidan ”Om Oss” och dess textinnehåll.
- `Kontakt/` innehåller kontaktsidans `index.html`, kontaktinnehåll och sidans CSS.
- `General/` innehåller sådant som delas av flera sidor: navigering, sidfot, grund-CSS, gemensamma innehålls- och mobilregler, JavaScript och bilder/logotyper.

Varje sidmapp har en egen `index.html`. Den filen länkar till sidans CSS och hämtar de HTML-delar den behöver från sin egen mapp och från `General/`.

## Publicera gratis med GitHub Pages

1. Skapa ett konto på [GitHub](https://github.com/) om du inte redan har ett.
2. Skapa ett nytt **Public** repository, till exempel `balans-hemsida`.
3. Ladda upp **hela innehållet i projektmappen** via **Add file → Upload files** och välj **Commit changes**. Lägg rotens `index.html` direkt i repositoryts rot och ta med mapparna `Hem/`, `Tjanster/`, `Om/`, `Kontakt/` och `General/` med allt innehåll. Ladda inte bara upp `index.html`.
4. Öppna repositoryts **Settings → Pages**.
5. Under **Build and deployment**, välj **Deploy from a branch**, sedan `main` och `/(root)`. Klicka **Save**.
6. När publiceringen är klar visas hemsidans adress på samma Pages-sida. Öppna den adressen för att se hemsidan; repositoryts **Code**-flik visar filerna och är inte själva webbplatsen. Efter framtida uppladdningar publiceras ändringarna från `main` automatiskt.

GitHub Pages på gratisplanen kräver ett publikt repository. Webbplatsen är ändå offentlig när den publiceras, och i ett publikt repository kan andra också se webbplatsens källkod. Lägg därför inte in lösenord eller privata uppgifter här.

## Förhandsvisa lokalt

HTML-delarna hämtas med JavaScript. Öppna därför sidan via en lokal webbserver, till exempel med tillägget **Live Server** i VS Code. Att dubbelklicka på `index.html` och öppna en `file://`-adress fungerar inte för denna inläsning.

## Koppla en egen domän senare

När du har köpt domänen går du till **Settings → Pages → Custom domain** och anger domänen. Därefter lägger du in de DNS-poster som GitHub visar hos domänleverantören och aktiverar **Enforce HTTPS** när alternativet blir tillgängligt. Det kan ta lite tid innan DNS och HTTPS fungerar.

Byt också ut exempeladressen `hej@dittforetag.se` i `Kontakt/contact.html` mot byråns riktiga e-postadress innan hemsidan publiceras.
