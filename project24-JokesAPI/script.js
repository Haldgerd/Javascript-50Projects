
const button = document.querySelector("button");

const display = document.querySelector(".joke__container");

const jokeURL = "https://icanhazdadjoke.com"

window.addEventListener("DOMContentLoaded", () => {
  console.log("fetch random joke");
  getData();

});

button.addEventListener("click", () => {
  console.log("fetch a random joke");
  getData();
  
});

function getData() {
// to fetch data from API that requires some sort of authorization - in our case needs headers syntax below

  const config = {
    //headers need to be lowercase , accept wihtout quotes.
      headers: {
        Accept: "application/json",
    },
  }

  fetch(jokeURL, config) //place needed info into config - second argument.
    .then((response) => response.json())
    // .catch(new Error("Error occured fetching the data."))
    .then((data) => {
      display.innerHTML = data.joke;
    });
}