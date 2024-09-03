Vecka 36´s Planering och beskrivning för applikationsprojekt: E-handelsplattform
Vecka 36´s Applikationsprojekt: E-handelsplattform
Tema: Grundläggande React-koncept, Hooks, Lifecycle Methods, och Projektstruktur
Övergripande lärandemål:
Utveckla en fullständig React-applikation genom att implementera och strukturera komponenter med hjälp av grundläggande och avancerade React-koncept.
Daglig Agenda (3/9 - 5/9):
09:00 - 12:00 (Tisdag och Onsdag)
13:00 - 16:00 (Torsdag)
Dag 1: Introduktion, Projektstart och Grundläggande React-koncept
Uppstart och Introduktion av Projektet

    Agenda: Genomgång av veckans mål och den applikation som ska byggas (e-handelsplattform):

Beskrivning av Projektet

Under denna vecka kommer deltagarna att utveckla en enkel e-handelsplattform i React. Projektet kommer att täcka grundläggande och avancerade React-koncept som komponenter, props, state management, React Hooks, lifecycle methods, och en strukturerad projektstruktur. Applikationen ska inkludera en produktlista, en produktsida för detaljer, och en funktion för att lägga till produkter i en varukorg.


    Introduktion: Presentation av projektstrukturen och hur vi ska organisera våra filer och komponenter från början.

    Filstruktur: Skapa en grundläggande filstruktur (t.ex. components/, pages/, styles/) och förklara varför detta är viktigt för projektets skalbarhet.

Detaljerad Projektstruktur/Filstruktur

Här är en detaljerad projektstruktur som kan användas för detta projekt:

bash

Kopiera kod

src/

├── assets/                 # Bilder, ikoner, och andra statiska resurser

├── components/             # Återanvändbara UI-komponenter

│   ├── Header.js           # Header-komponent

│   ├── Footer.js           # Footer-komponent

│   ├── ProductCard.js      # Visar en produkt i listformat

│   ├── CartItem.js         # Visar en produkt i varukorgen

├── pages/                  # Applikationens sidor (vyer)

│   ├── HomePage.js         # Startsida med produktlista

│   ├── ProductPage.js      # Enskild produktsida med detaljer

│   ├── CartPage.js         # Sida för att visa produkter i varukorgen

├── services/               # API-anrop och datahantering

│   ├── productService.js   # Funktioner för att hämta produkter från API

├── styles/                 # Stilmallar (CSS/SASS)

│   ├── App.css             # Global stil för applikationen

├── App.js                  # Huvudkomponent som hanterar routing

├── index.js                # Inträdespunkt för React-applikationen

└── utils/                  # Hjälpfunktioner och verktyg

Förklaringar av Projektstrukturen
Projektstruktur: Placera komponenterna i en organiserad filstruktur och förklara hur den ska skalas.

Förklaring: När vi organiserar vårt projekt, placerar vi olika delar av applikationen i specifika mappar beroende på deras funktionalitet. Detta gör det enkelt att hitta och underhålla koden, särskilt när applikationen växer. Genom att placera återanvändbara komponenter i en components/ mapp, sidor (vyer) i en pages/ mapp, och API-anrop i en services/ mapp, skapar vi en tydlig separation av ansvar, vilket gör det enklare att både bygga ut och skala applikationen.

    Komponenter som är återanvändbara på flera sidor ska placeras i components/ mappen. Detta inkluderar saker som knappar, kort och navigationslänkar.

    Sidor som representerar hela vyer, som startsidan eller produktsidan, placeras i pages/ mappen. Detta gör det tydligt var vi ska lägga till ny funktionalitet för nya sidor.

    API-anrop och annan datahantering placeras i services/ mappen. Detta separerar datahanteringen från UI-logiken, vilket gör koden mer modulär och enkel att uppdatera.

Förklaring av varför projektstrukturen hjälper oss att hålla ordning på applikationen

Förklaring: En välstrukturerad projektstruktur hjälper oss att hålla ordning på vår applikation på flera sätt:

    Överskådlighet: Genom att placera filer och komponenter i specifika mappar baserat på deras funktion gör vi koden mer överskådlig. När en utvecklare (eller du själv senare) behöver hitta en specifik komponent eller tjänst, vet de exakt var de ska leta.

    Återanvändbarhet: Komponenter som placeras i components/ mappen kan enkelt återanvändas på olika ställen i applikationen, vilket minskar dubbelarbete och förbättrar kodkvaliteten.

    Modularitet: Genom att separera olika delar av applikationen, såsom UI-komponenter, sidor, och API-anrop, blir det enklare att uppdatera eller byta ut en del utan att påverka resten av applikationen.

    Skalbarhet: När applikationen växer, gör en tydlig struktur det enkelt att lägga till nya funktioner och sidor utan att göra koden svårhanterlig. Nya komponenter och sidor kan enkelt läggas till i sina respektive mappar, vilket håller projektet organiserat och underhållbart över tid.

Code Along: Bygg Applikationens Grundstruktur

    Kodexempel: Implementera de första komponenterna och bygg applikationens grundstruktur.

    Komponenter och Props: Skapa och organisera komponenter för UI-element (som header, footer, listor) och använd props för att skicka data mellan dem.

    State Management: Introducera useState för att hantera dynamisk data inom komponenter.

    Projektstruktur: Placera komponenterna i en organiserad filstruktur och förklara hur den ska skalas.

    Code Along: Deltagarna följer med och kodar tillsammans med utbildaren.

Paus
Grupp-programmering: Utveckla Funktionalitet och Struktur

    Uppgift: Titta design, börja planera, gör en “bräda” med arbetsuppgifter.

    Feedback och Support: Utbildaren hjälper till och ger feedback under hela sessionen.

    Designbeskrivning

Projektet kommer att bestå av tre huvudsakliga sidor: en startsida med en produktlista, en produktsida med detaljer om en enskild produkt, och en varukorgssida där användaren kan se sina valda produkter.
Komponenter:

    Header.js

    Innehåller navigeringslänkar till startsidan och varukorgssidan.

    Visa antalet produkter i varukorgen.

    Footer.js

    Enkel sidfot med information som företagets namn och länkar till sociala medier.

    ProductCard.js

    Visar information om en enskild produkt, inklusive bild, namn, och pris.

    En "Lägg till i varukorg" knapp.

    CartItem.js

    Visar information om en produkt i varukorgen.

    Möjlighet att ändra kvantitet eller ta bort produkten från varukorgen.

    HomePage.js

    Visar en lista över alla produkter genom att rendera flera ProductCard komponenter.

    ProductPage.js

    Visar detaljer om en vald produkt, med en större bild, detaljerad beskrivning och möjlighet att lägga till produkten i varukorgen.

    CartPage.js

    Visar alla produkter som har lagts till i varukorgen, tillsammans med en totalsumma och en "Check out" knapp.

