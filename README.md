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

De core functionaliteit van mijn applicatie is dat de gebruiker een t shirt kan modifien en bestellen. Hiernaast is de pleasurable laag dat de gebruiker deze kan aanpassen en dit visueel ziet veranderen voor zijn of haar ogen.

## Problemen inclusief oplossingen
1. Afbeeldingen
    1. aangezien afbeeldingen veel laad tijd hebben en deze uitgezet kunnen worden heb ik ervoor gekozen SVG's te gebruiken. Deze wordt bijna overal gesupport behalve op IE 6-8 en op de android browser 2.1-2.3.
2. HTML Forms
    1. Tijdens het testen op de ipod touch kwam ik er achter dat het attribuut `required` bij een invoer veld niet werktte. Dit komt omdat deze HTML5 feature niet werkt op sommige browsers. Dit kan ik verhelpen door de gebruikers input te verifieren op de server.

## Progressive Enhancement

Progressive enhancement is zorgen dat op verschillende browsers en apparaten de website nog werkt. Het gaat hierbij om de basis functionaliteit van een website. Het is voor de gebruiker belangrijk dat hij de belangrijkste content kan bekijken. Een website bestaat uit verschillende lagen: HTML, CSS en JS. Het is belangrijk dat de basis van een website goed is, duidelijke en semantische HTML content. Daarna kan je met CSS en JS de website mooier en gebruiksvriendelijk maken. Het is zo belangrijk om goede HTML te hebben omdat niet elke browser CSS en JS ondersteunt. Ook verschilt het tussen browsers welke functionaliteiten ze wel of niet ondersteunen. Wanneer je HTML is een los bestand heb kan de gebruiker in iedergeval altijd de content van jouw website bekijken.

### Hoe heb ik PE toegevoegd in mijn app?
Door middel van veel functionaliteiten op de server te laten doen heb ik mijn client side javascript minimaal kunnen behouden. Dit is omdat je niet weet ofdat de eindgebruiker izjzn of haar javascript heeft uitgeschakeld.
Ik heb nadat de server was opgebouwd de HTML pagina's gemaakt en ervoor gezorgd met basis HTML elementen zoals `form`, `input` en `a` kwam ik al een heel eind. Nadat de functionaliteit van de app af was ben ik hem mooier gaan maken. Ik heb bijvoorbeeld alle links en buttons die hetzelfde moeten doen heb dezelfde styling gegeven. Om een nog betere gebruikerservaring te kunnen aanbieden voor de eindgebruiker heb ik hierna nog client side javascript toegevoegd. Hierdoor kan de gebruiker bijvoorbeeld live zien wat er op het t-shirt komt te staan zodra hij of zij dit intypt in het invoer veld. 


## De verschillende geteste browsers:

- Desktop: firefox: version 98

- Desktop: Internet Explorer 11

- Desktop: Chrome version 100

- Mobile: Samsung Browser 16

- Mobile: Safari 7




## Feature lijst voor app
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

## Feature lijst

### Afbeeldingen uitzetten
Als je afbeeldingen op mijn website zou uitzetten zou dit niks verandere voor de performance van mijn website. Aangezien ik gebruik maak van SVG's in plaats van afbeeldingen heeft dit geen negatief resultaat.

### Custom fonts uitzetten
Als het custom font wordt uitgezet dan bezorgt dit geen negatieve ervaring voor de gebruiker. De website heeft een fallback font om op terug te vallen als het custom font niet werkt.

## Kleur uitzetten

Ik heb m'n website vrij basic gehouden. Hierdoor is het voor kleurenblinden goed te onderscheiden.

### Muis/Trackpad
Ik heb mijn website getest met keyboard only. Je kan makkelijk door de website heen tabben. De core functionaliteit van de website werkt naar toe behoren en alle belangrijke aspecten gaat de tab over heen.


### Breedband Internet
Ik heb de wbsite getest met een regular 2G verbinding. De website laad nog steeds erg snel met deze lage internetsnelheid.


### JavaScript uitzetten
Ik heb geprobeerd zoveel mogelijk server side te werken waardoor de core functionaliteit van mijn website nog steeds bruikbaar is als de javascript niet gebruikt zou worden. Je weet immers niet of de eindgebruiker zijn of haar javascript voor redenen heeft uitgeschakelt

### Cookies niet accepteren
Mijn website maakt geen gebruik van cookies.

### localstorage doet het niet
Ik maak geen gebruik van localstorage


## Test verslag
Ik wil de volgende features gaan testen of ik ze kan gebruiken op mijn website. Door middel van de website [can I use](https://www.caniuse.com) kon ik checken welke browsers wat ondersteunen.  Ik heb ervoor gekozen om de volgende features te onderzoeken voor verschillende browsers:
1. display: flex
2. display: grid
3. localstorage


| Feature   	    |   Firefox	|   Samsung Internet	|   Intenret Exploror	|   Microsoft Edge	| Safari |
|---	            |---	|---	|---	|---	|--- |
| Display: Flex   	|   ✅	| ✅  	| 🚫  	| ✅  	| ✅ |
| Display: Grid   	|   ✅	| ✅  	| 🔶  	| ✅  	| ✅ |
| Localstorage  	|   ✅	| ✅  	| ✅  	|  ✅ 	| ✅ |

## Technieken voor support / Feature Detection

### CSS
Om te testen voor de CSS kan je gebruik maken van `@supports` proeprty in de stylesheet de syntaxt hiervan is `@supports(property: value)`

voorbeeld:
```code
.photo-layout {
  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 200px;
    margin: 1rem;
  }
}

@supports (display: grid) {
  .photo-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    > div {
      margin: 0;
    }
  }
}
```
Dit betekend dat de CSS alleen wordt uitgeveoerd als de `display: flex` ondersteund wordt in de browser.

### Javascript 
In javaScript kan je een feature testen met een if. De code hoe hoe er ongeveer uit zou kunnen zien ziet er als volgt uit:
![Breakdown schets](https://raw.githubusercontent.com/basv1996/browser-technologies-2122/main/img/JS_Support.png)