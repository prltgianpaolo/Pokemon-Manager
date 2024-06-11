
import  express  from  'express';
import cors from "cors";
import "dotenv/config";
import prisma from '../db/prisma.js'
import jwt from 'jsonwebtoken';


const PORT = process.env.PORT;
const  app  =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


app.use(cors({ origin: "*" }));

// Rotta di login
app.post('/login', async (req, res) => {
  const user = await prisma.user.findFirst({
      where: {
          email: req.body.email,
          password: req.body.password,
      }
  });

  if (!user) {
      res.status(422).json({ message: 'Invalid credentials' });
      return;
  }

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1y' });

  res.json({ user, token });
});

// Rotta per ottenere tutti i Pokémon con filtro di ricerca
app.get('/api/pokemons', async (req, res) => {
    const { search } = req.query;
    const pokemons = await prisma.pokemon.findMany({
      where: {
        OR: [
          { name:  { contains: search } },
          { type1: { contains: search } },
          { type2: { contains: search } }
        ]
      }
    });
    res.json(pokemons);
});
  
// Rotta per ottenere un Pokémon per ID
app.get('/api/pokemons/:id', async (req, res) => {
    const pokemon = await prisma.pokemon.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    res.json(pokemon);
});
  
// Rotta per aggiungere un Pokémon alla collezione personale di un utente
app.post('/api/users/:userId/collections', async (req, res) => {
  const { userId } = req.params;
  const { pokemonId } = req.body;

  
  const existingEntry = await prisma.collection.findFirst({
      where: {
          userId: parseInt(userId),
          pokemonId: parseInt(pokemonId)
      }
  });

  if (existingEntry) {
      return res.status(400).json({ message: 'Pokémon already in collection' });
  }

  const collection = await prisma.collection.create({
      data: {
          userId: parseInt(userId),
          pokemonId: parseInt(pokemonId)
      }
  });

  res.json(collection);
});

// Rotta per ottenere la collezione personale di un utente
app.get('/api/users/:userId/collections', async (req, res) => {
  const { userId } = req.params;

  const collections = await prisma.collection.findMany({
      where: { userId: parseInt(userId) },
      include: { pokemon: true }
  });

  res.json(collections);
});

// Rotta per rimuovere un Pokémon dalla collezione personale di un utente
app.delete('/api/users/:userId/collections/:pokemonId', async (req, res) => {
  const { userId, pokemonId } = req.params;

  await prisma.collection.deleteMany({
      where: {
          userId: parseInt(userId),
          pokemonId: parseInt(pokemonId)
      }
  });

  res.status(204).end();
});

app.listen(PORT, () => {
    console.log(`Application listening at port "${PORT}"`);
});
