const menu = document.querySelector(".rotating__menu--square");

const mainContainer = document.querySelector("main");

// console.log(mainContainer);
// console.log(menu);


menu.addEventListener("click", () => {
  
  menu.classList.toggle("active");
  
  mainContainer.classList.toggle("rotate--active");

 });