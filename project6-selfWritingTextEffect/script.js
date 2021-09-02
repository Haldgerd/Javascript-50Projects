const textContainer = document.querySelector(".text");
const speedControl = document.querySelector("input");

let text = "Cyberpunk";
let counter = 1;
let speed = 300 / speedControl.value; // so this was the catch. Speed is declared prior to function call.

writeText();

function writeText() {
  textContainer.innerText = text.slice(0, counter);
  counter++;

  if(counter > text.length) {
    counter = 1;
  }
  // recursion, function calling itself.
  setTimeout(writeText, speed);
}

speedControl.addEventListener("input", (e) => speed = 300 / e.target.value);

// // functions
// function writeText() {
//   textContainer.innerHTML += text[counter];
//   counter++;

//   if (counter > text.length) {
//     counter = 0;
//   }
// }

// speedControl.addEventListener("input", (e)=> {
//   textContainer.innerHTML = "";
//   let speed = 500 / e.target.value;
//   setTimeout(writeText, speed);
// });




