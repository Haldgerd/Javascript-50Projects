const form = document.querySelector(".search__form");

const input = document.querySelector(".search__input");


window.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e.currentTarget);
  
  console.log(input.value); // show value placed in input

  console.log("Submited!");
})


