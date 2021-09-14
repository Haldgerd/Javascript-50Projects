const btn = document.querySelector("button");
const input = document.querySelector("input");


btn.addEventListener("click", ()=> {
  input.classList.toggle("display");
  input.focus(); // to right away focus on the search widget
})