const btn = document.querySelector("button");
const navigation = document.querySelector(".nav__container");
const lines = document.querySelectorAll(".line");

btn.addEventListener("click", ()=> {
  navigation.classList.toggle("active");
  lines.forEach(line => line.classList.toggle("rotate"))

});