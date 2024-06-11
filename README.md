POKEDEX MANAGER

Pokédex Manager è un'applicazione web che permette agli utenti di scoprire, collezionare e gestire i propri Pokémon preferiti.

CARATTERISTICHE PRINCIPALI:

 -Login utente;
 
 -Visualizzazione dei dettagli dei Pokémon;
 
 -Ricerca di Pokémon per nome o tipo;
 
 -Collezione personale di Pokémon;
 
 -Aggiunta e rimozione di Pokémon dalla collezione.

 TECNOLOGIE UTILIZZATE:
 
 -Front-end: HTML, CSS, JavaScript;
 
 -Back-end: Express.js (Node.js);
 
 -Database: MySQL, Prisma

CONFIGURAZIONE DEL PROGETTO: 

 1. Clona il repository =>
    Clona il repository del progetto nel tuo ambiente locale.

 2. Installa le dipendenze =>
    Esegui il comando npm install per installare tutte le dipendenze necessarie.

 3. Configura il database =>
    Assicurati di avere MySQL installato e in esecuzione. Crea un database dedicato per l'applicazione.

 4. Configura le variabili d'ambiente =>
    Crea un file .env nella radice del progetto e aggiungi le variabili d'ambiente necessarie, come l'URL del database e il JWT_SECRET.

 5. Imposta Prisma =>
    Esegui le migrazioni del database con Prisma e genera i client Prisma.

 6. Backend =>
    Crea un file .js dove gestire tutte le rotte necessarie
    
 7. Frontend =>
    Crea i file .ejs e gli scripts .js utili per l'applicazione

 8. Avvio del server =>
    Avvia il server eseguendo npm run dev sia nel front che nel back. Il server sarà avviato all'indirizzo http://localhost:3000.

STRUTTURA DEL PROGETTO:

backend:
 
 -db
  
    => prisma.js
  
    => seed.js (per riempire il database)

 -node modules
 
 -prisma
  
    => migrations
  
    => schema.prisma (definizione del modello di database)

 -src
  
    => index.js (per creare e gestire le rotte)

 -.env

 -.gitignore

 -package-lock.json

 -package.json

 frontend:

 -node_modules

 -public

    => style

       =>input.css
       =>output.css

    => collection.js (script pagina della collezione)
    => details.js (script pagina dei dettagli dei pokemon)
    => login.js (script pagina di login)
    => script.js (script pagina principale)

  -src

    => index.js (configurazione e avvio del server Express)

  -views/pages

    => collection.ejs (pagina della collezione personale)
    => home.ejs (homepage)
    => landing.ejs (landing page)
    => login.ejs (pagina login utente)
    => pokemon.ejs (pagina dei dettagli pokemon)

  -package-lock.json

  -package.json

  -tailwind.config.js

CONTRIBUIRE

Se desideri contribuire a questo progetto, segui questi passaggi:

1. Fai un fork del repository;

2. Crea un nuovo branch per le tue modifiche (git checkout -b feature/nome-feature);

3. Fai il commit delle tue modifiche (git commit -am 'Aggiungi una nuova feature');

4. Push del branch (git push origin feature/nome-feature);

5. Apri una pull request.

LICENZA

Questo progetto è concesso in licenza sotto la Licenza MIT. Vedi il file LICENSE per ulteriori dettagli.
  
 
  
 



 

 
