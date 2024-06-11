document.addEventListener('DOMContentLoaded', async () => {
  const pokemonDetails = document.getElementById('pokemon-details');
  const pokemonId = window.location.pathname.split('/').pop();

  const response = await fetch(`http://localhost:8000/api/pokemons/${pokemonId}`);
  const pokemon = await response.json();

  pokemonDetails.innerHTML = `
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-3xl font-bold mb-4">${pokemon.name} Details</h1>
      <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="w-48 h-48 mx-auto mb-4">
      <p><strong>ID:</strong> ${pokemon.id}</p>
      <p><strong>Name:</strong> ${pokemon.name}</p>
      <p><strong>Type 1:</strong> ${pokemon.type1}</p>
      <p><strong>Type 2:</strong> ${pokemon.type2 ? pokemon.type2 : 'N/A'}</p>
      <p><strong>HP:</strong> ${pokemon.hp}</p>
      <p><strong>Attack:</strong> ${pokemon.attack}</p>
      <p><strong>Defense:</strong> ${pokemon.defense}</p>
      <p><strong>Speed:</strong> ${pokemon.speed}</p>
      <button id="add-to-collection" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">CATCH IT</button>
    </div>
  `;

  const addToCollectionButton = document.getElementById('add-to-collection');
  if (addToCollectionButton) {
    addToCollectionButton.addEventListener('click', async () => {
      await fetch('http://localhost:8000/api/users/1/collections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pokemonId: pokemon.id })
      });
      alert(`${pokemon.name} added to your pokédex!`);
    });
  }
});
