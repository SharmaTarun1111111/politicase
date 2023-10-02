# Politicase Tarun Sharma

## Antagelser, Use Case, og Funksjoner som Brukerkrav

### Antagelser:
- All informasjon om en politibil vises i tabellene.

### Use Case:
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

## Oppgave:

**Mål:** Lage en webside med følgende funksjonaliteter:

- **Oversikt over politibiler:**
  - Visning av relevant informasjon i en tabell (merke, modell, årsmodell, reg.nummer, status).
- **Filtrering av biler:**
  - Bruk av tabell for oversikt og gjenkjennelse.
- **Endring av status på biler:**
  - Fiktivt kall til backend.
- **Henting av dummy-data fra API:**
  - Bruk av en funksjon, `fetchData`, for asynkront kall til API og retur av JSON-array.
- **Implementering av tester.**

## Implementasjon:

For å løse oppgaven:

1. **Henting av mockup-data fra API:**
   - Bruk av funksjonen `fetchData` for asynkront kall til API og returnering av JSON-array.
2. **Visning av alle biler i en tabell:**
   - Bruk av Material UI Tabell-komponent for strukturert og gjenkjennbar visning.
   - Dynamisk og konsistent utseende.
3. **Filtrering av biler:**
   - Bruk av filtreringsfunksjoner for bedre oversikt.
4. **Endring av status:**
   - Utforsk hvordan status på biler kan endres.

*Merknad:* Bruk av tabell og enkelhet er prioritert i tråd med brukerkrav og brukervennlighet.
