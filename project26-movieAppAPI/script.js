//variables
const form = document.querySelector(".search__form");

const main = document.querySelector("main");

const input = document.querySelector(".search__input");

const logo = document.querySelector(".logo");

// netflix series by popularity
const APIurl = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&with_networks=213&api_key=ad3ffbd0b196e926f7cccabfd2460f2a";

// https://api.themoviedb.org/3/network/213?api_key=ad3ffbd0b196e926f7cccabfd2460f2a for netflix company information

//netflix series by popularity - not netflix but all series by popularity.
// https://api.themoviedb.org/3/discover/tv?sort_by=popularity&with_network=213&api_key=ad3ffbd0b196e926f7cccabfd2460f2a



async function getNetflixSeries(url) {
    // returns a promise!

    const response = await fetch(url);
    const data = await response.json();

    const series = data.results;
      console.log(series);

     // function that takes in data and display it
     displayData(series);
}


// call async function
getNetflixSeries(APIurl);


window.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    console.log(input.value); // show value placed in input
    console.log("Submited!");
});


//functions
const displayData = (data) => {
    data.forEach(series => {
        
        const container = document.createElement("div");
        container.className = "movie__card";

        const title = series.name;
        const overview = series.overview;
        const score = series.vote_average;

        container.innerHTML = `
        <img src="" alt="image" srcset="" class="movie__image"/>
        <div class="movie__container">
          <h2 class="movie__title">${title}</h2>
          <span class="movie__score">${score}</span>
        </div>
        <div class="movie__info">${overview}</div>
        `
        
        main.append(container);
    });
}

