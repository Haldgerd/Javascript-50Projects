//variables
const openMenuBtn = document.querySelector(".hamburger__menu");
const closeMenuBtn = document.querySelector(".hamburger__menu--close");
const navigationContainers = document.querySelectorAll(".navigation__section");
console.log(navigationContainers);

openMenuBtn.addEventListener("click", () => {
  navigationContainers.forEach(container => container.classList.add("navigation__section--active"));
});

closeMenuBtn.addEventListener("click",() => {
  navigationContainers.forEach(container => 
  container.classList.remove("navigation__section--active"));
});