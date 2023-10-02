# Politicase Tarun Sharma

## Kopier linken for å se løsnigen: [https://politicase.vercel.app/](https://politicase.vercel.app/)

## Oppgave:

- **Mål:** Lage en webside for oversikt over politibiler med relevant informasjon.
- **Funksjonalitet:**
  - Visning av alle politibiler med detaljert informasjon (merke, modell, årsmodell, reg.nummer, status).
  - Mulighet for filtrering av biler.
  - Endring av status på biler ved et fiktivt kall til backend.
  - Henting av dummy-data direkte fra API.
  - Implementering av tester.

## Rammeverk:

Bruker React biblioteket med JavaScript for å løse oppgaven.

For å starte React-appen og kjøre en webside, bruker jeg "Create React App" (CRA). Create React App er et offisielt opprettelsesverktøy for React som lar en sette opp en ny React-applikasjon.

For å kjøre programmet:
- Installer Node.js og npm.
- Installer Create React App og lag en ny React-app: `npx create-react-app my-app`
- Naviger til prosjektmappen: `cd my-app`
- Start utviklingsserver: `npm start`
- Kopier linken fra terminalen: [http://localhost:3000/](http://localhost:3000/)

## Løsning:

For å løse oppgaven vil jeg hente mockup-data fra det riktige API-et. Jeg løser dette ved å lage en funksjon «fetchData» som asynkront kaller på API og returnerer JSON arrayet. 

For at informasjonen om en politibil skal vises på en strukturert og måte velger jeg å bruke en Tabell. Tabell er en strukturert og god måte å fremstille data på, og flere forstår hvordan en tabell funker. Jeg velger å bruke Material UI  (MUI) som er rett React komponent bibliotek med flere design komponenter.  Bruker DataGrid som er en data tabell for å fremstille daten på en ryddig måte. 

Material tilbyr flere funksjoner, blant annet filtrering av kolonner. Legger til GridToolbar i slots propertyen til Data Grid. På denne måten kan vi filtrere på biler som vises. 

Får utføre det fiktive kalle til backend bruker jeg processRowUpdate() som sender med med to argumenter, den gamle raden og den oppdaterte raden. Den nye raden vil sendes «datalaget» og vi simulerer en oppdatering fra backend. 

## Testing:

Vanskelig teste alle komponter i og med at det nesten ikke er noen som returnerer noe.
Alle tredje parts bibelioteker skal ikke testes for disse har blitt prøvd og testet fra før av. 
Jeg har funksjoner for å teste rendering av siden. 

For å kjøre testene: 
  - Start test: `npm test`

