const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

const pokedexContainer = document.querySelector("main");

const colors = {
  "grass": "hsl(120, 62%, 75%)"
  ,"fire": "hsl(0, 55%, 37%)"
  ,"electricity": "hsl(46, 81%, 50%)"
  ,"water": "hsl(209, 57%, 50%)"
  ,"bug": "hsl(17, 46%, 29%)"
  ,"ground": "hsl(0, 5%, 31%)"
}

/* */

async function getPokemon(url) {

  for (let pokemon = 1; pokemon < 5; pokemon++) {

    const response = await fetch(url + pokemon);

    const data = await response.json();

    console.log(data);
    //creates individual card.
    createPokemon(data);
  }
}

//FUNCTIONS

const createPokemon = (data) => {

  const color = colors[data.types[0].type.name];

  //simplest way to get static data that won't change aka. static display.
  pokedexContainer.innerHTML += `
    <div class="pokedex__card">
      <div class="image__container">
        <img class="pokemon__image" src="${data.sprites.front_default}" alt=""/>
      </div>
      <span class="number">#00${data.id}</span>
      <h2 class="pokemon__name">${data.name}</h2>
      <p class="pokemon__type">Type:${data.types[0].type.name}</p>
    </div> `;

}


getPokemon(pokeAPI).catch(error => console.log(error.name, error.massage));

