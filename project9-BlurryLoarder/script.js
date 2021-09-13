const percentage = document.querySelector(".loading__percentage");
const containerWidth = document.querySelector(".loading__container");

console.log(percentage.innerHTML);
console.log(containerWidth);

// version using animate function (animate(keyframes, options) - syntax). Div width changes but not the percentage text.
window.addEventListener('DOMContentLoaded', () => {
    containerWidth.animate([
    {width: "0%"}
  ], 2500, "linear"
  );
});