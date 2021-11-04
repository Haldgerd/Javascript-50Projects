const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

const pokedexContainer = document.querySelector("main");

const colors = {
  "grass": "hsl(120, 35%, 75%)"
  ,"fire": "hsl(9, 82%, 64%)"
  ,"electric": "hsl(46, 81%, 50%)"
  ,"water": "hsl(200, 60%, 75%)"
  ,"bug": "hsl(17, 20%, 50%)"
  ,"ground": "hsl(0, 5%, 61%)"
  ,"poison": "hsl(80, 75%, 25%)"
  ,"fairy": "pink"
  ,"normal": "orange"
}



async function getPokemon(url) {

  for (let pokemon = 1; pokemon < 50; pokemon++) {

    const response = await fetch(url + pokemon);

    const data = await response.json();

    // console.log(data);

    //creates individual card.
    createPokemon(data);

  }

  createBackground();
}



//FUNCTIONS
const createPokemon = (data) => {

  // const color = colors[data.types[0].type.name];
  // console.log(color);

  //simplest way to get static data that won't change aka. static display.
  pokedexContainer.innerHTML += `
    <div class="pokedex__card">
      <div class="image__container">
        <img class="pokemon__image" src="${data.sprites.front_default}" alt=""/>
      </div>
      <span class="number">#00${data.id}</span>
      <h2 class="pokemon__name">${data.name}</h2>
      <p class="pokemon__type">TYPE:${data.types[0].type.name}</p>
    </div> `;

}


const createBackground = () => {

  const type = document.querySelectorAll(".pokedex__card p");

  type.forEach(t => {
   
    const backgroundColor = t.innerHTML.slice(5);

    t.parentElement.style.backgroundColor = colors[backgroundColor]
 
  });
}

getPokemon(pokeAPI).catch(error => console.log(error.name, error.massage));
