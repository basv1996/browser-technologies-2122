# Studenten enquête

![Interface van de app](https://raw.githubusercontent.com/basv1996/progressive-web-apps-2122/main/docs/img/)

# Link naar de app
:globe_with_meridians: [Link naar live app](https://browser-technology-2122.herokuapp.com/) 

Voor de eindopdracht heb ik gekozen voor de nerdy shirt website
Dit project is een studenten enquête in de vorm van een website waarbij het progressive enhancement principe is toegepast. Deze studenten enquête is bedoeld voor studenten die zojuist (een vak van) de minor hebben afgerond. Met de resultaten van deze enquête is het de bedoeling dat docenten die de minor geven kunnen onderzoeken hoe de studenten deze vakken van de minor hebben ervaren.

## Use case
> Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.

## Breakdown schets
Ik heb als eerst een breakdown schets gemaakt om goed na te kunnen denken over de core functionaliteiten van mijn app.
![Breakdown schets](https://raw.githubusercontent.com/basv1996/browser-technologies-2122/main/img/breakdownSchets.png)

## Problemen inclusief oplossingen
1. Afbeeldingen
    1. aangezien afbeeldingen veel laad tijd hebben en deze uitgezet kunnen worden heb ik ervoor gekozen SVG's te gebruiken. Deze wordt bijna overal gesupport behalve op IE 6-8 en op de android browser 2.1-2.3.
2. HTML Forms
    1. Tijdens het testen op de ipod touch kwam ik er achter dat het attribuut `required` bij een invoer veld niet werktte. Dit komt omdat deze HTML5 feature niet werkt op sommige browsers. Dit kan ik verhelpen door de gebruikers input te verifieren op de server.


## De verschillende geteste CSS en JavaScript features:



## De verschillende geteste browsers:

- Desktop: firefox: version 98

- Desktop: Internet Explorer 11

- Desktop: Chrome version 100

- Mobile: Samsung Browser 16

- Mobile: Safari 7


## Features

## To-do
|                     |  |
| :------------------------------ | :---- |
| Gegevens maker (naam, telefoon of email)                   | ✅    |
| Kleur t-shirt                                              | ✅    |
| Tekst t-shirt                                              | ✅    |
| Maat t-shirt                                               | ✅    |
| Man of Vrouw                                               | ✅    |
| Verder gaan waar je gebleven bent/ontwerp herzien          | ✅    |
| Validatie: alles moet zijn ingevuld. Geef duidelijke foutmeldingen            |   ✅     |
| Gebruiker moet meerdere t-shirts kunnen maken en herzien, en moet dus een overzichtspagina hebben.     |   ✅     |
| Bestel pagina om een ontwerp kopen en laten maken     |    ✅    |



### Muis/Trackpad
Ik heb mijn website getest met keyboard only. Je kan makkelijk door de website heen tabben. De core functionaliteit van de website werkt naar toe behoren en alle belangrijke aspecten gaat de tab over heen.


### Internet
Ik heb de wbsite getest met een regular 2G verbinding. De website laad nog steeds erg snel met deze lage internetsnelheid.


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
