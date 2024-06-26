import prisma from "./prisma.js";

const pokemons = [
    { name: 'Bulbasaur', type1: 'Grass', type2: 'Poison', hp: 45, attack: 49, defense: 49, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' },
    { name: 'Ivysaur', type1: 'Grass', type2: 'Poison', hp: 60, attack: 62, defense: 63, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/ivysaur.jpg' },
    { name: 'Venusaur', type1: 'Grass', type2: 'Poison', hp: 80, attack: 82, defense: 83, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/venusaur.jpg' },
    { name: 'Charmander', type1: 'Fire', hp: 39, attack: 52, defense: 43, speed: 65, imageUrl: 'https://img.pokemondb.net/artwork/charmander.jpg' },
    { name: 'Charmeleon', type1: 'Fire', hp: 58, attack: 64, defense: 58, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/charmeleon.jpg' },
    { name: 'Charizard', type1: 'Fire', type2: 'Flying', hp: 78, attack: 84, defense: 78, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/charizard.jpg' },
    { name: 'Squirtle', type1: 'Water', hp: 44, attack: 48, defense: 65, speed: 43, imageUrl: 'https://img.pokemondb.net/artwork/squirtle.jpg' },
    { name: 'Wartortle', type1: 'Water', hp: 59, attack: 63, defense: 80, speed: 58, imageUrl: 'https://img.pokemondb.net/artwork/wartortle.jpg' },
    { name: 'Blastoise', type1: 'Water', hp: 79, attack: 83, defense: 100, speed: 78, imageUrl: 'https://img.pokemondb.net/artwork/blastoise.jpg' },
    { name: 'Caterpie', type1: 'Bug', hp: 45, attack: 30, defense: 35, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/caterpie.jpg' },
    { name: 'Metapod', type1: 'Bug', hp: 50, attack: 20, defense: 55, speed: 30, imageUrl: 'https://img.pokemondb.net/artwork/metapod.jpg' },
    { name: 'Butterfree', type1: 'Bug', type2: 'Flying', hp: 60, attack: 45, defense: 50, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/butterfree.jpg' },
    { name: 'Weedle', type1: 'Bug', type2: 'Poison', hp: 40, attack: 35, defense: 30, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/weedle.jpg' },
    { name: 'Kakuna', type1: 'Bug', type2: 'Poison', hp: 45, attack: 25, defense: 50, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/kakuna.jpg' },
    { name: 'Beedrill', type1: 'Bug', type2: 'Poison', hp: 65, attack: 90, defense: 40, speed: 75, imageUrl: 'https://img.pokemondb.net/artwork/beedrill.jpg' },
    { name: 'Pidgey', type1: 'Normal', type2: 'Flying', hp: 40, attack: 45, defense: 40, speed: 56, imageUrl: 'https://img.pokemondb.net/artwork/pidgey.jpg' },
    { name: 'Pidgeotto', type1: 'Normal', type2: 'Flying', hp: 63, attack: 60, defense: 55, speed: 71, imageUrl: 'https://img.pokemondb.net/artwork/pidgeotto.jpg' },
    { name: 'Pidgeot', type1: 'Normal', type2: 'Flying', hp: 83, attack: 80, defense: 75, speed: 101, imageUrl: 'https://img.pokemondb.net/artwork/pidgeot.jpg' },
    { name: 'Rattata', type1: 'Normal', hp: 30, attack: 56, defense: 35, speed: 72, imageUrl: 'https://img.pokemondb.net/artwork/rattata.jpg' },
    { name: 'Raticate', type1: 'Normal', hp: 55, attack: 81, defense: 60, speed: 97, imageUrl: 'https://img.pokemondb.net/artwork/raticate.jpg' },
    { name: 'Spearow', type1: 'Normal', type2: 'Flying', hp: 40, attack: 60, defense: 30, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/spearow.jpg' },
    { name: 'Fearow', type1: 'Normal', type2: 'Flying', hp: 65, attack: 90, defense: 65, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/fearow.jpg' },
    { name: 'Ekans', type1: 'Poison', hp: 35, attack: 60, defense: 44, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/ekans.jpg' },
    { name: 'Arbok', type1: 'Poison', hp: 60, attack: 95, defense: 69, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/arbok.jpg' },
    { name: 'Pikachu', type1: 'Electric', hp: 35, attack: 55, defense: 40, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/pikachu.jpg' },
    { name: 'Raichu', type1: 'Electric', hp: 60, attack: 90, defense: 55, speed: 110, imageUrl: 'https://img.pokemondb.net/artwork/raichu.jpg' },
    { name: 'Sandshrew', type1: 'Ground', hp: 50, attack: 75, defense: 85, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/sandshrew.jpg' },
    { name: 'Sandslash', type1: 'Ground', hp: 75, attack: 100, defense: 110, speed: 65, imageUrl: 'https://img.pokemondb.net/artwork/sandslash.jpg' },
    { name: 'Nidoran♀', type1: 'Poison', hp: 55, attack: 47, defense: 52, speed: 41, imageUrl: 'https://img.pokemondb.net/artwork/nidoran-f.jpg' },
    { name: 'Nidorina', type1: 'Poison', hp: 70, attack: 62, defense: 67, speed: 56, imageUrl: 'https://img.pokemondb.net/artwork/nidorina.jpg' },
    { name: 'Nidoqueen', type1: 'Poison', type2: 'Ground', hp: 90, attack: 92, defense: 87, speed: 76, imageUrl: 'https://img.pokemondb.net/artwork/nidoqueen.jpg' },
    { name: 'Nidoran♂', type1: 'Poison', hp: 46, attack: 57, defense: 40, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/nidoran-m.jpg' },
    { name: 'Nidorino', type1: 'Poison', hp: 61, attack: 72, defense: 57, speed: 65, imageUrl: 'https://img.pokemondb.net/artwork/nidorino.jpg' },
    { name: 'Nidoking', type1: 'Poison', type2: 'Ground', hp: 81, attack: 102, defense: 77, speed: 85, imageUrl: 'https://img.pokemondb.net/artwork/nidoking.jpg' },
    { name: 'Clefairy', type1: 'Fairy', hp: 70, attack: 45, defense: 48, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/clefairy.jpg' },
    { name: 'Clefable', type1: 'Fairy', hp: 95, attack: 70, defense: 73, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/clefable.jpg' },
    { name: 'Vulpix', type1: 'Fire', hp: 38, attack: 41, defense: 40, speed: 65, imageUrl: 'https://img.pokemondb.net/artwork/vulpix.jpg' },
    { name: 'Ninetales', type1: 'Fire', hp: 73, attack: 76, defense: 75, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/ninetales.jpg' },
    { name: 'Jigglypuff', type1: 'Normal', type2: 'Fairy', hp: 115, attack: 45, defense: 20, speed: 20, imageUrl: 'https://img.pokemondb.net/artwork/jigglypuff.jpg' },
    { name: 'Wigglytuff', type1: 'Normal', type2: 'Fairy', hp: 140, attack: 70, defense: 45, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/wigglytuff.jpg' },
    { name: 'Zubat', type1: 'Poison', type2: 'Flying', hp: 40, attack: 45, defense: 35, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/zubat.jpg' },
    { name: 'Golbat', type1: 'Poison', type2: 'Flying', hp: 75, attack: 80, defense: 70, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/golbat.jpg' },
    { name: 'Oddish', type1: 'Grass', type2: 'Poison', hp: 45, attack: 50, defense: 55, speed: 30, imageUrl: 'https://img.pokemondb.net/artwork/oddish.jpg' },
    { name: 'Gloom', type1: 'Grass', type2: 'Poison', hp: 60, attack: 65, defense: 70, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/gloom.jpg' },
    { name: 'Vileplume', type1: 'Grass', type2: 'Poison', hp: 75, attack: 80, defense: 85, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/vileplume.jpg' },
    { name: 'Paras', type1: 'Bug', type2: 'Grass', hp: 35, attack: 70, defense: 55, speed: 25, imageUrl: 'https://img.pokemondb.net/artwork/paras.jpg' },
    { name: 'Parasect', type1: 'Bug', type2: 'Grass', hp: 60, attack: 95, defense: 80, speed: 30, imageUrl: 'https://img.pokemondb.net/artwork/parasect.jpg' },
    { name: 'Venonat', type1: 'Bug', type2: 'Poison', hp: 60, attack: 55, defense: 50, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/venonat.jpg' },
    { name: 'Venomoth', type1: 'Bug', type2: 'Poison', hp: 70, attack: 65, defense: 60, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/venomoth.jpg' },
    { name: 'Diglett', type1: 'Ground', hp: 10, attack: 55, defense: 25, speed: 95, imageUrl: 'https://img.pokemondb.net/artwork/diglett.jpg' },
    { name: 'Dugtrio', type1: 'Ground', hp: 35, attack: 100, defense: 50, speed: 120, imageUrl: 'https://img.pokemondb.net/artwork/dugtrio.jpg' },
    { name: 'Meowth', type1: 'Normal', hp: 40, attack: 45, defense: 35, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/meowth.jpg' },
    { name: 'Persian', type1: 'Normal', hp: 65, attack: 70, defense: 60, speed: 115, imageUrl: 'https://img.pokemondb.net/artwork/persian.jpg' },
    { name: 'Psyduck', type1: 'Water', hp: 50, attack: 52, defense: 48, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/psyduck.jpg' },
    { name: 'Golduck', type1: 'Water', hp: 80, attack: 82, defense: 78, speed: 85, imageUrl: 'https://img.pokemondb.net/artwork/golduck.jpg' },
    { name: 'Mankey', type1: 'Fighting', hp: 40, attack: 80, defense: 35, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/mankey.jpg' },
    { name: 'Primeape', type1: 'Fighting', hp: 65, attack: 105, defense: 60, speed: 95, imageUrl: 'https://img.pokemondb.net/artwork/primeape.jpg' },
    { name: 'Growlithe', type1: 'Fire', hp: 55, attack: 70, defense: 45, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/growlithe.jpg' },
    { name: 'Arcanine', type1: 'Fire', hp: 90, attack: 110, defense: 80, speed: 95, imageUrl: 'https://img.pokemondb.net/artwork/arcanine.jpg' },
    { name: 'Poliwag', type1: 'Water', hp: 40, attack: 50, defense: 40, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/poliwag.jpg' },
    { name: 'Poliwhirl', type1: 'Water', hp: 65, attack: 65, defense: 65, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/poliwhirl.jpg' },
    { name: 'Poliwrath', type1: 'Water', type2: 'Fighting', hp: 90, attack: 95, defense: 95, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/poliwrath.jpg' },
    { name: 'Abra', type1: 'Psychic', hp: 25, attack: 20, defense: 15, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/abra.jpg' },
    { name: 'Kadabra', type1: 'Psychic', hp: 40, attack: 35, defense: 30, speed: 105, imageUrl: 'https://img.pokemondb.net/artwork/kadabra.jpg' },
    { name: 'Alakazam', type1: 'Psychic', hp: 55, attack: 50, defense: 45, speed: 120, imageUrl: 'https://img.pokemondb.net/artwork/alakazam.jpg' },
    { name: 'Machop', type1: 'Fighting', hp: 70, attack: 80, defense: 50, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/machop.jpg' },
    { name: 'Machoke', type1: 'Fighting', hp: 80, attack: 100, defense: 70, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/machoke.jpg' },
    { name: 'Machamp', type1: 'Fighting', hp: 90, attack: 130, defense: 80, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/machamp.jpg' },
    { name: 'Bellsprout', type1: 'Grass', type2: 'Poison', hp: 50, attack: 75, defense: 35, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/bellsprout.jpg' },
    { name: 'Weepinbell', type1: 'Grass', type2: 'Poison', hp: 65, attack: 90, defense: 50, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/weepinbell.jpg' },
    { name: 'Victreebel', type1: 'Grass', type2: 'Poison', hp: 80, attack: 105, defense: 65, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/victreebel.jpg' },
    { name: 'Tentacool', type1: 'Water', type2: 'Poison', hp: 40, attack: 40, defense: 35, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/tentacool.jpg' },
    { name: 'Tentacruel', type1: 'Water', type2: 'Poison', hp: 80, attack: 70, defense: 65, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/tentacruel.jpg' },
    { name: 'Geodude', type1: 'Rock', type2: 'Ground', hp: 40, attack: 80, defense: 100, speed: 20, imageUrl: 'https://img.pokemondb.net/artwork/geodude.jpg' },
    { name: 'Graveler', type1: 'Rock', type2: 'Ground', hp: 55, attack: 95, defense: 115, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/graveler.jpg' },
    { name: 'Golem', type1: 'Rock', type2: 'Ground', hp: 80, attack: 120, defense: 130, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/golem.jpg' },
    { name: 'Ponyta', type1: 'Fire', hp: 50, attack: 85, defense: 55, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/ponyta.jpg' },
    { name: 'Rapidash', type1: 'Fire', hp: 65, attack: 100, defense: 70, speed: 105, imageUrl: 'https://img.pokemondb.net/artwork/rapidash.jpg' },
    { name: 'Slowpoke', type1: 'Water', type2: 'Psychic', hp: 90, attack: 65, defense: 65, speed: 15, imageUrl: 'https://img.pokemondb.net/artwork/slowpoke.jpg' },
    { name: 'Slowbro', type1: 'Water', type2: 'Psychic', hp: 95, attack: 75, defense: 110, speed: 30, imageUrl: 'https://img.pokemondb.net/artwork/slowbro.jpg' },
    { name: 'Magnemite', type1: 'Electric', type2: 'Steel', hp: 25, attack: 35, defense: 70, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/magnemite.jpg' },
    { name: 'Magneton', type1: 'Electric', type2: 'Steel', hp: 50, attack: 60, defense: 95, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/magneton.jpg' },
    { name: 'Doduo', type1: 'Normal', type2: 'Flying', hp: 35, attack: 85, defense: 45, speed: 75, imageUrl: 'https://img.pokemondb.net/artwork/doduo.jpg' },
    { name: 'Dodrio', type1: 'Normal', type2: 'Flying', hp: 60, attack: 110, defense: 70, speed: 110, imageUrl: 'https://img.pokemondb.net/artwork/dodrio.jpg' },
    { name: 'Seel', type1: 'Water', hp: 65, attack: 45, defense: 55, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/seel.jpg' },
    { name: 'Dewgong', type1: 'Water', type2: 'Ice', hp: 90, attack: 70, defense: 80, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/dewgong.jpg' },
    { name: 'Grimer', type1: 'Poison', hp: 80, attack: 80, defense: 50, speed: 25, imageUrl: 'https://img.pokemondb.net/artwork/grimer.jpg' },
    { name: 'Muk', type1: 'Poison', hp: 105, attack: 105, defense: 75, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/muk.jpg' },
    { name: 'Shellder', type1: 'Water', hp: 30, attack: 65, defense: 100, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/shellder.jpg' },
    { name: 'Cloyster', type1: 'Water', type2: 'Ice', hp: 50, attack: 95, defense: 180, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/cloyster.jpg' },
    { name: 'Gastly', type1: 'Ghost', type2: 'Poison', hp: 30, attack: 35, defense: 30, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/gastly.jpg' },
    { name: 'Haunter', type1: 'Ghost', type2: 'Poison', hp: 45, attack: 50, defense: 45, speed: 95, imageUrl: 'https://img.pokemondb.net/artwork/haunter.jpg' },
    { name: 'Gengar', type1: 'Ghost', type2: 'Poison', hp: 60, attack: 65, defense: 60, speed: 110, imageUrl: 'https://img.pokemondb.net/artwork/gengar.jpg' },
    { name: 'Onix', type1: 'Rock', type2: 'Ground', hp: 35, attack: 45, defense: 160, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/onix.jpg' },
    { name: 'Drowzee', type1: 'Psychic', hp: 60, attack: 48, defense: 45, speed: 42, imageUrl: 'https://img.pokemondb.net/artwork/drowzee.jpg' },
    { name: 'Hypno', type1: 'Psychic', hp: 85, attack: 73, defense: 70, speed: 67, imageUrl: 'https://img.pokemondb.net/artwork/hypno.jpg' },
    { name: 'Krabby', type1: 'Water', hp: 30, attack: 105, defense: 90, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/krabby.jpg' },
    { name: 'Kingler', type1: 'Water', hp: 55, attack: 130, defense: 115, speed: 75, imageUrl: 'https://img.pokemondb.net/artwork/kingler.jpg' },
    { name: 'Voltorb', type1: 'Electric', hp: 40, attack: 30, defense: 50, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/voltorb.jpg' },
    { name: 'Electrode', type1: 'Electric', hp: 60, attack: 50, defense: 70, speed: 140, imageUrl: 'https://img.pokemondb.net/artwork/electrode.jpg' },
    { name: 'Exeggcute', type1: 'Grass', type2: 'Psychic', hp: 60, attack: 40, defense: 80, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/exeggcute.jpg' },
    { name: 'Exeggutor', type1: 'Grass', type2: 'Psychic', hp: 95, attack: 95, defense: 85, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/exeggutor.jpg' },
    { name: 'Cubone', type1: 'Ground', hp: 50, attack: 50, defense: 95, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/cubone.jpg' },
    { name: 'Marowak', type1: 'Ground', hp: 60, attack: 80, defense: 110, speed: 45, imageUrl: 'https://img.pokemondb.net/artwork/marowak.jpg' },
    { name: 'Hitmonlee', type1: 'Fighting', hp: 50, attack: 120, defense: 53, speed: 87, imageUrl: 'https://img.pokemondb.net/artwork/hitmonlee.jpg' },
    { name: 'Hitmonchan', type1: 'Fighting', hp: 50, attack: 105, defense: 79, speed: 76, imageUrl: 'https://img.pokemondb.net/artwork/hitmonchan.jpg' },
    { name: 'Lickitung', type1: 'Normal', hp: 90, attack: 55, defense: 75, speed: 30, imageUrl: 'https://img.pokemondb.net/artwork/lickitung.jpg' },
    { name: 'Koffing', type1: 'Poison', hp: 40, attack: 65, defense: 95, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/koffing.jpg' },
    { name: 'Weezing', type1: 'Poison', hp: 65, attack: 90, defense: 120, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/weezing.jpg' },
    { name: 'Rhyhorn', type1: 'Ground', type2: 'Rock', hp: 80, attack: 85, defense: 95, speed: 25, imageUrl: 'https://img.pokemondb.net/artwork/rhyhorn.jpg' },
    { name: 'Rhydon', type1: 'Ground', type2: 'Rock', hp: 105, attack: 130, defense: 120, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/rhydon.jpg' },
    { name: 'Chansey', type1: 'Normal', hp: 250, attack: 5, defense: 5, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/chansey.jpg' },
    { name: 'Tangela', type1: 'Grass', hp: 65, attack: 55, defense: 115, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/tangela.jpg' },
    { name: 'Kangaskhan', type1: 'Normal', hp: 105, attack: 95, defense: 80, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/kangaskhan.jpg' },
    { name: 'Horsea', type1: 'Water', hp: 30, attack: 40, defense: 70, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/horsea.jpg' },
    { name: 'Seadra', type1: 'Water', hp: 55, attack: 65, defense: 95, speed: 85, imageUrl: 'https://img.pokemondb.net/artwork/seadra.jpg' },
    { name: 'Goldeen', type1: 'Water', hp: 45, attack: 67, defense: 60, speed: 63, imageUrl: 'https://img.pokemondb.net/artwork/goldeen.jpg' },
    { name: 'Seaking', type1: 'Water', hp: 80, attack: 92, defense: 65, speed: 68, imageUrl: 'https://img.pokemondb.net/artwork/seaking.jpg' },
    { name: 'Staryu', type1: 'Water', hp: 30, attack: 45, defense: 55, speed: 85, imageUrl: 'https://img.pokemondb.net/artwork/staryu.jpg' },
    { name: 'Starmie', type1: 'Water', type2: 'Psychic', hp: 60, attack: 75, defense: 85, speed: 115, imageUrl: 'https://img.pokemondb.net/artwork/starmie.jpg' },
    { name: 'Mr. Mime', type1: 'Psychic', hp: 40, attack: 45, defense: 65, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/mr-mime.jpg' },
    { name: 'Scyther', type1: 'Bug', type2: 'Flying', hp: 70, attack: 110, defense: 80, speed: 105, imageUrl: 'https://img.pokemondb.net/artwork/scyther.jpg' },
    { name: 'Jynx', type1: 'Ice', type2: 'Psychic', hp: 65, attack: 50, defense: 35, speed: 95, imageUrl: 'https://img.pokemondb.net/artwork/jynx.jpg' },
    { name: 'Electabuzz', type1: 'Electric', hp: 65, attack: 83, defense: 57, speed: 105, imageUrl: 'https://img.pokemondb.net/artwork/electabuzz.jpg' },
    { name: 'Magmar', type1: 'Fire', hp: 65, attack: 95, defense: 57, speed: 93, imageUrl: 'https://img.pokemondb.net/artwork/magmar.jpg' },
    { name: 'Pinsir', type1: 'Bug', hp: 65, attack: 125, defense: 100, speed: 85, imageUrl: 'https://img.pokemondb.net/artwork/pinsir.jpg' },
    { name: 'Tauros', type1: 'Normal', hp: 75, attack: 100, defense: 95, speed: 110, imageUrl: 'https://img.pokemondb.net/artwork/tauros.jpg' },
    { name: 'Magikarp', type1: 'Water', hp: 20, attack: 10, defense: 55, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/magikarp.jpg' },
    { name: 'Gyarados', type1: 'Water', type2: 'Flying', hp: 95, attack: 125, defense: 79, speed: 81, imageUrl: 'https://img.pokemondb.net/artwork/gyarados.jpg' },
    { name: 'Lapras', type1: 'Water', type2: 'Ice', hp: 130, attack: 85, defense: 80, speed: 60, imageUrl: 'https://img.pokemondb.net/artwork/lapras.jpg' },
    { name: 'Ditto', type1: 'Normal', hp: 48, attack: 48, defense: 48, speed: 48, imageUrl: 'https://img.pokemondb.net/artwork/ditto.jpg' },
    { name: 'Eevee', type1: 'Normal', hp: 55, attack: 55, defense: 50, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/eevee.jpg' },
    { name: 'Vaporeon', type1: 'Water', hp: 130, attack: 65, defense: 60, speed: 65, imageUrl: 'https://img.pokemondb.net/artwork/vaporeon.jpg' },
    { name: 'Jolteon', type1: 'Electric', hp: 65, attack: 65, defense: 60, speed: 130, imageUrl: 'https://img.pokemondb.net/artwork/jolteon.jpg' },
    { name: 'Flareon', type1: 'Fire', hp: 65, attack: 130, defense: 60, speed: 65, imageUrl: 'https://img.pokemondb.net/artwork/flareon.jpg' },
    { name: 'Porygon', type1: 'Normal', hp: 65, attack: 60, defense: 70, speed: 40, imageUrl: 'https://img.pokemondb.net/artwork/porygon.jpg' },
    { name: 'Omanyte', type1: 'Rock', type2: 'Water', hp: 35, attack: 40, defense: 100, speed: 35, imageUrl: 'https://img.pokemondb.net/artwork/omanyte.jpg' },
    { name: 'Omastar', type1: 'Rock', type2: 'Water', hp: 70, attack: 60, defense: 125, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/omastar.jpg' },
    { name: 'Kabuto', type1: 'Rock', type2: 'Water', hp: 30, attack: 80, defense: 90, speed: 55, imageUrl: 'https://img.pokemondb.net/artwork/kabuto.jpg' },
    { name: 'Kabutops', type1: 'Rock', type2: 'Water', hp: 60, attack: 115, defense: 105, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/kabutops.jpg' },
    { name: 'Aerodactyl', type1: 'Rock', type2: 'Flying', hp: 80, attack: 105, defense: 65, speed: 130, imageUrl: 'https://img.pokemondb.net/artwork/aerodactyl.jpg' },
    { name: 'Snorlax', type1: 'Normal', hp: 160, attack: 110, defense: 65, speed: 30, imageUrl: 'https://img.pokemondb.net/artwork/snorlax.jpg' },
    { name: 'Articuno', type1: 'Ice', type2: 'Flying', hp: 90, attack: 85, defense: 100, speed: 85, imageUrl: 'https://img.pokemondb.net/artwork/articuno.jpg' },
    { name: 'Zapdos', type1: 'Electric', type2: 'Flying', hp: 90, attack: 90, defense: 85, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/zapdos.jpg' },
    { name: 'Moltres', type1: 'Fire', type2: 'Flying', hp: 90, attack: 100, defense: 90, speed: 90, imageUrl: 'https://img.pokemondb.net/artwork/moltres.jpg' },
    { name: 'Dratini', type1: 'Dragon', hp: 41, attack: 64, defense: 45, speed: 50, imageUrl: 'https://img.pokemondb.net/artwork/dratini.jpg' },
    { name: 'Dragonair', type1: 'Dragon', hp: 61, attack: 84, defense: 65, speed: 70, imageUrl: 'https://img.pokemondb.net/artwork/dragonair.jpg' },
    { name: 'Dragonite', type1: 'Dragon', type2: 'Flying', hp: 91, attack: 134, defense: 95, speed: 80, imageUrl: 'https://img.pokemondb.net/artwork/dragonite.jpg' },
    { name: 'Mewtwo', type1: 'Psychic', hp: 106, attack: 110, defense: 90, speed: 130, imageUrl: 'https://img.pokemondb.net/artwork/mewtwo.jpg' },
    { name: 'Mew', type1: 'Psychic', hp: 100, attack: 100, defense: 100, speed: 100, imageUrl: 'https://img.pokemondb.net/artwork/mew.jpg' }
];

const users = [
    { username: 'AshKetchum', email: 'ash@pokemon.com', password: 'password123' },
    { username: 'Misty', email: 'misty@pokemon.com', password: 'password123' },
    { username: 'Brock', email: 'brock@pokemon.com', password: 'password123' },
    { username: 'Jessie', email: 'jessie@teamrocket.com', password: 'password123' },
    { username: 'James', email: 'james@teamrocket.com', password: 'password123' },
];
  
async function main() {
  for (const pokemon of pokemons) {
      await prisma.pokemon.create({
          data: pokemon,
      });
  }
  
  for (const user of users) {
      await prisma.user.create({
          data: user,
      });
  }
}

main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
});