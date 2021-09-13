const percentage = document.querySelector(".loading__percentage");
const containerWidth = document.querySelector(".loading__container");

console.log(percentage.innerHTML);
console.log(containerWidth);

let addPercentage = 0; 
let percentageInterval = setInterval(calcPercentage, 35);

// containerWidth.style.width = `${50}%`;

// version using animate function (animate(keyframes, options) - syntax). Div width changes but not the percentage text.
// window.addEventListener('DOMContentLoaded', () => {
//     containerWidth.animate([
//     {width: "0"}
//   ], 3200, "linear"
//   );
// });

function calcPercentage () {
  addPercentage++;

  if (addPercentage > 99) {
    clearInterval(percentageInterval);
  }

  percentage.innerHTML = `${addPercentage}%`;

  percentage.style.opacity = scale(addPercentage, 0, 100, 1, 0);
  // containerWidth.style.opacity = scale(addPercentage, 0, 100, 1, 0);

  containerWidth.animate([
    {width: `${0}%`} 
  ], 40000, "linear");
}


//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// scale function very useful here!
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}