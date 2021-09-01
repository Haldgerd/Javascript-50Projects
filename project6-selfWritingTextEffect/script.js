const textContainer = document.querySelector(".text");
const speedControl = document.querySelector("input");

let text = "Cyberpunk";
let counter = 0;


// functions
function writeText() {
  textContainer.innerHTML += text[counter];
  counter++;

  if (counter > text.length) {
    counter = 0;
  }
}

speedControl.addEventListener("input", (e)=> {
  textContainer.innerHTML = "";
  let speed = 500 / e.target.value;
  setTimeout(writeText, speed);
});




