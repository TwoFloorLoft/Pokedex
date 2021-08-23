// List of Pokemons

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

//a loop with each pokemon name and their respective height
//a label if a pokemon is bigger than 1.5

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + ' -Wow that is big! </p>');
  } else {
    document.write('<p>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ')' + '</p>');
  }
}
