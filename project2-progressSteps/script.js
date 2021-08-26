const prevBtn = document.querySelector(".btn--prev");
const nextBtn = document.querySelector(".btn--next");
const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll(".step__circle");
const progressLine = document.querySelector(".steps__line");

prevBtn.classList.add("btn--disabled");
console.log(circles);
let index = 0;
let expandWidth = 33;





/* add event listeners to buttons*/
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let currentBtn = e.currentTarget;
  
    if (currentBtn.classList.contains("btn--next")) {
      if (index < circles.length - 1) {
      circles[index + 1].classList.add("circle__add--outline");
      index++;

      if (index === circles.length - 1) {
        nextBtn.classList.add("btn--disabled");
        nextBtn.setAttribute("disabled", true);
      } 
    }
    //remove disabled from prev button when next button is clicked.
    prevBtn.removeAttribute("disabled");
    prevBtn.classList.remove("btn--disabled");
  } else { // if button clicked is prev button take away the progress bar by one.
    if (index > 0) {
      circles[index].classList.remove("circle__add--outline");
      index--;

      if (index === 0) {
        prevBtn.classList.add("btn--disabled");
        prevBtn.setAttribute("disabled", true);
      } 
    }
    nextBtn.removeAttribute("disabled");
    nextBtn.classList.remove("btn--disabled");
  }

  });
});

