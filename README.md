# Studenten enquête

![Interface van de app](https://raw.githubusercontent.com/basv1996/progressive-web-apps-2122/main/docs/img/)

# Link naar de app
:globe_with_meridians: [Link naar live app](https://browser-technology-2122.herokuapp.com/) 

Voor de eindopdracht heb ik gekozen voor de nerdy shirt website
Dit project is een studenten enquête in de vorm van een website waarbij het progressive enhancement principe is toegepast. Deze studenten enquête is bedoeld voor studenten die zojuist (een vak van) de minor hebben afgerond. Met de resultaten van deze enquête is het de bedoeling dat docenten die de minor geven kunnen onderzoeken hoe de studenten deze vakken van de minor hebben ervaren.

## Use case
> Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.


## Problemen inclusief oplossingen
1. Afbeeldingen
    1. aangezien afbeeldingen veel laad tijd hebben en deze uitgezet kunnen worden heb ik ervoor gekozen SVG's te gebruiken. Deze wordt bijna overal gesupport behalve op IE 6-8 en op de android browser 2.1-2.3.
2. HTML Forms
    1. Tijdens het testen op de ipod touch kwam ik er achter dat het invoer veld voor email niet werkte. Dit komt omdat deze HTML5 feature niet werkt op sommige browsers. Dit kan ik verhelpen door de gebruikers input te verifieren op de server.


## De verschillende geteste CSS en JavaScript features:



## De verschillende geteste browsers:

- browser 1

- browser 2

- browser 3

- browser 4





### Muis/Trackpad
Bij mijn website heb ik ook gekeken naar focus states voor het geval de gebruiker niet over een werkende muis of trackpad beschikt. De gebruiker kan met de `tab` toets door de pagina heen navigeren en met de spatiebalk clicks uitvoeren. Met de pijltjestoetsen kan de gebruiker bij `select` en `input type='radio'` een gewenste optie kiezen. De focus states zijn zichtbaar doormiddel van een 4px dashed outline bij de elementen. Blauw bij de knoppen en zwart bij alle andere elementen.

### Breedband internet
Om de laadtijd van de website te testen heb ik bij Microsoft Edge (bij de andere browsers lukte het helaas niet) de laadtijd gemeten. Dit heb ik gedaan voor de opties 'no throttling' (geen netwerkbeperking), 'fast 3G' en 'slow 3G'. Bij de optie 'no throttling' was mijn eigen downloadsnelheid op het moment vant testen ongeveer 60mbps. Zie hier de resultaten:

No throttling: ongeveer 40 ms
Fast 3G: ongeveer 1,20 sec
Slow 3G: ongeveer 6,5 sec

Het lijkt misschien alsof 6,5 seconden erg lang duurt bij een langzaam 3G netwerk, maar onthoud dat dat de totale laadtijd van de pagina betreft. Al na ongeveer 2 seconden zijn alle HTML elementen zichtbaar en na ongeveer 4,5 seconden is ook alle CSS en JavaScript ingeladen. Op dat moment zie je de content op een grijze achtergrond (de fallback). Hierna duurt het ongeveer 2 seconden voordat ook de achtergrondafbeeldingen geladen zijn. Als alle content doormiddel van scripts geladen zou worden, zal de gebruiker langer moeten wachten voordat er content getoond wordt.

### JavaScript en LocalStorage

### Cookies
Mijn website maakt geen gebruik van cookies.

## Bronnen:
- https://www.smashingmagazine.com/2009/04/progressive-enhancement-what-it-is-and-how-to-use-it/
- https://www.scienceguide.nl/wp-content/uploads/2018/03/HvA0005498-e1521710478778.jpg


README TO DO:
- Een (wireflow) schets van de functionaliteit met een beschrijving van de core functionality. Geef ook aan wat de functional/reliable, usable en pleasurable laag.

- Een beschrijving van de feature(s)/Browser Technologies die in je demo zijn gebruikt en hoe je dit PE hebt toegepast

- Een lijst met vier browsers waarin je hebt getest:
Desktop: 1 Chromium 1 niet-Chromium browser
Mobiel: 1 iOS + 1 Android OF een Samsung- en een niet-Samsung Android)

- Een testverslag met
een beschrijving van de feature-lijst die zijn onderzocht
welke browsers de feature(s) wel/niet ondersteunen
welke functionaliteiten zoals JavaScript je aan en uit hebt gezet in de tests
