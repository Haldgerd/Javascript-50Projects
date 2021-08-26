const prevBtn = document.querySelector(".btn--prev");
const nextBtn = document.querySelector(".btn--next");
const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll(".step__circle");
const progressLine = document.querySelector(".steps__line");

let index = 0;

prevBtn.classList.add("btn--disabled");

/* add event listeners to buttons*/
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let currentBtn = e.currentTarget;
  
    if (currentBtn.classList.contains("btn--next")) {
      if (index < circles.length - 1) {
      circles[index + 1].classList.add("circle__add--outline");
      index++;
      progressLine.style.width += 33 + "%";

      if (index === circles.length - 1) {
        currentBtn.classList.add("btn--disabled");
        currentBtn.setAttribute("disabled", true);
      } 
    }
    
    //remove disabled from prev button when next button is clicked.
    prevBtn.disabled = false;
    prevBtn.classList.remove("btn--disabled");
  } else { // if button clicked is prev button take away the progress bar by one.
    if (index > 0) {
      circles[index].classList.remove("circle__add--outline");
      index--;

      if (index === 0) {
        currentBtn.classList.add("btn--disabled");
        currentBtn.setAttribute("disabled", true);
        progressLine.style.width = 0;
      } 
    }
    nextBtn.disabled = false;
    nextBtn.classList.remove("btn--disabled");
  }
  });
});

