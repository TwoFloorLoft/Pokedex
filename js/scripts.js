// List of Pokemons

let pokemonRepository = (function () {
  let pokemonList = [
  {
    name: "Vulpix",
    height: " 0.6",
    type: "fire"
  },

  {
    name: "Gastly",
    height: " 1.3",
    type: ["ghost","poison"]
  },

  {
    name: "Psyduck",
    height: " 0.8",
    type: "water"
  },

  {
    name: "Pikachu",
    height: " 0.4",
    type: "Electric"
  },

  {
    name: "Mewtwo",
    height: " 2",
    type: "Psychic"
  }
];

  function getAll() {
    return pokemonList;
  } //returns Pokemon List

  function add(pokemon) {
    pokemonList.push(pokemon);
  } //add pokemons

  return {
    add: add,
    getAll: getAll
  };
})();

// forEach() Loop of the pokemonRepository
pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + " " + pokemon.height + " " + pokemon.type);
});
