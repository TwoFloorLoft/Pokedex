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

  function addListItem(pokemon) {
    let pokemonUl = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonUl.appendChild(listItem);
    button.addEventListener('click', function(pokemon){
      showDetails(pokemon);
    });
  }


  function showDetails(pokemon) {
    console.log(pokemon);
  }  //logs the pokemon data

  function getAll() {
    return pokemonList;
  } //returns Pokemon List

  function add(pokemon) {
    pokemonList.push(pokemon);
  } //add pokemons

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// forEach() Loop of the pokemonList
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
