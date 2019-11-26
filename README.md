# Welkom in mijn functional programming project. 🔱
Deiver Zamora Cortez • 500785080 | Functional programming | 2019

In deze repo zie je de conceptuitwerking van een webapplicatie. Deze opdracht is voor het Tropenmuseum die via het HvA als opdrachtgever fungeerde.
Voordat je verder leest kan je ook gebruik maken van de onderstaande shortcuts:
* Live Demo van de app
* Installatie
* De wiki voor meer informatie & documentatie


## Concept 2.0 - Match je lengte met objecten
Toen er een voorbeeld werd gegeven in de presentatie van Rick Herder dat je een infographic kon maken over voorwerpen in de collectie van klein naar groot, kreeg ik gelijk het idee om dit als uitgangspunt te nemen en dit uit te werken. Het idee is om alle voorwerpen/vormen binnen een categorie op een groot rechthoekig bord te projecteren. De voorwerpen die ik heb gekozen om te visualiseren zijn geluidsmiddelen; een bezoeker geeft zijn lengte aan op een interactief bord en krijgt daarna alle voorwerpen te zien die dezelfde lengte hebben. Bijvoorbeeld; een kind heeft dezelfde lengte als een gitaar, dus komt de gitaar als match tevoorschijn. Na het invoeren van diens lengte krijgt de bezoeker het matchende voorwerp te zien, en kan vervolgens dmv zijwaarts scrollen alle andere voorwerpen zien die dan groter/kleiner dan dat zijn, op een volgorde van klein naar groot. Door op een item te tappen kan de gebruiker meer informatie krijgen over het voorwerp. (Het proces van het concept kan je in het [logboek](https://github.com/Loquino/functional-programming/wiki/Logboek) bekijken.)



![Concept tekening 1](https://github.com/Loquino/functional-programming/blob/master/Proces%20afbeeldingen/Foto-11.jpg)
![Aantekeningen](https://github.com/Loquino/functional-programming/blob/master/Proces%20afbeeldingen/Foto-12.png)


## Concept 3.0 - De langste voorwerpen in verschillende landen.
Tijdens het uitleggen van mijn concept aan Danny, heb ik feedback gekregen hoe ik mijn concept beter kon maken voor de klant. Hierdoor kon ik het vorige concept veranderen naar een zinvoller concept, namelijk; de matchmogelijkheid wordt vervangen door sorteerknoppen en een filtermechanisme. Met de sorteerknoppen kan je verschillende objecten kiezen, in dit geval zijn het geluidsmiddelen; bijvoorbeeld een gitaar als instrument. Nadat iemand een bepaald opbject heeft gekozen kan een bezoeker op lengte van de objecten filteren. Het resultaat wordt dan weergegeven in een barchart waarbij je de 'x'-as als verschillende lengtes kan zien en op de 'y'-as het verschil kan zien in lengtes.  

![Aantekeningen](https://github.com/Loquino/functional-programming/blob/master/Proces%20afbeeldingen/foto-13.jpg)


# Dit kan je met deze repo
* JSON en Query data ophalen
* Data filteren en manipuleren
* Lengte-formaten opschonen

# Dit heb je nodig om deze repo te begrijpen
_Kennis in:_
* JS: ES6
* HTML/CSS
* SparQl 
* node modules
* D3 
 

## Installatie 🛠

1. Clone deze repo

Installeer dependecies:

`npm install -dev`

2. Start de app

> Download Virtual Studio Code voor het gebruik maken van een live server extentensie.

> Installeer live server - Ritwick Dey

Klik op de rechter knop op de index.html en run met de liver server optie of gebruik de shortcuts: `CMD + L`.

## Gebouwd met
* Node - Dependency Management
* Rollup - Pagebuilder
* NMVW API - API voor data
* SparQl - SpaQl taal van de database

## NMVW API DATA
Door middel van een endpoint kan ik gebruik maken van de NMVW API collectie. De data haal ik op met SparQl en is gedocumenteerd in de wiki.

## Credits
**Project:** Deiver Zamora Cortez

**Sparql Querry:** Ivo Zandhuis


## Documentatie 📖
In de documentatie kan je het proces en meer informatie vinden over bepaalde stappen of onderwerpen binnen deze project.

## Issues 🍐
Dankjewel voor het lezen of gebruik maken van deze app! Mocht er fouten zitten in mijn code of iets wat je opvalt, laat aan mij weten door een issue te starten en we zullen er samen naar kijken. Saludos Deiver.

## License
This project is licensed under the MIT License - see the LICENSE file for details
