document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const pokemonContainer = document.getElementById('pokemon-container');

  async function loadPokemons(search = '') {
    const response = await fetch(`http://localhost:8000/api/pokemons?search=${search}`);
    const pokemons = await response.json();
    displayPokemons(pokemons);
  }

  function displayPokemons(pokemons) {
    pokemonContainer.innerHTML = pokemons.map(pokemon => `
      <div class="pokemon-card border p-4 m-2 rounded shadow bg-white cursor-pointer" data-id="${pokemon.id}">
        <h2 class="text-2xl font-bold">${pokemon.name}</h2>
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}" class="w-24 h-24 mx-auto">
      </div>
    `).join('');

    document.querySelectorAll('.pokemon-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        window.location.href = `/pokemon/${id}`;
      });
    });
  };

  searchInput.addEventListener('input', () => {
    const search = searchInput.value;
    loadPokemons(search);
  });

  loadPokemons();
});
