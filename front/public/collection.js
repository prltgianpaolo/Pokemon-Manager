document.addEventListener('DOMContentLoaded', () => {
  const collectionContainer = document.getElementById('collection-container');

  const loadCollection = async () => {
      const response = await fetch('http://localhost:8000/api/users/1/collections');
      const collection = await response.json();
      displayCollection(collection);
  };

  const displayCollection = (collection) => {
    collectionContainer.innerHTML = collection.map(item => `
      <div class="pokemon-card border p-4 m-2 rounded shadow bg-white" data-id="${item.pokemon.id}">
        <h2 class="text-2xl font-bold">${item.pokemon.name}</h2>
        <img src="${item.pokemon.imageUrl}" alt="${item.pokemon.name}" class="w-24 h-24 mx-auto">
        <p>Type: ${item.pokemon.type1}${item.pokemon.type2 ? '/' + item.pokemon.type2 : ''}</p>
        <p>HP: ${item.pokemon.hp}</p>
        <p>Attack: ${item.pokemon.attack}</p>
        <p>Defense: ${item.pokemon.defense}</p>
        <p>Speed: ${item.pokemon.speed}</p>
        <button class="remove-from-collection btn btn-outline btn-error font-bold py-2 px-4 rounded mt-4">Remove from pokédex</button>
      </div>
    `).join('');

    document.querySelectorAll('.remove-from-collection').forEach(button => {
      button.addEventListener('click', async (event) => {
        const pokemonId = event.target.closest('.pokemon-card').dataset.id;
        await fetch(`http://localhost:8000/api/users/1/collections/${pokemonId}`, { 
          method: 'DELETE'
        });
        loadCollection();
      });
    });
  };

  loadCollection();
});
