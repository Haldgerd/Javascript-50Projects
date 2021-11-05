const form = document.querySelector(".search__form");

const input = document.querySelector(".search__input");

const APIurl = "https://api.themoviedb.org/3/discover/network/213&api_key=ad3ffbd0b196e926f7cccabfd2460f2a";
// https://api.themoviedb.org/3/network/213?api_key=ad3ffbd0b196e926f7cccabfd2460f2a for netflix information

//netflix series by popularity - not netflix but all series by popularity.
// https://api.themoviedb.org/3/discover/tv?sort_by=popularity&with_network=213&api_key=ad3ffbd0b196e926f7cccabfd2460f2a

window.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.currentTarget);
  
  console.log(input.value); // show value placed in input

  console.log("Submited!");
})


