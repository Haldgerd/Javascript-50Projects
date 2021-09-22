const sliderImages = document.querySelectorAll(".slider__container--inner");

const body = document.body;

const rightBtn = document.querySelector(".btn--right");

const leftBtn = document.querySelector(".btn--left");

// could dynamically create divs depending on number of images! 
const images = ["./Images/1ce90fefb06481b4b333c5a80932c05d.jpg",
                "./Images/586407-cyberpunk-neon.jpg",
                "./Images/asus-cyberpunk-wallpaper.jpg",
                "./Images/neon-city.jpg",
                "./Images/wallhaven-l3ywo2.jpg"]

let incrementor = 0;


sliderImages.forEach((slide, index) => {

  slide.style.backgroundImage = `url(${images[index]})`;
  // document.body.style.backgroundImage = slide.style.backgroundImage;

  // console.log(slide);
});


body.style.backgroundImage = sliderImages[incrementor].style.backgroundImage;


rightBtn.addEventListener("click", () => {

  ++incrementor; 
  console.log(incrementor);

  if (incrementor === sliderImages.length) {
    incrementor = 0;
  }

  // console.log(incrementor);
  sliderImages.forEach(slide => slide.classList.remove("active"));

  sliderImages[incrementor].classList.add("active");

  body.style.backgroundImage = sliderImages[incrementor].style.backgroundImage;

  
});


leftBtn.addEventListener("click", () => {

  --incrementor;

  // console.log(incrementor);
  // console.log(sliderImages[incrementor]);

  if (incrementor < 0) {
    incrementor = sliderImages.length - 1;
  }

  sliderImages.forEach(slide => slide.classList.remove("active"));

  sliderImages[incrementor].classList.add("active");

  body.style.backgroundImage = sliderImages[incrementor].style.backgroundImage;
});