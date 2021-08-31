const productContainers = document.querySelectorAll(".product__section");
const sectionLeft =  document.querySelector(".section__left");
const sectionRight = document.querySelector(".section__right");


sectionLeft.addEventListener("mouseenter", () => sectionLeft.parentElement.classList.add("product__container--expand"));

sectionLeft.addEventListener("mouseleave", ()=> sectionLeft.parentElement.classList.remove("product__container--expand"));


sectionRight.addEventListener("mouseenter", ()=> sectionRight.parentElement.classList.add("product__container--expand"));
sectionRight.addEventListener("mouseleave", ()=> sectionRight.parentElement.classList.remove("product__container--expand"));


 // if (currentContainer.classList.contains("section__left")){
    //   console.log("heeloo!");
    //   currentContainer.parentElement.classList.add("product__container--expand");
    //   sectionRight.parentElement.classList.add("product__container--shrink");
    // } else {
    //   sectionRight.parentElement.classList.add("product__container--expand");
    //   sectionLeft.parentElement.classList.add("product__container--shrink");
    // }