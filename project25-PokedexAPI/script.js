const pokeAPI = "https://pokeapi.co/api/v2/pokemon/1";

const pokedexContainer = document.querySelector("main");

/* */

async function getPokemon(url) {

  for (let pokemon = 1; pokemon < 6; pokemon++) {

    const response = await fetch(url + pokemon);

    const data = await response.json();

    //simplest way to get static data that won't change aka. static display.
    pokedexContainer.innerHTML += `
      <div class="pokedex__card">
        <div class="image__container">
          <img class="pokemon__image" src="" alt="" srcset="" />
        </div>
        <span class="number">#00${data.order}</span>
        <h2 class="pokemon__name">${data.name}</h2>
        <p class="pokemon__type">Type:</p>
      </div> `;

    console.log(data);
  }
}


getPokemon(pokeAPI).catch(error => console.log(error.name, error.massage));

