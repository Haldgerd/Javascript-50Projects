const productContainers = document.querySelectorAll(".product__section");

// productContainers.forEach(container => {
//   container.addEventListener("mouseenter", () => {
//     container.parentElement.classList.toggle("product__container--expand");
//   });
// });

const sectionLeft =  document.querySelector(".section__left");
const sectionRight = document.querySelector(".section__right");

// sectionLeft.addEventListener("mouseenter", () => {
//   sectionLeft.parentElement.classList.add("product__container--expand");
//   sectionRight.parentElement.classList.add("product__container--shrink");
// });

// sectionRight.addEventListener("mouseneter", () => {
//   sectionRight.parentElement.classList.add("product__container--expand");
//   sectionLeft.parentElement.classList.add("product__container--shrink");
// })

productContainers.forEach(container => {
  container.addEventListener("mouseenter", () => {
    container.classList.add("product__container--expand");
  });
});